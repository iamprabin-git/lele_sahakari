
import AboutPreview from "@/components/AboutPreview";
import TestimonialsPreview from "@/components/TestimonialsPreview";
import Carousel from "@/components/Carasoul";
import ClientCarousel from "@/components/Remittance";
import ServicesCard from "@/components/ServiceCard";
import SponsorshipCard from "@/components/Sponsership";
import TabsComponent from "@/components/NoticeTab";



export default function Home() {
  return (
    <main>
      
      <Carousel />
      <ServicesCard />
      <AboutPreview />
      <ClientCarousel />
      <SponsorshipCard />
      <TabsComponent />
      <TestimonialsPreview />
    </main>
  );
}
