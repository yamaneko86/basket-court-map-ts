import Footer from "@/_components/Footer";
import ViewMap from "@/_components/ViewMap";
import HeaderWithSession from "@/_components/HeaderWithSession";

export default function Detail() {
  return (
    <div>
      <main className="flex flex-col h-screen">
        <HeaderWithSession />
        <ViewMap />
        <Footer />
      </main>
    </div>
  );
}
