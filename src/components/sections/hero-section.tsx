import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, getGitHubStars } from "@/lib/utils";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

import { NewsletterSignUpForm } from "@/components/forms/newsletter-signup-form";


export function HeroSection(): JSX.Element {
  const gitHubStars = getGitHubStars()

  return (
    <section
      id="newsletter-section"
      aria-label="newsletter section"
      className="w-full bg-background py-16"
    >

      <div className="container flex flex-col items-center gap-6 text-center">

      <div className="flex flex-row border-border text-muted-foreground text-sm border-2 rounded-full p-2">
					🚀 We're launching a new payments plaform! Join us!
				</div>

      
        
      <h1 className="animate-fade-up font-urbanist text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          <Balancer>
            Save and Pay with USDC Spend like local with{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-800 bg-clip-text font-extrabold text-transparent">
              Wedi
            </span>
          </Balancer>
        </h1>
        </div>
        
      <div className="container flex max-w-6xl flex-col items-center justify-center gap-8 mt-10 w-full md:mt-22 py-12">

      

        <div className="flex flex-col items-center gap-6 text-center">
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


        <div className="container flex flex-col items-center gap-6 text-center">

        <h3 className="max-w-2xl animate-fade-up text-muted-foreground sm:text-xl sm:leading-8">
          <Balancer>
            See the developments of Wedi. Start your journey with us!
          </Balancer>
        </h3>

        <div className="z-10 flex animate-fade-up flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/signin"
            className={cn(
              buttonVariants({ size: "lg" }),
              "transition-all duration-1000 ease-out md:hover:-translate-y-2"
            )}
          >
            Get Started
          </Link>

          <Link
            href={siteConfig.links.github}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "transition-all duration-1000 ease-out md:hover:-translate-y-2"
            )}
          >
            See on GitHub
          </Link>
          </div>
        </div>

        {gitHubStars ? (
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="z-10"
          >
            <Badge
              variant="outline"
              aria-hidden="true"
              className="rounded-md px-3.5 py-0.5 text-sm transition-all duration-1000 ease-out hover:opacity-80 md:text-base md:hover:-translate-y-2"
            >
              <Icons.gitHub className="mr-2 size-3.5" aria-hidden="true" />
              {gitHubStars} Stars on GitHub
            </Badge>
            <span className="sr-only">GitHub</span>
          </Link>
        ) : null}
      </div>
    </section>
  )
}
