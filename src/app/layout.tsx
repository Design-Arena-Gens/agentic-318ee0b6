import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avery Carter · Teacher Portfolio",
  description:
    "Teacher portfolio for Avery Carter: instructional coach, ELA educator, and workshop leader focused on joyful, rigorous literacy experiences.",
  metadataBase: new URL("https://agentic-318ee0b6.vercel.app"),
  openGraph: {
    title: "Avery Carter · Teacher Portfolio",
    description:
      "Explore classroom work, teaching philosophy, and professional learning from ELA educator Avery Carter.",
    url: "https://agentic-318ee0b6.vercel.app",
    siteName: "Avery Carter Teaching Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avery Carter · Teacher Portfolio",
    description:
      "ELA educator and instructional coach championing student voice through project-based literacy.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
