import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import "./styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Todo App",
  description: "A simple To-Do app to help you organize tasks, stay on track, and boost productivity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
      <div className="w-full max-w-[1440px] mx-auto min-h-screen bg-[#1a1a1a]">
        <div className="flex flex-col items-center justify-center bg-black h-[200px]">
            <div className="pt-[0px]"><Header /></div>
        </div>
        {children}
      </div>
      </body>
    </html>
  );
}
