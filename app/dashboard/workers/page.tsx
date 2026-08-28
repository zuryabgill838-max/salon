export default function WorkersPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6 lg:p-8">

      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Salon Workers
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your salon staff and their access.
          </p>
        </div>

        <button className="rounded-xl bg-pink-600 px-5 py-3 font-semibold text-white transition hover:bg-pink-700">
          + Add Worker
        </button>

      </div>

      {/* Worker Stats */}
      <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

        <div className="rounded-2xl bg-white p-6 shadow-sm">

          <p className="text-sm text-gray-500">
            Total Workers
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            8
          </h2>

        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">

          <p className="text-sm text-gray-500">
            Active Today
          </p>

          <h2 className="mt-2 text-3xl font-bold text-green-600">
            6
          </h2>

        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">

          <p className="text-sm text-gray-500">
            On Leave
          </p>

          <h2 className="mt-2 text-3xl font-bold text-yellow-500">
            2
          </h2>

        </div>

      </div>

      {/* Workers */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        {/* Worker 1 */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 text-2xl">
              👩🏻
            </div>

            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
              Active
            </span>

          </div>

          <h2 className="mt-5 text-xl font-bold">
            Ayesha
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Hair Stylist
          </p>

          <div className="mt-5 border-t pt-5">

            <p className="text-sm text-gray-500">
              Today's Appointments
            </p>

            <p className="mt-1 text-2xl font-bold">
              6
            </p>

          </div>

          <button className="mt-5 w-full rounded-xl border border-gray-200 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50">
            View Profile
          </button>

        </div>

        {/* Worker 2 */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-2xl">
              👩🏼
            </div>

            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
              Active
            </span>

          </div>

          <h2 className="mt-5 text-xl font-bold">
            Hina
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Beautician
          </p>

          <div className="mt-5 border-t pt-5">

            <p className="text-sm text-gray-500">
              Today's Appointments
            </p>

            <p className="mt-1 text-2xl font-bold">
              5
            </p>

          </div>

          <button className="mt-5 w-full rounded-xl border border-gray-200 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50">
            View Profile
          </button>

        </div>

        {/* Worker 3 */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl">
              👩🏻
            </div>

            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
              Active
            </span>

          </div>

          <h2 className="mt-5 text-xl font-bold">
            Sana
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Hair Colorist
          </p>

          <div className="mt-5 border-t pt-5">

            <p className="text-sm text-gray-500">
              Today's Appointments
            </p>

            <p className="mt-1 text-2xl font-bold">
              4
            </p>

          </div>

          <button className="mt-5 w-full rounded-xl border border-gray-200 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50">
            View Profile
          </button>

        </div>

        {/* Worker 4 */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl">
              👩🏼
            </div>

            <span className="rounded-full bg-yellow-50 px-3 py-1 text-xs font-semibold text-yellow-600">
              On Leave
            </span>

          </div>

          <h2 className="mt-5 text-xl font-bold">
            Zara
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Nail Artist
          </p>

          <div className="mt-5 border-t pt-5">

            <p className="text-sm text-gray-500">
              Today's Appointments
            </p>

            <p className="mt-1 text-2xl font-bold">
              0
            </p>

          </div>

          <button className="mt-5 w-full rounded-xl border border-gray-200 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50">
            View Profile
          </button>

        </div>

      </div>

    </main>
  );
}