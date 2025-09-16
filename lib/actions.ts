"use server"
import { Resend } from "resend"
import { ContactFormEmail } from "@/components/emails/contact-form-email"
import { ConfirmationEmail } from "@/components/emails/confirmation-email"
import { format } from "date-fns"

const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null
const toEmail = process.env.EMAIL_TO || "kkadyan@denimhealth.com"
const fromEmail = process.env.EMAIL_FROM || "Website Form <form@denimhealthwebsite.com>"

export type State = {
  status: "success" | "error"
  message: string
} | null

export async function sendEmail(prevState: State, formData: FormData): Promise<State> {
  if (!resend) {
    return {
      status: "error",
      message: "Email service is currently unavailable. Please try again later.",
    }
  }

  // Honeypot check
  if (formData.get("hp-website")) {
    return { status: "error", message: "Bot submission detected." }
  }

  const data = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    jobTitle: formData.get("jobTitle") as string,
    company: formData.get("company") as string,
    pageSource: formData.get("pageSource") as string,
  }

  const timestamp = format(new Date(), "yyyy-MM-dd HH:mm:ss") // Format: YYYY-MM-DD HH:MM:SS

  try {
    await resend.emails.send({
      from: fromEmail,
      to: ["kkadyan@denimhealth.com", "shaithcox@denimhealth.com", "msanders@denimhealth.com", "geagles@denimhealth.com"],
      subject: `New Form Submission from ${data.pageSource} - ${timestamp}`,
      react: ContactFormEmail(data),
    })

    // Send confirmation email to the user
    await resend.emails.send({
      from: fromEmail,
      to: data.email,
      subject: "Thank you for contacting Denim Health",
      react: ConfirmationEmail({ firstName: data.firstName }),
    })

    return {
      status: "success",
      message: "Thank you! Your message has been sent.",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      status: "error",
      message: "Something went wrong. Please try again.",
    }
  }
}
