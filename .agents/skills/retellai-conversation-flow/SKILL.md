---
name: retellai-conversation-flow
description: Build Retell AI voice agent conversation flows with complex branching, call transfers, data collection, and dynamic responses. Use this skill whenever the user mentions Retell AI, voice agents, conversation flows, AI phone systems, AI receptionists, call routing, phone automation, IVR systems, or wants to build/modify voice-based customer interactions. Also trigger when user says "let's use retellai", "build a voice agent", "create a conversation flow", "set up phone automation", or discusses phone call handling with AI.
---

# Retell AI Conversation Flow Builder

This skill helps you build production-grade Retell AI conversation flows for voice agents. Retell AI uses JSON-based conversation flows with nodes, edges, and transitions to create intelligent phone interactions.

## When to Use This Skill

Use this skill when building or modifying:
- AI receptionists and call routing systems
- Sales qualification and lead generation agents
- Customer support and help desk automation
- Appointment booking and scheduling systems
- Any voice-based AI conversation flow

## What You'll Get

This skill provides:
- **Best practice templates** for common use cases
- **Step-by-step guidance** for building complex flows
- **API integration** for deploying to Retell AI
- **Configuration assistance** for voice settings, webhooks, and analysis

## Quick Start

### 1. Initial Setup

First, ensure the user has:
- Retell AI account and API key
- Basic understanding of their use case (receptionist, sales, support, etc.)

Ask if they have an existing flow to modify, or if they're starting fresh.

### 2. Choose or Build a Flow

**For new flows:**
Offer templates from `templates/` directory (see Template Library below).

**For existing flows:**
Help them modify their current flow structure.

### 3. Core Concepts

Every Retell AI conversation flow has:

#### Agent Configuration (Top Level)
```json
{
  "agent_name": "Your Agent Name",
  "channel": "voice",
  "response_engine": {
    "type": "conversation-flow",
    "conversation_flow_id": "conversation_flow_xxxxx"
  },
  "webhook_url": "https://your-backend.com/webhook",
  "language": "en-US",
  "voice_id": "your_voice_id",
  "voice_model": "eleven_turbo_v2_5"
}
```

#### Conversation Flow (Nested)
```json
{
  "conversationFlow": {
    "conversation_flow_id": "conversation_flow_xxxxx",
    "global_prompt": "Overall personality and rules",
    "nodes": [],
    "start_node_id": "node-start",
    "model_choice": {"type": "cascading", "model": "gemini-2.5-flash"}
  }
}
```

## Building Conversation Flows

### Node Types

#### 1. Conversation Node
Used for actual dialogue with the caller.

```json
{
  "id": "node-greeting",
  "name": "Greeting",
  "type": "conversation",
  "instruction": {
    "type": "prompt",
    "text": "Greet the caller warmly. Introduce yourself and ask how you can help."
  },
  "start_speaker": "agent",
  "edges": [
    {
      "id": "edge-to-next",
      "destination_node_id": "node-next",
      "transition_condition": {
        "type": "prompt",
        "prompt": "Caller has stated their reason for calling"
      }
    }
  ]
}
```

**Key fields:**
- `instruction.text`: What the agent should say/do
- `start_speaker`: "agent" or "user" (who speaks first)
- `edges`: Transitions to other nodes
- `finetune_conversation_examples`: (optional) Example conversations for training

#### 2. Branch Node
Used for conditional logic routing.

```json
{
  "id": "node-router",
  "name": "Department Router",
  "type": "branch",
  "edges": [
    {
      "id": "edge-to-sales",
      "destination_node_id": "node-sales",
      "transition_condition": {
        "type": "prompt",
        "prompt": "Caller mentioned sales, buying, purchasing, or vehicle interest"
      }
    },
    {
      "id": "edge-to-service",
      "destination_node_id": "node-service",
      "transition_condition": {
        "type": "equation",
        "equations": [
          {
            "left": "{{department}}",
            "operator": "==",
            "right": "service"
          }
        ]
      }
    }
  ],
  "else_edge": {
    "id": "edge-default",
    "destination_node_id": "node-ask-dept",
    "transition_condition": {
      "type": "prompt",
      "prompt": "Else"
    }
  }
}
```

**Transition types:**
- `type: "prompt"`: Natural language condition
- `type: "equation"`: Programmatic condition with operators (==, !=, >, <, etc.)

#### 3. Transfer Call Node
Transfer to a phone number or extension.

```json
{
  "id": "node-transfer-sales",
  "name": "Transfer - Sales",
  "type": "transfer_call",
  "transfer_destination": {
    "type": "predefined",
    "number": "+14055551234",
    "extension": "7623"
  },
  "transfer_option": {
    "type": "cold_transfer",
    "opt_out_human_detection": true,
    "opt_out_initial_message": true,
    "enable_bridge_audio_cue": true,
    "show_transferee_as_caller": true
  },
  "edge": {
    "destination_node_id": "node-transfer-failed",
    "transition_condition": {
      "type": "prompt",
      "prompt": "Transfer failed"
    }
  },
  "speak_during_execution": false
}
```

#### 4. End Node
Terminate the conversation.

```json
{
  "id": "node-end",
  "name": "End Call",
  "type": "end",
  "speak_during_execution": true,
  "instruction": {
    "type": "prompt",
    "text": "Thank the caller warmly and say goodbye."
  }
}
```

### Dynamic Variables

Use dynamic variables for context-aware responses:

```markdown
## Dynamic Variables in global_prompt
- {{call_mode}}: "overflow" = open but busy, "after_hours" = closed
- {{current_time_America/Chicago}}: Current time for greetings
- {{caller_name}}: Extracted caller name
- {{phone_number}}: Caller's phone number
```

Reference in instructions: "Use {{current_time_America/Chicago}} to say good morning/afternoon/evening."

### Post-Call Analysis

Extract structured data from conversations:

```json
{
  "post_call_analysis_data": [
    {
      "type": "string",
      "name": "name",
      "description": "The caller's first name"
    },
    {
      "type": "number",
      "name": "phone_number",
      "description": "Caller's phone number"
    },
    {
      "type": "enum",
      "name": "department",
      "description": "Which department the caller wanted",
      "choices": ["Sales", "Service", "Parts", "Finance"]
    }
  ]
}
```

### Knowledge Bases

Attach knowledge bases to specific nodes:

```json
{
  "id": "node-sales-inquiry",
  "type": "conversation",
  "knowledge_base_ids": ["kb_vehicle_inventory_xxxxx"],
  "instruction": {
    "type": "prompt",
    "text": "Check the knowledge base for vehicle availability. Share details if found."
  }
}
```

## Template Library

Provide templates based on use case. See `templates/` directory:

- **receptionist.json** - Multi-department call routing with transfers
- **sales-qualifier.json** - Lead qualification and appointment booking
- **support.json** - Customer support with ticket creation
- **appointment-booking.json** - Schedule appointments with calendar integration

When user requests a template, read the appropriate file and customize it for their needs.

## Best Practices

### 1. Global Prompt Structure

Always include in `global_prompt`:
- **Identity**: Who the agent is and where they work
- **Personality**: Tone, language style, conversational patterns
- **Core Rules**: Critical behaviors (e.g., "Answer questions first before collecting info")
- **What They Do**: Primary functions
- **What They Don't Do**: Clear boundaries
- **Speech Rules**: Phone number formatting, time formatting, etc.

### 2. Conversation Flow Design

**Progressive disclosure:**
- Start with a branch node to handle different entry scenarios (overflow vs after-hours)
- Use clear, descriptive node names ("Collect Name - Pre Transfer" not "node-47")
- Keep instructions concise but complete
- Use ONE question per conversation node when collecting information

**Error handling:**
- Always include fallback edges for unexpected responses
- Use `else_edge` on branch nodes for catch-all routing
- Create nodes to handle transfer failures

**Natural conversation:**
- Include `finetune_conversation_examples` for critical nodes
- Use varied language in instructions ("vary your responses — don't repeat the same line twice")
- Match caller's energy and tone

### 3. Data Collection Pattern

For collecting information (name, phone, etc.):

```
1. Ask for ONE piece of information
2. Wait for response
3. Confirm/acknowledge
4. Move to next node
5. At end, confirm ALL details back to caller
```

### 4. Voice Settings

Recommended settings for natural conversations:

```json
{
  "voice_temperature": 1,
  "voice_speed": 1,
  "interruption_sensitivity": 0.7,
  "responsiveness": 0.9,
  "enable_backchannel": true,
  "backchannel_words": ["yeah", "mhm", "okay", "right"],
  "ambient_sound": "call-center",
  "ambient_sound_volume": 0.6
}
```

### 5. Model Configuration

```json
{
  "model_choice": {
    "type": "cascading",
    "model": "gemini-2.5-flash",
    "high_priority": false
  },
  "model_temperature": 0.4,
  "post_call_analysis_model": "gpt-4.1-mini"
}
```

Use lower temperature (0.3-0.5) for consistent, predictable responses.

## API Integration

### Setup

Store API key as environment variable:
```bash
export RETELL_API_KEY="your_api_key_here"
```

Or use `.env` file:
```
RETELL_API_KEY=your_api_key_here
```

### Common Operations

Use the `scripts/retell_api.py` helper script for API operations:

**Create a new conversation flow:**
```bash
python scripts/retell_api.py create-flow flow.json
```

**Update an existing flow:**
```bash
python scripts/retell_api.py update-flow conversation_flow_xxxxx flow.json
```

**Deploy flow to an agent:**
```bash
python scripts/retell_api.py deploy-to-agent agent_xxxxx conversation_flow_xxxxx
```

**Test a flow:**
```bash
python scripts/retell_api.py test-flow conversation_flow_xxxxx --phone "+14055551234"
```

See `references/api-guide.md` for complete API documentation.

## Typical Workflow

### Modifying an Existing Flow

This is the most common workflow:

1. **Export current flow** (if from Retell dashboard):
   - User provides their existing JSON file
   - Read and understand current structure

2. **Identify changes needed:**
   - Ask what they want to modify (add nodes, change routing, update prompts, etc.)
   - Understand the desired behavior

3. **Make modifications:**
   - Update relevant nodes, edges, or global_prompt
   - Maintain existing structure and IDs where possible
   - Add new nodes with unique IDs (format: `node-descriptive-name`)

4. **Validate structure:**
   - Ensure all `destination_node_id` references exist
   - Check for orphaned nodes (no edges pointing to them)
   - Verify start_node_id is valid

5. **Test and deploy:**
   - Save modified JSON
   - Use API to update the flow
   - Suggest testing before going live

### Creating from Template

1. **Choose template** based on use case
2. **Customize**:
   - Update agent_name, business details
   - Modify global_prompt personality and rules
   - Adjust phone numbers, extensions, departments
   - Update voice_id if using custom voice
3. **Deploy** via API

## Common Patterns

### Time-Based Routing

```json
{
  "id": "node-time-check",
  "type": "branch",
  "edges": [
    {
      "destination_node_id": "node-after-hours",
      "transition_condition": {
        "type": "equation",
        "equations": [
          {
            "left": "{{call_mode}}",
            "operator": "==",
            "right": "after_hours"
          }
        ]
      }
    }
  ],
  "else_edge": {
    "destination_node_id": "node-overflow"
  }
}
```

### Department Routing

Create a branch node with edges for each department, plus an else_edge to ask which department they need.

### Message Taking

When transfers fail or business is closed:
1. Collect name
2. Collect phone (read back for confirmation)
3. Collect reason for call
4. Collect preferred callback time
5. Confirm all details
6. Thank and end call

## Troubleshooting

### Common Issues

**Node not triggering:**
- Check transition_condition prompt is clear and specific
- Ensure destination_node_id exists and matches exactly
- Verify branch node has else_edge as fallback

**Transfer not working:**
- Verify phone number format (E.164: +1XXXXXXXXXX)
- Check extension is correct
- Ensure transfer_option settings are appropriate

**Agent repeating information:**
- Update global_prompt to avoid repetition
- Add instruction: "Don't repeat information already stated"
- Use conversation examples to demonstrate desired flow

**Data not extracting:**
- Check post_call_analysis_data field names match what agent collects
- Ensure descriptions are clear about what to extract
- Use appropriate types (string, number, enum)

## File Organization

When working with flows:
- Save JSON files with descriptive names: `{client-name}-{use-case}-{version}.json`
- Keep backups before major modifications
- Use version control (git) for tracking changes

## References

For detailed documentation:
- `references/api-guide.md` - Complete API reference
- `references/node-types.md` - Deep dive on all node types
- `references/best-practices.md` - Advanced patterns and tips
- `templates/` - Ready-to-use flow templates

## Output Format

When helping users build flows, always:

1. **Provide the complete JSON** (or modified sections)
2. **Include setup instructions** (API key, dependencies)
3. **Show deployment commands** using the API script
4. **Explain key customization points** (what they should change for their business)
5. **Suggest testing steps** before going live

Example output structure:
```
Here's your Retell AI conversation flow for [use case]:

[JSON file content or file path]

## Setup Instructions
1. Set your API key: export RETELL_API_KEY="..."
2. Install dependencies: pip install -r requirements.txt

## Customization Points
- Line 5: Update agent_name to your business name
- Line 106: Modify global_prompt personality
- Lines 774-928: Update transfer phone numbers/extensions

## Deploy
python scripts/retell_api.py create-flow your-flow.json

## Test
Make a test call to verify the flow works as expected.
```

---

## Important Notes

- Always maintain proper JSON structure (no trailing commas, proper escaping)
- Keep global_prompt under 5000 characters for optimal performance
- Use unique IDs for all nodes and edges
- Test thoroughly before deploying to production
- Consider using webhook for complex business logic not suitable for conversation flow
