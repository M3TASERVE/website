import { 
    createClient, SupabaseClient
   } from "@supabase/supabase-js";

window.supabase = { createClient, SupabaseClient };
