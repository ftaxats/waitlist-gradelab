# Supabase Setup Guide

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Wait for your project to be set up

## 2. Create the Waitlist Table

Run this SQL in your Supabase SQL Editor:

```sql
-- Create the waitlist table
CREATE TABLE waitlist (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX idx_waitlist_email ON waitlist(email);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserts from authenticated and anonymous users
CREATE POLICY "Allow anonymous inserts" ON waitlist
  FOR INSERT WITH CHECK (true);

-- Create a policy that allows reads only to authenticated users (optional)
CREATE POLICY "Allow authenticated reads" ON waitlist
  FOR SELECT USING (auth.role() = 'authenticated');
```

## 3. Get Your Supabase Credentials

1. Go to your Supabase project dashboard
2. Navigate to Settings > API
3. Copy your Project URL and anon/public key

## 4. Set Environment Variables

Create a `.env.local` file in your project root and add:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 5. Test the Integration

1. Start your development server: `npm run dev`
2. Submit an email through the waitlist form
3. Check your Supabase dashboard > Table Editor > waitlist to see the data

## 6. Optional: Email Validation

You can add email validation by modifying the SQL:

```sql
-- Add email validation constraint
ALTER TABLE waitlist 
ADD CONSTRAINT valid_email 
CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');
```

## 7. Viewing Data

You can view your waitlist data in:
- Supabase Dashboard > Table Editor > waitlist
- Or create a simple admin panel using Supabase's built-in features
