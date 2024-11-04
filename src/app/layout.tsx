import { Fira_Code } from "next/font/google";
import { ReactNode } from "react";
import Navigation from "@/app/_components/Navigation";
import "./globals.css";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata = {
  title: "Portfolio",
  openGraph: {
    title: "Portfolio",
    description: `This is my portfolio's homepage`,
  },
};

type LayoutType = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutType) {
  return (
    <html lang="en">
      <body
        className={`mx-auto max-w-[90vw] lg:max-w-[85vw] xl:max-w-[100vw] 2xl:max-w-[1780px] bg-[#1F1F23] ${firaCode.className}`}
      >
        <Navigation />
        <main role="main">{children}</main>
      </body>
    </html>
  );
}
