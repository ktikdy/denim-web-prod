import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/container"
import { Layout } from "@/components/layout"
import { ContactForm } from "@/components/contact-form"

export default function ScheduleDemoPage() {
  return (
    <Layout currentPage="schedule-demo">
      <main className="flex-1">
        {/* Form Section */}
        <section id="form" className="py-20 bg-white relative overflow-hidden">
          <Container className="max-w-6xl">
            <div className="grid lg:grid-cols-5 gap-16 items-start">
              {/* Left side - Text content */}
              <div className="lg:col-span-2">
                <Badge variant="outline" className="mb-6 border-denim-light-blue text-gray-600">
                  Get Started
                </Badge>
                <h2 className="text-4xl font-heading text-gray-900 mb-8 leading-tight">Talk to Denim</h2>
                <div className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed font-medium">
                    Denim Health is purpose-built for healthcare, with deep experience supporting the complex needs of
                    hospitals and health systems.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Connect with our team to explore Denim's solutions, see a live demo, and discuss how we can help
                    your organization improve efficiency and impact.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed font-medium">
                    Fill out the form to start the conversation.
                  </p>
                </div>
              </div>

              {/* Right side - Form */}
              <div className="lg:col-span-3 bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-2xl">
                <ContactForm pageSource="Schedule Demo Page" buttonText="Submit" />
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 bg-white relative overflow-hidden">
          {/* Blue gradient line separator */}
          <div
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 h-32 w-[110vw] bg-gradient-to-b from-[#00AEEF] to-white opacity-20 z-0"
            aria-hidden="true"
          />
          <Container className="max-w-6xl relative z-10">
            <div className="mx-auto flex flex-col lg:flex-row lg:justify-center lg:items-center gap-8 md:gap-10 lg:gap-12">
              {/* Map LEFT on lg+ */}
              <div className="order-2 lg:order-1 w-full max-w-[40rem] text-left">
                <h3 className="font-heading text-gray-900 text-lg mb-4">Our Office</h3>
                <div className="w-full rounded-lg overflow-hidden shadow-lg border border-gray-200 aspect-[16/10]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.8947!2d-97.7431!3d30.3916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cb4e7b8d8b8d%3A0x1234567890abcdef!2s11801%20Domain%20Blvd%2C%20Austin%2C%20TX%2078758!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Denim Health Office Location - 11801 Domain Blvd, Austin, TX 78758"
                  />
                </div>
              </div>

              {/* Text RIGHT on lg+ */}
              <div className="order-1 lg:order-2 w-full max-w-[28rem] self-center text-left space-y-8">
                <div>
                  <h4 className="text-lg font-heading text-gray-900 mb-2">Sales</h4>
                  <a href="mailto:sales@denimhealth.com" className="text-denim-light-blue hover:text-denim-dark-blue transition-colors">
                    sales@denimhealth.com
                  </a>
                </div>

                <div>
                  <h4 className="text-lg font-heading text-gray-900 mb-2">Media Inquiries</h4>
                  <a href="mailto:media@denimhealth.com" className="text-denim-light-blue hover:text-denim-dark-blue transition-colors">
                    media@denimhealth.com
                  </a>
                </div>

                <div>
                  <h4 className="text-lg font-heading text-gray-900 mb-2">People Team</h4>
                  <a href="mailto:recruiting@denimhealth.com" className="text-denim-light-blue hover:text-denim-dark-blue transition-colors">
                    recruiting@denimhealth.com
                  </a>
                </div>
              </div>
            </div>
          </Container>


        </section>
      </main>
    </Layout>
  )
}
