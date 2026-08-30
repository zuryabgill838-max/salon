"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  {
    id: 1,
    name: "Haircut & Styling",
    price: 2000,
    duration: "45 min",
  },
  {
    id: 2,
    name: "Hair Coloring",
    price: 5000,
    duration: "2 hours",
  },
  {
    id: 3,
    name: "Facial",
    price: 3000,
    duration: "60 min",
  },
  {
    id: 4,
    name: "Manicure & Pedicure",
    price: 2500,
    duration: "60 min",
  },
  {
    id: 5,
    name: "Bridal Makeup",
    price: 8000,
    duration: "90 min",
  },
];

export default function ServicesPage() {
  const [selectedServices, setSelectedServices] = useState<any[]>([]);

  const addService = (service: any) => {
    const alreadySelected = selectedServices.some(
      (item) => item.id === service.id
    );

    if (alreadySelected) {
      return;
    }

    const updatedServices = [...selectedServices, service];

    setSelectedServices(updatedServices);

    localStorage.setItem(
      "selectedServices",
      JSON.stringify(updatedServices)
    );
  };

  return (
    <main className="min-h-screen bg-pink-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Our Services
          </h1>

          <p className="mt-3 text-gray-600">
            Choose the services you want to book.
          </p>
        </div>

        {/* Services */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-gray-900">
                {service.name}
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Duration: {service.duration}
              </p>

              <p className="mt-4 text-2xl font-bold text-pink-600">
                Rs. {service.price}
              </p>

              <button
                onClick={() => addService(service)}
                className="mt-5 w-full rounded-lg bg-pink-600 px-4 py-3 text-white transition hover:bg-pink-700"
              >
                Add Service
              </button>
            </div>
          ))}

        </div>

        {/* View Booking */}
        {selectedServices.length > 0 && (
          <div className="mt-10 text-center">

            <Link
              href="/my-booking"
              className="inline-block rounded-lg bg-black px-8 py-3 font-medium text-white hover:bg-gray-800"
            >
              View My Booking ({selectedServices.length})
            </Link>

          </div>
        )}

      </div>
    </main>
  );
}