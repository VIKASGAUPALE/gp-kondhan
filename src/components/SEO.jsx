import { Helmet } from "react-helmet-async";
import { siteData } from "../data/siteData";

export default function SEO({ title, description, path = "" }) {
  const fullTitle = `${title} | ${siteData.nameMr}`;
  const canonical = `${siteData.domain}${path}`;
  const desc = description || `${siteData.nameMr}, ता. ${siteData.talukaMr}, जि. ${siteData.districtMr} — नागरिक सेवा, योजना, सूचना आणि गावाची माहिती.`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "GovernmentOrganization",
    "name": siteData.nameMr,
    "url": siteData.domain,
    "email": siteData.email,
    "address": { "@type": "PostalAddress", "addressLocality": siteData.talukaMr, "addressRegion": siteData.districtMr, "addressCountry": "IN" }
  };
  return (
    <Helmet>
      <html lang="mr" />
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
