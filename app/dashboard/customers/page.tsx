export default function CustomersPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6 lg:p-8">

      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Customers
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your Luxe Salon customers.
          </p>
        </div>

        <button className="rounded-xl bg-pink-600 px-5 py-3 font-semibold text-white transition hover:bg-pink-700">
          + Add Customer
        </button>

      </div>

      {/* Customer Stats */}
      <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Total Customers
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            156
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            New This Month
          </p>

          <h2 className="mt-2 text-3xl font-bold text-green-600">
            28
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">
            Returning Customers
          </p>

          <h2 className="mt-2 text-3xl font-bold text-pink-600">
            94
          </h2>
        </div>

      </div>

      {/* Search */}
      <div className="mb-6 rounded-2xl bg-white p-5 shadow-sm">

        <input
          type="text"
          placeholder="Search customer..."
          className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-pink-500"
        />

      </div>

      {/* Customers Table */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">

        <div className="overflow-x-auto">

          <table className="w-full text-left">

            <thead className="bg-gray-50">
              <tr className="text-sm text-gray-500">
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Phone</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Visits</th>
                <th className="px-6 py-4">Last Visit</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="px-6 py-5 font-semibold">
                  Sarah Khan
                </td>

                <td className="px-6 py-5 text-gray-600">
                  +92 300 1111111
                </td>

                <td className="px-6 py-5 text-gray-600">
                  sarah@email.com
                </td>

                <td className="px-6 py-5">
                  12
                </td>

                <td className="px-6 py-5 text-gray-600">
                  Aug 25, 2026
                </td>
              </tr>

              <tr className="border-b">
                <td className="px-6 py-5 font-semibold">
                  Ayesha Ali
                </td>

                <td className="px-6 py-5 text-gray-600">
                  +92 301 2222222
                </td>

                <td className="px-6 py-5 text-gray-600">
                  ayesha@email.com
                </td>

                <td className="px-6 py-5">
                  8
                </td>

                <td className="px-6 py-5 text-gray-600">
                  Aug 23, 2026
                </td>
              </tr>

              <tr className="border-b">
                <td className="px-6 py-5 font-semibold">
                  Maria
                </td>

                <td className="px-6 py-5 text-gray-600">
                  +92 302 3333333
                </td>

                <td className="px-6 py-5 text-gray-600">
                  maria@email.com
                </td>

                <td className="px-6 py-5">
                  15
                </td>

                <td className="px-6 py-5 text-gray-600">
                  Aug 20, 2026
                </td>
              </tr>

              <tr>
                <td className="px-6 py-5 font-semibold">
                  Emma
                </td>

                <td className="px-6 py-5 text-gray-600">
                  +92 303 4444444
                </td>

                <td className="px-6 py-5 text-gray-600">
                  emma@email.com
                </td>

                <td className="px-6 py-5">
                  5
                </td>

                <td className="px-6 py-5 text-gray-600">
                  Aug 18, 2026
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}