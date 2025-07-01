import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import TestimonialsPreview from "@/components/TestimonialsPreview";
import Carousel from "@/components/Carasoul";
import ClientCarousel from "@/components/Remittance";
import ServicesCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <main>
      <Carousel />
      <ClientCarousel />
      <ServicesCard />
      <AboutPreview />

      <TestimonialsPreview />
    </main>
  );
}
