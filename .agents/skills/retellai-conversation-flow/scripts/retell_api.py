#!/usr/bin/env python3
"""
Retell AI API Helper Script

This script provides common operations for working with Retell AI conversation flows.

Usage:
    # Use default client or environment variable
    python retell_api.py create-flow <flow_file.json>

    # Specify client profile
    python retell_api.py --client visquanta create-flow <flow_file.json>
    python retell_api.py --client onriseai list-flows

Commands:
    create-flow <file>              Create a new conversation flow
    update-flow <flow_id> <file>    Update an existing flow
    get-flow <flow_id>              Get flow details
    list-flows                      List all flows
    deploy-to-agent <agent_id> <flow_id>  Deploy flow to agent
    create-agent <file>             Create a new agent
    test-flow <flow_id> --phone <number>  Test a flow

Options:
    --client <name>                 Use specific client profile (visquanta, onriseai)

Environment Variables:
    RETELL_API_KEY: Your Retell AI API key (fallback if no client specified)
"""

import os
import sys
import json
import argparse
import requests
from pathlib import Path
from typing import Dict, Any, Optional

# Retell AI API Base URL
API_BASE_URL = "https://api.retellai.com"

# Global to store current client info
CURRENT_CLIENT = None

def load_clients_config() -> Dict[str, Any]:
    """Load clients configuration from clients.json."""
    config_path = Path(__file__).parent.parent / "clients.json"

    if not config_path.exists():
        return None

    try:
        with open(config_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        print(f"Warning: Could not load clients.json: {e}")
        return None

def get_api_key(client_name: Optional[str] = None) -> str:
    """Get API key from client profile or environment variable."""
    global CURRENT_CLIENT

    # Try to load from client profile first
    if client_name:
        config = load_clients_config()
        if config and client_name in config.get("clients", {}):
            client_info = config["clients"][client_name]
            api_key = client_info.get("api_key")

            if api_key and api_key != "YOUR_VISQUANTA_API_KEY_HERE" and api_key != "YOUR_ONRISEAI_API_KEY_HERE":
                CURRENT_CLIENT = client_info.get("name", client_name)
                print(f"[*] Using client: {CURRENT_CLIENT}")
                return api_key
            else:
                print(f"Error: API key not configured for client '{client_name}'")
                print(f"Please edit clients.json and add the API key for {client_name}")
                sys.exit(1)
        else:
            print(f"Error: Client '{client_name}' not found in clients.json")
            print("Available clients: visquanta, onriseai")
            sys.exit(1)

    # Fall back to environment variable
    api_key = os.getenv("RETELL_API_KEY")
    if not api_key:
        print("Error: No API key found")
        print("\nOptions:")
        print("  1. Use --client flag: python retell_api.py --client visquanta <command>")
        print("  2. Set environment variable: export RETELL_API_KEY='your_api_key'")
        print("  3. Configure clients.json with your API keys")
        sys.exit(1)

    return api_key

def make_request(
    method: str,
    endpoint: str,
    data: Optional[Dict[str, Any]] = None,
    params: Optional[Dict[str, Any]] = None,
    client_name: Optional[str] = None
) -> Dict[str, Any]:
    """Make an API request to Retell AI."""
    api_key = get_api_key(client_name)
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }

    url = f"{API_BASE_URL}{endpoint}"

    try:
        response = requests.request(
            method=method,
            url=url,
            headers=headers,
            json=data,
            params=params
        )
        response.raise_for_status()
        return response.json() if response.text else {}
    except requests.exceptions.HTTPError as e:
        print(f"API Error: {e}")
        if e.response.text:
            print(f"Response: {e.response.text}")
        sys.exit(1)
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

def load_json_file(file_path: str) -> Dict[str, Any]:
    """Load JSON from file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        print(f"Error: File not found: {file_path}")
        sys.exit(1)
    except json.JSONDecodeError as e:
        print(f"Error: Invalid JSON in {file_path}: {e}")
        sys.exit(1)

def create_conversation_flow(file_path: str, client_name: Optional[str] = None) -> None:
    """Create a new conversation flow."""
    print(f"Creating conversation flow from {file_path}...")

    flow_data = load_json_file(file_path)

    # Extract conversation flow from agent config if present
    if "conversationFlow" in flow_data:
        flow_data = flow_data["conversationFlow"]

    response = make_request("POST", "/create-conversation-flow", data=flow_data, client_name=client_name)

    flow_id = response.get("conversation_flow_id", "unknown")
    print(f"\n✓ Conversation flow created successfully!")
    print(f"  Flow ID: {flow_id}")
    print(f"\nNext steps:")
    print(f"  - Deploy to agent: python {sys.argv[0]} deploy-to-agent <agent_id> {flow_id}")
    print(f"  - Update flow: python {sys.argv[0]} update-flow {flow_id} <file.json>")

def update_conversation_flow(flow_id: str, file_path: str, client_name: Optional[str] = None) -> None:
    """Update an existing conversation flow."""
    print(f"Updating conversation flow {flow_id} from {file_path}...")

    flow_data = load_json_file(file_path)

    # Extract conversation flow from agent config if present
    if "conversationFlow" in flow_data:
        flow_data = flow_data["conversationFlow"]

    response = make_request("PATCH", f"/update-conversation-flow/{flow_id}", data=flow_data, client_name=client_name)

    print(f"\n✓ Conversation flow updated successfully!")
    print(f"  Flow ID: {flow_id}")

def get_conversation_flow(flow_id: str, client_name: Optional[str] = None) -> None:
    """Get a conversation flow by ID."""
    print(f"Fetching conversation flow {flow_id}...")

    response = make_request("GET", f"/get-conversation-flow/{flow_id}", client_name=client_name)

    print(json.dumps(response, indent=2))

def list_conversation_flows(client_name: Optional[str] = None) -> None:
    """List all conversation flows."""
    print("Fetching all conversation flows...")

    response = make_request("GET", "/list-conversation-flows", client_name=client_name)

    # Response can be either a list directly or an object with conversation_flows key
    if isinstance(response, list):
        flows = response
    else:
        flows = response.get("conversation_flows", [])

    if not flows:
        print("No conversation flows found.")
        return

    print(f"\nFound {len(flows)} conversation flow(s):\n")
    for flow in flows:
        flow_id = flow.get("conversation_flow_id", "unknown")
        version = flow.get("version", "?")
        node_count = len(flow.get("nodes", []))
        print(f"  • {flow_id} (v{version}, {node_count} nodes)")

def create_agent(file_path: str, client_name: Optional[str] = None) -> None:
    """Create a new agent."""
    print(f"Creating agent from {file_path}...")

    agent_data = load_json_file(file_path)

    # Remove conversation flow from agent data - it should be created separately
    if "conversationFlow" in agent_data:
        del agent_data["conversationFlow"]

    response = make_request("POST", "/create-agent", data=agent_data, client_name=client_name)

    agent_id = response.get("agent_id", "unknown")
    print(f"\n✓ Agent created successfully!")
    print(f"  Agent ID: {agent_id}")

def deploy_to_agent(agent_id: str, flow_id: str, client_name: Optional[str] = None) -> None:
    """Deploy a conversation flow to an agent."""
    print(f"Deploying flow {flow_id} to agent {agent_id}...")

    agent_data = {
        "response_engine": {
            "type": "conversation-flow",
            "conversation_flow_id": flow_id
        }
    }

    response = make_request("PATCH", f"/update-agent/{agent_id}", data=agent_data, client_name=client_name)

    print(f"\n✓ Flow deployed successfully!")
    print(f"  Agent ID: {agent_id}")
    print(f"  Flow ID: {flow_id}")

def test_flow(flow_id: str, phone_number: Optional[str] = None) -> None:
    """Test a conversation flow by making a call."""
    if not phone_number:
        print("Error: --phone argument required for testing")
        sys.exit(1)

    print(f"Testing flow {flow_id} by calling {phone_number}...")

    # This would require additional API setup for making test calls
    # Implementation depends on Retell AI's testing API
    print("Note: Automated testing requires additional setup.")
    print("For now, please test manually by:")
    print(f"  1. Deploy flow to an agent")
    print(f"  2. Configure agent phone number")
    print(f"  3. Make a test call")

def main():
    parser = argparse.ArgumentParser(
        description="Retell AI API Helper - Multi-Client Support",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__
    )

    # Add global --client flag
    parser.add_argument(
        "--client",
        choices=["visquanta", "onriseai"],
        help="Client profile to use (from clients.json)"
    )

    subparsers = parser.add_subparsers(dest="command", help="Command to execute")

    # Create flow
    create_parser = subparsers.add_parser("create-flow", help="Create a new conversation flow")
    create_parser.add_argument("file", help="Path to JSON file")

    # Update flow
    update_parser = subparsers.add_parser("update-flow", help="Update a conversation flow")
    update_parser.add_argument("flow_id", help="Conversation flow ID")
    update_parser.add_argument("file", help="Path to JSON file")

    # Get flow
    get_parser = subparsers.add_parser("get-flow", help="Get a conversation flow")
    get_parser.add_argument("flow_id", help="Conversation flow ID")

    # List flows
    subparsers.add_parser("list-flows", help="List all conversation flows")

    # Create agent
    create_agent_parser = subparsers.add_parser("create-agent", help="Create a new agent")
    create_agent_parser.add_argument("file", help="Path to agent JSON file")

    # Deploy to agent
    deploy_parser = subparsers.add_parser("deploy-to-agent", help="Deploy flow to an agent")
    deploy_parser.add_argument("agent_id", help="Agent ID")
    deploy_parser.add_argument("flow_id", help="Conversation flow ID")

    # Test flow
    test_parser = subparsers.add_parser("test-flow", help="Test a conversation flow")
    test_parser.add_argument("flow_id", help="Conversation flow ID")
    test_parser.add_argument("--phone", help="Phone number to call for testing")

    args = parser.parse_args()

    if not args.command:
        parser.print_help()
        sys.exit(1)

    # Execute command with client context
    client = args.client

    if args.command == "create-flow":
        create_conversation_flow(args.file, client)
    elif args.command == "update-flow":
        update_conversation_flow(args.flow_id, args.file, client)
    elif args.command == "get-flow":
        get_conversation_flow(args.flow_id, client)
    elif args.command == "list-flows":
        list_conversation_flows(client)
    elif args.command == "create-agent":
        create_agent(args.file, client)
    elif args.command == "deploy-to-agent":
        deploy_to_agent(args.agent_id, args.flow_id, client)
    elif args.command == "test-flow":
        test_flow(args.flow_id, args.phone)

if __name__ == "__main__":
    main()
