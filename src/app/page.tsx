import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tienda online | NOVA Market",
  description:
    "Encuentra ropa, accesorios y artículos para tu hogar en NOVA Market. Una selección cuidada para todos los días.",
  keywords: ["tienda online", "moda", "accesorios", "hogar", "NOVA Market"],
  openGraph: {
    title: "Descubre NOVA Market",
    description:
      "Encuentra productos seleccionados para tu día a día en NOVA Market.",
    images: [{ url: "/images/seo-image.jpg", alt: "Colección NOVA Market" }],
    type: "website",
  },
};

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error(`No se pudo cargar el catálogo: ${res.status}`);
  }
  const products: Product[] = await res.json();

  return (
    <div className="mx-auto max-w-7xl px-5 pt-8 sm:px-8 sm:pt-12">
      <section className="relative isolate mb-16 overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-xl shadow-slate-900/10">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/20" />
        <div className="grid min-h-[420px] items-center gap-8 md:grid-cols-[1.05fr_0.95fr]">
          <div className="px-7 py-12 sm:px-12 lg:px-16">
            <span className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-teal-200">
              Una selección hecha para ti
            </span>
            <h1 className="max-w-xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Lo que te gusta,{" "}
              <span className="text-teal-300">a un clic.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">
              Descubre nuevos favoritos para tu estilo y tu hogar en una
              colección pensada para acompañarte cada día.
            </p>
            <a
              href="#catalogo"
              className="mt-8 inline-flex items-center rounded-full bg-teal-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-teal-300"
            >
              Explorar colección <span aria-hidden="true" className="ml-2">→</span>
            </a>
          </div>
          <div className="relative mx-6 mb-6 min-h-64 overflow-hidden rounded-3xl md:mx-8 md:my-8 md:min-h-[360px] md:translate-y-4">
            <Image
              src="/images/seo-image.jpg"
              width={900}
              height={620}
              alt="Selección de productos destacados de NOVA Market"
              className="absolute inset-0 h-full w-full object-cover object-top"
              priority
              sizes="(max-width: 768px) 90vw, 45vw"
            />
          </div>
        </div>
      </section>

      <section id="catalogo" className="scroll-mt-28 pb-8">
        <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">
              Nuestra colección
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              Encuentra tu próximo favorito
            </h2>
          </div>
          <p className="text-sm text-slate-500">
            {products.length} productos seleccionados
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <article
                key={product.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
              >
                <Link
                  href={`/productos/${product.id}`}
                  aria-label={`Ver ${product.title}`}
                  className="flex h-60 items-center justify-center bg-white p-8"
                >
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={160}
                      height={160}
                      sizes="160px"
                      className="h-full max-h-44 w-auto object-contain transition duration-300 group-hover:scale-105"
                    />
                </Link>
                <div className="flex flex-1 flex-col border-t border-slate-100 p-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                      {product.category}
                    </span>
                    <h3 className="mt-2 line-clamp-2 min-h-12 font-semibold leading-6 text-slate-900">
                      {product.title}
                    </h3>
                    <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                  <span className="text-xl font-extrabold text-slate-950">
                    ${product.price.toFixed(2)}
                  </span>
                  <Link
                    href={`/productos/${product.id}`}
                    className="rounded-full bg-slate-950 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-teal-700 sm:text-sm"
                  >
                    Ver producto
                  </Link>
                </div>
                </div>
              </article>
            ))}
        </div>
      </section>
    </div>
  );
}