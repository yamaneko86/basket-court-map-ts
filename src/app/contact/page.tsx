import Footer from "@/_components/Footer";
import SupabaseListener from "@/_components/supabaseListener";

export default function Contact() {
  return (
    <main className="flex flex-col h-screen">
      <SupabaseListener />
      <h1>これはcontactページです</h1>
      <Footer />
    </main>
  );
}
