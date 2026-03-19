# Mia - Webhook Configuration Guide

## Overview

This document explains how to configure the post-call webhook that fires after every call Mia completes. The webhook sends structured lead data to your n8n workflow for processing.

## Webhook Payload Structure

After each call, RetellAI will POST the following JSON to your n8n endpoint:

```json
{
  "call_id": "call_xxxxxxxxxxxxx",
  "call_duration": 145,
  "from_number": "+61412345678",
  "to_number": "+61755551234",
  "start_timestamp": 1678901234,
  "end_timestamp": 1678901379,
  "call_analysis": {
    "category": "revenue_recovery",
    "name": "John Smith",
    "company_or_dealership": "Parramatta Toyota",
    "phone": "0412345678",
    "email": "john@email.com",
    "best_time_to_call": "afternoons",
    "role": "Service Manager",
    "type_of_enquiry": "interested in revenue recovery system",
    "message": "Caller from Parramatta Toyota interested in the revenue recovery system for their service department",
    "is_dealership": true
  },
  "transcript": "Full conversation transcript here...",
  "recording_url": "https://retellai-recordings.s3.amazonaws.com/xxxxx.mp3",
  "call_summary": "Caller from Parramatta Toyota interested in revenue recovery AI system. Requested afternoon callback."
}
```

## Field Descriptions

### Top-Level Fields
- `call_id`: Unique RetellAI call identifier
- `call_duration`: Duration in seconds
- `from_number`: Caller's phone number (E.164 format)
- `to_number`: Adrian's inbound number
- `start_timestamp`: Unix timestamp (call start)
- `end_timestamp`: Unix timestamp (call end)
- `transcript`: Full call transcript
- `recording_url`: URL to download the MP3 recording
- `call_summary`: AI-generated summary of the call

### Call Analysis Fields (Extracted Data)

These are extracted from the conversation via post-call analysis:

- **category** (enum): Which menu option was selected
  - `revenue_recovery`
  - `training_enquiry`
  - `tims_crew`
  - `next_level_selling`
  - `general_enquiry`

- **name** (string): Caller's full name

- **company_or_dealership** (string): Company/dealership name (if applicable)

- **phone** (string): Confirmed callback phone number

- **email** (string): Email address (optional - may be null)

- **best_time_to_call** (string): Preferred callback time (e.g., "afternoons", "mornings", "anytime")

- **role** (string): Caller's job title/role (relevant for training enquiries)

- **type_of_enquiry** (string): What the caller is interested in (in their own words)

- **message** (string): Summary of what the caller said

- **is_dealership** (boolean): Whether caller confirmed they're from a dealership (relevant for revenue_recovery)

## Setting Up the Webhook

### Step 1: Create n8n Webhook Endpoint

1. In n8n, create a new workflow
2. Add a **Webhook** trigger node
3. Set method to `POST`
4. Copy the webhook URL (e.g., `https://your-n8n-instance.com/webhook/mia-calls`)

### Step 2: Configure RetellAI Agent

Update the `webhook_url` field in [mia-adrian-law-office.json](./mia-adrian-law-office.json):

```json
{
  "webhook_url": "https://your-n8n-instance.com/webhook/mia-calls",
  ...
}
```

Or use the deployment script (recommended):

```bash
python scripts/deploy_mia.py --webhook-url "https://your-n8n-instance.com/webhook/mia-calls"
```

### Step 3: Test Webhook

Make a test call to Mia and verify the webhook payload is received by n8n.

## n8n Workflow Example

Here's a basic n8n workflow structure:

```
1. Webhook Trigger (receives payload)
   ↓
2. Switch Node (route by category)
   ↓
3a. Revenue Recovery → Email Adrian + Log to Sheet
3b. Training Enquiry → Email Adrian + CRM Entry
3c. Tim's Crew → Email Adrian
3d. Next Level Selling → Email Adrian + CRM Entry
3e. General Enquiry → Email Adrian

4. Send SMS Alert to Adrian's Mobile (optional)
```

### Sample n8n Email Template

```
Subject: New {{ $json.call_analysis.category.replace('_', ' ').toUpperCase() }} Enquiry

Name: {{ $json.call_analysis.name }}
{{ $json.call_analysis.company_or_dealership ? 'Company: ' + $json.call_analysis.company_or_dealership : '' }}
Phone: {{ $json.call_analysis.phone }}
{{ $json.call_analysis.email ? 'Email: ' + $json.call_analysis.email : '' }}
Best Time: {{ $json.call_analysis.best_time_to_call }}

{{ $json.call_analysis.role ? 'Role: ' + $json.call_analysis.role : '' }}

ENQUIRY:
{{ $json.call_analysis.message }}

---

AI SUMMARY:
{{ $json.call_summary }}

CALL DETAILS:
Duration: {{ Math.floor($json.call_duration / 60) }}m {{ $json.call_duration % 60 }}s
Timestamp: {{ new Date($json.start_timestamp * 1000).toLocaleString() }}

RECORDING:
{{ $json.recording_url }}

TRANSCRIPT:
{{ $json.transcript }}
```

## Handling Incomplete Calls

If a caller hangs up mid-conversation, RetellAI will still fire the webhook with whatever data was captured. Check for missing fields:

```javascript
// n8n Function node example
const analysis = $json.call_analysis;

// Check if key fields are missing
if (!analysis.name || !analysis.phone) {
  return {
    json: {
      ...analysis,
      status: 'incomplete',
      alert: 'Caller hung up before providing all details'
    }
  };
}

return { json: analysis };
```

## Webhook Security (Optional)

To secure your webhook:

1. Add authentication to your n8n webhook
2. Use RetellAI's webhook signature verification (if available)
3. Whitelist RetellAI's IP addresses

Example with basic auth:
```
https://username:password@your-n8n-instance.com/webhook/mia-calls
```

## Troubleshooting

### Webhook not firing

1. Check the `webhook_url` is correctly configured in the agent
2. Verify the n8n webhook is active (test with curl)
3. Check RetellAI logs for webhook delivery failures

```bash
curl -X POST https://your-n8n-instance.com/webhook/mia-calls \
  -H "Content-Type: application/json" \
  -d '{"test": "payload"}'
```

### Missing data in payload

1. Check post-call analysis is enabled in the agent config
2. Verify `post_call_analysis_data` fields match the conversation flow
3. Review call transcript to ensure Mia collected the data

### Webhook timeout

If your n8n workflow is slow, RetellAI may timeout the webhook. Optimize your workflow or:

1. Return a 200 OK immediately
2. Process the webhook asynchronously in a separate workflow

## Next Steps

- [ ] Set up n8n webhook endpoint
- [ ] Configure email notifications
- [ ] Add SMS alerts (optional)
- [ ] Create Google Sheet logging (optional)
- [ ] Test all 5 call categories
- [ ] Set up error monitoring/alerting
