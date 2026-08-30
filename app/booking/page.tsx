"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BookingPage() {
  const router = useRouter();

  const [services, setServices] = useState<any[]>([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [worker, setWorker] = useState("");

  useEffect(() => {
    const savedServices = localStorage.getItem("selectedServices");

    if (savedServices) {
      setServices(JSON.parse(savedServices));
    }
  }, []);

  const total = services.reduce(
    (sum, service) => sum + service.price,
    0
  );

  const confirmBooking = () => {
    if (!date || !time || !worker) {
      alert("Please select date, time and worker.");
      return;
    }

    if (services.length === 0) {
      alert("Please select at least one service.");
      router.push("/services");
      return;
    }

    const existingBookings = JSON.parse(
      localStorage.getItem("bookings") || "[]"
    );

    const newBooking = {
      id: Date.now(),
      services: services,
      date: date,
      time: time,
      worker: worker,
      total: total,
      status: "Pending",
    };

    const updatedBookings = [
      ...existingBookings,
      newBooking,
    ];

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );

    // Current selected services clear
    localStorage.removeItem("selectedServices");

    alert("Booking confirmed successfully!");

    router.push("/my-booking");
  };

  return (
    <main className="min-h-screen bg-pink-50 px-6 py-12">
      <div className="mx-auto max-w-3xl">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Complete Your Booking
          </h1>

          <p className="mt-2 text-gray-600">
            Select your preferred date, time and worker.
          </p>
        </div>

        {/* Selected Services */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">

          <h2 className="text-xl font-semibold text-gray-900">
            Selected Services
          </h2>

          <div className="mt-5 space-y-3">

            {services.length === 0 ? (
              <p className="text-gray-500">
                No services selected.
              </p>
            ) : (
              services.map((service) => (
                <div
                  key={service.id}
                  className="flex items-center justify-between border-b pb-3"
                >
                  <span className="text-gray-700">
                    {service.name}
                  </span>

                  <span className="font-medium text-gray-900">
                    Rs. {service.price}
                  </span>
                </div>
              ))
            )}

          </div>

          {/* Total */}
          <div className="mt-5 flex items-center justify-between text-lg font-bold">
            <span>Total</span>

            <span className="text-pink-600">
              Rs. {total}
            </span>
          </div>

        </div>

        {/* Date */}
        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">

          <label
            htmlFor="date"
            className="block font-medium text-gray-900"
          >
            Select Date
          </label>

          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={new Date().toISOString().split("T")[0]}
            className="mt-3 w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-pink-500"
          />

        </div>

        {/* Time */}
        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">

          <label
            htmlFor="time"
            className="block font-medium text-gray-900"
          >
            Select Time
          </label>

          <input
            id="time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="mt-3 w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-pink-500"
          />

        </div>

        {/* Worker */}
        <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">

          <label
            htmlFor="worker"
            className="block font-medium text-gray-900"
          >
            Select Worker
          </label>

          <select
            id="worker"
            value={worker}
            onChange={(e) => setWorker(e.target.value)}
            className="mt-3 w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-pink-500"
          >
            <option value="">
              Choose Worker
            </option>

            <option value="Sarah">
              Sarah
            </option>

            <option value="Ayesha">
              Ayesha
            </option>

            <option value="Maria">
              Maria
            </option>
          </select>

        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

          <Link
            href="/my-booking"
            className="w-full rounded-lg border border-gray-300 bg-white px-6 py-3 text-center font-medium text-gray-700 hover:bg-gray-50"
          >
            Back
          </Link>

          <button
            onClick={confirmBooking}
            className="w-full rounded-lg bg-pink-600 px-6 py-3 font-semibold text-white transition hover:bg-pink-700"
          >
            Confirm Booking
          </button>

        </div>

      </div>
    </main>
  );
}