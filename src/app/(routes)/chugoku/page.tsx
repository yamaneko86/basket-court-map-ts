import CourtsList from "@/_components/CourtsList";
import Footer from "@/_components/Footer";
import Header from "@/_components/Header";

export default function Chugoku() {
  return (
    <div>
      <main className="flex flex-col h-screen">
        <Header />
        <CourtsList lower_limit={31} upper_limit={35} />
        <Footer />
      </main>
    </div>
  );
}
