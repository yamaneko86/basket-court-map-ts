import CourtsList from "@/_components/CourtsList";
import Footer from "@/_components/Footer";
import HeaderWithSession from "@/_components/HeaderWithSession";

export default function Tohoku() {
  return (
    <div>
      <main className="flex flex-col h-screen">
        <HeaderWithSession />
        <CourtsList lower_limit={2} upper_limit={7} />
        <Footer />
      </main>
    </div>
  );
}
