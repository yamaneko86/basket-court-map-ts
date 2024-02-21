import Footer from "@/_components/Footer";
import HeaderWithSession from "@/_components/HeaderWithSession";

export default function About() {
  return (
    <main className="flex flex-col h-screen">
      <HeaderWithSession />
      <h1>これはaboutページです</h1>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel est quos
        voluptas labore repellendus accusamus. Aliquid facere laborum expedita
        numquam reprehenderit maiores tempora nobis nemo. Numquam minima ea
        explicabo veniam.
      </div>
      <Footer />
    </main>
  );
}
