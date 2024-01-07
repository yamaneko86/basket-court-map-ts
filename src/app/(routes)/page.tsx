import Header from "../_components/Header";
import MapApp from "../_components/MapApp";
import Footer from "../_components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Basket Court Map</title>
        <meta
          name="description"
          content="Created by Next.js, TypeScript and Supabase."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/BasketBall_icon.png" />
      </Head>
      <div className="bg-[url('../../../public/top.jpg')] ">
        <div className="flex flex-col h-screen">
          <Header />
          <MapApp />
          <Footer />
        </div>
      </div>
    </>
  );
}
