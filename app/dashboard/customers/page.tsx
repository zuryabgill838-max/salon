"use client";

import { useEffect, useState } from "react";

type Customer = {
  id: string;
  name: string;
  phone: string;
  email: string;
  visits: number;
  createdAt: string;
};

const STORAGE_KEY = "customers";

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const loadCustomers = () => {
    try {
      const saved = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
      );

      setCustomers(Array.isArray(saved) ? saved : []);
    } catch {
      setCustomers([]);
    }
  };

  useEffect(() => {
    loadCustomers();

    window.addEventListener("storage", loadCustomers);
    window.addEventListener("salon-data-updated", loadCustomers);

    return () => {
      window.removeEventListener("storage", loadCustomers);
      window.removeEventListener(
        "salon-data-updated",
        loadCustomers
      );
    };
  }, []);

  const saveCustomers = (updated: Customer[]) => {
    setCustomers(updated);
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updated)
    );

    window.dispatchEvent(
      new Event("salon-data-updated")
    );
  };

  const resetForm = () => {
    setForm({
      name: "",
      phone: "",
      email: "",
    });

    setEditingId(null);
    setShowForm(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.phone.trim()) {
      alert("Please enter customer name and phone number.");
      return;
    }

    if (editingId) {
      const updated = customers.map((customer) =>
        customer.id === editingId
          ? {
              ...customer,
              name: form.name.trim(),
              phone: form.phone.trim(),
              email: form.email.trim(),
            }
          : customer
      );

      saveCustomers(updated);
    } else {
      const newCustomer: Customer = {
        id: crypto.randomUUID(),
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        visits: 0,
        createdAt: new Date().toISOString(),
      };

      saveCustomers([...customers, newCustomer]);
    }

    resetForm();
  };

  const editCustomer = (customer: Customer) => {
    setForm({
      name: customer.name,
      phone: customer.phone,
      email: customer.email,
    });

    setEditingId(customer.id);
    setShowForm(true);
  };

  const deleteCustomer = (id: string) => {
    if (!confirm("Delete this customer?")) return;

    const updated = customers.filter(
      (customer) => customer.id !== id
    );

    saveCustomers(updated);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6 lg:p-8">

      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Customers
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your salon customers.
          </p>
        </div>

        <button
          onClick={() => {
            if (showForm) {
              resetForm();
            } else {
              setShowForm(true);
            }
          }}
          className="rounded-xl bg-pink-600 px-5 py-3 font-semibold text-white transition hover:bg-pink-700"
        >
          {showForm ? "Cancel" : "+ Add Customer"}
        </button>
      </div>

      {/* Add / Edit Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mb-8 rounded-2xl bg-white p-6 shadow-sm"
        >
          <h2 className="mb-5 text-xl font-bold text-gray-800">
            {editingId ? "Edit Customer" : "Add New Customer"}
          </h2>

          <div className="grid gap-4 md:grid-cols-3">

            <input
              type="text"
              placeholder="Customer name"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-pink-400"
            />

            <input
              type="tel"
              placeholder="Phone number"
              value={form.phone}
              onChange={(e) =>
                setForm({
                  ...form,
                  phone: e.target.value,
                })
              }
              className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-pink-400"
            />

            <input
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-pink-400"
            />

          </div>

          <div className="mt-5 flex gap-3">
            <button
              type="submit"
              className="rounded-xl bg-pink-600 px-5 py-3 font-semibold text-white hover:bg-pink-700"
            >
              {editingId ? "Update Customer" : "Save Customer"}
            </button>

            <button
              type="button"
              onClick={resetForm}
              className="rounded-xl border border-gray-200 px-5 py-3 font-semibold text-gray-600 hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Stats */}
      <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Total Customers
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-800">
            {customers.length}
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Total Visits
          </p>

          <h2 className="mt-2 text-3xl font-bold text-pink-600">
            {customers.reduce(
              (total, customer) =>
                total + Number(customer.visits || 0),
              0
            )}
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            New Customers
          </p>

          <h2 className="mt-2 text-3xl font-bold text-green-600">
            {
              customers.filter((customer) => {
                const created = new Date(customer.createdAt);
                const now = new Date();

                return (
                  created.getMonth() === now.getMonth() &&
                  created.getFullYear() === now.getFullYear()
                );
              }).length
            }
          </h2>
        </div>

      </div>

      {/* Customers Table */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">

        <div className="border-b p-6">
          <h2 className="text-xl font-bold text-gray-800">
            All Customers
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Customer records saved in localStorage.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">

            <thead className="bg-gray-50">
              <tr className="text-sm text-gray-500">

                <th className="px-6 py-4">
                  Customer
                </th>

                <th className="px-6 py-4">
                  Phone
                </th>

                <th className="px-6 py-4">
                  Email
                </th>

                <th className="px-6 py-4">
                  Visits
                </th>

                <th className="px-6 py-4">
                  Actions
                </th>

              </tr>
            </thead>

            <tbody>

              {customers.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-12 text-center text-gray-500"
                  >
                    No customers yet. Add your first customer.
                  </td>
                </tr>
              ) : (
                customers.map((customer) => (
                  <tr
                    key={customer.id}
                    className="border-b last:border-b-0"
                  >

                    <td className="px-6 py-5 font-semibold text-gray-800">
                      {customer.name}
                    </td>

                    <td className="px-6 py-5 text-gray-600">
                      {customer.phone}
                    </td>

                    <td className="px-6 py-5 text-gray-600">
                      {customer.email || "—"}
                    </td>

                    <td className="px-6 py-5 text-gray-600">
                      {customer.visits}
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex gap-2">

                        <button
                          onClick={() =>
                            editCustomer(customer)
                          }
                          className="rounded-lg bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() =>
                            deleteCustomer(customer.id)
                          }
                          className="rounded-lg bg-red-50 px-3 py-2 text-sm font-semibold text-red-500 hover:bg-red-100"
                        >
                          Delete
                        </button>

                      </div>
                    </td>

                  </tr>
                ))
              )}

            </tbody>

          </table>
        </div>

      </div>

    </main>
  );
}
