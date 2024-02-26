import Link from "next/link";

export default function SignIn() {
  // TODO オシャレする
  return (
    <div className="flex flex-col h-screen items-center">
      <div className="flex flex-row">
        <div className="text-3xl sm:text-5xl font-bold my-10 ml-5 mr-1">
          Let&apos;s find outdoor
          <br />
          Basketball Courts!
        </div>
        <div className="text-4xl sm:text-6xl pt-20 animate-bounce">🏀</div>
      </div>
      <form action="/api/auth/login" method="post" className="space-y-4">
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
          />
        </div>
        <div className="flex flex-col">
          <button className="w-80 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            ログイン
          </button>
        </div>
        <div>
          アカウントの新規登録は
          <Link href={"/register"} className="underline">
            こちら
          </Link>
        </div>
      </form>
    </div>
  );
}
