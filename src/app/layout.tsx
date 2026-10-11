import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-jb",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://arpityadav.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Arpit Yadav — Cloud Engineer · DevOps Builder · Founder",
    template: "%s · Arpit Yadav",
  },
  description:
    "Arpit Yadav is an Associate Cloud Engineer at AHEAD and founder of PsychSirAI. Building scalable multi-cloud infrastructure by day and AI-powered products by night across AWS, GCP, Azure, Terraform & Kubernetes.",
  keywords: [
    "Arpit Yadav",
    "Cloud Engineer",
    "DevOps Engineer",
    "AWS",
    "GCP",
    "Azure",
    "Terraform",
    "Kubernetes",
    "PsychSirAI",
    "SSB preparation AI",
    "Startup Founder",
    "Portfolio",
  ],
  authors: [{ name: "Arpit Yadav" }],
  creator: "Arpit Yadav",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Arpit Yadav — Cloud Engineer · DevOps Builder · Founder",
    description:
      "Scalable cloud infrastructure by day, AI-powered products by night. Founder of PsychSirAI.",
    siteName: "Arpit Yadav",
    images: [{ url: "/arpit.jpg", width: 1200, height: 630, alt: "Arpit Yadav" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arpit Yadav — Cloud Engineer · DevOps Builder · Founder",
    description:
      "Scalable cloud infrastructure by day, AI-powered products by night. Founder of PsychSirAI.",
    images: ["/arpit.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">{children}</body>
    </html>
  );
}
