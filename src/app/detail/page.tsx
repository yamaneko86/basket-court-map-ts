import { map_id } from "@/_components/CourtsList";
import Footer from "@/_components/Footer";
import ViewMap from "@/_components/ViewMap";
import SupabaseListener from "@/_components/supabaseListener";

export default function Detail() {
  const detail_map_id: string = map_id;

  return (
    <div>
      <main className="flex flex-col h-screen">
        <SupabaseListener />
        <ViewMap map_id={detail_map_id} />
        <Footer />
      </main>
    </div>
  );
}
