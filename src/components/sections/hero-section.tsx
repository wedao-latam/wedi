import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, getGitHubStars } from "@/lib/utils";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

import { FlipWords } from "../ui/flip-words";

import WaitlistSection from "@/components/sections/waitlist-section";

// import { NewsletterSignUpForm } from "@/components/forms/newsletter-signup-form";

// import { EvervaultCard } from "@/components/ui/evervault-card";


// export function EvervaultCardDemo() {
//   return (
//     <div className="flex flex-col items-center mx-auto p-10 relative h-[20rem]">
//       <EvervaultCard text="Save and Pay with USDC Spend local like a  Wedi" />
//     </div>
//   );
// }





export function HeroSection(): JSX.Element {
  const gitHubStars = getGitHubStars()

  const words = ["USDC", "EURC", "ETH", "COPW", "BTC"];

  return (
    <section
      id="newsletter-section"
      aria-label="newsletter section"
      className="w-full  py-8"
    >

      <div className="container flex flex-col items-center gap-4 text-center">

      <div className="flex flex-row border-border text-muted-foreground text-sm border-2 rounded-full p-3 bg-blue-300/20">
					🚀 We're launching a new payments plaform! Join us!
				</div>

      {/* <EvervaultCardDemo /> */}

      <h1 className="animate-fade-up font-urbanist text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          <Balancer>
          Save and Pay in {" "}
            <FlipWords words={words} /> 
            <br />
            Spend as a local with {" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-800 bg-clip-text font-extrabold text-transparent">
              Wedi 🔥
            </span>
          </Balancer>
        </h1>
        </div>

        <WaitlistSection />

        <div className="z-10 flex animate-fade-up flex-wrap justify-center gap-6 sm:flex-row">

        <div className="container flex max-w-6xl flex-row flex-wrap items-center justify-center gap-4 mt-2 w-full md:mt-1 py-4">

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
                  className="rounded-md px-4 py-2 text-sm transition-all duration-1000 ease-out hover:opacity-60 md:text-base md:hover:-translate-y-2"
                >
                  <Icons.gitHub className="mr-2 size-6" aria-hidden="true" />
                  {gitHubStars} ⭐️ Star us on GitHub!
                </Badge>
                <span className="sr-only">GitHub</span>
              </Link>
            ) : <Link
            href={siteConfig.links.github}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "transition-all duration-1000 ease-out md:hover:-translate-y-2"
            )}
          >
            ⭐️ Star us on GitHub!
          </Link>
          }

          <Link
            href="/waitlist"
            className={cn(
              buttonVariants({ size: "lg" }),
              "transition-all duration-1000 ease-out md:hover:-translate-y-2"
            )}
          >
            Join the closed beta waitlist
          </Link>

          </div>
          

          
        <h3 className="max-w-2xl animate-fade-up text-muted-foreground sm:text-xl sm:leading-8">
          <Balancer>
            Watch the developments of Wedi on {" "}
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-foreground underline-offset-4 transition-all hover:underline"
            > X </Link>
            {" "} and {" "}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-foreground underline-offset-4 transition-all hover:underline"
            >
              Github
            </Link>
          </Balancer>
            {" "}!  🐓  🚀  ☄️
        </h3>

          
          
        </div>

        
    </section>
  )
}
