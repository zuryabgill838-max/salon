"use client";

import { useEffect, useState } from "react";

type Service = {
  id: string;
  name: string;
  category: string;
  price: number;
  duration: number;
  description: string;
  active: boolean;
};

const STORAGE_KEY = "services";

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");

  const loadServices = () => {
    try {
      const saved = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
      );

      setServices(Array.isArray(saved) ? saved : []);
    } catch {
      setServices([]);
    }
  };

  useEffect(() => {
   loadServices();

    window.addEventListener("storage", loadServices);
    window.addEventListener(
      "salon-data-updated",
      loadServices
    );

    return () => {
      window.removeEventListener("storage", loadServices);
      window.removeEventListener(
        "salon-data-updated",
        loadServices
      );
    };
  }, []);

  const saveServices = (newServices: Service[]) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(newServices)
    );

    setServices(newServices);

    window.dispatchEvent(
      new Event("salon-data-updated")
    );
  };

  const handleAddService = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Please enter service name.");
      return;
    }

    if (!price) {
      alert("Please enter service price.");
      return;
    }

    if (!duration) {
      alert("Please enter service duration.");
      return;
    }

    const newService: Service = {
      id: Date.now().toString(),
      name: name.trim(),
      category: category.trim() || "General",
      price: Number(price),
      duration: Number(duration),
      description: description.trim(),
      active: true,
    };

    const updatedServices = [
      ...services,
      newService,
    ];

    saveServices(updatedServices);

    setName("");
    setCategory("");
    setPrice("");
    setDuration("");
    setDescription("");

    setShowForm(false);
  };

  const deleteService = (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this service?"
    );

    if (!confirmed) return;

    const updatedServices = services.filter(
      (service) => service.id !== id
    );

    saveServices(updatedServices);
  };

  const toggleService = (id: string) => {
    const updatedServices = services.map(
      (service) =>
        service.id === id
          ? {
              ...service,
              active: !service.active,
            }
          : service
    );

    saveServices(updatedServices);
  };

  const activeServices = services.filter(
    (service) => service.active
  );

  const inactiveServices = services.filter(
    (service) => !service.active
  );

  const categories = [
    ...new Set(
      services
        .map((service) => service.category)
        .filter(Boolean)
    ),
  ];

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

        <button
          type="button"
          onClick={() => setShowForm(!showForm)}
          className="rounded-xl bg-pink-600 px-5 py-3 font-semibold text-white transition hover:bg-pink-700"
        >
          {showForm
            ? "Close"
            : "+ Add Service"}
        </button>

      </div>

      {/* Add Service Form */}
      {showForm && (
        <div className="mb-8 rounded-2xl bg-white p-6 shadow-sm">

          <h2 className="mb-6 text-xl font-bold text-gray-800">
            Add New Service
          </h2>

          <form
            onSubmit={handleAddService}
            className="grid gap-5 md:grid-cols-2"
          >

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Service Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                placeholder="e.g. Hair Cut"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-pink-500"
              />
            </div>

            {/* Category */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Category
              </label>

              <input
                type="text"
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value)
                }
                placeholder="e.g. Hair"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-pink-500"
              />
            </div>

            {/* Price */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Price
              </label>

              <input
                type="number"
                min="0"
                value={price}
                onChange={(e) =>
                  setPrice(e.target.value)
                }
                placeholder="e.g. 1500"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-pink-500"
              />
            </div>

            {/* Duration */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Duration (minutes)
              </label>

              <input
                type="number"
                min="1"
                value={duration}
                onChange={(e) =>
                  setDuration(e.target.value)
                }
                placeholder="e.g. 60"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-pink-500"
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">

              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Description
              </label>

              <textarea
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
                placeholder="Describe this service..."
                rows={4}
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

      {/* Stats */}
      <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Total Services
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {services.length}
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Active Services
          </p>

          <h2 className="mt-2 text-3xl font-bold text-green-600">
            {activeServices.length}
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Inactive Services
          </p>

          <h2 className="mt-2 text-3xl font-bold text-yellow-500">
            {inactiveServices.length}
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Categories
          </p>

          <h2 className="mt-2 text-3xl font-bold text-purple-600">
            {categories.length}
          </h2>
        </div>

      </div>

      {/* Services */}
      <div className="rounded-2xl bg-white p-6 shadow-sm">

        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800">
            All Services
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Services saved in your salon system.
          </p>
        </div>

        {services.length === 0 ? (

          <div className="rounded-xl border border-dashed border-gray-300 py-16 text-center">

            <div className="text-4xl">
              ✨
            </div>

            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              No services found
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Click "Add Service" to create your first service.
            </p>

          </div>

        ) : (

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {services.map((service) => (

              <div
                key={service.id}
                className="rounded-2xl border border-gray-100 p-6 shadow-sm"
              >

                <div className="flex items-start justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-50 text-xl">
                    ✨
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      service.active
                        ? "bg-green-50 text-green-600"
                        : "bg-yellow-50 text-yellow-600"
                    }`}
                  >
                    {service.active
                      ? "Active"
                      : "Inactive"}
                  </span>

                </div>

                <h3 className="mt-5 text-lg font-bold text-gray-800">
                  {service.name}
                </h3>

                <p className="mt-1 text-sm text-pink-600">
                  {service.category}
                </p>

                {service.description && (
                  <p className="mt-3 text-sm text-gray-500">
                    {service.description}
                  </p>
                )}

                <div className="mt-5 border-t pt-5">

                  <div className="flex justify-between">

                    <div>
                      <p className="text-xs text-gray-500">
                        Price
                      </p>

                      <p className="mt-1 font-bold text-gray-800">
                        Rs.{" "}
                        {service.price.toLocaleString()}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-xs text-gray-500">
                        Duration
                      </p>

                      <p className="mt-1 font-semibold text-gray-800">
                        {service.duration} min
                      </p>
                    </div>

                  </div>

                </div>

                {/* Actions */}
                <div className="mt-5 flex gap-2">

                  <button
                    type="button"
                    onClick={() =>
                      toggleService(service.id)
                    }
                    className="flex-1 rounded-xl border border-gray-200 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                  >
                    {service.active
                      ? "Deactivate"
                      : "Activate"}
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      deleteService(service.id)
                    }
                    className="rounded-xl border border-red-100 px-4 py-2 text-sm font-semibold text-red-500 hover:bg-red-50"
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </main>
  );
}