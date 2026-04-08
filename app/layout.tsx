import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const BASE_URL = "https://giantkin29.github.io/PianoSchool";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "花音ピアノ教室",
    template: "%s | 花音ピアノ教室",
  },
  description: "東京都内の個人ピアノ教室。子どもから大人まで、丁寧に指導しています。体験レッスン無料。",
  keywords: ["ピアノ教室", "ピアノレッスン", "個人ピアノ教室", "子どもピアノ", "大人ピアノ", "体験レッスン"],
  openGraph: {
    title: "花音ピアノ教室",
    description: "東京都内の個人ピアノ教室。子どもから大人まで、丁寧に指導しています。体験レッスン無料。",
    url: BASE_URL,
    siteName: "花音ピアノ教室",
    locale: "ja_JP",
    type: "website",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#fdf8f6] text-stone-800">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
