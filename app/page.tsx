import Navbar from "@/components/navbar";
import FeaturedEvents from "@/components/about";
import Awards from "@/components/awards";
import Hero from "@/components/top";

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
