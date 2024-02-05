import CourtsList from "@/_components/CourtsList";
import Footer from "@/_components/Footer";
import SupabaseListener from "@/_components/supabaseListener";

export default function Kinki() {
  return (
    <div>
      <main className="flex flex-col h-screen">
        <SupabaseListener />
        <CourtsList lower_limit={24} upper_limit={30} />
        <Footer />
      </main>
    </div>
  );
}
