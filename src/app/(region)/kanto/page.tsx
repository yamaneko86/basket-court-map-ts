import CourtsList from "@/_components/CourtsList";
import Footer from "@/_components/Footer";
import HeaderWithSession from "@/_components/HeaderWithSession";

export default function Kanto() {
  return (
    <div>
      <main className="flex flex-col h-screen">
        <HeaderWithSession />
        <CourtsList lower_limit={8} upper_limit={14} />
        <Footer />
      </main>
    </div>
  );
}
