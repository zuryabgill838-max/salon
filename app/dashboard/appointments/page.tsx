export default function AppointmentsPage() {
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

        <button className="rounded-xl bg-pink-600 px-5 py-3 font-semibold text-white transition hover:bg-pink-700">
          + New Appointment
        </button>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Today</p>
          <h2 className="mt-2 text-3xl font-bold">24</h2>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Pending</p>
          <h2 className="mt-2 text-3xl font-bold text-yellow-500">5</h2>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Confirmed</p>
          <h2 className="mt-2 text-3xl font-bold text-green-600">16</h2>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Completed</p>
          <h2 className="mt-2 text-3xl font-bold text-blue-600">3</h2>
        </div>

      </div>

      {/* Appointments Table */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">

        <div className="border-b p-6">
          <h2 className="text-xl font-bold text-gray-800">
            Today's Appointments
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">

            <thead className="bg-gray-50">
              <tr className="text-sm text-gray-500">
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Service</th>
                <th className="px-6 py-4">Worker</th>
                <th className="px-6 py-4">Time</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="px-6 py-5 font-semibold">Sarah Khan</td>
                <td className="px-6 py-5 text-gray-600">Hair Cut</td>
                <td className="px-6 py-5 text-gray-600">Ayesha</td>
                <td className="px-6 py-5 text-gray-600">10:00 AM</td>
                <td className="px-6 py-5">
                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                    Confirmed
                  </span>
                </td>
              </tr>

              <tr className="border-b">
                <td className="px-6 py-5 font-semibold">Maria</td>
                <td className="px-6 py-5 text-gray-600">Facial</td>
                <td className="px-6 py-5 text-gray-600">Hina</td>
                <td className="px-6 py-5 text-gray-600">11:30 AM</td>
                <td className="px-6 py-5">
                  <span className="rounded-full bg-yellow-50 px-3 py-1 text-xs font-semibold text-yellow-600">
                    Pending
                  </span>
                </td>
              </tr>

              <tr className="border-b">
                <td className="px-6 py-5 font-semibold">Ayesha Ali</td>
                <td className="px-6 py-5 text-gray-600">Hair Color</td>
                <td className="px-6 py-5 text-gray-600">Sana</td>
                <td className="px-6 py-5 text-gray-600">01:00 PM</td>
                <td className="px-6 py-5">
                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                    Confirmed
                  </span>
                </td>
              </tr>

              <tr>
                <td className="px-6 py-5 font-semibold">Emma</td>
                <td className="px-6 py-5 text-gray-600">Manicure</td>
                <td className="px-6 py-5 text-gray-600">Zara</td>
                <td className="px-6 py-5 text-gray-600">03:30 PM</td>
                <td className="px-6 py-5">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                    Upcoming
                  </span>
                </td>
              </tr>

            </tbody>

          </table>
        </div>

      </div>

    </main>
  );
}