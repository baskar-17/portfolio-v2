export interface ContactFormData {
  name: string;
  email: string;
  mobile: string;
  mobileCountryCode: string;
  whatsapp: string;
  whatsappSameAsMobile: boolean;
  enquiryType: string;
  preferredContact: string;
  message: string;
  honeypot: string; // anti-spam
}

export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  mobile: string;
  whatsapp: string;
  enquiryType: string;
  preferredContact: string;
  message: string;
  submittedAt: Date;
  source: "portfolio";
  status: "new" | "read" | "replied";
}

export const ENQUIRY_TYPES = [
  { value: "", label: "Select a reason" },
  { value: "fulltime", label: "Full-time opportunity" },
  { value: "freelance", label: "Freelance project" },
  { value: "contract", label: "Contract opportunity" },
  { value: "collaboration", label: "Product collaboration" },
  { value: "consultation", label: "Design consultation" },
  { value: "networking", label: "Networking" },
  { value: "other", label: "Other" },
] as const;

export const CONTACT_METHODS = [
  { value: "email", label: "Email" },
  { value: "call", label: "Call" },
  { value: "whatsapp", label: "WhatsApp" },
] as const;
