import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luxe Salon",
  description: "Luxe Salon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold text-pink-600"
            >
              Luxe Salon
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-black hover:text-pink-600 transition"
              >
                Home
              </Link>

              <Link
                href="/services"
                className="text-black hover:text-pink-600 transition"
              >
                Services
              </Link>

              <Link
                href="/about-us"
                className="text-black hover:text-pink-600 transition"
              >
                About
              </Link>

              <Link
                href="/gallery"
                className="text-black hover:text-pink-600 transition"
              >
                Gallery
              </Link>

              <Link
                href="/contact"
                className="text-black hover:text-pink-600 transition"
              >
                Contact
              </Link>
            </nav>

          </div>
        </header>

        {children}
      </body>
    </html>
  );
}