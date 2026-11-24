export const dynamic = "force-dynamic";

export async function GET() {
  const baseUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || "https://nextjs-seo-store.vercel.app"
  ).replace(/\/$/, "");

  const staticRoutes = ["", "/blog", "/contacto"];
  let productIds = [];

  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; NextJS-SEO-Store/1.0)",
        Accept: "application/json",
      },
      cache: "no-store",
    });

    if (res.ok) {
      const products = await res.json();
      if (Array.isArray(products)) {
        productIds = products.map((p) => p.id);
      }
    }
  } catch {
    // Continúa con el respaldo si la API externa rechaza la conexión
  }

  if (productIds.length === 0) {
    productIds = Array.from({ length: 20 }, (_, i) => i + 1);
  }

  const dynamicRoutes = productIds.map((id) => `/productos/${id}`);
  const allRoutes = [...staticRoutes, ...dynamicRoutes];
  const lastmod = new Date().toISOString();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "text/xml; charset=utf-8",
    },
  });
}