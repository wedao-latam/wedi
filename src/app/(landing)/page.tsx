

// import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
// import { InfoLanding } from "@/components/sections/info-landing";

import PreviewLanding from "@/components/sections/preview-landing";



export default function LandingPage(): JSX.Element {
  
  return (
    <div className="grid w-full grid-cols-1 items-center justify-center gap-16s md:gap-16">
      <HeroSection />

      {/* <TechSection /> */}

      {/* <InfoLanding data={infos[0]} reverse={true} /> */}

      {/* <Features /> */}

      {/* <BentoGrid /> */}

      {/* <FAQSection /> */}

      {/* <BenefitsSection /> */}

      {/* <Testimonials /> */}

      {/* <TestimonialsSection /> */}

      {/* <ContactSection />  Replace with Arcan AI agent embedeed using chainlit + langserve*/}

      <PreviewLanding />

    </div>
  )
}
