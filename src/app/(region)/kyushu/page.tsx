import CourtsList from "@/_components/CourtsList";
import Footer from "@/_components/Footer";
import SupabaseListener from "@/_components/supabaseListener";

export default function Kyushu() {
  return (
    <div>
      <main className="flex flex-col h-screen">
        <SupabaseListener />
        <CourtsList lower_limit={40} upper_limit={47} />
        <Footer />
      </main>
    </div>
  );
}
