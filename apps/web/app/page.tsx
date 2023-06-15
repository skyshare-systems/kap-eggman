import Navbar from "@/components/hero/navbar";
import AboutPage from "@/components/hero/about-section";
import FooterPage from "@/components/hero/footer-section";
import HeroPage from "@/components/hero/hero-section";
import MemeFiPage from "@/components/hero/meme-fi-section";
import SeparatorPage from "@/components/hero/separator-section";
import TokenomicsPage from "@/components/hero/tokenomic-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <SeparatorPage />
      <AboutPage />
      <TokenomicsPage />
      <MemeFiPage />
      <FooterPage />
    </>
  );
}
