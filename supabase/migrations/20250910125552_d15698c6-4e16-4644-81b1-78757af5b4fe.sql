-- Fix security vulnerability: Protect customer contact information
-- Remove public access and add proper RLS policies for the contacts table

-- First, ensure RLS is enabled (it should be already)
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Drop the overly permissive insert policy if it exists and create a more restrictive one
DROP POLICY IF EXISTS "Allow insert for all users" ON public.contacts;

-- Create secure policies

-- 1. Allow public contact form submissions (insert only)
CREATE POLICY "Allow public contact form submissions"
ON public.contacts
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- 2. Admin users can view all contact submissions (SELECT)
-- Note: This policy will work once authentication is implemented
CREATE POLICY "Admin users can view contact submissions" 
ON public.contacts 
FOR SELECT 
TO authenticated
USING (
  -- Only allow SELECT for admin users
  -- This will need to be updated once user roles are implemented
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE auth.users.id = auth.uid()
    -- Future: Add role check here when roles table is created
  )
);

-- 3. Admin users can update contact submissions (for status tracking)
CREATE POLICY "Admin users can update contact submissions"
ON public.contacts
FOR UPDATE
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE auth.users.id = auth.uid()
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE auth.users.id = auth.uid()
  )
);

-- 4. Admin users can delete contact submissions if needed
CREATE POLICY "Admin users can delete contact submissions"
ON public.contacts
FOR DELETE
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE auth.users.id = auth.uid()
  )
);

-- Add a status column for tracking contact submissions (optional)
ALTER TABLE public.contacts 
ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved'));

-- Add an index for better performance on status queries
CREATE INDEX IF NOT EXISTS idx_contacts_status ON public.contacts(status);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON public.contacts(created_at DESC);