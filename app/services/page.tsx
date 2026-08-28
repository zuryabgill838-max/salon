"use client";

import { useEffect, useState } from "react";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (selectedService) {
      setMessage(
        `Great choice! You selected ${selectedService}.`
      );
    } else {
      setMessage("");
    }
  }, [selectedService]);

  const services = [
    {
      icon: "💇‍♀️",
      title: "Hair Styling",
      description:
        "Professional haircuts, styling, coloring and nourishing treatments.",
      price: "$30",
    },
    {
      icon: "💄",
      title: "Makeup",
      description:
        "Elegant makeup for weddings, parties and special occasions.",
      price: "$50",
    },
    {
      icon: "💅",
      title: "Nails",
      description:
        "Manicure, pedicure and beautiful custom nail art.",
      price: "$25",
    },
    {
      icon: "✨",
      title: "Facial",
      description:
        "Relaxing facials designed to refresh and brighten your skin.",
      price: "$40",
    },
    {
      icon: "🧖‍♀️",
      title: "Spa",
      description:
        "Relax your body and mind with our peaceful spa treatments.",
      price: "$60",
    },
    {
      icon: "👰‍♀️",
      title: "Bridal Package",
      description:
        "Complete bridal beauty packages for your special day.",
      price: "$150",
    },
  ];

  return (
    <main>
      {/* Heading */}
      <section className="px-6 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-pink-600">
          What We Do
        </p>

        <h1 className="mt-4 text-5xl font-bold md:text-6xl">
          Our Services
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Professional beauty services designed to help you
          look and feel your best.
        </p>
      </section>

      {/* Effect ka result */}
      {message && (
        <div className="mx-auto mb-8 max-w-7xl px-6">
          <div className="rounded-2xl bg-pink-50 p-5 text-center">
            <p className="font-semibold text-pink-600">
              {message}
            </p>
          </div>
        </div>
      )}

      {/* Services */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-5xl">{service.icon}</div>

              <h2 className="mt-6 text-2xl font-bold">
                {service.title}
              </h2>

              <p className="mt-4 text-gray-500">
                {service.description}
              </p>

              <p className="mt-6 text-xl font-bold text-pink-600">
                From {service.price}
              </p>

              <button
                onClick={() =>
                  setSelectedService(service.title)
                }
                className="mt-6 rounded-full bg-pink-600 px-5 py-2 text-white"
              >
                Select
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}