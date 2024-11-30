import "./globals.css";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import Navigation from "./_components/Navigation";
import Footer from "./_components/Footer";

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira",
});

export const metadata: Metadata = {
  title: "Portfolio",
  openGraph: {
    title: "Portfolio",
    description: `This is my portfolio's homepage`,
  },
};

type LayoutType = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutType) {
  return (
    <html lang="en">
      <body
        style={{ cursor: "url('/cursor/cursor.svg'), auto" }}
        className={`flex flex-col mx-auto overflow-x-hidden bg-[#1F1F23] cursor-fancy ${firaCode.className}`}
      >
        <Navigation />
        <main
          role="main"
          className="flex flex-col justify-center items-center w-full"
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
