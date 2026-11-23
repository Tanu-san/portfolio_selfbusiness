import type { Metadata } from "next";
import { Noto_Sans_JP, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { SITE_META } from "@/lib/content";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: SITE_META.title,
  description: SITE_META.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`scroll-smooth ${notoSansJP.variable} ${cormorant.variable}`}
    >
      <body
        className={`${notoSansJP.className} bg-[#FAFAFA] text-[#111827] antialiased selection:bg-[#0F172A] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
