"use client";

import React, { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { ENQUIRY_TYPES, CONTACT_METHODS } from "@/types/contact";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

interface FormErrors {
  name?: string;
  email?: string;
  contact?: string;
  enquiryType?: string;
  message?: string;
  global?: string;
}

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileCountryCode: "+91",
    mobile: "",
    whatsappSameAsMobile: false,
    whatsapp: "",
    enquiryType: "",
    preferredContact: "email",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    if (!formData.enquiryType) {
      newErrors.enquiryType = "Please select a reason.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
      isValid = false;
    }

    const hasEmail = formData.email.trim().length > 0;
    const hasMobile = formData.mobile.trim().length > 0;
    const hasWhatsapp = formData.whatsappSameAsMobile 
      ? hasMobile 
      : formData.whatsapp.trim().length > 0;

    if (!hasEmail && !hasMobile && !hasWhatsapp) {
      newErrors.global = "Add an email, mobile number, or WhatsApp number so I can get back to you.";
      newErrors.contact = "Required if no other contact method provided.";
      isValid = false;
    }

    if (hasEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Honeypot check
    if (formData.honeypot) {
      return; // Silently fail for bots
    }

    // Rate limiting: 30s
    const now = Date.now();
    if (now - lastSubmitTime < 30000) {
      setErrors({ global: "Please wait before submitting another message." });
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const finalWhatsapp = formData.whatsappSameAsMobile ? formData.mobile : formData.whatsapp;
      const fullMobile = formData.mobile ? `${formData.mobileCountryCode} ${formData.mobile}` : "";
      
      const payload = {
        name: formData.name,
        email: formData.email,
        mobile: fullMobile,
        whatsapp: finalWhatsapp,
        enquiryType: formData.enquiryType,
        preferredContact: formData.preferredContact,
        message: formData.message,
        submittedAt: new Date(),
        source: "portfolio",
        status: "new",
      };

      if (process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
        // Try real firestore submission
        await addDoc(collection(db, "contactSubmissions"), payload);
      } else {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }

      setSubmitStatus("success");
      setLastSubmitTime(now);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear field-specific errors as user types
    if (errors[name as keyof FormErrors] || errors.global) {
      setErrors(prev => ({ ...prev, [name]: undefined, global: undefined }));
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {submitStatus === "idle" && (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-heading tracking-tight mb-4">
                Have something interesting to build?
              </h1>
              <p className="text-lg text-secondary">
                Whether it&apos;s a product opportunity, collaboration, freelance conversation, or simply talking about product design, I&apos;d love to hear from you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              {/* Honeypot */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-primary">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-11 px-4 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                />
                {errors.name && <p className="text-error text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-primary">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-11 px-4 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                />
                {errors.email && <p className="text-error text-sm mt-1">{errors.email}</p>}
                {errors.contact && !formData.email && !formData.mobile && !formData.whatsapp && (
                  <p className="text-error text-sm mt-1">{errors.contact}</p>
                )}
              </div>

              {/* Mobile */}
              <div className="space-y-2">
                <label htmlFor="mobile" className="block text-sm font-medium text-primary">
                  Mobile Number
                </label>
                <div className="flex gap-2">
                  <select
                    name="mobileCountryCode"
                    value={formData.mobileCountryCode}
                    onChange={handleChange}
                    className="w-24 h-11 px-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                    aria-label="Country code"
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+65">+65</option>
                    <option value="+44">+44</option>
                  </select>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="flex-1 h-11 px-4 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                  />
                </div>
              </div>

              {/* WhatsApp */}
              <div className="space-y-3">
                <label htmlFor="whatsapp" className="block text-sm font-medium text-primary">
                  WhatsApp Number
                </label>
                
                <label className="flex items-center gap-2 text-sm text-secondary cursor-pointer">
                  <input
                    type="checkbox"
                    name="whatsappSameAsMobile"
                    checked={formData.whatsappSameAsMobile}
                    onChange={handleChange}
                    className="rounded border-[var(--border)] text-accent focus:ring-accent w-4 h-4"
                  />
                  Same as mobile number
                </label>

                {!formData.whatsappSameAsMobile && (
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="Include country code"
                    className="w-full h-11 px-4 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors mt-2"
                  />
                )}
              </div>

              {/* Enquiry Type */}
              <div className="space-y-2">
                <label htmlFor="enquiryType" className="block text-sm font-medium text-primary">
                  Why are you reaching out? *
                </label>
                <select
                  id="enquiryType"
                  name="enquiryType"
                  required
                  value={formData.enquiryType}
                  onChange={handleChange}
                  className="w-full h-11 px-4 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                >
                  {ENQUIRY_TYPES.map(type => (
                    <option key={type.value} value={type.value} disabled={type.value === ""}>
                      {type.label}
                    </option>
                  ))}
                </select>
                {errors.enquiryType && <p className="text-error text-sm mt-1">{errors.enquiryType}</p>}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-primary">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me a little about what you'd like to discuss."
                  className="w-full p-4 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-y"
                />
                {errors.message && <p className="text-error text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Preferred Contact */}
              <div className="space-y-3">
                <span className="block text-sm font-medium text-primary">
                  Preferred contact method
                </span>
                <div className="flex flex-wrap gap-4">
                  {CONTACT_METHODS.map(method => (
                    <label key={method.value} className="flex items-center gap-2 text-sm text-secondary cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value={method.value}
                        checked={formData.preferredContact === method.value}
                        onChange={handleChange}
                        className="text-accent focus:ring-accent w-4 h-4"
                      />
                      {method.label}
                    </label>
                  ))}
                </div>
              </div>

              {errors.global && (
                <div className="p-4 rounded-lg bg-[var(--error)]/10 text-error text-sm">
                  {errors.global}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 flex items-center justify-center rounded-lg bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium transition-colors hover:bg-[var(--text-secondary)] disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>
            </form>
          </motion.div>
        )}

        {submitStatus === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center text-center py-24 card-surface"
          >
            <div className="w-16 h-16 rounded-full bg-[var(--success)]/10 text-[var(--success)] flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-heading tracking-tight mb-2">Message received.</h2>
            <p className="text-secondary mb-8 max-w-md">
              Thanks for reaching out. I&apos;ll get back to you as soon as I can.
            </p>
            <Link
              href="/work"
              className="h-11 px-6 rounded-full inline-flex items-center justify-center border border-[var(--border)] hover:border-accent hover:text-accent transition-colors"
            >
              Back to work
            </Link>
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            key="error"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center text-center py-24 card-surface"
          >
            <div className="w-16 h-16 rounded-full bg-[var(--error)]/10 text-[var(--error)] flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h2 className="text-2xl font-heading tracking-tight mb-2">Couldn&apos;t send your message</h2>
            <p className="text-secondary mb-8 max-w-md">
              Something went wrong. Your message hasn&apos;t been lost — please try again.
            </p>
            <button
              onClick={() => setSubmitStatus("idle")}
              className="h-11 px-6 rounded-full inline-flex items-center justify-center border border-[var(--border)] hover:border-accent hover:text-accent transition-colors"
            >
              Try again
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
