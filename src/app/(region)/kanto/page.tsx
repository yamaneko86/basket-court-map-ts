import CourtsList from "@/_components/CourtsList";
import Footer from "@/_components/Footer";
import SupabaseListener from "@/_components/supabaseListener";

export default function Kanto() {
  return (
    <div>
      <main className="flex flex-col h-screen">
        <SupabaseListener />
        <CourtsList lower_limit={8} upper_limit={14} />
        <Footer />
      </main>
    </div>
  );
}
