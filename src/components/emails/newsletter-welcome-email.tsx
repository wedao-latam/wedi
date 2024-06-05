
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

import { env } from "@/env.mjs";

export function NewsletterWelcomeEmail(): JSX.Element {
  const previewText = "Hello there! You're now on the Wedi waitlist!"

  return (
    <Html>
      <Head>
        <title>Wedi Newsletter</title>
      </Head>
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto bg-zinc-50 font-sans">
          <Container className="mx-auto my-[40px] max-w-2xl rounded p-4">
            <Section className="mt-4">
              <Heading className="text-center text-2xl font-semibold text-zinc-950">
                Wedi
              </Heading>
              <Hr className="my-4" />
              <Heading className="text-center text-3xl font-semibold text-zinc-800">
                Welcome to Wedi
              </Heading>
              <Text className="mb-0 mt-6 text-center text-base">
                {`We're`} so glad {`you're`} here!
              </Text>
              <Text className="m-0 text-center text-base">
                {`We're`} excited to share
                our passion on revolutionary smart payments with you!.
              </Text>
            </Section>

            <Section className="mt-4 text-center text-zinc-400">
              <Text className="my-4">
                {`We're`} looking forward to seeing you around! If you have any
                questions, please {`don't`} hesitate to reach out to us at{" "}
                <Link
                  href={`mailto:${env.RESEND_EMAIL_FROM}`}
                  className="text-blue-500 underline"
                >
                  {env.RESEND_EMAIL_FROM}
                </Link>
              </Text>
              <Text className="mb-0 mt-4">
                @wedaolatam.com {new Date().getFullYear()}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
