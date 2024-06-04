"use server"

import { prisma } from "@/config/db"
import { resend } from "@/config/email"
import { env } from "@/env.mjs"
import {
  checkIfSubscribedToNewsletterSchema,
  newsletterSignUpSchema,
  type CheckIfSubscribedToNewsletterInput,
  type NewsletterSignUpFormInput,
} from "@/validations/newsletter"

import { NewsletterWelcomeEmail } from "@/components/emails/newsletter-welcome-email"

export async function checkIfSubscribedToNewsletter(
  rawInput: CheckIfSubscribedToNewsletterInput
): Promise<boolean> {
  try {
    const validatedInput =
      checkIfSubscribedToNewsletterSchema.safeParse(rawInput)
    if (!validatedInput.success) return false

    const subscribed = await prisma.newsletterSubscriber.findUnique({
      where: {
        email: validatedInput.data.email,
      },
    })
    return subscribed ? true : false
  } catch (error) {
    console.error(error)
    throw new Error("Error checking if already subscribed to Waitlist")
  }
}

export async function subscribeToNewsletter(
  rawInput: NewsletterSignUpFormInput
): Promise<"exists" | "error" | "success"> {
  try {
    const validatedInput = newsletterSignUpSchema.safeParse(rawInput)
    if (!validatedInput.success) return "error"

    const alreadySubscribed = await checkIfSubscribedToNewsletter({
      email: validatedInput.data.email,
    })
    if (alreadySubscribed) return "exists"

    const newSubscriber = await prisma.newsletterSubscriber.create({
      data: { email: validatedInput.data.email },
    })

    const emailSent = await resend.emails.send({
      from: env.RESEND_EMAIL_FROM,
      to: validatedInput.data.email,
      subject: "Welcome to our Waitlist!",
      react: NewsletterWelcomeEmail(),
    })

    return newSubscriber && emailSent ? "success" : "error"
  } catch (error) {
    console.error(error)
    throw new Error("Error subscribing to our Waitlist")
  }
}
