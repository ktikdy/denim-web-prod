import { Body, Container, Head, Heading, Html, Preview, Text, Row, Column } from "@react-email/components"

interface ContactFormEmailProps {
  firstName: string
  lastName: string
  email: string
  jobTitle: string
  company: string
  pageSource: string
}

export function ContactFormEmail({ firstName, lastName, email, jobTitle, company, pageSource }: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Form Submission from {pageSource}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>New Form Submission</Heading>
          <Text style={subheading}>Received from the {pageSource} page.</Text>

          <Row style={row}>
            <Column style={label}>First Name</Column>
            <Column style={value}>{firstName}</Column>
          </Row>
          <Row style={row}>
            <Column style={label}>Last Name</Column>
            <Column style={value}>{lastName}</Column>
          </Row>
          <Row style={row}>
            <Column style={label}>Email</Column>
            <Column style={value}>{email}</Column>
          </Row>
          <Row style={row}>
            <Column style={label}>Job Title</Column>
            <Column style={value}>{jobTitle}</Column>
          </Row>
          <Row style={row}>
            <Column style={label}>Company</Column>
            <Column style={value}>{company}</Column>
          </Row>
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

const heading = {
  fontSize: "24px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#0d3b69",
  textAlign: "center" as const,
  borderBottom: "1px solid #e0e0e0",
  paddingBottom: "20px",
}

const subheading = {
  fontSize: "14px",
  color: "#555",
  textAlign: "center" as const,
  padding: "0 20px",
  marginTop: "-10px",
}

const row = {
  padding: "8px 20px",
  borderBottom: "1px solid #f0f0f0",
}

const label = {
  fontSize: "16px",
  color: "#333",
  fontWeight: "600",
  width: "150px",
}

const value = {
  fontSize: "16px",
  color: "#555",
}
