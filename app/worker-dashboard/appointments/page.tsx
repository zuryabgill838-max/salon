export default function WorkerAppointmentsPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6 lg:p-8">

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          My Appointments
        </h1>

        <p className="mt-2 text-gray-500">
          View and manage your appointments.
        </p>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-5 sm:grid-cols-3">

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Today's Appointments
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            6
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Completed
          </p>

          <h2 className="mt-2 text-3xl font-bold text-green-600">
            3
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Pending
          </p>

          <h2 className="mt-2 text-3xl font-bold text-yellow-500">
            1
          </h2>
        </div>

      </div>

      {/* Appointments */}
      <div className="rounded-2xl bg-white shadow-sm">

        <div className="border-b p-6">
          <h2 className="text-xl font-bold">
            Today's Appointments
          </h2>
        </div>

        <div className="overflow-x-auto">

          <table className="w-full text-left">

            <thead className="bg-gray-50">
              <tr className="text-sm text-gray-500">
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Service</th>
                <th className="px-6 py-4">Time</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="px-6 py-5 font-semibold">
                  Sarah Khan
                </td>

                <td className="px-6 py-5 text-gray-600">
                  Hair Cut
                </td>

                <td className="px-6 py-5">
                  10:00 AM
                </td>

                <td className="px-6 py-5">
                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                    Confirmed
                  </span>
                </td>

                <td className="px-6 py-5">
                  <button className="rounded-lg bg-pink-600 px-4 py-2 text-sm font-semibold text-white">
                    View
                  </button>
                </td>
              </tr>

              <tr className="border-b">
                <td className="px-6 py-5 font-semibold">
                  Maria
                </td>

                <td className="px-6 py-5 text-gray-600">
                  Hair Styling
                </td>

                <td className="px-6 py-5">
                  11:30 AM
                </td>

                <td className="px-6 py-5">
                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                    Confirmed
                  </span>
                </td>

                <td className="px-6 py-5">
                  <button className="rounded-lg bg-pink-600 px-4 py-2 text-sm font-semibold text-white">
                    View
                  </button>
                </td>
              </tr>

              <tr className="border-b">
                <td className="px-6 py-5 font-semibold">
                  Ayesha Ali
                </td>

                <td className="px-6 py-5 text-gray-600">
                  Hair Color
                </td>

                <td className="px-6 py-5">
                  1:00 PM
                </td>

                <td className="px-6 py-5">
                  <span className="rounded-full bg-yellow-50 px-3 py-1 text-xs font-semibold text-yellow-600">
                    Pending
                  </span>
                </td>

                <td className="px-6 py-5">
                  <button className="rounded-lg bg-pink-600 px-4 py-2 text-sm font-semibold text-white">
                    View
                  </button>
                </td>
              </tr>

              <tr>
                <td className="px-6 py-5 font-semibold">
                  Emma
                </td>

                <td className="px-6 py-5 text-gray-600">
                  Hair Treatment
                </td>

                <td className="px-6 py-5">
                  3:30 PM
                </td>

                <td className="px-6 py-5">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                    Upcoming
                  </span>
                </td>

                <td className="px-6 py-5">
                  <button className="rounded-lg bg-pink-600 px-4 py-2 text-sm font-semibold text-white">
                    View
                  </button>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}