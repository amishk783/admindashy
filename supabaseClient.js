import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.SUPABASE_URL;
const supabaseAnonKey = import.meta.SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
