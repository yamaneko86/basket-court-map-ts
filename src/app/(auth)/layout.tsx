import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Basket Court Map",
	description: "Generated by create next app",
	// アイコンの設定
	icons: {
		icon: "/images/BasketGoal_Icon.svg",
	},
	manifest: "/pwa/manifest.json",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ja">
			<body
				className={`${inter.className} flex flex-col h-screen bg-amber-500`}
			>
				{children}
			</body>
		</html>
	);
}
