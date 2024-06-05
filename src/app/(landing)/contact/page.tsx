

// import { PricingCards } from "@/components/pricing-cards";
import { constructMetadata } from "@/lib/utils";

import { ContactSection } from "@/components/sections/contact-section";

export const metadata = constructMetadata({
  title: "Contact – Wedi",
  description: "Get in touch with the Wedi team. We're here to help with any questions you have about our payments platform",
});

export default async function ContactPage() {

  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">
      <ContactSection />
    </div>
  );
}