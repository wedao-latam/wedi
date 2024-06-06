import { NewsletterSignUpForm } from "@/components/forms/newsletter-signup-form";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

export default function WaitlistSection() {
    return (
        <section id="waitlist-section" aria-label="waitlist section" className="w-full py-8">
            <div className="container flex flex-col items-center justify-center gap-2">
                <div className="flex flex-col items-center gap-1 text-center">
                    <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in">
                        <Balancer>
                            Join{" "}
                            <span className="bg-gradient-to-r from-green-400 to-blue-800 bg-clip-text text-transparent">
                                Our Waitlist!
                            </span>
                        </Balancer>
                    </h2>
                    <h3 className="max-w-2xl text-lg sm:text-xl sm:leading-8 text-gray-400 animate-fade-in">
                        <Balancer>
                            Earn your spot on the future of smart payments with Wedi
                        </Balancer>
                    </h3>
                </div>
                <div className="w-full max-w-lg md:max-w-xl animate-fade-in bg-opacity-50 backdrop-blur-sm p-5 rounded-lg">
                    <NewsletterSignUpForm />
                </div>
                <div className="flex items-center gap-2 animate-fade-up font-urbanist text-4xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl flex items-center">
                    <Image src="/logo.png" alt="Wedi Logo" width={74} height={74} className="py-4"/>
                </div>
            </div>
        </section>
    )
}
