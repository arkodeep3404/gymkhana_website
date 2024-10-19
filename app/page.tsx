import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import FeaturedEvents from "@/components/about";
import Awards from "@/components/awards";

export default function Home() {
  return (
    <div className="p-10">
      <Navbar />
      <Hero />
      <FeaturedEvents />
      <Awards />
    </div>
  );
}
