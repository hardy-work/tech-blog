import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedPosts from "@/components/FeaturedPosts";
import ProductReviews from "@/components/ProductReviews";
import ComparisonTable from "@/components/ComparisonTable";
import RecommendedTools from "@/components/RecommendedTools";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProductReviews />
        <ComparisonTable />
        <FeaturedPosts />
        <RecommendedTools />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
