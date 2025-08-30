import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Parse the request body
    const { to, subject, html, text, from } = await req.json()

    if (!to || !subject || !html || !text) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: to, subject, html, text' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Here you would integrate with your preferred email service
    // For now, we'll simulate sending the email
    console.log('Sending email:', {
      to,
      subject,
      from: from || 'noreply@gradelab.io',
      htmlLength: html.length,
      textLength: text.length
    })

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 100))

    // Return success response
    return new Response(
      JSON.stringify({ 
        message: 'Email sent successfully',
        to,
        subject
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})
