import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

const montserrat = localFont({
  src: [
    {
      path: "./fonts/Montserrat.ttf",
      weight: "normal",
      style: "normal",
    },
  ],
  variable: "--font-montserrat",
});

const poppins = localFont({
  src: [
    {
      path: "./fonts/Poppins.ttf",
      weight: "normal",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Oplo",
  description: "Website for Oplo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.variable + " " + poppins.variable}>
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
