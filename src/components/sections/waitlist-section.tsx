
import { NewsletterSignUpForm } from "@/components/forms/newsletter-signup-form";
import Balancer from "react-wrap-balancer";

export default function WaitlistSection() {
    return (
        <section id="waitlist-section" aria-label="waitlist section" className="w-full">

            <div className="container flex max-w-6xl flex-col items-center justify-center gap-10 mt-2 w-full md:mt-2 py-10">

{/* 
                <div className="flex flex-row border-border text-muted-foreground text-sm border-2 rounded-full p-2">
                    🚀 We're launching a new payments plaform! Join us!
                </div> */}
                <div className="flex flex-col items-center gap-4 text-center">
                    <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        <Balancer>
                            Join{" "}
                            <span className="bg-gradient-to-r from-green-400 to-blue-800 bg-clip-text text-transparent">
                                Our Waitlist!
                            </span>
                        </Balancer>
                    </h2>
                    <h3 className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
                        <Balancer>
                            Earn your spot on the future of smart payments with Wedi
                        </Balancer>
                    </h3>
                </div>

                <div className="w-full max-w-lg md:max-w-xl">
                    <NewsletterSignUpForm />
                </div>
            </div>

        </section>
    )
}