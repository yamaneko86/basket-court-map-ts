"use client";
import Footer from "@/_components/Footer";
import Header from "@/_components/Header";
import ViewMap from "@/_components/ViewMap";
import { useParams } from "next/navigation";

export default function Detail() {
  // map_idをURLから取得("map_id"は動的ルートパス名)
  const path = useParams().map_id.toString();

  return (
    <div>
      <main className="flex flex-col h-screen">
        <Header />
        <ViewMap map_id={path} />
        <Footer />
      </main>
    </div>
  );
}
