import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ShortServices from "@/components/ShortServices";
import Trust from "@/components/Trust";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import DetailedServices from "@/components/DetailedServices";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-bone">
      <Header />
      <Hero />
      <ShortServices />
      <Trust />
      <About />
      <Portfolio />
      <DetailedServices />
      <Contact />
      <Footer />
    </main>
  );
}
