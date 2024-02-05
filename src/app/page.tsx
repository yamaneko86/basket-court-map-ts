import Footer from "@/_components/Footer";
import CountCourts from "@/_components/CountCourts";
import SupabaseListener from "./_components/supabaseListener";

export default function Home() {
  return (
    <div className="bg-[url('../../public/images/top.jpg')]">
      <main className="flex flex-col h-screen">
        <SupabaseListener />
        <CountCourts />
        <Footer />
      </main>
    </div>
  );
}
