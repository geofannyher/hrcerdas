import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://pxeyzsojdywollqgqidx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4ZXl6c29qZHl3b2xscWdxaWR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE5MTg1OTEsImV4cCI6MjAyNzQ5NDU5MX0.pVvLgX-jDa0kGvcfQwRVK8jmiCtZJISo-XMYtP2C9ZQ"
);
export const handleLogin = async ({ email, password }) => {
  const res = await supabase
    .from("user")
    .select()
    .eq("email", email)
    .eq("password", password);
  return res;
};

export const registerData = async ({ email, password }) => {
  const res = await supabase.from("user").insert({
    email: email,
    password: password,
  });
  return res;
};
