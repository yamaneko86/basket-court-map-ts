import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const user_name = String(formData.get("user_name"));
  const supabase = createRouteHandlerClient({ cookies });

  try {
    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          // auth.usersテーブルの"raw_user_meta_data"にjson形式で追加
          user_name: user_name,
        },
      },
    });
    if (signUpError) {
      throw signUpError;
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
