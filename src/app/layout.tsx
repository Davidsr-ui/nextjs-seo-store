import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: {
    default: "NOVA Market | Selección para tu día a día",
    template: "%s | NOVA Market",
  },
  description:
    "Descubre una selección cuidada de productos con una experiencia de compra sencilla y segura.",
  openGraph: {
    title: "NOVA Market",
    description:
      "Descubre una selección cuidada de productos con una experiencia de compra sencilla y segura.",
    siteName: "NOVA Market",
    locale: "es_ES",
    type: "website",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-[#f7f8fa] text-slate-950 antialiased">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
          <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-5 px-5 sm:px-8">
            <Link href="/" className="shrink-0 text-xl font-black tracking-tight">
              NOVA<span className="text-teal-600">.</span>
              <span className="ml-1 text-sm font-semibold text-slate-500">
                market
              </span>
            </Link>
            <nav
              aria-label="Navegación principal"
              className="flex items-center gap-3 overflow-x-auto text-xs font-semibold text-slate-600 sm:gap-6 sm:text-sm"
            >
              <Link className="whitespace-nowrap transition hover:text-teal-700" href="/">
                Inicio
              </Link>
              <Link className="whitespace-nowrap transition hover:text-teal-700" href="/blog">
                Blog
              </Link>
              <Link className="whitespace-nowrap transition hover:text-teal-700" href="/contacto">
                Contacto
              </Link>
              <Link
                className="whitespace-nowrap transition hover:text-teal-700"
                href="/api/sitemap"
                target="_blank"
              >
                Sitemap
              </Link>
            </nav>
          </div>
        </header>
        <main className="min-h-[calc(100vh-220px)] pt-[76px]">{children}</main>
        <footer className="mt-20 border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p>
              <span className="font-bold text-slate-900">NOVA market</span>
              {" "}— compras simples, elecciones inteligentes.
            </p>
            <p>© {new Date().getFullYear()} NOVA Market. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}