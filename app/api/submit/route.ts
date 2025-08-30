import { supabase } from '@/lib/supabase'

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

    return new Response("Email submitted successfully!", {
      status: 200,
    });
  } catch (error) {
    console.error('Server error:', error);
    return new Response("Internal server error", { status: 500 });
  }
}
