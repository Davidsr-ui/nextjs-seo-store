import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | NOVA Market",
  description:
    "Contacta con el equipo de NOVA Market. Estamos aquí para ayudarte con tus consultas sobre productos y pedidos.",
  openGraph: {
    title: "Hablemos | NOVA Market",
    description:
      "Escríbenos y nuestro equipo te ayudará con tus consultas sobre productos y pedidos.",
    images: ["/images/seo-image.jpg"],
    type: "website",
  },
};

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
      <section className="mb-12 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">
          Estamos para ayudarte
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
          Hablemos.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          ¿Tienes dudas sobre un producto o necesitas ayuda con tu pedido?
          Nuestro equipo estará encantado de ayudarte.
        </p>
      </section>
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="space-y-4">
          <div className="rounded-3xl bg-slate-950 p-7 text-white">
            <p className="text-sm font-semibold text-teal-300">Correo electrónico</p>
            <a
              href="mailto:contacto@mi-sitio.com"
              className="mt-2 inline-block text-lg font-bold underline decoration-white/30 underline-offset-4 hover:decoration-white"
            >
              contacto@mi-sitio.com
            </a>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-7">
            <p className="text-sm font-semibold text-slate-500">Atención</p>
            <p className="mt-2 text-lg font-bold">Lunes a viernes</p>
            <p className="mt-1 text-slate-600">9:00 a 18:00 (hora local)</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-7">
            <p className="text-sm font-semibold text-slate-500">Tiempo de respuesta</p>
            <p className="mt-2 text-lg font-bold">En menos de 1 día hábil</p>
            <p className="mt-1 text-slate-600">
              Escríbenos y te responderemos lo antes posible.
            </p>
          </div>
        </aside>
        <form
          action="mailto:contacto@mi-sitio.com"
          method="post"
          encType="text/plain"
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9"
        >
          <h2 className="text-2xl font-bold tracking-tight">Envíanos un mensaje</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Completa el formulario y cuéntanos cómo podemos ayudarte.
          </p>
          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-slate-700">
              Nombre
              <input
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/15"
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                autoComplete="name"
                required
              />
            </label>
            <label className="text-sm font-semibold text-slate-700">
              Correo electrónico
              <input
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/15"
                type="email"
                name="correo"
                placeholder="tu@correo.com"
                autoComplete="email"
                required
              />
            </label>
          </div>
          <label className="mt-5 block text-sm font-semibold text-slate-700">
            Asunto
            <input
              className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/15"
              type="text"
              name="asunto"
              placeholder="¿En qué podemos ayudarte?"
              required
            />
          </label>
          <label className="mt-5 block text-sm font-semibold text-slate-700">
            Mensaje
            <textarea
              className="mt-2 min-h-36 w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/15"
              name="mensaje"
              placeholder="Escribe tu mensaje..."
              required
            />
          </label>
          <button
            type="submit"
            className="mt-6 rounded-full bg-slate-950 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-teal-700"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
      <p className="mt-8 text-sm text-slate-500">
        ¿Buscas algo para leer mientras tanto?{" "}
        <Link
          href="/blog"
          className="font-bold text-teal-700 underline underline-offset-4"
        >
          Visita nuestro blog
        </Link>
        .
      </p>
    </div>
  );
}