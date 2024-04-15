import Link from "next/link";

export default function Welcome() {
  return (
    <div className="flex flex-col h-screen items-center">
      <div className="flex flex-row mt-16 mb-10">
        <div className="text-3xl sm:text-5xl font-bold mr-1">
          Let&apos;s find outdoor
          <br />
          Basketball Courts!
        </div>
        <div className="text-4xl sm:text-6xl pt-7 animate-bounce">🏀</div>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <div className="flex flex-col text-center items-center">
          <div className="text-2xl sm:text-4xl font-bold mb-4">
            このアプリについて
          </div>
          <div className="w-80">
            屋外のバスケットコートを
            <br />
            検索することができます。
            <br />
            現在地とコートの場所を
            <br />
            GoogleMap上で表示します。
          </div>
        </div>

        <div className="flex flex-row">
          <Link
            href={"/login"}
            className="w-40 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-1"
          >
            ログイン
          </Link>
          <Link
            href={"/register"}
            className="w-40 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-1"
          >
            サインアップ
          </Link>
        </div>
      </div>
    </div>
  );
}
