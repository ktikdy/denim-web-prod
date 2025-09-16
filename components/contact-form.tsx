"use client"

import { useActionState, useEffect, useRef } from "react"
import { sendEmail, type State } from "@/lib/actions"
import { Button } from "@/components/ui/button"
import { LoaderCircle } from "lucide-react"

interface ContactFormProps {
  pageSource: string
  buttonText: string
}

export function ContactForm({ pageSource, buttonText }: ContactFormProps) {
  const [state, formAction, isPending] = useActionState<State, FormData>(sendEmail, null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state?.status === "success") {
      formRef.current?.reset()
    }
  }, [state])

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-2xl">
      <form ref={formRef} action={formAction} className="space-y-6">
        <input type="hidden" name="pageSource" value={pageSource} />
        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-denim-light-blue focus:border-transparent transition-all duration-300"
              placeholder="Enter your email"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-denim-light-blue focus:border-transparent transition-all duration-300"
                placeholder="Enter your first name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-denim-light-blue focus:border-transparent transition-all duration-300"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
                Job Title *
              </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                required
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-denim-light-blue focus:border-transparent transition-all duration-300"
                placeholder="Enter your job title"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Company *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-denim-light-blue focus:border-transparent transition-all duration-300"
                placeholder="Enter your company name"
              />
            </div>
          </div>
        </div>

        {/* Honeypot field */}
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="hp-website" className="text-gray-900">
            Website
          </label>
          <input
            type="text"
            id="hp-website"
            name="hp-website"
            tabIndex={-1}
            autoComplete="off"
            className="text-gray-900 bg-white"
          />
        </div>

        <Button
          type="submit"
          size="sm" // reduced from default to sm for smaller size
          className="bg-[#0A2450] text-white hover:bg-[#0A2450]/90 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group w-auto"
          disabled={isPending}
        >
          {isPending ? (
            <>
              <LoaderCircle className="w-5 h-5 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            buttonText
          )}
        </Button>
        {state?.message && (
          <p className={`text-sm text-center ${state.status === "success" ? "text-green-600" : "text-red-600"}`}>
            {state.message}
          </p>
        )}
      </form>
    </div>
  )
}
