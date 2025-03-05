import Footer from "@/components/layout/Footer";
import Hero from "./home/Hero";
import Ubication from "./home/Ubication";
import Separator from "@/components/ui/Separator";
import SeparatorTop from "@/components/ui/SeparatorTop";
import ModelInvesment from "./home/ModelInvesment";
import Amenities from "./home/Amenities";
import Financement from "./home/Financement";
import Alliances from "./home/Alliance";
import Areas from "./home/Areas";
import Contact from "./home/Contact";
import Engagement from "./home/Engagement";

export default function Home() {
  return (
    <>
      <Hero />
      <SeparatorTop />
      <Ubication />
      <ModelInvesment />
      <Areas />
      <Engagement />
      <Amenities />
      <Financement />
      <Alliances />
      <Contact />
      <Separator />
      <Footer />
    </>
  );
}
