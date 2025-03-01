import Footer from "@/components/layout/Footer";
import Hero from "./home/Hero";
import Ubication from "./home/Ubication";
import Separator from "@/components/ui/Separator";
import SeparatorTop from "@/components/ui/SeparatorTop";

export default function Home() {
  return (
    <>
      <Hero />
      <SeparatorTop />
      <Ubication />
      <Separator />
      <Footer />
    </>
  );
}
