import Link from "next/link";
import * as React from "react";

// import { ModeToggle } from "@/components/layout/mode-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { footerLinks, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Balancer from "react-wrap-balancer";
import { NewsletterForm } from "../forms/newsletter-form";
// import { NewsletterSignUpForm } from "@/components/forms/newsletter-signup-form"
import { Icons } from "../shared/icons";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("border-t", className)}>
      <div className="container grid max-w-6xl grid-cols-1 gap-6 py-14 sm:grid-cols-2 md:grid-cols-5">
        {footerLinks.map((section) => (
          <div key={section.title}>
            <span className="text-sm font-medium text-foreground">
              {section.title}
            </span>
            <ul className="mt-4 list-inside space-y-3">
              {section.items?.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        
        <div className="flex flex-col  items-end md:col-span-2">
        <p className="text-sm font-medium tracking-wide lg:text-base 2xl:text-lg">
            <Balancer>
              Join our waitlist to get informed about the latest updates and news on our platform.
            </Balancer>
          </p>
          <NewsletterForm />
        </div>

        {/* <div className="hidden flex-col gap-4 sm:flex sm:w-1/3 xl:pl-24">
          <p className="text-sm font-medium leading-5 tracking-wide lg:text-base 2xl:text-lg">
            <Balancer>
              Join our waitlist to get informed about the latest updates and news on our platform.
            </Balancer>
          </p>

          <NewsletterSignUpForm />
        </div>*/}
      </div> 

      <div className="border-t py-4">
        <div className="container flex max-w-6xl items-center justify-between">
          {/* <span className="text-muted-foreground text-sm">
            Copyright &copy; 2024. All rights reserved.
          </span> */}
          <p className="text-left text-sm text-muted-foreground">
            Built in public by{" "}
            <Link
              href="https://hi.broomva.tech"
              target="https://github.com/broomva"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              broomva. 
            </Link>
            {" "} A {" "}
            <Link
              href="https://wedaolatam.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              WeDAO Latam 
            </Link>

            {" "} Fintech Cell, 2024. All rights reserved. 
            
            Made with love in 🇨🇴   {" "}
            <Link
              href="https://twitter.com/broomva_tech"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              @wedao-latam
            </Link>
            {" "}
            <Link
              href="https://twitter.com/broomva_tech"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              @broomva_tech
            </Link>
          </p>

          <div className="flex items-center gap-3">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              <Icons.gitHub className="size-5" />
            </Link>
            {/* <ModeToggle /> */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
