import Footer from "@/_components/Footer";
import ViewMap from "@/_components/ViewMap";
import SupabaseListener from "@/_components/supabaseListener";

export default function Detail() {
  return (
    <div>
      <main className="flex flex-col h-screen">
        <SupabaseListener />
        <ViewMap />
        <Footer />
      </main>
    </div>
  );
}
