import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shreyansh Saurabh",
  description: "Shreyansh Saurabh - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
