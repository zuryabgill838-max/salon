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

        {/* Header */}
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
              <Link
                 href="/my-booking"
                 className="text-black hover:text-pink-600 transition"
                >
                 My Booking
              </Link>
            </nav>

          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-[#1f1714] text-white">
          <div className="mx-auto max-w-7xl px-6 py-12">

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

              {/* Brand */}
              <div>
                <h2 className="text-2xl font-bold">
                  Luxe <span className="text-pink-400">Salon</span>
                </h2>

                <p className="mt-4 text-sm leading-6 text-gray-300">
                  Experience luxury beauty and professional salon
                  services designed just for you.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="mb-4 text-lg font-semibold">
                  Quick Links
                </h3>

                <div className="flex flex-col gap-3 text-sm text-gray-300">
                  <Link
                    href="/"
                    className="hover:text-pink-400 transition"
                  >
                    Home
                  </Link>

                  <Link
                    href="/services"
                    className="hover:text-pink-400 transition"
                  >
                    Services
                  </Link>

                  <Link
                    href="/about-us"
                    className="hover:text-pink-400 transition"
                  >
                    About Us
                  </Link>

                  <Link
                    href="/gallery"
                    className="hover:text-pink-400 transition"
                  >
                    Gallery
                  </Link>

                  <Link
                    href="/contact"
                    className="hover:text-pink-400 transition"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="mb-4 text-lg font-semibold">
                  Services
                </h3>

                <div className="flex flex-col gap-3 text-sm text-gray-300">
                  <p>Hair Styling</p>
                  <p>Hair Coloring</p>
                  <p>Facial & Skincare</p>
                  <p>Manicure & Pedicure</p>
                  <p>Bridal Makeup</p>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h3 className="mb-4 text-lg font-semibold">
                  Contact Us
                </h3>

                <div className="space-y-3 text-sm text-gray-300">
                  <p>📍 Lahore, Pakistan</p>
                  <p>📞 +92 300 1234567</p>
                  <p>✉️ hello@luxesalon.com</p>

                  <div className="pt-2">
                    <p className="font-semibold text-white">
                      Opening Hours
                    </p>
                    <p>Mon - Sat: 10 AM - 8 PM</p>
                    <p>Sunday: 12 PM - 6 PM</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Footer */}
            <div className="mt-10 border-t border-white/10 pt-6">
              <div className="flex flex-col gap-3 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">

                <p>
                  © {new Date().getFullYear()} Luxe Salon.
                  All rights reserved.
                </p>

                <div className="flex gap-5">
                  <Link
                    href="/privacy"
                    className="hover:text-white transition"
                  >
                    Privacy Policy
                  </Link>

                  <Link
                    href="/terms"
                    className="hover:text-white transition"
                  >
                    Terms & Conditions
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}