// import MagicLinkEmail from "@/emails/magiclink";
// import { resend } from '@/lib/resend';
// import { type EmailConfig } from '@auth/core/providers/email';
// import { type Theme } from '@auth/core/types';

// export async function sendVerificationRequest(params: { identifier: string; url: string; expires: Date; provider: EmailConfig; token: string; theme: Theme; request: Request; }) {
//   const { identifier, url } = params;
//   const { host } = new URL(url);

//   console.log('sendVerificationRequest', { identifier, url, host });

//   try {
//     await resend.emails.send({
//       from: 'Wedi <hi@gowedi.com>',
//       to: identifier,
//       subject: `Sign in to ${host}`,
//       text: text({ url, host}),
//       react: MagicLinkEmail({ url, host}),
//     })
//   } catch (error) {
//       console.log('sendVerificationRequest error', error);
//       throw new Error('Unable to send email');
//   }
//   console.log('Email sent');
// }

// function text({ url, host }: { url: string; host: string }) {
//   return `Use the link below to sign in to your account on ${host}: ${url}`;
// }