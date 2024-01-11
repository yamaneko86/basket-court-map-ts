import Header from "@/_components/Header";
import Footer from "@/_components/Footer";

export default function About() {
  return (
    <html>
      <body>
        <main className="flex flex-col h-screen">
          <Header />
          <h1>これはaboutページです</h1>
          <Footer />
        </main>
      </body>
    </html>
  );
}
