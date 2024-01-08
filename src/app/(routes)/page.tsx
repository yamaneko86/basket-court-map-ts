import Header from "../_components/Header";
import MapApp from "../_components/MapApp";
import Footer from "../_components/Footer";

export default function Home() {
  return (
    <html>
      <body>
        <div className="bg-[url('../../../public/top.jpg')] ">
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
