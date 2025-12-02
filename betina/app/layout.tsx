import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import React from "react";


import "./globals.css";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        <Header/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
