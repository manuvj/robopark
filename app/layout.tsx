import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Local fonts
const orbitron = localFont({
  src: "./fonts/Orbitron-VariableFont_wght.ttf",
  variable: "--font-orbitron",
  weight: "100 900", // Match the variable weight definition
});

const poppins = localFont({
  src: "./fonts/Poppins-Medium.ttf",
  variable: "--font-poppins",
  weight: "100 900", // Match the variable weight definition
});

const poppinsRegular = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-poppins-regular",
  weight: "100 900", // Match the variable weight definition
});

const inter = localFont({
  src: "./fonts/Inter-Medium.woff2",
  variable: "--font-inter",
  weight: "100 900", // Match the variable weight definition
});

// Metadata
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// RootLayout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${orbitron.variable} ${poppins.variable} ${poppinsRegular.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
