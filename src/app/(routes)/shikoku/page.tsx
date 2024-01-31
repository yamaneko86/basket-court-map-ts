import CourtsList from "@/_components/CourtsList";
import Footer from "@/_components/Footer";
import Header from "@/_components/Header";

export default function Shikoku() {
  return (
    <div>
      <main className="flex flex-col h-screen">
        <Header />
        <CourtsList lower_limit={36} upper_limit={39} />
        <Footer />
      </main>
    </div>
  );
}
