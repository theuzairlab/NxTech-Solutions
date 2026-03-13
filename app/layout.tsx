import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GTMDelayed } from "@/components/ui/gtm-delayed";
import "./globals.css";
import { AuthSessionProvider } from "@/components/providers/session-provider";
import { Toaster } from "@/components/ui/sonner";
import { PageLoader } from "@/components/ui/page-loader";

const GTM_ID = "GTM-PK589K8Z";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://nxtechnova.com",
  ),
  title: {
    default: `${process.env.NEXT_PUBLIC_SITE_NAME || "NxTechNova"} - AI-Powered Growth Systems`,
    template: `%s | ${process.env.NEXT_PUBLIC_SITE_NAME || "NxTechNova"}`,
  },
  description:
    "AI-powered growth systems that turn traffic into revenue. Automate lead generation, qualify prospects, and convert them into booked appointments. Automation, Development, Performance Marketing.",
  keywords: [
    "AI automation",
    "lead generation",
    "digital marketing",
    "web development",
    "CRM",
    "growth systems",
  ],
  openGraph: {
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* GTM + Clarity load after idle + 2s delay to reduce TBT */}
        <GTMDelayed />
        {/* <PageLoader /> */}
        <AuthSessionProvider>
          {children}
          <Toaster richColors closeButton />
        </AuthSessionProvider>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
      </body>
    </html>
  );
}
