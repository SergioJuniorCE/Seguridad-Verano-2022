import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
export const supabase = createClient(
	'https://velilpahciqidytmrrsc.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlbGlscGFoY2lxaWR5dG1ycnNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTY4MDQ1MzQsImV4cCI6MTk3MjM4MDUzNH0.p-wo53btswLBF71AyhRWcUoyq9Sjvk8kZs25AnaZWSk'
);
