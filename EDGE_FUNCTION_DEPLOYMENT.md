# Supabase Edge Function Deployment Guide

## ✅ Edge Function Ready

Your Edge Function is now located at `edge-functions/send-welcome-email.ts` and won't interfere with your Next.js build.

## Deploy to Supabase

### 1. Install Supabase CLI
```bash
npm install -g supabase
```

### 2. Login to Supabase
```bash
supabase login
```

### 3. Link to Your Project
```bash
supabase link --project-ref ujismntthfzfkrzgedit
```

### 4. Create Function Directory Structure
```bash
# Create the function directory
mkdir -p supabase/functions/send-welcome-email

# Copy the function file
cp edge-functions/send-welcome-email.ts supabase/functions/send-welcome-email/index.ts
```

### 5. Deploy the Function
```bash
supabase functions deploy send-welcome-email
```

## Function URL

After deployment, your function will be available at:
`https://ujismntthfzfkrzgedit.supabase.co/functions/v1/send-welcome-email`

## Test the Function

You can test the function directly:

```bash
curl -X POST https://ujismntthfzfkrzgedit.supabase.co/functions/v1/send-welcome-email \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_SERVICE_ROLE_KEY" \
  -d '{
    "to": "test@example.com",
    "subject": "Test Email",
    "html": "<h1>Test</h1>",
    "text": "Test"
  }'
```

## Integration with Email Service

The function currently simulates email sending. To integrate with a real email service:

### Option A: Resend
```typescript
// Add to the function
import { Resend } from 'resend'

const resend = new Resend(Deno.env.get('RESEND_API_KEY'))

// Replace simulation with:
const { data, error } = await resend.emails.send({
  from: from || 'noreply@gradelab.io',
  to: [to],
  subject,
  html,
  text,
})
```

### Option B: SendGrid
```typescript
// Add to the function
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(Deno.env.get('SENDGRID_API_KEY')!)

// Replace simulation with:
const msg = {
  to,
  from: from || 'noreply@gradelab.io',
  subject,
  html,
  text,
}

await sgMail.send(msg)
```

## Environment Variables

Set these in your Supabase Edge Function environment:

```bash
# For Resend
RESEND_API_KEY=re_your_api_key_here

# For SendGrid
SENDGRID_API_KEY=your_sendgrid_api_key_here
```

## Current Status

✅ **Edge Function** - Ready for deployment  
✅ **Next.js Build** - Fixed, no more TypeScript errors  
✅ **Email Template** - Updated with new content  
✅ **API Route** - Configured to call Edge Function  
⏳ **Email Service** - Needs integration (Resend/SendGrid)  

The build error has been resolved and your Edge Function is ready to deploy!
