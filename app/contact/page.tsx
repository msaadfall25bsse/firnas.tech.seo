import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessageSquare, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Contact Us | Start a Project or Inquire",
  description:
    "Get in touch with Firnas.tech for custom software development, digital marketing, and graphic design projects. Reach out via contact form or direct WhatsApp.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Contact Us" }]} />

        {/* Hero Header */}
        <div className="py-12 md:py-16 text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#F07825] bg-orange-100/70 rounded-full">
            Let&apos;s Connect
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-tight mt-4 mb-6">
            Start a Conversation with Our Team
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Have a project in mind, need technical guidance, or looking to scale your organic presence? We would love to hear from you.
          </p>
        </div>

        {/* Form and Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 items-start">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Information & Alternative Channels */}
          <div className="lg:col-span-5 space-y-8">
            {/* WhatsApp Direct Action Card */}
            <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-7 shadow-xs">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 text-lg">Instant Chat</h3>
                  <p className="text-xs text-neutral-600">Quick inquiries & consultations</p>
                </div>
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed mb-6">
                Prefer direct messaging? Connect directly with our team on WhatsApp for prompt responses to initial inquiries.
              </p>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-5 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-colors shadow-xs"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Direct Contact Info */}
            <div className="bg-neutral-50 rounded-2xl border border-neutral-200 p-7 space-y-6">
              <h3 className="text-lg font-bold text-neutral-900">
                Official Agency Information
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-[#F07825] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-neutral-800">Email Inquiries</div>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-neutral-600 hover:text-[#F07825] transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-[#F07825] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-neutral-800">Telephone / WhatsApp</div>
                    <span className="text-neutral-600">{siteConfig.phone}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-[#F07825] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-neutral-800">Operational Hours</div>
                    <span className="text-neutral-600">Monday &ndash; Saturday, 9:00 AM &ndash; 7:00 PM (PKT)</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#F07825] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-neutral-800">Office Location</div>
                    <span className="text-neutral-600">Abbottabad, Khyber Pakhtunkhwa, Pakistan</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Confidentiality & Commitment Note */}
            <div className="bg-white rounded-2xl border border-neutral-200 p-6 flex items-start space-x-4">
              <ShieldCheck className="w-6 h-6 text-[#F07825] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-neutral-900">
                  Privacy & NDA Protection
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed mt-1">
                  We respect intellectual property. All project discussions and architectural details shared with Firnas.tech remain strictly confidential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

