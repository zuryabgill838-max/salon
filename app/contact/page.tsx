'use client'
import ContactButton from '@/components/contactbutton';
import React from 'react'

export default function ContactPage() {
  return (
    <main>
      {/* Heading */}
      <section className="bg-pink-50 px-6 py-24 text-center">
        <p className="font-semibold uppercase tracking-[0.3em] text-pink-600">
          Get In Touch
        </p>

        <h1 className="mt-4 text-5xl font-bold md:text-6xl">
          Contact Us
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Have a question or want to visit us? We'd love to hear
          from you.
        </p>
      </section>
  

      {/* Contact */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">

          {/* Information */}
          <div>
            <p className="font-semibold uppercase tracking-widest text-pink-600">
              Visit Us
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              We'd Love To See You
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Come and experience the Luxe Salon difference.
              Our friendly team is ready to make you feel
              beautiful and confident.
            </p>

            <div className="mt-10 space-y-6">

              <div>
                <h3 className="font-bold">📍 Address</h3>
                <p className="mt-1 text-gray-500">
                  Main Street, Your City
                </p>
              </div>

              <div>
                <h3 className="font-bold">📞 Phone</h3>
                <p className="mt-1 text-gray-500">
                  +92 300 1234567
                </p>
              </div>

              <div>
                <h3 className="font-bold">✉️ Email</h3>
                <p className="mt-1 text-gray-500">
                  info@luxesalon.com
                </p>
              </div>

              <div>
                <h3 className="font-bold">🕐 Opening Hours</h3>
                <p className="mt-1 text-gray-500">
                  Monday - Saturday: 10:00 AM - 8:00 PM
                </p>
              </div>

            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl bg-gray-50 p-8 shadow-sm">

            <h2 className="text-2xl font-bold">
              Send Us A Message
            </h2>

            <form className="mt-8 space-y-5">

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-pink-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-pink-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Phone
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-pink-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-pink-500"
                />
              </div>

              {/* Props wala button */}
  <ContactButton text="book Message" />

            </form>
             
          </div>

        </div>
      </section>
    </main>
  );
}