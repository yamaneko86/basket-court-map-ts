import Footer from "@/_components/Footer";
import CountCourts from "@/_components/CountCourts";
import HeaderWithSession from "./_components/HeaderWithSession";

export default function Home() {
  return (
    <div className="bg-[url('../../public/images/top.jpg')]">
      <main className="flex flex-col h-screen">
        <HeaderWithSession />
        <CountCourts />
        <Footer />
      </main>
    </div>
  );
}
