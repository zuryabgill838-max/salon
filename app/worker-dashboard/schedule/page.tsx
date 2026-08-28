export default function WorkerSchedulePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6 lg:p-8">

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          My Schedule
        </h1>

        <p className="mt-2 text-gray-500">
          View your weekly working schedule.
        </p>
      </div>

      {/* Worker Info */}
      <div className="mb-8 rounded-2xl bg-white p-6 shadow-sm">

        <div className="flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 text-2xl">
            👩🏻
          </div>

          <div>
            <h2 className="text-xl font-bold">
              Ayesha
            </h2>

            <p className="text-gray-500">
              Hair Stylist
            </p>
          </div>

        </div>

      </div>

      {/* Schedule */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">

        <div className="border-b p-6">
          <h2 className="text-xl font-bold">
            Weekly Schedule
          </h2>
        </div>

        <div className="divide-y">

          <div className="flex flex-col justify-between gap-3 p-6 sm:flex-row">
            <span className="font-semibold">Monday</span>
            <span className="text-gray-600">
              10:00 AM - 6:00 PM
            </span>
            <span className="rounded-full bg-green-50 px-3 py-1 text-center text-xs font-semibold text-green-600">
              Working
            </span>
          </div>

          <div className="flex flex-col justify-between gap-3 p-6 sm:flex-row">
            <span className="font-semibold">Tuesday</span>
            <span className="text-gray-600">
              10:00 AM - 6:00 PM
            </span>
            <span className="rounded-full bg-green-50 px-3 py-1 text-center text-xs font-semibold text-green-600">
              Working
            </span>
          </div>

          <div className="flex flex-col justify-between gap-3 p-6 sm:flex-row">
            <span className="font-semibold">Wednesday</span>
            <span className="text-gray-600">
              10:00 AM - 6:00 PM
            </span>
            <span className="rounded-full bg-green-50 px-3 py-1 text-center text-xs font-semibold text-green-600">
              Working
            </span>
          </div>

          <div className="flex flex-col justify-between gap-3 p-6 sm:flex-row">
            <span className="font-semibold">Thursday</span>
            <span className="text-gray-600">
              10:00 AM - 6:00 PM
            </span>
            <span className="rounded-full bg-green-50 px-3 py-1 text-center text-xs font-semibold text-green-600">
              Working
            </span>
          </div>

          <div className="flex flex-col justify-between gap-3 p-6 sm:flex-row">
            <span className="font-semibold">Friday</span>
            <span className="text-gray-600">
              10:00 AM - 6:00 PM
            </span>
            <span className="rounded-full bg-green-50 px-3 py-1 text-center text-xs font-semibold text-green-600">
              Working
            </span>
          </div>

          <div className="flex flex-col justify-between gap-3 p-6 sm:flex-row">
            <span className="font-semibold">Saturday</span>
            <span className="text-gray-600">
              10:00 AM - 4:00 PM
            </span>
            <span className="rounded-full bg-green-50 px-3 py-1 text-center text-xs font-semibold text-green-600">
              Working
            </span>
          </div>

          <div className="flex flex-col justify-between gap-3 bg-gray-50 p-6 sm:flex-row">
            <span className="font-semibold">Sunday</span>
            <span className="text-gray-500">
              Day Off
            </span>
            <span className="rounded-full bg-red-50 px-3 py-1 text-center text-xs font-semibold text-red-500">
              Off
            </span>
          </div>

        </div>

      </div>

    </main>
  );
}