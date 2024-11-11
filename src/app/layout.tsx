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
        className={`mx-auto max-w-full sm:max-w-[600px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1440px] bg-[#1F1F23] ${firaCode.className}`}
      >
        <Navigation />
        <main role="main">{children}</main>
      </body>
    </html>
  );
}
