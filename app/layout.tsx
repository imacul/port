import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Projects Mastery Connect",
  description: "Projects Mastery Connect: Your gateway to expert online business consultations with software and website development services. Connect with us via WhatsApp or Email for personalized project discussions and professional guidance.",
  keywords: "software development, website development, mobile app development, web design, digital solutions, Ready-made websites",
  openGraph: {
    title: "Projects Mastery Connect",
    description: "Projects Mastery Connect: Your gateway to expert online business consultations with software and website development services. Connect with us via WhatsApp or Email for personalized project discussions and professional guidance.",
    images: "/her_bg",
    url: "projectsmasteryconnect.vercel.app"
  },
  twitter: {
    title: "Projects Mastery Connect",
    description: "Projects Mastery Connect: Your gateway to expert online business consultations with software and website development services. Connect with us via WhatsApp or Email for personalized project discussions and professional guidance.",
    images: "/hero_bg",
    card: "summary_large_image"
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Analytics />
          </ThemeProvider>
      </body>
    </html>
  );
}
