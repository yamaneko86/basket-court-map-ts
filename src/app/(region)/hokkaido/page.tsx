import CourtsList from "@/_components/CourtsList";
import Footer from "@/_components/Footer";
import SupabaseListener from "@/_components/supabaseListener";

export default function Hokkaido() {
  return (
    <div>
      <main className="flex flex-col h-screen">
        <SupabaseListener />
        <CourtsList lower_limit={1} upper_limit={1} />
        <Footer />
      </main>
    </div>
  );
}
