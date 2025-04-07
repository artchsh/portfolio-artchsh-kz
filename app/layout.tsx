import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"
import Script from "next/script"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Artyom Chshyogolev's Portfolio | Software developer",
  description: "Building innovative, efficient, and user-friendly solutions for the digital future.",
  openGraph: {
    title: "Artyom Chshyogolev's Portfolio | Software developer",
    description: 'Building innovative, efficient, and user-friendly solutions for the digital future.',
    url: 'https://artchsh.kz/',
    siteName: 'artchsh.kz',
    images: [
      {
        url: 'https://artchsh.kz/og.png',
        width: 800,
        height: 600,
        alt: 'Blog Post Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Artyom Chshyogolev's Portfolio | Software developer",
    description: 'Building innovative, efficient, and user-friendly solutions for the digital future.',
    images: ['https://artchsh.kz/og.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-zinc-950`}>
        <main>
         {children}
        </main>
        <Toaster></Toaster>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="52ccfef9-8b9b-41df-befc-bf0b699e8bb2"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
