import Navbar from "@/components/Navbar";
import Carousel from "@/components/Hero";
import GenerateSection from "@/components/Generate";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <Carousel />
      <GenerateSection />
      <Gallery />
      <Footer />
    </main>
  );
}
