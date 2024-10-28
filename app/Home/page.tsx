import Navbar from "@/components/navbar";
import FeaturedEvents from "@/components/about";
import Awards from "@/components/awards";
import MediaCoverage from "@/components/news";
import Hero from "@/components/top";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <div className="p-10">
      <Navbar />
      <Hero/>
      <FeaturedEvents />
      <Awards />
      <MediaCoverage/>
      <Footer/>
    </div>
  );
}
