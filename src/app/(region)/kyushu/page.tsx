import CourtsList from "@/_components/CourtsList";
import Footer from "@/_components/Footer";
import Header from "@/_components/Header";

export default function Kyushu() {
  return (
    <div>
      <main className="flex flex-col h-screen">
        <Header />
        <CourtsList lower_limit={40} upper_limit={47} />
        <Footer />
      </main>
    </div>
  );
}
