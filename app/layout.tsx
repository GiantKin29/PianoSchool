import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "花音ピアノ教室",
  description: "東京都内の個人ピアノ教室。子どもから大人まで、丁寧に指導しています。体験レッスン無料。",
  openGraph: {
    title: "花音ピアノ教室",
    description: "東京都内の個人ピアノ教室。子どもから大人まで、丁寧に指導しています。",
    type: "website",
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
