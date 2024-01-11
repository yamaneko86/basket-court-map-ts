import Footer from "@/_components/Footer";
import Header from "@/_components/Header";

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
