import { type FrequentlyAskedQuestion } from "@/types"

import { siteConfig } from "@/config/site"

export const frequentlyAskedQuestions: FrequentlyAskedQuestion[] = [
  {
    question: `What is ${siteConfig.name}?`,
    answer: `${siteConfig.name} is a revolutionary solution for savings and spending in multiple currencies. It addresses the devaluation of local currencies and the need for a more stable and secure way to save and spend money. ${siteConfig.name} is a digital platform for payments and transaction processing, using stablecoins like USDC to purchase in any place while paying in local currency, reducing fees and speeding up the process.`,
  },
  {
    question: `What is included?`,
    answer: `${siteConfig.name} includes a digital wallet that allows users to save and spend in multiple currencies using Circle API. The platform leverages thirdweb Account Abstractions for easy onboarding and is built around an AI assistant that personalizes interactions, data, and recommendations for each user, providing a unique and efficient way to manage their finances.`,
  },
  {
    question: `Why would I want to use ${siteConfig.name}?`,
    answer: `With ${siteConfig.name}, you can protect your savings from local currency devaluation by using stablecoins. The platform offers a seamless and efficient way to make payments and transactions in multiple currencies, with reduced fees and faster processing times. The personalized AI assistant enhances your financial management experience, making it easier and more efficient.`,
  },
  {
    question: `I am confused with pricing`,
    answer: `Using ${siteConfig.name} to manage your finances and make transactions is free. However, there might be minimal fees associated with currency conversions and transactions, depending on the specifics of your usage and the stablecoins you choose.`,
  },
  {
    question: `Is it easy to use? How do I get started?`,
    answer: `${siteConfig.name} is designed to be user-friendly. You can get started by signing up on the platform, which will guide you through setting up your digital wallet and making your first transactions. The onboarding process is streamlined with thirdweb Account Abstractions to ensure a smooth experience.`,
  },
  {
    question: `Can I get help and support?`,
    answer: `Yes, you can get help and support. Feel free to contact our support team through the platform for any questions or assistance you might need. We are committed to providing timely and helpful support to all our users.`,
  },
  {
    question: `Is the product actively maintained?`,
    answer: `Yes, ${siteConfig.name} is actively maintained. We are continuously working on adding new features, improving existing ones, and enhancing the overall user experience. Stay tuned for updates and new releases, and consider signing up for our newsletter to stay informed.`,
  },
]
