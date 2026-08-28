export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-pink-50">
        <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
          
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-600">
              Beauty & Wellness
            </p>

            <h1 className="mt-4 text-5xl font-bold leading-tight md:text-7xl">
              Your Beauty,
              <span className="block text-pink-600">
                Our Passion.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
              Welcome to Luxe Salon. Experience professional beauty
              services in a relaxing and luxurious environment.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="/contact"
                className="rounded-full bg-pink-600 px-7 py-3 font-semibold text-white hover:bg-pink-700"
              >
                Contact Us
              </a>

              <a
                href="/services"
                className="rounded-full border border-gray-300 bg-white px-7 py-3 font-semibold hover:border-pink-600 hover:text-pink-600"
              >
                Our Services
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[40px] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80"
              alt="Luxury salon"
              className="h-[600px] w-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* Services Preview */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="font-semibold uppercase tracking-widest text-pink-600">
              What We Offer
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Our Beauty Services
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border p-8 text-center shadow-sm">
              <div className="text-5xl">💇‍♀️</div>
              <h3 className="mt-5 text-xl font-bold">
                Hair Styling
              </h3>
              <p className="mt-3 text-gray-500">
                Professional cuts, styling and hair treatments.
              </p>
            </div>

            <div className="rounded-3xl border p-8 text-center shadow-sm">
              <div className="text-5xl">
              
              </div>
              <h3 className="mt-5 text-xl font-bold">
                Makeup
              </h3>
              <p className="mt-3 text-gray-500">
                Beautiful makeup for every special occasion.
              </p>
            </div>

            <div className="rounded-3xl border p-8 text-center shadow-sm">
              <div className="text-5xl">💅</div>
              <h3 className="mt-5 text-xl font-bold">
                Nails
              </h3>
              <p className="mt-3 text-gray-500">
                Manicure, pedicure and beautiful nail art.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-[40px] bg-pink-600 px-8 py-16 text-center text-white">
          <h2 className="text-4xl font-bold">
            Ready for a New Look?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-pink-100">
            Visit Luxe Salon and let our experts bring out your
            natural beauty.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-pink-600 hover:bg-gray-100"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}