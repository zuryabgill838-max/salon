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

const getAppointments = (): Appointment[] => {
  try {
    const data = JSON.parse(
      localStorage.getItem("appointments") || "[]"
    );

    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
};

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const loadAppointments = () => {
    setAppointments(getAppointments());
  };

  useEffect(() => {
    loadAppointments();

    window.addEventListener("storage", loadAppointments);
    window.addEventListener(
      "salon-data-updated",
      loadAppointments
    );

    return () => {
      window.removeEventListener("storage", loadAppointments);
      window.removeEventListener(
        "salon-data-updated",
        loadAppointments
      );
    };
  }, []);

  const today = new Date().toISOString().slice(0, 10);

  const getDate = (item: Appointment) =>
    item.date ||
    item.appointmentDate ||
    item.bookingDate ||
    "";

  const todaysAppointments = useMemo(() => {
    return appointments.filter(
      (item) =>
        String(getDate(item)).slice(0, 10) === today
    );
  }, [appointments, today]);

  const pending = appointments.filter(
    (item) =>
      String(item.status).toLowerCase() === "pending"
  ).length;

  const confirmed = appointments.filter(
    (item) =>
      String(item.status).toLowerCase() === "confirmed"
  ).length;

  const completed = appointments.filter(
    (item) =>
      String(item.status).toLowerCase() === "completed"
  ).length;

  const statusStyle = (status?: string) => {
    switch (String(status).toLowerCase()) {
      case "confirmed":
        return "bg-green-50 text-green-600";

      case "completed":
        return "bg-blue-50 text-blue-600";

      case "cancelled":
      case "canceled":
        return "bg-red-50 text-red-600";

      case "pending":
        return "bg-yellow-50 text-yellow-600";

      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6 lg:p-8">

      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Appointments
          </h1>

          <p className="mt-2 text-gray-500">
            Manage all Luxe Salon appointments.
          </p>
        </div>

        <a
          href="/booking"
          className="rounded-xl bg-pink-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-pink-700"
        >
          + New Appointment
        </a>

      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Today
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {todaysAppointments.length}
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Pending
          </p>

          <h2 className="mt-2 text-3xl font-bold text-yellow-500">
            {pending}
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Confirmed
          </p>

          <h2 className="mt-2 text-3xl font-bold text-green-600">
            {confirmed}
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Completed
          </p>

          <h2 className="mt-2 text-3xl font-bold text-blue-600">
            {completed}
          </h2>
        </div>

      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">

        <div className="border-b p-6">
          <h2 className="text-xl font-bold text-gray-800">
            Today's Appointments
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {appointments.length} total appointments saved
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
                  Service
                </th>

                <th className="px-6 py-4">
                  Worker
                </th>

                <th className="px-6 py-4">
                  Date
                </th>

                <th className="px-6 py-4">
                  Time
                </th>

                <th className="px-6 py-4">
                  Status
                </th>

              </tr>
            </thead>

            <tbody>

              {todaysAppointments.length === 0 ? (

                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-12 text-center text-gray-500"
                  >
                    No appointments for today.
                  </td>
                </tr>

              ) : (

                todaysAppointments.map((appointment) => (

                  <tr
                    key={appointment.id}
                    className="border-b last:border-0"
                  >

                    <td className="px-6 py-5 font-semibold text-gray-800">
                      {appointment.customerName ||
                        appointment.customer ||
                        "—"}
                    </td>

                    <td className="px-6 py-5 text-gray-600">
                      {appointment.serviceName ||
                        appointment.service ||
                        "—"}
                    </td>

                    <td className="px-6 py-5 text-gray-600">
                      {appointment.workerName ||
                        appointment.worker ||
                        "—"}
                    </td>

                    <td className="px-6 py-5 text-gray-600">
                      {getDate(appointment)
                        ? String(getDate(appointment)).slice(0, 10)
                        : "—"}
                    </td>

                    <td className="px-6 py-5 text-gray-600">
                      {appointment.time || "—"}
                    </td>

                    <td className="px-6 py-5">

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyle(
                          appointment.status
                        )}`}
                      >
                        {appointment.status || "Pending"}
                      </span>

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