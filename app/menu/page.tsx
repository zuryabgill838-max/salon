export default function Menu() {
  return (
    <main>
      {/* Heading */}
      <section className="bg-pink-50 px-6 py-24 text-center">
        <p className="font-semibold uppercase tracking-[0.3em] text-pink-600">
          Luxe Salon
        </p>

        <h1 className="mt-4 text-5xl font-bold md:text-6xl">
          Beauty Menu
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Explore our beauty treatments and prices.
        </p>
      </section>

      {/* Menu */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl space-y-16">

          {/* Hair */}
          <div>
            <h2 className="border-b-2 border-pink-100 pb-4 text-3xl font-bold">
              Hair
            </h2>

            <div className="mt-6 space-y-5">

              <div className="flex justify-between border-b pb-4">
                <div>
                  <h3 className="font-semibold">Haircut & Style</h3>
                  <p className="text-sm text-gray-500">
                    Cut, wash and styling
                  </p>
                </div>

                <span className="font-bold text-pink-600">
                  $30
                </span>
              </div>

              <div className="flex justify-between border-b pb-4">
                <div>
                  <h3 className="font-semibold">Hair Coloring</h3>
                  <p className="text-sm text-gray-500">
                    Professional hair color
                  </p>
                </div>

                <span className="font-bold text-pink-600">
                  $60
                </span>
              </div>

              <div className="flex justify-between border-b pb-4">
                <div>
                  <h3 className="font-semibold">Hair Treatment</h3>
                  <p className="text-sm text-gray-500">
                    Nourishing treatment
                  </p>
                </div>

                <span className="font-bold text-pink-600">
                  $45
                </span>
              </div>

            </div>
          </div>

          {/* Makeup */}
          <div>
            <h2 className="border-b-2 border-pink-100 pb-4 text-3xl font-bold">
              Makeup
            </h2>

            <div className="mt-6 space-y-5">

              <div className="flex justify-between border-b pb-4">
                <div>
                  <h3 className="font-semibold">Party Makeup</h3>
                  <p className="text-sm text-gray-500">
                    Glam makeup look
                  </p>
                </div>

                <span className="font-bold text-pink-600">
                  $50
                </span>
              </div>

              <div className="flex justify-between border-b pb-4">
                <div>
                  <h3 className="font-semibold">Bridal Makeup</h3>
                  <p className="text-sm text-gray-500">
                    Complete bridal look
                  </p>
                </div>

                <span className="font-bold text-pink-600">
                  $100
                </span>
              </div>

            </div>
          </div>

          {/* Nails */}
          <div>
            <h2 className="border-b-2 border-pink-100 pb-4 text-3xl font-bold">
              Nails
            </h2>

            <div className="mt-6 space-y-5">

              <div className="flex justify-between border-b pb-4">
                <div>
                  <h3 className="font-semibold">Manicure</h3>
                  <p className="text-sm text-gray-500">
                    Classic manicure
                  </p>
                </div>

                <span className="font-bold text-pink-600">
                  $25
                </span>
              </div>

              <div className="flex justify-between border-b pb-4">
                <div>
                  <h3 className="font-semibold">Pedicure</h3>
                  <p className="text-sm text-gray-500">
                    Relaxing pedicure
                  </p>
                </div>

                <span className="font-bold text-pink-600">
                  $30
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>
    </main>
  );
}