import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { CursorProvider } from "@/components/interactions/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import GridOverlay from "@/components/layout/GridOverlay";

export const metadata: Metadata = {
  title: {
    default: "Baskar Subramani — Product Designer / UI UX Designer",
    template: "%s | Baskar Subramani",
  },
  description:
    "Product designer creating intuitive SaaS, web and mobile experiences from complex systems and workflows.",
  keywords: [
    "UI/UX Designer",
    "Product Designer",
    "SaaS Design",
    "Web Design",
    "Mobile Design",
    "Design Systems",
    "Interaction Design",
    "User Experience",
    "Baskar Subramani",
  ],
  authors: [{ name: "Baskar Subramani" }],
  creator: "Baskar Subramani",
  metadataBase: new URL("https://baskar-portfolio.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Baskar Subramani — Portfolio",
    title: "Baskar Subramani — Product Designer / UI UX Designer",
    description:
      "Product designer creating intuitive SaaS, web and mobile experiences from complex systems and workflows.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baskar Subramani — Product Designer / UI UX Designer",
    description:
      "Product designer creating intuitive SaaS, web and mobile experiences from complex systems and workflows.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          <CursorProvider>
            <ScrollProgress />
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
            <GridOverlay />
          </CursorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
