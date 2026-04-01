/** URL pública do site (OG, JSON-LD, canonical). Configure NEXT_PUBLIC_SITE_URL na Vercel. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://toy-pix.vercel.app"
).replace(/\/$/, "");
