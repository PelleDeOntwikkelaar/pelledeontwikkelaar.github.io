import { OG_IMAGE } from '@/lib/structuredData'

interface PageMetaProps {
  title: string
  description: string
  canonical: string
  keywords?: string
  jsonLd?: object | object[]
}

export function PageMeta({
  title,
  description,
  canonical,
  keywords,
  jsonLd,
}: PageMetaProps) {
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OG_IMAGE} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={OG_IMAGE} />

      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          // JSON-LD requires raw (unescaped) JSON text; content is developer-authored, not user input.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
          }}
        />
      ))}
    </>
  )
}
