// import WelcomeEmail from "@/emails/welcome";
// import { resend } from "@/lib/resend";

// interface sendWelcomeEmailParams {
//   name: string | null | undefined,
//   email: string | null | undefined
// }

// export async function sendWelcomeEmail(params: sendWelcomeEmailParams) {
//   const { name, email } = params;

//   try {
//     await resend.emails.send({
//       from: 'Acme <hi@gowedi.com>',
//       to: email as string,
//       subject: `Welcome to Wedi You're one step closer to have smart payment options!`,
//       react: WelcomeEmail({ name }),
//     })
//   } catch (error) {
//       throw new Error('Unable to send email');
//   }
// }
