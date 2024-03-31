import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_SUP_URL;
const supabaseAnonKey = process.env.REACT_SUP_TOKEN;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
