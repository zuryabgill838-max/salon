"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function MyBookingPage() {
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    const savedServices = localStorage.getItem("selectedServices");

    if (savedServices) {
      setServices(JSON.parse(savedServices));
    }
  }, []);

  const removeService = (id: number) => {
    const updatedServices = services.filter(
      (service) => service.id !== id
    );

    setServices(updatedServices);

    localStorage.setItem(
      "selectedServices",
      JSON.stringify(updatedServices)
    );
  };

  const total = services.reduce(
    (sum, service) => sum + service.price,
    0
  );

  return (
    <main className="min-h-screen bg-pink-50 px-6 py-12">
      <div className="mx-auto max-w-4xl">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-900">
          My Booking
        </h1>

        <p className="mt-2 text-gray-600">
          Review your selected services.
        </p>

        {/* Empty */}
        {services.length === 0 ? (
          <div className="mt-8 rounded-2xl bg-white p-10 text-center shadow-sm">

            <h2 className="text-xl font-semibold text-gray-900">
              No services selected
            </h2>

            <p className="mt-2 text-gray-500">
              Please select a service first.
            </p>

            <Link
              href="/services"
              className="mt-6 inline-block rounded-lg bg-pink-600 px-6 py-3 text-white hover:bg-pink-700"
            >
              Browse Services
            </Link>

          </div>
        ) : (

          <div className="mt-8">

            {/* Selected Services */}
            <div className="space-y-4">

              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm"
                >

                  <div>
                    <h2 className="font-semibold text-gray-900">
                      {service.name}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      Duration: {service.duration}
                    </p>
                  </div>

                  <div className="flex items-center gap-5">

                    <p className="font-semibold text-pink-600">
                      Rs. {service.price}
                    </p>

                    <button
                      onClick={() => removeService(service.id)}
                      className="text-sm text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>

                  </div>

                </div>
              ))}

            </div>

            {/* Total */}
            <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">

              <div className="flex items-center justify-between text-lg font-semibold">
                <span>Total</span>

                <span className="text-pink-600">
                  Rs. {total}
                </span>
              </div>

              <Link
                href="/booking"
                className="mt-6 block rounded-lg bg-pink-600 px-6 py-3 text-center font-medium text-white hover:bg-pink-700"
              >
                Continue to Booking
              </Link>

            </div>

          </div>
        )}

      </div>
    </main>
  );
}