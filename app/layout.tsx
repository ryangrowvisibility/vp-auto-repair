import type { Metadata } from "next";
import { Bitter, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const bitter = Bitter({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-bitter" });
const source = Source_Sans_3({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-source" });

export const metadata: Metadata = {
  title: "VP Auto Repair | Auto Repair in Sacramento Since 2006 | (916) 204-6237",
  description:
    "Independent auto repair shop at 1502 Silica Ave, Sacramento. Engine, brake, electrical and transmission repair plus scheduled maintenance. Owner Vladimir Pineda, since 2006. 4.7 stars from 54 Google reviews. Call (916) 204-6237.",
  openGraph: {
    title: "VP Auto Repair | Sacramento Auto Repair Since 2006",
    description: "Honest quotes that match the final bill. 4.7 stars from 54 Google reviews. Call (916) 204-6237.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" className={`${bitter.variable} ${source.variable}`}>
      <body>{children}</body>
    </html>
  );
}
