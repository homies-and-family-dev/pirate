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
import SeparatorCoffe from "@/components/ui/SeparatorCoffe";
import Invest from "./home/Invest";
import Header from "@/components/layout/header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Ubication />
      <ModelInvesment />
      <Invest />
      <SeparatorTop />
      <Financement />
      <Amenities />
      <Areas />
      <SeparatorCoffe />
      <Engagement />
      <Alliances />
      <Contact />
      <Separator />
      <Footer />
    </>
  );
}
