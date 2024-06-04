import { ContactSection } from "@/components/sections/contact-section"
import { HeroSection } from "@/components/sections/hero-section"
import { TechSection } from "@/components/sections/tech-section"

import PreviewLanding from "@/components/sections/preview-landing"

export default function LandingPage(): JSX.Element {
  return (
    <div className="grid w-full grid-cols-1 items-center justify-center gap-16 md:gap-32">
      <HeroSection />


            

      <TechSection />



      {/* <InfoLanding data={infos[0]} reverse={true} /> */}

      {/* <Features /> */}

      {/* <BentoGrid /> */}




      {/* <FAQSection /> */}

      {/* <BenefitsSection /> */}

      {/* <Testimonials /> */}


      {/* <TestimonialsSection /> */}

      <ContactSection />


      <PreviewLanding />




    </div>
  )
}
