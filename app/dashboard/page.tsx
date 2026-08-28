export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 hidden h-screen w-64 bg-white shadow-md lg:block">

        {/* Logo */}
        <div className="border-b px-6 py-6">
          <h1 className="text-2xl font-bold text-pink-600">
            Luxe Salon
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Admin Panel
          </p>
        </div>

        {/* Navigation */}
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
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-600 transition hover:bg-gray-50"
            >
              <span>📅</span>
              Appointments
            </a>

            <a
              href="/dashboard/customers"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-600 transition hover:bg-gray-50"
            >
              <span>👥</span>
              Customers
            </a>

            <a
              href="/dashboard/workers"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-600 transition hover:bg-gray-50"
            >
              <span>💇‍♀️</span>
              Workers
            </a>

            <a
              href="/dashboard/services"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-600 transition hover:bg-gray-50"
            >
              <span>✨</span>
              Services
            </a>

          </div>

          <p className="mb-3 mt-10 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Settings
          </p>

          <div className="space-y-2">

            <a
              href="/dashboard/settings"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-600 transition hover:bg-gray-50"
            >
              <span>⚙️</span>
              Settings
            </a>

          </div>

        </nav>

        {/* Admin Profile */}
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

      {/* Main Content */}
      <section className="lg:ml-64">

        {/* Top Header */}
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

            <button className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50">
              🔔
            </button>

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

        {/* Dashboard Content */}
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

            {/* Appointments */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-gray-500">
                    Today's Appointments
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-gray-800">
                    24
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-50 text-xl">
                  📅
                </div>

              </div>

              <p className="mt-4 text-sm text-green-600">
                ↑ 12% from yesterday
              </p>

            </div>

            {/* Customers */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-gray-500">
                    Total Customers
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-gray-800">
                    156
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-xl">
                  👥
                </div>

              </div>

              <p className="mt-4 text-sm text-green-600">
                ↑ 8 new this week
              </p>

            </div>

            {/* Workers */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-gray-500">
                    Active Workers
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-gray-800">
                    8
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl">
                  💇‍♀️
                </div>

              </div>

              <p className="mt-4 text-sm text-gray-500">
                6 working today
              </p>

            </div>

            {/* Revenue */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-gray-500">
                    Today's Revenue
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-gray-800">
                    Rs. 45,000
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-xl">
                  💰
                </div>

              </div>

              <p className="mt-4 text-sm text-green-600">
                ↑ 15% from yesterday
              </p>

            </div>

          </div>

          {/* Lower Section */}
          <div className="mt-8 grid gap-8 xl:grid-cols-3">

            {/* Recent Appointments */}
            <div className="xl:col-span-2 rounded-2xl bg-white p-6 shadow-sm">

              <div className="flex items-center justify-between">

                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    Recent Appointments
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Today's upcoming appointments
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
                      <th className="pb-4 font-medium">
                        Customer
                      </th>

                      <th className="pb-4 font-medium">
                        Service
                      </th>

                      <th className="pb-4 font-medium">
                        Worker
                      </th>

                      <th className="pb-4 font-medium">
                        Time
                      </th>

                      <th className="pb-4 font-medium">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-sm">

                    <tr className="border-b">
                      <td className="py-5 font-semibold text-gray-800">
                        Sarah Khan
                      </td>

                      <td className="py-5 text-gray-600">
                        Hair Cut
                      </td>

                      <td className="py-5 text-gray-600">
                        Ayesha
                      </td>

                      <td className="py-5 text-gray-600">
                        10:00 AM
                      </td>

                      <td className="py-5">
                        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
                          Confirmed
                        </span>
                      </td>
                    </tr>

                    <tr className="border-b">
                      <td className="py-5 font-semibold text-gray-800">
                        Maria
                      </td>

                      <td className="py-5 text-gray-600">
                        Facial
                      </td>

                      <td className="py-5 text-gray-600">
                        Hina
                      </td>

                      <td className="py-5 text-gray-600">
                        11:30 AM
                      </td>

                      <td className="py-5">
                        <span className="rounded-full bg-yellow-50 px-3 py-1 text-xs font-medium text-yellow-600">
                          Pending
                        </span>
                      </td>
                    </tr>

                    <tr className="border-b">
                      <td className="py-5 font-semibold text-gray-800">
                        Ayesha Ali
                      </td>

                      <td className="py-5 text-gray-600">
                        Hair Color
                      </td>

                      <td className="py-5 text-gray-600">
                        Sana
                      </td>

                      <td className="py-5 text-gray-600">
                        01:00 PM
                      </td>

                      <td className="py-5">
                        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
                          Confirmed
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td className="py-5 font-semibold text-gray-800">
                        Emma
                      </td>

                      <td className="py-5 text-gray-600">
                        Manicure
                      </td>

                      <td className="py-5 text-gray-600">
                        Zara
                      </td>

                      <td className="py-5 text-gray-600">
                        03:30 PM
                      </td>

                      <td className="py-5">
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                          Upcoming
                        </span>
                      </td>
                    </tr>

                  </tbody>

                </table>

              </div>

            </div>

            {/* Workers */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">

              <div className="flex items-center justify-between">

                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    Salon Workers
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Workers currently active
                  </p>
                </div>

                <a
                  href="/dashboard/workers"
                  className="text-sm font-semibold text-pink-600 hover:text-pink-700"
                >
                  Manage
                </a>

              </div>

              <div className="mt-6 space-y-5">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-100">
                      👩🏻
                    </div>

                    <div>
                      <p className="font-semibold text-gray-800">
                        Ayesha
                      </p>

                      <p className="text-xs text-gray-500">
                        Hair Stylist
                      </p>
                    </div>

                  </div>

                  <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

                </div>

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-100">
                      👩🏼
                    </div>

                    <div>
                      <p className="font-semibold text-gray-800">
                        Hina
                      </p>

                      <p className="text-xs text-gray-500">
                        Beautician
                      </p>
                    </div>

                  </div>

                  <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

                </div>

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100">
                      👩🏻
                    </div>

                    <div>
                      <p className="font-semibold text-gray-800">
                        Sana
                      </p>

                      <p className="text-xs text-gray-500">
                        Hair Colorist
                      </p>
                    </div>

                  </div>

                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />

                </div>

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100">
                      👩🏼
                    </div>

                    <div>
                      <p className="font-semibold text-gray-800">
                        Zara
                      </p>

                      <p className="text-xs text-gray-500">
                        Nail Artist
                      </p>
                    </div>

                  </div>

                  <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

                </div>

              </div>

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