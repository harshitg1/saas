import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.legacy85mentoringpvtltd.com"),
  title: "Legacy Trading App",
  description:
    "Legacy85 Mentoring offers stock market education, live market training, and personal trading mentorship in Kanpur.",
  openGraph: {
    title: "Legacy Trading App",
    description:
      "Stock market education, live market training, and personal trading mentorship by Legacy85 Mentoring.",
    url: "https://www.legacy85mentoringpvtltd.com",
    siteName: "Legacy85 Mentoring",
    images: [
      {
        url: "/LogoL1.png",
        width: 512,
        height: 512,
        alt: "Legacy85 Mentoring",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Legacy Trading App",
    description:
      "Stock market education, live market training, and personal trading mentorship by Legacy85 Mentoring.",
    images: ["/LogoL1.png"],
  },
};

const geist = Geist({ subsets: ['latin'] });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.className} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
