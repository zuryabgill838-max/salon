"use client";

import { useEffect, useMemo, useState } from "react";

type Appointment = {
  id: string;
  customerName?: string;
  customer?: string;
  serviceName?: string;
  service?: string;
  workerName?: string;
  worker?: string;
  date?: string;
  appointmentDate?: string;
  bookingDate?: string;
  time?: string;
  status?: string;
  price?: number | string;
  amount?: number | string;
  total?: number | string;
};

type Customer = {
  id: string;
  name?: string;
  phone?: string;
  email?: string;
};

type Worker = {
  id: string;
  name: string;
  role: string;
  status?: string;
  active?: boolean;
};

const readArray = <T,>(key: string): T[] => {
  if (typeof window === "undefined") return [];

  try {
    const data = JSON.parse(
      localStorage.getItem(key) || "[]"
    );

    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
};

export default function Dashboard() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [workers, setWorkers] = useState<Worker[]>([]);

  const loadDashboard = () => {
    setAppointments(readArray<Appointment>("appointments"));
    setCustomers(readArray<Customer>("customers"));
    setWorkers(readArray<Worker>("workers"));
  };

  useEffect(() => {
    loadDashboard();

    window.addEventListener("storage", loadDashboard);
    window.addEventListener(
      "salon-data-updated",
      loadDashboard
    );

    return () => {
      window.removeEventListener("storage", loadDashboard);
      window.removeEventListener(
        "salon-data-updated",
        loadDashboard
      );
    };
  }, []);

  const today = new Date().toISOString().slice(0, 10);

  const getAppointmentDate = (
    appointment: Appointment
  ) => {
    return (
      appointment.date ||
      appointment.appointmentDate ||
      appointment.bookingDate ||
      ""
    );
  };

  const todaysAppointments = useMemo(() => {
    return appointments.filter(
      (appointment) =>
        String(getAppointmentDate(appointment)).slice(
          0,
          10
        ) === today
    );
  }, [appointments, today]);

  const activeWorkers = useMemo(() => {
    return workers.filter(
      (worker) =>
        worker.status === "Active" ||
        worker.active === true ||
        (!worker.status && worker.active !== false)
    );
  }, [workers]);

  const todaysRevenue = useMemo(() => {
    return todaysAppointments.reduce(
      (total, appointment) => {
        const amount = Number(
          appointment.price ??
            appointment.amount ??
            appointment.total ??
            0
        );

        return (
          total +
          (Number.isFinite(amount) ? amount : 0)
        );
      },
      0
    );
  }, [todaysAppointments]);

  const pendingAppointments = appointments.filter(
    (appointment) =>
      String(appointment.status).toLowerCase() ===
      "pending"
  ).length;

  const confirmedAppointments = appointments.filter(
    (appointment) =>
      String(appointment.status).toLowerCase() ===
      "confirmed"
  ).length;

  const completedAppointments = appointments.filter(
    (appointment) =>
      String(appointment.status).toLowerCase() ===
      "completed"
  ).length;

  return (
    <main className="min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 hidden h-screen w-64 bg-white shadow-md lg:block">

        <div className="border-b px-6 py-6">
          <h1 className="text-2xl font-bold text-pink-600">
            Luxe Salon
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Admin Panel
          </p>
        </div>

        <nav className="px-4 py-6">

          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Main Menu
          </p>

          <div className="space-y-2">

            <a
              href="/dashboard"
              className="flex items-center gap-3 rounded-xl bg-pink-50 px-4 py-3 font-semibold text-pink-600"
            >
              <span>📊</span>
              Dashboard
            </a>

            <a
              href="/dashboard/appointments"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-600 hover:bg-gray-50"
            >
              <span>📅</span>
              Appointments
            </a>

            <a
              href="/dashboard/customers"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-600 hover:bg-gray-50"
            >
              <span>👥</span>
              Customers
            </a>

            <a
              href="/dashboard/workers"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-600 hover:bg-gray-50"
            >
              <span>💇‍♀️</span>
              Workers
            </a>

            <a
              href="/dashboard/services"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-600 hover:bg-gray-50"
            >
              <span>✨</span>
              Services
            </a>

          </div>

          <p className="mb-3 mt-10 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Settings
          </p>

          <a
            href="/dashboard/settings"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-600 hover:bg-gray-50"
          >
            <span>⚙️</span>
            Settings
          </a>

        </nav>

        <div className="absolute bottom-0 left-0 w-full border-t p-4">
          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-100 text-lg">
              👩🏻
            </div>

            <div>
              <p className="font-semibold text-gray-800">
                Salon Admin
              </p>

              <p className="text-xs text-gray-500">
                Administrator
              </p>
            </div>

          </div>
        </div>

      </aside>

      {/* Main */}
      <section className="lg:ml-64">

        {/* Header */}
        <header className="flex items-center justify-between border-b bg-white px-6 py-5 lg:px-8">

          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Dashboard
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Welcome back! Here's what's happening at Luxe Salon.
            </p>
          </div>

          <div className="flex items-center gap-4">

            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold text-gray-800">
                Admin
              </p>

              <p className="text-xs text-gray-500">
                Luxe Salon
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100">
              👩🏻
            </div>

          </div>

        </header>

        <div className="p-6 lg:p-8">

          {/* Welcome */}
          <div className="mb-8 rounded-2xl bg-gradient-to-r from-pink-600 to-pink-400 p-6 text-white shadow-sm">

            <p className="text-sm font-medium text-pink-100">
              Today
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Good morning, Admin! 👋
            </h2>

            <p className="mt-2 max-w-2xl text-sm text-pink-100">
              Manage your salon, workers, customers and
              appointments from one place.
            </p>

          </div>

          {/* Stats */}
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm text-gray-500">
                Today's Appointments
              </p>

              <h3 className="mt-2 text-3xl font-bold text-gray-800">
                {todaysAppointments.length}
              </h3>

              <p className="mt-4 text-sm text-gray-500">
                {appointments.length} total appointments
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm text-gray-500">
                Total Customers
              </p>

              <h3 className="mt-2 text-3xl font-bold text-gray-800">
                {customers.length}
              </h3>

              <p className="mt-4 text-sm text-gray-500">
                Customers saved
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm text-gray-500">
                Active Workers
              </p>

              <h3 className="mt-2 text-3xl font-bold text-gray-800">
                {activeWorkers.length}
              </h3>

              <p className="mt-4 text-sm text-gray-500">
                Active staff members
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm text-gray-500">
                Today's Revenue
              </p>

              <h3 className="mt-2 text-3xl font-bold text-gray-800">
                Rs. {todaysRevenue.toLocaleString()}
              </h3>

              <p className="mt-4 text-sm text-gray-500">
                From today's appointments
              </p>
            </div>

          </div>

          {/* Appointment Status */}
          <div className="mt-8 grid gap-5 sm:grid-cols-3">

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">
                Pending
              </p>

              <p className="mt-2 text-2xl font-bold text-yellow-500">
                {pendingAppointments}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">
                Confirmed
              </p>

              <p className="mt-2 text-2xl font-bold text-green-600">
                {confirmedAppointments}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">
                Completed
              </p>

              <p className="mt-2 text-2xl font-bold text-blue-600">
                {completedAppointments}
              </p>
            </div>

          </div>

          {/* Recent Appointments */}
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Today's Appointments
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Live appointments from localStorage
                </p>
              </div>

              <a
                href="/dashboard/appointments"
                className="text-sm font-semibold text-pink-600 hover:text-pink-700"
              >
                View All
              </a>

            </div>

            <div className="mt-6 overflow-x-auto">

              <table className="w-full text-left">

                <thead>
                  <tr className="border-b text-sm text-gray-500">

                    <th className="pb-4">
                      Customer
                    </th>

                    <th className="pb-4">
                      Service
                    </th>

                    <th className="pb-4">
                      Worker
                    </th>

                    <th className="pb-4">
                      Time
                    </th>

                    <th className="pb-4">
                      Status
                    </th>

                  </tr>
                </thead>

                <tbody>

                  {todaysAppointments.length === 0 ? (
                    <tr>
                      <td
                        colSpan={5}
                        className="py-10 text-center text-gray-500"
                      >
                        No appointments for today.
                      </td>
                    </tr>
                  ) : (
                    todaysAppointments
                      .slice(0, 5)
                      .map((appointment) => (
                        <tr
                          key={appointment.id}
                          className="border-b last:border-0"
                        >

                          <td className="py-5 font-semibold text-gray-800">
                            {appointment.customerName ||
                              appointment.customer ||
                              "—"}
                          </td>

                          <td className="py-5 text-gray-600">
                            {appointment.serviceName ||
                              appointment.service ||
                              "—"}
                          </td>

                          <td className="py-5 text-gray-600">
                            {appointment.workerName ||
                              appointment.worker ||
                              "—"}
                          </td>

                          <td className="py-5 text-gray-600">
                            {appointment.time || "—"}
                          </td>

                          <td className="py-5">
                            <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600">
                              {appointment.status ||
                                "Pending"}
                            </span>
                          </td>

                        </tr>
                      ))
                  )}

                </tbody>

              </table>

            </div>

          </div>

          {/* Workers */}
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Salon Workers
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Active workers
                </p>
              </div>

              <a
                href="/dashboard/workers"
                className="text-sm font-semibold text-pink-600 hover:text-pink-700"
              >
                Manage
              </a>

            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {activeWorkers.length === 0 ? (
                <div className="py-8 text-gray-500">
                  No active workers found.
                </div>
              ) : (
                activeWorkers.map((worker) => (
                  <div
                    key={worker.id}
                    className="rounded-xl border border-gray-100 p-4"
                  >

                    <div className="flex items-center gap-3">

                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-100">
                        👩🏻
                      </div>

                      <div>
                        <p className="font-semibold text-gray-800">
                          {worker.name}
                        </p>

                        <p className="text-xs text-gray-500">
                          {worker.role}
                        </p>
                      </div>

                    </div>

                    <div className="mt-3 flex items-center gap-2 text-xs text-green-600">
                      <span className="h-2 w-2 rounded-full bg-green-500" />
                      Active
                    </div>

                  </div>
                ))
              )}

            </div>

          </div>

          {/* Quick Actions */}
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">

            <h2 className="text-xl font-bold text-gray-800">
              Quick Actions
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              <a
                href="/dashboard/appointments"
                className="rounded-xl border border-gray-200 p-5 transition hover:border-pink-300 hover:bg-pink-50"
              >
                <span className="text-2xl">
                  📅
                </span>

                <h3 className="mt-3 font-semibold text-gray-800">
                  Manage Appointments
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  View and manage bookings
                </p>
              </a>

              <a
                href="/dashboard/workers"
                className="rounded-xl border border-gray-200 p-5 transition hover:border-pink-300 hover:bg-pink-50"
              >
                <span className="text-2xl">
                  👩‍💼
                </span>

                <h3 className="mt-3 font-semibold text-gray-800">
                  Manage Workers
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Manage salon staff
                </p>
              </a>

              <a
                href="/dashboard/customers"
                className="rounded-xl border border-gray-200 p-5 transition hover:border-pink-300 hover:bg-pink-50"
              >
                <span className="text-2xl">
                  👥
                </span>

                <h3 className="mt-3 font-semibold text-gray-800">
                  Customers
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  View customer records
                </p>
              </a>

              <a
                href="/dashboard/services"
                className="rounded-xl border border-gray-200 p-5 transition hover:border-pink-300 hover:bg-pink-50"
              >
                <span className="text-2xl">
                  ✨
                </span>

                <h3 className="mt-3 font-semibold text-gray-800">
                  Salon Services
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Manage salon services
                </p>
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}