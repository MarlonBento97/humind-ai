import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description: string;
  url?: string; // path or absolute
  image?: string; // path or absolute
  robots?: string;
  schema?: any[]; // extra JSON-LD blocks
};

const abs = (maybe: string, base: string) => {
  try {
    if (!maybe) return base;
    if (maybe.startsWith("http")) return maybe;
    return new URL(maybe, base).toString();
  } catch {
    return maybe;
  }
};

const SEOHead = ({
  title,
  description,
  url = "/",
  image = "/placeholder.svg",
  robots,
  schema = [],
}: Props) => {
  const siteName = "humind.ia";
  const base = import.meta.env.VITE_SITE_URL || "https://example.com";
  const canonical = abs(url, base);
  const ogImage = abs(image, base);
  const env = import.meta.env.VITE_ENV || import.meta.env.MODE;
  const robotsContent = robots || (env === "staging" ? "noindex, nofollow" : undefined);
  const themeColor = "#00A3FF"; // primary

  const defaultOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: base,
    logo: abs("/favicon.ico", base),
  };

  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {robotsContent && <meta name="robots" content={robotsContent} />}
      <meta name="theme-color" content={themeColor} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="pt_BR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">{JSON.stringify(defaultOrg)}</script>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
