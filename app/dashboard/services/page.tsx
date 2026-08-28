"use client";

import { useState } from "react";

export default function ServicesPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="min-h-screen bg-gray-100 p-6 lg:p-8">

      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Salon Services
          </h1>

          <p className="mt-2 text-gray-500">
            Manage all services offered by Luxe Salon.
          </p>
        </div>

        {/* Add Service Button */}
        <button
          onClick={() => setShowForm(!showForm)}
          className="rounded-xl bg-pink-600 px-5 py-3 font-semibold text-white transition hover:bg-pink-700"
        >
          {showForm ? "Close Form" : "+ Add Service"}
        </button>

      </div>

      {/* Add Service Form */}
      {showForm && (
        <div className="mb-8 rounded-2xl bg-white p-6 shadow-sm">

          <h2 className="text-xl font-bold text-gray-800">
            Add New Service
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Enter the details of the new salon service.
          </p>

          <form className="mt-6 grid gap-5 md:grid-cols-2">

            {/* Service Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Service Name
              </label>

              <input
                type="text"
                placeholder="e.g. Hair Cut"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-pink-500"
              />
            </div>

            {/* Category */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Category
              </label>

              <select
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-pink-500"
              >
                <option value="">Select Category</option>
                <option value="hair">Hair</option>
                <option value="beauty">Beauty</option>
                <option value="nails">Nails</option>
                <option value="makeup">Makeup</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Price
              </label>

              <input
                type="number"
                placeholder="e.g. 1500"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-pink-500"
              />
            </div>

            {/* Duration */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Duration
              </label>

              <select
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-pink-500"
              >
                <option value="">Select Duration</option>
                <option value="30">30 Minutes</option>
                <option value="45">45 Minutes</option>
                <option value="60">60 Minutes</option>
                <option value="90">90 Minutes</option>
                <option value="120">120 Minutes</option>
              </select>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Description
              </label>

              <textarea
                rows={4}
                placeholder="Write a short description of the service..."
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-pink-500"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 md:col-span-2">

              <button
                type="submit"
                className="rounded-xl bg-pink-600 px-6 py-3 font-semibold text-white hover:bg-pink-700"
              >
                Save Service
              </button>

              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="rounded-xl border border-gray-200 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>

            </div>

          </form>

        </div>
      )}

      {/* Service Stats */}
      <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Total Services
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            12
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Hair Services
          </p>

          <h2 className="mt-2 text-3xl font-bold text-pink-600">
            5
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Beauty Services
          </p>

          <h2 className="mt-2 text-3xl font-bold text-purple-600">
            4
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Nail Services
          </p>

          <h2 className="mt-2 text-3xl font-bold text-blue-600">
            3
          </h2>
        </div>

      </div>

      {/* Search */}
      <div className="mb-6 rounded-2xl bg-white p-5 shadow-sm">

        <input
          type="text"
          placeholder="Search services..."
          className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-pink-500"
        />

      </div>

      {/* Services */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

        {/* Hair Cut */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">

          <div className="flex items-start justify-between">

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-pink-50 text-2xl">
              💇‍♀️
            </div>

            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
              Active
            </span>

          </div>

          <h2 className="mt-5 text-xl font-bold text-gray-800">
            Hair Cut
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Professional haircut and styling service.
          </p>

          <div className="mt-5 flex items-center justify-between border-t pt-5">

            <div>
              <p className="text-xs text-gray-500">
                Duration
              </p>

              <p className="font-semibold">
                45 min
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs text-gray-500">
                Price
              </p>

              <p className="font-bold text-pink-600">
                Rs. 1,500
              </p>
            </div>

          </div>

          <div className="mt-5 flex gap-3">

            <button className="flex-1 rounded-xl border border-gray-200 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50">
              Edit
            </button>

            <button className="flex-1 rounded-xl border border-red-100 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50">
              Delete
            </button>

          </div>

        </div>

        {/* Hair Color */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">

          <div className="flex items-start justify-between">

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-50 text-2xl">
              🎨
            </div>

            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
              Active
            </span>

          </div>

          <h2 className="mt-5 text-xl font-bold text-gray-800">
            Hair Color
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Professional hair coloring and styling.
          </p>

          <div className="mt-5 flex items-center justify-between border-t pt-5">

            <div>
              <p className="text-xs text-gray-500">
                Duration
              </p>

              <p className="font-semibold">
                90 min
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs text-gray-500">
                Price
              </p>

              <p className="font-bold text-pink-600">
                Rs. 4,000
              </p>
            </div>

          </div>

          <div className="mt-5 flex gap-3">

            <button className="flex-1 rounded-xl border border-gray-200 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50">
              Edit
            </button>

            <button className="flex-1 rounded-xl border border-red-100 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50">
              Delete
            </button>

          </div>

        </div>

        {/* Facial */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">

          <div className="flex items-start justify-between">

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-2xl">
              ✨
            </div>

            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
              Active
            </span>

          </div>

          <h2 className="mt-5 text-xl font-bold text-gray-800">
            Facial
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Relaxing facial and skincare treatment.
          </p>

          <div className="mt-5 flex items-center justify-between border-t pt-5">

            <div>
              <p className="text-xs text-gray-500">
                Duration
              </p>

              <p className="font-semibold">
                60 min
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs text-gray-500">
                Price
              </p>

              <p className="font-bold text-pink-600">
                Rs. 2,500
              </p>
            </div>

          </div>

          <div className="mt-5 flex gap-3">

            <button className="flex-1 rounded-xl border border-gray-200 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50">
              Edit
            </button>

            <button className="flex-1 rounded-xl border border-red-100 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50">
              Delete
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}