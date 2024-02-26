"use client";
import { supabase } from "@/_utils/supabase/supabase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");

  const router = useRouter();

  const onSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const { error: signUpError } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          emailRedirectTo: `${location.origin}/api/auth/callback`,
        },
      });
      if (signUpError) {
        throw signUpError;
      }
      alert("登録が完了しました。ログインして下さい。");
      router.push("/login");
    } catch (error) {
      alert("エラーが発生しました");
    }
  };

  // TODO オシャレする
  return (
    <div className="flex flex-col h-screen items-center">
      <div className="flex flex-row mt-20 mb-10">
        <div className="text-3xl sm:text-5xl font-bold mr-1">
          Let&apos;s find outdoor
          <br />
          Basketball Courts!
        </div>
        <div className="text-4xl sm:text-6xl pt-7 animate-bounce">🏀</div>
      </div>
      <form className="space-y-4" onSubmit={onSubmit}>
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="mb-2 text-sm font-bold text-gray-900"
          >
            メールアドレス
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-80 p-2.5"
            placeholder="name@company.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="mb-2 text-sm font-bold text-gray-900"
          >
            パスワード
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-80 p-2.5"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="passwordConf"
            className="mb-2 text-sm font-bold text-gray-900"
          >
            パスワード（確認）
          </label>
          <input
            type="password"
            name="passwordConf"
            id="passwordConf"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-80 p-2.5"
            required
            value={passwordConf}
            onChange={(e) => setPasswordConf(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <button
            type="submit"
            className="w-80 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            サインアップ
          </button>
        </div>
        <div>
          ログインは
          <Link href={"/login"} className="underline">
            こちら
          </Link>
        </div>
      </form>
    </div>
  );
}
