import { Layout } from "@/components/layout"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/container"

export default function SecurityPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <Container className="max-w-4xl">
          <div className="py-16">
            <div className="text-center mb-12">
              <h3 className="mb-6 text-denim-dark-blue text-sm font-medium uppercase tracking-wider border-b-2 border-denim-light-blue pb-1 inline-block">
                  Security
                </h3>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                Security & Support
              </h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                If you have concerns around security, confidentiality, integrity, availability failures, or incidents,
                please contact us at security@denimhealth.com.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}
