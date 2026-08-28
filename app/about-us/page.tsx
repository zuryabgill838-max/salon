export default function AboutUs() {
  return (
    <main>
      {/* Page Heading */}
      <section className="bg-pink-50 px-6 py-24 text-center">
        <p className="font-semibold uppercase tracking-[0.3em] text-pink-600">
          About Us
        </p>

        <h1 className="mt-4 text-5xl font-bold md:text-6xl">
          Beauty With Passion
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Discover the story behind Luxe Salon and the people
          dedicated to making you feel beautiful.
        </p>
      </section>

      {/* About Content */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          <div className="overflow-hidden rounded-[40px]">
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=80"
              alt="Luxe Salon"
              className="h-[550px] w-full object-cover"
            />
          </div>

          <div>
            <p className="font-semibold uppercase tracking-widest text-pink-600">
              Our Story
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              More Than Just A Salon
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Luxe Salon was created with one simple goal: to give
              every client a beautiful and relaxing experience.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Our team of experienced beauty professionals believes
              that beauty is personal. That's why we take the time
              to understand your style and create a look that feels
              truly yours.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              From hair styling and makeup to nails and skincare,
              we are passionate about helping you look and feel
              your absolute best.
            </p>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-8 text-center md:grid-cols-3">

          <div>
            <h3 className="text-5xl font-bold text-pink-600">
              10+
            </h3>
            <p className="mt-2 text-gray-600">
              Years Experience
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-pink-600">
              5K+
            </h3>
            <p className="mt-2 text-gray-600">
              Happy Clients
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-pink-600">
              20+
            </h3>
            <p className="mt-2 text-gray-600">
              Beauty Services
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}