import Link from "next/link";

export default function Failure() {
	return (
		<div className="h-full w-full flex flex-col items-center justify-center">
			<div className="text-md font-bold text-gray-800 text-center">
				ログインまたは新規登録に失敗しました。
				<br />
				もう一度お試しください。
			</div>
			<Link href={"/login"} className="my-5">
				<button
					type="button"
					className="w-60 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
				>
					ログイン画面に戻る
				</button>
			</Link>
		</div>
	);
}
