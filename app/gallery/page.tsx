import Image from "next/image";

const gallery = [
  {
    src: "/images/interior.png",
    title: "Salon Interior",
  },
  {
    src: "/images/haircut.png",
    title: "Haircut",
  },
  {
    src: "/images/image.png",
    title: "Hair Color",
  },
  {
    src: "/images/makeup.png",
    title: "Makeup",
  },
  {
    src: "/images/facial.png",
    title: "Facial",
  },
  {
    src: "/images/hairstyle.png",
    title: "Hairstyle",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-pink-600">
          Our Gallery
        </p>

        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
          Beauty & Salon Moments
        </h1>

        <p className="mt-4 text-gray-500">
          Explore our latest hairstyles, makeup looks and salon experiences.
        </p>
      </div>

      {/* Gallery */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((item, index) => (
          <div
            key={item.src}
            className={`group relative overflow-hidden rounded-2xl ${
              index === 0 ? "lg:row-span-2" : ""
            }`}
          >
            <div
              className={`relative w-full ${
                index === 0 ? "h-[580px]" : "h-[280px]"
              }`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                priority={index === 0}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw,
                       (max-width: 1024px) 50vw,
                       33vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="text-white">
                  <h2 className="text-xl font-semibold">
                    {item.title}
                  </h2>

                  <p className="mt-1 text-sm text-white/80">
                    Salon Gallery
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}