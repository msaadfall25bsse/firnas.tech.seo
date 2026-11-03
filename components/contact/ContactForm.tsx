"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { contactFormSchema, ContactFormData } from "@/lib/validations";
import Button from "../shared/Button";
import { siteConfig } from "@/data/navigation";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    service: "Software Development",
    budget: "",
    subject: "",
    message: "",
    websiteField: "", // Honeypot
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Client-side validation via Zod
    const validationResult = contactFormSchema.safeParse(formData);
    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      validationResult.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0] as string] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to deliver inquiry message.");
      }

      setStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        service: "Software Development",
        budget: "",
        subject: "",
        message: "",
        websiteField: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      const message =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please contact us via WhatsApp or direct email.";
      setErrorMessage(message);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-neutral-200 p-8 sm:p-10 shadow-sm">
      <h3 className="text-2xl font-bold text-neutral-900 mb-2">Send Us a Message</h3>
      <p className="text-neutral-600 text-sm mb-8">
        Fill out the details below. Our technical and creative leads review all inquiries promptly.
      </p>

      {status === "success" ? (
        <div className="p-8 text-center bg-orange-50/70 border border-orange-200 rounded-2xl animate-in fade-in duration-300">
          <div className="w-16 h-16 bg-[#F07825] text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-2xl font-bold text-neutral-900 mb-2">Thank You!</h4>
          <p className="text-neutral-700 text-sm max-w-md mx-auto leading-relaxed mb-6">
            Your inquiry has been received. Our team will review your specifications and get back to you within 24 hours.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setStatus("idle")}
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot field (hidden from view) */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="websiteField"
              value={formData.websiteField}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                Full Name <span className="text-[#F07825]">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className={`w-full px-4 py-3 rounded-xl border text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#F07825] transition-colors ${
                  errors.fullName ? "border-red-400 bg-red-50/20" : "border-neutral-200"
                }`}
              />
              {errors.fullName && (
                <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.fullName}</p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                Email Address <span className="text-[#F07825]">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={`w-full px-4 py-3 rounded-xl border text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#F07825] transition-colors ${
                  errors.email ? "border-red-400 bg-red-50/20" : "border-neutral-200"
                }`}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                Phone Number <span className="text-[#F07825]">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className={`w-full px-4 py-3 rounded-xl border text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#F07825] transition-colors ${
                  errors.phone ? "border-red-400 bg-red-50/20" : "border-neutral-200"
                }`}
              />
              {errors.phone && (
                <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.phone}</p>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label htmlFor="companyName" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                Company Name (Optional)
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Acme Corporation"
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#F07825] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Service */}
            <div>
              <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                Service Interested In <span className="text-[#F07825]">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#F07825] bg-white transition-colors"
              >
                <option value="Software Development">Software Development</option>
                <option value="Digital Marketing & SEO">Digital Marketing & SEO</option>
                <option value="Graphic Designing">Graphic Designing</option>
                <option value="Comprehensive Package">Comprehensive Package (All Services)</option>
              </select>
            </div>

            {/* Project Budget */}
            <div>
              <label htmlFor="budget" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                Project Budget (Optional)
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#F07825] bg-white transition-colors"
              >
                <option value="">Select an estimated range</option>
                <option value="Under $1,000">Under $1,000</option>
                <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                <option value="$3,000 - $10,000">$3,000 - $10,000</option>
                <option value="$10,000+">$10,000+</option>
              </select>
            </div>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
              Subject <span className="text-[#F07825]">*</span>
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Website Redesign & SEO Growth"
              className={`w-full px-4 py-3 rounded-xl border text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#F07825] transition-colors ${
                errors.subject ? "border-red-400 bg-red-50/20" : "border-neutral-200"
              }`}
            />
            {errors.subject && (
              <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.subject}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
              Message <span className="text-[#F07825]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Please describe your project, timeline, and key requirements..."
              className={`w-full px-4 py-3 rounded-xl border text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#F07825] transition-colors resize-y ${
                errors.message ? "border-red-400 bg-red-50/20" : "border-neutral-200"
              }`}
            />
            {errors.message && (
              <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.message}</p>
            )}
          </div>

          {status === "error" && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start space-x-3 text-red-800 text-sm">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Unable to submit inquiry automatically</p>
                <p className="mt-1 text-xs">{errorMessage}</p>
                <p className="mt-2 text-xs">
                  You can also message us directly on{" "}
                  <a
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-bold hover:text-red-950"
                  >
                    WhatsApp Support
                  </a>
                  .
                </p>
              </div>
            </div>
          )}

          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={status === "loading"}
            className="w-full sm:w-auto"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <span>Submit Inquiry</span>
                <Send className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  );
}

