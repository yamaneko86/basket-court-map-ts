import Header from "../_components/Header";
import MapApp from "../_components/MapApp";
import Footer from "../_components/Footer";

export default function Home() {
  return (
    <div className="bg-[url('../../../public/top.jpg')] ">
      <div className="flex flex-col h-screen">
        <Header />
        <MapApp />
        <Footer />
      </div>
    </div>
  );
}
