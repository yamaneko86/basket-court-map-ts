import Footer from "@/_components/Footer";
import Header from "@/_components/Header";
import CountCourts from "@/_components/CountCourts";

export default async function Home() {
  return (
    <div className="bg-[url('../../../public/images/top.jpg')] ">
      <main className="flex flex-col h-screen">
        <Header />
        <CountCourts />
        <Footer />
      </main>
    </div>
  );
}
