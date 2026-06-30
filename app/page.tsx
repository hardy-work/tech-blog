import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HomeBlogSection from "@/components/HomeBlogSection";
import HomeToolsSection from "@/components/HomeToolsSection";
import HomeAboutSection from "@/components/HomeAboutSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HomeBlogSection />
        <HomeToolsSection />
        <HomeAboutSection />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
