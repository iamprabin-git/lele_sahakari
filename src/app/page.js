import Hero from '@/components/Hero'
import AboutPreview from '@/components/AboutPreview'
import TestimonialsPreview from '@/components/TestimonialsPreview'
import Carousel from '@/components/Carasoul'



export default function Home() {
  return (
    <main>
      <Carousel />
      <Hero />
      <AboutPreview />
   
      <TestimonialsPreview />
    </main>
  )
}