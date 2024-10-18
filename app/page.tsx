import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import FeaturedEvents
 from "@/components/about";
export default function Home() {
  return (
<div>
  <Navbar></Navbar>
  <Hero></Hero>
  <FeaturedEvents></FeaturedEvents>
</div>    
  );
}
