import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getProductById } from "@/lib/products";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductById(id);

  return {
    title: product.title,
    description: product.description.slice(0, 160),
    openGraph: {
      title: product.title,
      description: product.description.slice(0, 160),
      images: [{ url: product.image, alt: product.title }],
      type: "website",
    },
  };
}

export default async function ProductoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductById(id);

  return (
    <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
      <Link
        href="/#catalogo"
        className="mb-7 inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition hover:text-teal-700"
      >
        <span aria-hidden="true">←</span> Volver al catálogo
      </Link>
      <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm md:grid-cols-2">
          <div className="flex min-h-[360px] items-center justify-center bg-white p-10 sm:p-16">
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={500}
              sizes="(max-width: 768px) 90vw, 45vw"
              className="h-auto max-h-[440px] w-auto max-w-full object-contain"
              priority
            />
          </div>

          <div className="flex flex-col justify-center border-t border-slate-100 bg-slate-50/70 p-7 sm:p-12 md:border-l md:border-t-0">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
              {product.category}
            </span>
            <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
              {product.title}
            </h1>
            {product.rating && (
              <p className="mt-5 text-sm font-medium text-slate-600">
                <span className="mr-1 text-amber-500" aria-hidden="true">★</span>
                {product.rating.rate.toFixed(1)}{" "}
                <span className="text-slate-400">
                  ({product.rating.count} reseñas)
                </span>
              </p>
            )}
            <p className="mt-6 text-3xl font-black text-slate-950">
              ${product.price.toFixed(2)}
            </p>
            <p className="mt-5 leading-7 text-slate-600">
              {product.description}
            </p>
            <Link
              href="/#catalogo"
              className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-slate-950 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-teal-700"
            >
              Volver al catálogo
            </Link>
          </div>
      </div>
      </div>
  );
}