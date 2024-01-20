import Footer from "@/_components/Footer";
import Header from "@/_components/Header";
import ViewMap from "@/_components/ViewMap";

export default function Kyushu() {
  return (
    <div>
      <main className="flex flex-col h-screen">
        <Header />
        <ViewMap />
        <Footer />
      </main>
    </div>
  );
}
