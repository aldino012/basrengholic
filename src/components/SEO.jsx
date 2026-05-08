// src/components/SEO.jsx
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, image }) => {
  const siteUrl = "https://www.basrengholic.online/";
  const defaultDescription =
    "Pusat Basreng Pedas Daun Jeruk premium di Banyuwangi. Nikmati keripik basreng renyah, gurih, dengan bumbu rempah melimpah dari Basrengholic. Order online sekarang!";
  const defaultImage = `${siteUrl}og-image.jpg`;

  // Schema Markup Gabungan: Product & LocalBusiness
  const schemaMarkup = [
    {
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
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Basrengholic",
      image: defaultImage,
      "@id": siteUrl,
      url: siteUrl,
      telephone: "+6289683027911",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Banyuwangi",
        addressLocality: "Banyuwangi",
        addressRegion: "East Java",
        postalCode: "68411", // Sesuaikan jika tahu kode pos spesifiknya
        addressCountry: "ID",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -8.2192, // Koordinat umum Banyuwangi
        longitude: 114.3691,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      sameAs: ["https://www.tiktok.com/@basrengholic12"],
    },
  ];

  return (
    <Helmet>
      {/* Dasar SEO */}
      <html lang="id" />
      <title>{title} | Basrengholic</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="robots" content="index, follow" />

      {/* Kata Kunci Strategis */}
      <meta
        name="keywords"
        content="basreng, basreng pedas, basreng daun jeruk, basreng banyuwangi, keripik basreng, camilan pedas, basrengholic, jual basreng terdekat, basreng renyah, jajanan banyuwangi"
      />

      {/* Local SEO & Verification */}
      <meta name="author" content="Basrengholic" />
      <meta name="geo.region" content="ID-JI" />
      <meta name="geo.placename" content="Banyuwangi" />
      <meta name="google-site-verification" content="google06742ab2f7d005c6" />

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