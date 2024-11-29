import Navbar from "@/components/navbar";
import FeaturedEvents from "@/components/about";
import Featured from "@/components/featured";
import Awards from "@/components/awards";
import MediaCoverage from "@/components/news";
import Hero from "@/components/top";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero/>
      <div className="hidden md:block">
        <FeaturedEvents />
      </div>
      <div className="block md:hidden">
        <Featured />
      </div>
      <Awards />
      <MediaCoverage/>
      <Footer/>
    </div>
  );
}
