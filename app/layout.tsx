import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
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
        {/* Google Tag Manager - defer to avoid blocking first paint */}
        <Script id="gtm" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <PageLoader />
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
