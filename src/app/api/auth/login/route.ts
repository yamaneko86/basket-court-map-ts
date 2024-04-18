import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const supabase = createRouteHandlerClient({ cookies });

  try {
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (signInError) {
      throw signInError;
    }
  } catch (error) {
    // エラー発生時、専用ページに遷移する
    return NextResponse.redirect(`${requestUrl.origin}/failure`);
  }

  //トップページに遷移する
  return NextResponse.redirect(`${requestUrl.origin}/`, {
    status: 301,
  });
}
