import Footer from "@/_components/Footer";
import SupabaseListener from "@/_components/supabaseListener";

export default function About() {
  return (
    <main className="flex flex-col h-screen">
      <SupabaseListener />
      <h1>これはaboutページです</h1>
      <Footer />
    </main>
  );
}
