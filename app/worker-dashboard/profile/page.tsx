export default function WorkerProfilePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6 lg:p-8">

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          My Profile
        </h1>

        <p className="mt-2 text-gray-500">
          View and manage your profile information.
        </p>
      </div>

      <div className="max-w-4xl rounded-2xl bg-white p-6 shadow-sm lg:p-8">

        {/* Profile Header */}
        <div className="flex flex-col gap-5 border-b pb-8 sm:flex-row sm:items-center">

          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-pink-100 text-4xl">
            👩🏻
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Ayesha
            </h2>

            <p className="mt-1 text-gray-500">
              Hair Stylist
            </p>

            <span className="mt-3 inline-block rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
              Active Worker
            </span>
          </div>

        </div>

        {/* Profile Form */}
        <form className="mt-8 grid gap-6 md:grid-cols-2">

          <div>
            <label className="mb-2 block text-sm font-medium">
              Full Name
            </label>

            <input
              type="text"
              defaultValue="Ayesha"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-pink-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              defaultValue="ayesha@luxesalon.com"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-pink-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Phone
            </label>

            <input
              type="tel"
              defaultValue="+92 300 1234567"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-pink-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Position
            </label>

            <input
              type="text"
              defaultValue="Hair Stylist"
              disabled
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-500"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium">
              About Me
            </label>

            <textarea
              rows={4}
              defaultValue="Professional hair stylist at Luxe Salon."
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-pink-500"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="rounded-xl bg-pink-600 px-6 py-3 font-semibold text-white transition hover:bg-pink-700"
            >
              Save Changes
            </button>
          </div>

        </form>

      </div>

    </main>
  );
}