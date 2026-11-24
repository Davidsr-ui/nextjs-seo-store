import { getProducts } from "../../../lib/products";

export const dynamic = "force-dynamic";

export async function GET() {
  const baseUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || "https://nextjs-seo-store.vercel.app"
  ).replace(/\/$/, "");

  const staticRoutes = ["", "/blog", "/contacto"];
  const products = await getProducts();
  const productIds = products.map((product) => product.id);

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