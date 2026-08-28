export default function WorkerDashboard() {
  return (
    <main className="min-h-screen bg-gray-100 p-6 lg:p-8">

      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-medium text-pink-600">
            Luxe Salon
          </p>

          <h1 className="mt-1 text-3xl font-bold text-gray-800">
            Worker Dashboard
          </h1>

          <p className="mt-2 text-gray-500">
            Welcome back, Ayesha! Here is your work summary.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-xl bg-white px-4 py-3 shadow-sm">
            🔔
          </button>

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-100 text-xl">
            👩🏻
          </div>
        </div>
      </div>

      {/* Worker Profile Card */}
      <div className="mb-8 rounded-2xl bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-pink-100 text-3xl">
            👩🏻
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Ayesha
            </h2>

            <p className="mt-1 text-gray-500">
              Hair Stylist
            </p>

            <span className="mt-3 inline-block rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
              ● Active
            </span>
          </div>

        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {/* Appointments */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Today's Appointments
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-800">
                6
              </h2>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-50 text-xl">
              📅
            </div>

          </div>
        </div>

        {/* Completed */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Completed
              </p>

              <h2 className="mt-2 text-3xl font-bold text-green-600">
                3
              </h2>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-xl">
              ✓
            </div>

          </div>
        </div>

        {/* Upcoming */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Upcoming
              </p>

              <h2 className="mt-2 text-3xl font-bold text-blue-600">
                3
              </h2>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl">
              🕐
            </div>

          </div>
        </div>

        {/* Working Hours */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Working Hours
              </p>

              <h2 className="mt-2 text-3xl font-bold text-purple-600">
                8h
              </h2>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-xl">
              ⏰
            </div>

          </div>
        </div>

      </div>

      {/* Main Section */}
      <div className="mt-8 grid gap-6 lg:grid-cols-3">

        {/* Appointments */}
        <div className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-2">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Today's Appointments
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Your scheduled customers
              </p>
            </div>

            <a
              href="/worker-dashboard/appointments"
              className="text-sm font-semibold text-pink-600 hover:text-pink-700"
            >
              View All
            </a>

          </div>

          <div className="mt-6 space-y-4">

            {/* Appointment 1 */}
            <div className="flex flex-col gap-4 rounded-xl bg-gray-50 p-4 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
                  👩🏻
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800">
                    Sarah Khan
                  </h3>

                  <p className="text-sm text-gray-500">
                    Hair Cut
                  </p>
                </div>

              </div>

              <div className="text-sm font-semibold text-gray-700">
                10:00 AM
              </div>

              <span className="w-fit rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                Confirmed
              </span>

            </div>

            {/* Appointment 2 */}
            <div className="flex flex-col gap-4 rounded-xl bg-gray-50 p-4 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  👩🏼
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800">
                    Maria
                  </h3>

                  <p className="text-sm text-gray-500">
                    Hair Styling
                  </p>
                </div>

              </div>

              <div className="text-sm font-semibold text-gray-700">
                11:30 AM
              </div>

              <span className="w-fit rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                Confirmed
              </span>

            </div>

            {/* Appointment 3 */}
            <div className="flex flex-col gap-4 rounded-xl bg-gray-50 p-4 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  👩🏻
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800">
                    Ayesha Ali
                  </h3>

                  <p className="text-sm text-gray-500">
                    Hair Color
                  </p>
                </div>

              </div>

              <div className="text-sm font-semibold text-gray-700">
                1:00 PM
              </div>

              <span className="w-fit rounded-full bg-yellow-50 px-3 py-1 text-xs font-semibold text-yellow-600">
                Pending
              </span>

            </div>

            {/* Appointment 4 */}
            <div className="flex flex-col gap-4 rounded-xl bg-gray-50 p-4 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  👩🏼
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800">
                    Emma
                  </h3>

                  <p className="text-sm text-gray-500">
                    Hair Treatment
                  </p>
                </div>

              </div>

              <div className="text-sm font-semibold text-gray-700">
                3:30 PM
              </div>

              <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                Upcoming
              </span>

            </div>

          </div>

        </div>

        {/* Schedule */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-xl font-bold text-gray-800">
                My Schedule
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Today's working hours
              </p>
            </div>

            <span className="text-xl">
              🕐
            </span>

          </div>

          <div className="mt-6 space-y-5">

            <div className="flex justify-between border-b pb-4">
              <span className="text-gray-500">
                Start
              </span>

              <span className="font-semibold">
                10:00 AM
              </span>
            </div>

            <div className="flex justify-between border-b pb-4">
              <span className="text-gray-500">
                Break
              </span>

              <span className="font-semibold">
                1:00 PM
              </span>
            </div>

            <div className="flex justify-between border-b pb-4">
              <span className="text-gray-500">
                Break End
              </span>

              <span className="font-semibold">
                2:00 PM
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">
                End
              </span>

              <span className="font-semibold">
                6:00 PM
              </span>
            </div>

          </div>

          <a
            href="/worker-dashboard/schedule"
            className="mt-6 block rounded-xl bg-pink-600 py-3 text-center font-semibold text-white hover:bg-pink-700"
          >
            View Full Schedule
          </a>

        </div>

      </div>

      {/* Quick Actions */}
      <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">

        <h2 className="text-xl font-bold text-gray-800">
          Quick Actions
        </h2>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <a
            href="/worker-dashboard/appointments"
            className="rounded-xl border border-gray-200 p-5 transition hover:border-pink-300 hover:bg-pink-50"
          >
            <div className="text-2xl">
              📅
            </div>

            <h3 className="mt-3 font-bold">
              My Appointments
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              View your upcoming appointments.
            </p>
          </a>

          <a
            href="/worker-dashboard/schedule"
            className="rounded-xl border border-gray-200 p-5 transition hover:border-pink-300 hover:bg-pink-50"
          >
            <div className="text-2xl">
              🕐
            </div>

            <h3 className="mt-3 font-bold">
              My Schedule
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Check your weekly working hours.
            </p>
          </a>

          <a
            href="/worker-dashboard/profile"
            className="rounded-xl border border-gray-200 p-5 transition hover:border-pink-300 hover:bg-pink-50"
          >
            <div className="text-2xl">
              👤
            </div>

            <h3 className="mt-3 font-bold">
              My Profile
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              View your worker profile.
            </p>
          </a>

        </div>

      </div>

    </main>
  );
}