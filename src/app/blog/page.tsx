import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ideas y guías | Blog NOVA Market",
  description:
    "Consejos técnicos sobre SEO en Next.js, Core Web Vitals y sitemaps dinámicos para una web más rápida y visible.",
  openGraph: {
    title: "Ideas y guías de NOVA Market",
    description:
      "Guías prácticas sobre rendimiento, SEO técnico y desarrollo web moderno.",
    images: ["/images/seo-image.jpg"],
    type: "article",
  },
};

const articles = [
  {
    category: "SEO técnico",
    readTime: "6 min de lectura",
    title: "SEO en Next.js: una base sólida para crecer",
    description:
      "Aprende a estructurar metadatos, rutas y contenido para que tu tienda sea fácil de rastrear y entender.",
    number: "01",
  },
  {
    category: "Rendimiento",
    readTime: "8 min de lectura",
    title: "Core Web Vitals y una experiencia que se siente rápida",
    description:
      "Qué significan LCP, INP y CLS, y cómo tomar decisiones de diseño que mejoren la experiencia real.",
    number: "02",
  },
  {
    category: "Indexación",
    readTime: "5 min de lectura",
    title: "Sitemaps dinámicos para catálogos que cambian",
    description:
      "Una guía para mantener tus URLs importantes disponibles y actualizadas para los buscadores.",
    number: "03",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
      <section className="mb-12 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">
          El diario de NOVA
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
          Ideas para una web mejor.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Guías claras sobre tecnología, rendimiento y SEO para construir una
          experiencia digital que tus clientes quieran volver a visitar.
        </p>
      </section>
      <section
        aria-label="Artículos recientes"
        className="grid gap-5 md:grid-cols-3"
      >
        {articles.map((article) => (
          <article
            key={article.number}
            className="flex min-h-[330px] flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-teal-50 px-3 py-1.5 text-xs font-bold text-teal-800">
                {article.category}
              </span>
              <span className="text-3xl font-black text-slate-100">
                {article.number}
              </span>
            </div>
            <h2 className="mt-8 text-2xl font-bold leading-snug tracking-tight">
              {article.title}
            </h2>
            <p className="mt-4 flex-1 leading-7 text-slate-600">
              {article.description}
            </p>
            <p className="mt-7 border-t border-slate-100 pt-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
              {article.readTime}
            </p>
          </article>
        ))}
      </section>
      <p className="mt-10 text-sm text-slate-500">
        ¿Tienes alguna pregunta?{" "}
        <Link
          href="/contacto"
          className="font-bold text-teal-700 underline underline-offset-4"
        >
          Hablemos
        </Link>
        .
      </p>
    </div>
  );
}