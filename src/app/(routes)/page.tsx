import Footer from "@/_components/Footer";
import Header from "@/_components/Header";
import MapApp from "@/_components/MapApp";

export default function Home() {
  return (
    <html>
      <body>
        <div className="bg-[url('../../../public/images/top.jpg')] ">
          <main className="flex flex-col h-screen">
            <Header />
            <MapApp />
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
