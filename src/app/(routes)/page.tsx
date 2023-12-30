import Image from "next/image";
import Header from "../_components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <h1>こんにちは</h1>
      <Link href={"/about"}>
        <h2>このアプリについて</h2>
      </Link>
    </>
  );
}
