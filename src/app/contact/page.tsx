import React from "react";
import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Baskar Subramani for product opportunities, collaborations, or design consultation.",
};

export default function ContactPage() {
  return (
    <main className="content-container pt-32 pb-24 lg:pt-48 lg:pb-32">
      <ContactClient />
    </main>
  );
}
