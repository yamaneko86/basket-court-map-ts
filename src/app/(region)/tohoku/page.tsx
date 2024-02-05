import CourtsList from "@/_components/CourtsList";
import Footer from "@/_components/Footer";
import SupabaseListener from "@/_components/supabaseListener";

export default function Tohoku() {
  return (
    <div>
      <main className="flex flex-col h-screen">
        <SupabaseListener />
        <CourtsList lower_limit={2} upper_limit={7} />
        <Footer />
      </main>
    </div>
  );
}
