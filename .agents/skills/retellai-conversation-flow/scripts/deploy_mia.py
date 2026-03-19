#!/usr/bin/env python3
"""
Deployment script for Mia - Adrian Law's Office Assistant

This script deploys the Mia conversation flow to RetellAI.

Usage:
    python scripts/deploy_mia.py --api-key YOUR_API_KEY --webhook-url YOUR_WEBHOOK_URL

    Or set environment variables:
    export RETELL_API_KEY="your_api_key"
    export WEBHOOK_URL="https://your-n8n.com/webhook/mia-calls"
    python scripts/deploy_mia.py
"""

import json
import os
import sys
import argparse
from pathlib import Path
import requests

# Constants
RETELL_API_BASE = "https://api.retellai.com/v2"
FLOW_FILE = "mia-adrian-law-office.json"

def load_flow_config(file_path: str) -> dict:
    """Load the conversation flow JSON file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        print(f"❌ Error: Could not find {file_path}")
        sys.exit(1)
    except json.JSONDecodeError as e:
        print(f"❌ Error: Invalid JSON in {file_path}: {e}")
        sys.exit(1)

def create_conversation_flow(api_key: str, flow_data: dict) -> str:
    """Create a new conversation flow in RetellAI"""
    url = f"{RETELL_API_BASE}/create-conversation-flow"
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }

    # Extract just the conversation flow part
    payload = flow_data.get("conversationFlow", {})

    print("📤 Creating conversation flow...")
    response = requests.post(url, headers=headers, json=payload)

    if response.status_code == 201:
        flow_id = response.json().get("conversation_flow_id")
        print(f"✅ Conversation flow created: {flow_id}")
        return flow_id
    else:
        print(f"❌ Failed to create conversation flow: {response.status_code}")
        print(response.text)
        sys.exit(1)

def create_agent(api_key: str, flow_data: dict, flow_id: str) -> str:
    """Create a new agent in RetellAI"""
    url = f"{RETELL_API_BASE}/create-agent"
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }

    # Build agent configuration
    agent_config = {
        "agent_name": flow_data.get("agent_name"),
        "channel": flow_data.get("channel", "voice"),
        "response_engine": {
            "type": "conversation-flow",
            "conversation_flow_id": flow_id
        },
        "language": flow_data.get("language", "en-AU"),
        "voice_id": flow_data.get("voice_id"),
        "voice_model": flow_data.get("voice_model"),
        "voice_temperature": flow_data.get("voice_temperature", 1),
        "voice_speed": flow_data.get("voice_speed", 1),
        "interruption_sensitivity": flow_data.get("interruption_sensitivity", 0.7),
        "responsiveness": flow_data.get("responsiveness", 0.9),
        "enable_backchannel": flow_data.get("enable_backchannel", True),
        "backchannel_words": flow_data.get("backchannel_words", ["yeah", "mhm", "okay"]),
        "ambient_sound": flow_data.get("ambient_sound"),
        "ambient_sound_volume": flow_data.get("ambient_sound_volume", 0.4),
        "enable_transcription": flow_data.get("enable_transcription", True),
        "enable_recording": flow_data.get("enable_recording", True),
        "opt_out_sensitive_data_storage": flow_data.get("opt_out_sensitive_data_storage", False),
        "post_call_analysis_data": flow_data.get("post_call_analysis_data", [])
    }

    # Add webhook URL if provided
    webhook_url = flow_data.get("webhook_url")
    if webhook_url and webhook_url != "YOUR_N8N_WEBHOOK_URL_HERE":
        agent_config["webhook_url"] = webhook_url

    # Add pronunciation dictionary if present
    if "pronunciation_dictionary" in flow_data:
        agent_config["pronunciation_dictionary"] = flow_data["pronunciation_dictionary"]

    print("📤 Creating agent...")
    response = requests.post(url, headers=headers, json=agent_config)

    if response.status_code == 201:
        agent_id = response.json().get("agent_id")
        print(f"✅ Agent created: {agent_id}")
        return agent_id
    else:
        print(f"❌ Failed to create agent: {response.status_code}")
        print(response.text)
        sys.exit(1)

def update_existing_agent(api_key: str, agent_id: str, flow_data: dict, flow_id: str = None):
    """Update an existing agent"""
    url = f"{RETELL_API_BASE}/update-agent/{agent_id}"
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }

    # Build update payload
    update_payload = {
        "agent_name": flow_data.get("agent_name"),
        "language": flow_data.get("language"),
        "voice_id": flow_data.get("voice_id"),
        "voice_model": flow_data.get("voice_model"),
        "voice_temperature": flow_data.get("voice_temperature"),
        "voice_speed": flow_data.get("voice_speed"),
        "interruption_sensitivity": flow_data.get("interruption_sensitivity"),
        "responsiveness": flow_data.get("responsiveness"),
        "enable_backchannel": flow_data.get("enable_backchannel"),
        "backchannel_words": flow_data.get("backchannel_words"),
        "ambient_sound": flow_data.get("ambient_sound"),
        "ambient_sound_volume": flow_data.get("ambient_sound_volume"),
        "post_call_analysis_data": flow_data.get("post_call_analysis_data")
    }

    # Update flow ID if provided
    if flow_id:
        update_payload["response_engine"] = {
            "type": "conversation-flow",
            "conversation_flow_id": flow_id
        }

    # Add webhook URL if provided
    webhook_url = flow_data.get("webhook_url")
    if webhook_url and webhook_url != "YOUR_N8N_WEBHOOK_URL_HERE":
        update_payload["webhook_url"] = webhook_url

    print(f"📤 Updating agent {agent_id}...")
    response = requests.patch(url, headers=headers, json=update_payload)

    if response.status_code == 200:
        print(f"✅ Agent updated successfully")
    else:
        print(f"❌ Failed to update agent: {response.status_code}")
        print(response.text)
        sys.exit(1)

def main():
    parser = argparse.ArgumentParser(description="Deploy Mia to RetellAI")
    parser.add_argument("--api-key", help="RetellAI API key (or set RETELL_API_KEY env var)")
    parser.add_argument("--webhook-url", help="n8n webhook URL (or set WEBHOOK_URL env var)")
    parser.add_argument("--agent-id", help="Existing agent ID to update (creates new if not provided)")
    parser.add_argument("--update-flow-only", action="store_true", help="Only update the conversation flow")

    args = parser.parse_args()

    # Get API key
    api_key = args.api_key or os.getenv("RETELL_API_KEY")
    if not api_key:
        print("❌ Error: RETELL_API_KEY not set. Use --api-key or set environment variable.")
        sys.exit(1)

    # Get webhook URL
    webhook_url = args.webhook_url or os.getenv("WEBHOOK_URL")

    # Load conversation flow
    script_dir = Path(__file__).parent.parent
    flow_file_path = script_dir / FLOW_FILE

    print(f"📁 Loading flow configuration from {flow_file_path}")
    flow_data = load_flow_config(str(flow_file_path))

    # Update webhook URL if provided
    if webhook_url:
        flow_data["webhook_url"] = webhook_url
        print(f"🔗 Using webhook URL: {webhook_url}")
    elif flow_data.get("webhook_url") == "YOUR_N8N_WEBHOOK_URL_HERE":
        print("⚠️  Warning: Webhook URL not configured. Set with --webhook-url or update JSON file.")

    # Deploy
    if args.agent_id:
        # Update existing agent
        if args.update_flow_only:
            # Create new flow version and update agent
            flow_id = create_conversation_flow(api_key, flow_data)
            update_existing_agent(api_key, args.agent_id, flow_data, flow_id)
        else:
            # Just update agent settings
            update_existing_agent(api_key, args.agent_id, flow_data)
    else:
        # Create new agent
        flow_id = create_conversation_flow(api_key, flow_data)
        agent_id = create_agent(api_key, flow_data, flow_id)

        print("\n" + "="*60)
        print("🎉 Deployment Complete!")
        print("="*60)
        print(f"Agent ID: {agent_id}")
        print(f"Flow ID: {flow_id}")
        print(f"\nNext steps:")
        print("1. Test the agent with a phone call")
        print("2. Configure telephony (assign a phone number)")
        print("3. Set up n8n webhook workflow")
        print("4. Monitor first few calls and adjust as needed")
        print("\nTo update this agent in the future:")
        print(f"  python scripts/deploy_mia.py --agent-id {agent_id} --update-flow-only")

        # Save agent ID for future reference
        agent_id_file = script_dir / "mia_agent_id.txt"
        with open(agent_id_file, 'w') as f:
            f.write(f"agent_id={agent_id}\n")
            f.write(f"flow_id={flow_id}\n")
        print(f"\n💾 Agent ID saved to: {agent_id_file}")

if __name__ == "__main__":
    main()
