const BASE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://mi-sitio.com"
).replace(/\/$/, "");

export async function GET() {
  const staticUrls = ["/", "/blog", "/contacto"];
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error(`No se pudieron cargar productos para el sitemap: ${res.status}`);
  }
  const products = await res.json();
  if (!Array.isArray(products)) {
    throw new Error("La API devolvió un listado de productos inválido para el sitemap");
  }
  const dynamicUrls = products.map((product) => `/productos/${product.id}`);
  const allUrls = [...staticUrls, ...dynamicUrls];
  const escapeXml = (value) =>
    value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls
    .map(
      (url) => `<url>
    <loc>${escapeXml(`${BASE_URL}${url}`)}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`
    )
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}