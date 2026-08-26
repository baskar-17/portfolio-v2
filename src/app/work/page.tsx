import type { Metadata } from "next";
import WorkArchiveClient from "./WorkArchiveClient";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects and case studies by Baskar Subramani — Product Designer specializing in SaaS, fintech, and mobile applications.",
};

export default function WorkPage() {
  return <WorkArchiveClient />;
}
