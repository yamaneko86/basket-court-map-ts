import CourtsList from "@/_components/CourtsList";
import Footer from "@/_components/Footer";
import HeaderWithSession from "@/_components/HeaderWithSession";

export default function Chubu() {
  return (
    <div>
      <main className="flex flex-col h-screen">
        <HeaderWithSession />
        <CourtsList lower_limit={15} upper_limit={23} />
        <Footer />
      </main>
    </div>
  );
}
