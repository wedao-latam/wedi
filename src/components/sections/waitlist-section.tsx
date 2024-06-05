
import { NewsletterSignUpForm } from "@/components/forms/newsletter-signup-form";

export default function WaitlistSection() {
    return (
        <section id="faq-section" aria-label="faq section" className="w-full">

            <div className="flex flex-row border-border text-muted-foreground text-sm border-2 rounded-full p-2">
                🚀 We're launching a new payments plaform! Join us!
            </div>
            <div className="w-full max-w-lg md:max-w-xl">
                <NewsletterSignUpForm />
            </div>

        </section>
    )
}