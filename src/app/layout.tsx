import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naitram Ticket Scanner",
  description: "Naitram Dapp Ticker Scanner for Events",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
