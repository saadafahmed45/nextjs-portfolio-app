import Image from "next/image";
import About from "./about/page";
import Header from "./Components/Header";
import Portfolio from "./portfolio/page";
import Contact from "./contact/page";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main className="px-8 py-4">
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
