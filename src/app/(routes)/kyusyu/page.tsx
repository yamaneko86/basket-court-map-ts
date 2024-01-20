import Footer from "@/_components/Footer";
import Header from "@/_components/Header";
import MapApp from "@/_components/CountCourts";

export default function Kyushu() {
  return (
    <div>
      <main className="flex flex-col h-screen">
        <Header />
        <MapApp />
        <Footer />
      </main>
    </div>
  );
}
