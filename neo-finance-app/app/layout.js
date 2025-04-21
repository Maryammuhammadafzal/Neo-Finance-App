import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Neo Finance App",
  description: "Track Your Finance with Neo Finance Easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      >

        {/* Header */}
        <Navbar />

        {/* Main */}
        <div className="main">
          {children}
        </div>

        {/* Footer */}
        <Footer />
        
      </body>
    </html>
  );
}
