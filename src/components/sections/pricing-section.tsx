"use client"

import * as React from "react"


import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { useSigninModal } from "@/hooks/use-signin-modal"
import { cn } from "@/lib/utils"
import { type UserSubscriptionPlan } from "@/types"

import Link from "next/link"


import { BillingFormButton } from "@/components/forms/billing-form-button"
import { HeaderSection } from "@/components/shared/header-section"

import { buttonVariants } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { pricingData } from "@/config/subscriptions"

import MaxWidthWrapper from "@/components/shared/max-width-wrapper"
import { type SubscriptionPlan } from "@/types/index"


import { useState } from "react"


interface PricingCardsProps {
  userId?: string;
  subscriptionPlan?: UserSubscriptionPlan;
}

export default function PricingSection({ userId, subscriptionPlan }: PricingCardsProps) {
  const isYearlyDefault =
    !subscriptionPlan?.stripeCustomerId || subscriptionPlan.interval === "year"
      ? true
      : false;
  const [isYearly, setIsYearly] = useState<boolean>(!!isYearlyDefault);
  const signInModal = useSigninModal();

  const toggleBilling = () => {
    setIsYearly(!isYearly);
  };

  const [yearlyBilling, setYearlyBilling] = React.useState<boolean>(false)

  // pricing card comprehension
  const PricingCard = ({ offer }: { offer: SubscriptionPlan }) => {
    return (
      <div
        className={cn(
          "relative flex flex-col overflow-hidden rounded-3xl border shadow-sm",
          offer.title.toLocaleLowerCase() === "pro"
            ? "-m-0.5 border-2 border-purple-400"
            : "",
        )}
        key={offer.title}
      >
        <div className="min-h-[150px] items-start space-y-4 bg-muted/50 p-6">
          <p className="flex font-urban text-sm font-bold uppercase tracking-wider text-muted-foreground">
            {offer.title}
          </p>

          <div className="flex flex-row">
            <div className="flex items-end">
              <div className="flex text-left text-3xl font-semibold leading-6">
                {isYearly && offer.prices.monthly > 0 ? (
                  <>
                    <span className="mr-2 text-muted-foreground/80 line-through">
                      ${offer.prices.monthly}
                    </span>
                    <span>${offer.prices.yearly / 12}</span>
                  </>
                ) : (
                  `$${offer.prices.monthly}`
                )}
              </div>
              <div className="-mb-1 ml-2 text-left text-sm font-medium text-muted-foreground">
                <div>/month</div>
              </div>
            </div>
          </div>
          {offer.prices.monthly > 0 ? (
            <div className="text-left text-sm text-muted-foreground">
              {isYearly
                ? `$${offer.prices.yearly} will be charged when annual`
                : "when charged monthly"}
            </div>
          ) : null}
        </div>

        <div className="flex h-full flex-col justify-between gap-16 p-6">
          <ul className="space-y-2 text-left text-sm font-medium leading-normal">
            {offer.benefits.map((feature) => (
              <li className="flex items-start gap-x-3" key={feature}>
                <Icons.check className="size-5 shrink-0 text-purple-500" />
                <p>{feature}</p>
              </li>
            ))}

            {offer.limitations.length > 0 &&
              offer.limitations.map((feature) => (
                <li
                  className="flex items-start text-muted-foreground"
                  key={feature}
                >
                  <Icons.close className="mr-3 size-5 shrink-0" />
                  <p>{feature}</p>
                </li>
              ))}
          </ul>

          {userId && subscriptionPlan ? (
            offer.title === "Starter" ? (
              <Link
                href="/dashboard"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    // rounded: "full",
                  }),
                  "w-full",
                )}
              >
                Go to dashboard
              </Link>
            ) : (
              <BillingFormButton
                year={isYearly}
                offer={offer}
                subscriptionPlan={subscriptionPlan}
              />
            )
          ) : (
            <Button
              variant={
                offer.title.toLocaleLowerCase() === "pro"
                  ? "default"
                  : "outline"
              }
              // rounded="full"
              onClick={signInModal.onOpen}
            >
              Sign in
            </Button>
          )}
        </div>
      </div>
    );
  };



  return (
    <MaxWidthWrapper>
      {/* <section
        id="pricing-section"
        aria-label="pricing section"
        className="w-full"
      >
        <div className="container grid max-w-6xl gap-4 md:gap-8">
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <Balancer>
                It&apos;s{" "}
                <span className="bg-gradient-to-r from-pink-600 to-purple-400 bg-clip-text text-transparent">
                  Free Forever!
                </span>
              </Balancer>
            </h2>
            <h3 className="max-w-2xl text-muted-foreground sm:text-xl sm:leading-8">
              <Balancer>
                {siteConfig.name} is completely free and open source. The pricing
                section is there to serve as an example of how you could set it up
                for your own SaaS product. We have no plans and no intentions to
                make this a paid product.
              </Balancer>
            </h3>
          </div>
          <div className="my-4 flex items-center justify-center gap-4 text-lg">
          <span>Monthly</span>
          <Switch
            checked={yearlyBilling}
            onCheckedChange={() => setYearlyBilling((prev) => !prev)}
            role="switch"
            aria-label="switch-year"
          />
          <span>Annual</span>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:gap-6">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "flex flex-col transition-all duration-1000 ease-out hover:opacity-80 md:hover:-translate-y-3",
                plan.name === "Standard" &&
                  "border-pink-600/60 bg-gradient-to-r from-pink-600/10 to-purple-400/10"
              )}
            >
              <CardHeader className="overflow-hidden rounded-t-lg bg-gradient-to-r from-pink-600/10 to-purple-400/10">
                <CardTitle className="font-urbanist text-2xl tracking-wide">
                  <Balancer>{plan.name}</Balancer>
                </CardTitle>

                <CardDescription className="text-sm">
                  <Balancer>{plan.description}</Balancer>
                </CardDescription>

                <div className="flex flex-col gap-4 py-2">
                  <div className="flex gap-2 text-4xl font-semibold md:gap-1 md:text-2xl lg:gap-2 lg:text-4xl">
                    <span className="flex items-center justify-center text-3xl font-normal md:text-2xl lg:text-3xl">
                      $
                    </span>
                    <span
                      className={cn(
                        yearlyBilling && "text-muted-foreground/60 line-through"
                      )}
                    >
                      {plan.prices.monthly}
                    </span>

                    {yearlyBilling && <span>{plan.prices.yearly / 12}</span>}

                    <span className="flex items-end text-lg font-semibold md:items-center md:text-base lg:items-end lg:text-lg">
                      / month
                    </span>
                  </div>

                  {yearlyBilling && plan.prices.monthly > 0 && (
                    <p className="text-xs font-bold text-muted-foreground">
                      <Balancer>
                        You will be charged{" "}
                        <span className="text-foreground">
                          ${plan.prices.yearly}
                        </span>{" "}
                        once a year, starting today
                      </Balancer>
                    </p>
                  )}
                </div>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col justify-between text-sm lg:text-base">
                <div className="grid gap-3 py-8">
                  <ul className="flex flex-col gap-3">
                    {plan.features.map((item) => (
                      <li className="flex items-center gap-2" key={item}>
                        <Icons.check className="size-4" />
                        <Balancer>{item}</Balancer>
                      </li>
                    ))}
                  </ul>

                  <ul className="flex flex-col gap-2">
                    {plan.limitations.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-muted-foreground"
                      >
                        <Icons.close className="size-4" />
                        <Balancer>{item}</Balancer>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  variant="outline"
                  className="h-10 w-full border bg-gradient-to-br from-pink-600/20 to-purple-400/20 font-bold tracking-wide"
                >
                  Purchase
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section> */}

      <section className="flex flex-col items-center text-center">
        <HeaderSection label="Pricing" title="Start at full speed !" />

        <div className="mb-4 mt-10 flex items-center gap-5">
          <ToggleGroup
            type="single"
            size="sm"
            defaultValue={isYearly ? "yearly" : "monthly"}
            onValueChange={toggleBilling}
            aria-label="toggle-year"
            className="h-9 overflow-hidden rounded-full border bg-background p-1 *:h-7 *:text-muted-foreground"
          >
            <ToggleGroupItem
              value="yearly"
              className="rounded-full px-5 data-[state=on]:!bg-primary data-[state=on]:!text-primary-foreground"
              aria-label="Toggle yearly billing"
            >
              Yearly (-20%)
            </ToggleGroupItem>
            <ToggleGroupItem
              value="monthly"
              className="rounded-full px-5 data-[state=on]:!bg-primary data-[state=on]:!text-primary-foreground"
              aria-label="Toggle monthly billing"
            >
              Monthly
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="grid gap-5 bg-inherit py-5 lg:grid-cols-3">
          {pricingData.map((offer) => (
            <PricingCard offer={offer} key={offer.title} />
          ))}
        </div>

        <p className="mt-3 text-balance text-center text-base text-muted-foreground">
          Email{" "}
          <a
            className="font-medium text-primary hover:underline"
            href="mailto:support@gowedi.com"
          >
            support@gowedi.com
          </a>{" "}
          for to contact our support team.
          <br />
          <strong>
            You can test the subscriptions and won&apos;t be charged.
          </strong>
        </p>
      </section>
    </MaxWidthWrapper>
  );
};