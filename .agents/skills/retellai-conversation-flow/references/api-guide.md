# Retell AI API Reference Guide

This guide covers the Retell AI API endpoints and how to use them with the helper script.

## Authentication

All API requests require an API key passed in the Authorization header:

```
Authorization: Bearer YOUR_API_KEY
```

Set your API key as an environment variable:

```bash
export RETELL_API_KEY="your_api_key_here"
```

Or create a `.env` file:
```
RETELL_API_KEY=your_api_key_here
```

## Base URL

```
https://api.retellai.com
```

## Conversation Flow Endpoints

### Create Conversation Flow

**Endpoint:** `POST /v1/conversation-flow`

**Request Body:** Full conversation flow object

**Example:**
```bash
python scripts/retell_api.py create-flow my-flow.json
```

**Response:**
```json
{
  "conversation_flow_id": "conversation_flow_abc123",
  "version": 6,
  "nodes": [...],
  ...
}
```

### Update Conversation Flow

**Endpoint:** `PUT /v1/conversation-flow/{flow_id}`

**Request Body:** Updated conversation flow object

**Example:**
```bash
python scripts/retell_api.py update-flow conversation_flow_abc123 my-flow.json
```

### Get Conversation Flow

**Endpoint:** `GET /v1/conversation-flow/{flow_id}`

**Example:**
```bash
python scripts/retell_api.py get-flow conversation_flow_abc123
```

### List Conversation Flows

**Endpoint:** `GET /v1/list-conversation-flows`

**Example:**
```bash
python scripts/retell_api.py list-flows
```

**Response:**
```json
{
  "conversation_flows": [
    {
      "conversation_flow_id": "conversation_flow_abc123",
      "version": 6,
      "nodes": [...]
    }
  ]
}
```

### Delete Conversation Flow

**Endpoint:** `DELETE /v1/conversation-flow/{flow_id}`

**Direct API:**
```bash
curl -X DELETE https://api.retellai.com/v1/conversation-flow/{flow_id} \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Agent Endpoints

### Create Agent

**Endpoint:** `POST /v1/agent`

**Request Body:** Agent configuration (without conversationFlow nested object)

**Example:**
```bash
python scripts/retell_api.py create-agent my-agent.json
```

**Response:**
```json
{
  "agent_id": "agent_xyz789",
  "agent_name": "My Agent",
  ...
}
```

### Update Agent

**Endpoint:** `PUT /v1/agent/{agent_id}`

**Request Body:** Updated agent configuration

**Deploy flow to agent:**
```bash
python scripts/retell_api.py deploy-to-agent agent_xyz789 conversation_flow_abc123
```

### Get Agent

**Endpoint:** `GET /v1/agent/{agent_id}`

**Direct API:**
```bash
curl https://api.retellai.com/v1/agent/{agent_id} \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### List Agents

**Endpoint:** `GET /v1/list-agents`

**Direct API:**
```bash
curl https://api.retellai.com/v1/list-agents \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Knowledge Base Endpoints

### Create Knowledge Base

**Endpoint:** `POST /v1/knowledge-base`

**Request Body:**
```json
{
  "knowledge_base_name": "Product Inventory",
  "texts": [
    "We have 2024 Honda Civic in stock, silver color, 15k miles",
    "2023 Toyota Camry available, white, 25k miles"
  ]
}
```

### Get Knowledge Base

**Endpoint:** `GET /v1/knowledge-base/{kb_id}`

### Update Knowledge Base

**Endpoint:** `PUT /v1/knowledge-base/{kb_id}`

### Add to Knowledge Base

**Endpoint:** `POST /v1/knowledge-base/{kb_id}/add`

**Request Body:**
```json
{
  "texts": [
    "New inventory item: 2024 Ford F-150, black, 5k miles"
  ]
}
```

## Call Endpoints

### Register Call

**Endpoint:** `POST /v1/register-call`

**Request Body:**
```json
{
  "agent_id": "agent_xyz789",
  "from_number": "+14155551234",
  "to_number": "+14155556789",
  "metadata": {
    "customer_id": "12345"
  }
}
```

### Get Call

**Endpoint:** `GET /v1/call/{call_id}`

Retrieve call recording, transcript, and analysis.

### List Calls

**Endpoint:** `GET /v1/list-calls`

**Query Parameters:**
- `agent_id`: Filter by agent
- `limit`: Number of results (default: 100)
- `offset`: Pagination offset

## Webhook Integration

Retell AI can send webhook events to your backend for:
- Call started
- Call ended
- Call analysis complete
- Custom function tool calls

### Webhook Request Format

```json
{
  "event": "call_ended",
  "call_id": "call_abc123",
  "agent_id": "agent_xyz789",
  "from_number": "+14155551234",
  "to_number": "+14155556789",
  "transcript": "...",
  "call_analysis": {
    "call_successful": true,
    "user_sentiment": "positive",
    "call_summary": "Customer inquired about...",
    "in_voicemail": false,
    "custom_analysis_data": {
      "caller_name": "John",
      "department": "Sales",
      "phone_number": 4055551234
    }
  },
  "duration_ms": 125000
}
```

### Setting Webhook URL

Include in agent configuration:
```json
{
  "webhook_url": "https://your-backend.com/webhook/retell",
  "webhook_timeout_ms": 11500
}
```

## Error Handling

### Common Error Codes

- `400 Bad Request`: Invalid request body or parameters
- `401 Unauthorized`: Invalid or missing API key
- `404 Not Found`: Resource not found
- `429 Too Many Requests`: Rate limit exceeded
- `500 Internal Server Error`: Server error

### Error Response Format

```json
{
  "error": {
    "message": "Invalid conversation flow structure",
    "code": "INVALID_FLOW",
    "details": "Node 'node-xyz' references non-existent destination"
  }
}
```

## Rate Limits

- API calls: 100 requests per minute per API key
- Concurrent calls: Depends on your plan tier

## Best Practices

### 1. Use Idempotency

When creating resources, store the returned ID and use update operations for subsequent changes rather than creating duplicates.

### 2. Handle Webhooks Reliably

- Respond to webhook requests within the timeout period (default: 11.5 seconds)
- Return 200 OK to acknowledge receipt
- Process webhook data asynchronously if needed
- Implement retry logic for failed processing

### 3. Version Control

Keep your conversation flows in version control:
- Use descriptive file names with versions
- Track changes with git
- Test before deploying to production agents

### 4. Testing

- Test flows thoroughly before deploying to production
- Use separate test agents for development
- Monitor call transcripts and analysis for issues
- Use post-call analysis to validate data extraction

### 5. Security

- Never commit API keys to version control
- Use environment variables or secure secret management
- Rotate API keys periodically
- Validate webhook signatures (if provided)

## Additional Resources

- Official Docs: https://docs.retellai.com
- API Reference: https://docs.retellai.com/api-references
- Dashboard: https://dashboard.retellai.com
