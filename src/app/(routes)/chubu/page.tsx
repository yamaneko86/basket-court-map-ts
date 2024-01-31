import CourtsList from "@/_components/CourtsList";
import Footer from "@/_components/Footer";
import Header from "@/_components/Header";

export default function Chubu() {
  return (
    <div>
      <main className="flex flex-col h-screen">
        <Header />
        <CourtsList lower_limit={15} upper_limit={23} />
        <Footer />
      </main>
    </div>
  );
}
