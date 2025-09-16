import { Body, Container, Head, Heading, Html, Img, Preview, Text, Section, Link, Hr } from "@react-email/components"

interface ConfirmationEmailProps {
  firstName: string
}

export function ConfirmationEmail({ firstName }: ConfirmationEmailProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://your-actual-domain.com"
  const logoUrl = `${baseUrl}/images/denim-health-logo.png`

  return (
    <Html>
      <Head />
      <Preview>Thank you for contacting Denim Health</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* <Section style={logoContainer}>
            <Img src={logoUrl} width="180" height="40" alt="Denim Health Logo" style={logo} />
          </Section> */} 

          <Heading style={heading}>Thank you for your message, {firstName}.</Heading>
          <Text style={text}>We've received your inquiry and appreciate you reaching out to Denim Health.</Text>
          <Text style={text}>Our team will review your message and will get back to you shortly.</Text>

          <Text style={text}>
            Best,
            <br />
            The Denim Health Team
          </Text>

          {/* Website link below the sign-off */}
          <Section style={footerSection}>
            <Hr style={hr} />
            <Text style={footerText}>
              Visit our website:{" "}
              <Link href={baseUrl} style={link}>
                denimhealth.com
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: "#f4f7f9",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
}

const logoContainer = {
  padding: "20px 0",
  textAlign: "center" as const,
  borderBottom: "1px solid #e0e0e0",
}

const logo = { margin: "0 auto" }

const heading = {
  fontSize: "24px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#0d3b69",
  padding: "0 40px",
  textAlign: "center" as const,
  marginTop: "30px",
}

const text = {
  fontSize: "16px",
  lineHeight: "1.5",
  color: "#555",
  padding: "0 40px",
}

const footerSection = { marginTop: "8px" }
const hr = { borderColor: "#e0e0e0", margin: "20px 40px" }
const footerText = {
  ...text,
  padding: "0 40px",
  textAlign: "center" as const,
  fontSize: "13px",
  color: "#6b7280",
}
const link = { color: "#06aeef", textDecoration: "underline" }
