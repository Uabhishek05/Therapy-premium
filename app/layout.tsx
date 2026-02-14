import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/constants";

const heading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "Seattle therapist",
    "anxiety therapy",
    "trauma therapy",
    "life transitions counseling",
    "licensed clinical psychologist"
  ],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${body.variable} ${heading.variable} bg-brand-secondary text-brand-text antialiased`}>
        {children}
      </body>
    </html>
  );
}
