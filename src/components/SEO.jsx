// src/components/SEO.jsx
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, image }) => {
  const siteUrl = "https://www.basrengholic.online/";
  const defaultDescription =
    "Pusat Basreng Pedas Daun Jeruk premium di Banyuwangi. Nikmati keripik basreng renyah, gurih, dengan bumbu rempah melimpah dari Basrengholic. Order online sekarang!";
  const defaultImage = `${siteUrl}og-image.jpg`;

  // Schema Markup untuk membantu Google menampilkan info harga/stok di hasil pencarian
  const schemaMarkup = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Basreng Pedas Daun Jeruk Basrengholic",
    image: [defaultImage],
    description: description || defaultDescription,
    brand: {
      "@type": "Brand",
      name: "Basrengholic",
    },
    offers: {
      "@type": "Offer",
      url: siteUrl,
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <Helmet>
      {/* Dasar SEO */}
      <title>{title} | Basrengholic</title>
      <meta name="description" content={description || defaultDescription} />
      {/* Kata Kunci Spesifik (Sangat penting agar mudah dicari) */}
      <meta
        name="keywords"
        content="basreng pedas, basreng daun jeruk, basreng banyuwangi, keripik basreng, camilan pedas, basrengholic, jual basreng terdekat, basreng renyah"
      />
      <meta name="author" content="Basrengholic" />
      <meta name="geo.region" content="ID-JI" /> {/* Kode Jawa Timur */}
      <meta name="geo.placename" content="Banyuwangi" />
      <link rel="canonical" href={siteUrl} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={`${title} | Basrengholic`} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:image" content={image || defaultImage} />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta
        property="twitter:description"
        content={description || defaultDescription}
      />
      <meta property="twitter:image" content={image || defaultImage} />
      {/* Penambahan Schema Markup (JSON-LD) */}
      <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
    </Helmet>
  );
};

export default SEO;