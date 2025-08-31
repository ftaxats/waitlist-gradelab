import { supabase } from '@/lib/supabase'
import { supabaseServer } from '@/lib/supabase-server'
import { generateWelcomeEmail } from '@/lib/email-template'

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return new Response("Email is required", { status: 400 });
  }

  try {
    // Check if email already exists
    const { data: existingEmail } = await supabase
      .from('waitlist')
      .select('email')
      .eq('email', email)
      .single();

    if (existingEmail) {
      return new Response("Email already exists", { status: 409 });
    }

    // Insert new email
    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        { 
          email: email,
          created_at: new Date().toISOString()
        }
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error);
      return new Response("Failed to submit email!", {
        status: 500,
        statusText: error.message,
      });
    }

    // Store email for processing (Supabase will handle sending via database trigger)
    try {
      const emailContent = generateWelcomeEmail(email);
      
      // Insert email into database for Supabase to process
      const { error: emailError } = await supabaseServer
        .from('emails')
        .insert([
          {
            to_email: email,
            subject: '🎉 Welcome to GradeLab! You\'re on our waitlist',
            html_content: emailContent.html,
            text_content: emailContent.text,
            from_email: 'noreply@gradelab.io',
            status: 'pending'
          }
        ]);

      if (emailError) {
        console.error('Email storage error:', emailError);
        // Don't fail the request if email fails, just log it
      } else {
        console.log('Welcome email queued for:', email);
      }
    } catch (emailError) {
      console.error('Email processing failed:', emailError);
      // Don't fail the request if email fails, just log it
    }

    return new Response("Email submitted successfully!", {
      status: 200,
    });
  } catch (error) {
    console.error('Server error:', error);
    return new Response("Internal server error", { status: 500 });
  }
}
