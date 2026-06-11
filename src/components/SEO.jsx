// src/components/SEO.jsx
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, image, url }) => {
  const siteUrl = "https://www.basrengholic.online/";
  const currentUrl = url ? `${siteUrl}${url}` : siteUrl;

  // OPTIMASI 1: Front-Loading Title. Kata kunci utama ada di depan, brand di belakang.
  const defaultTitle =
    "Basreng Pedas Daun Jeruk & Original di Banyuwangi | Basrengholic";

  // OPTIMASI 2: Deskripsi menyertakan keyword dari Ahrefs (basreng pedas, basreng daun jeruk, basreng original)
  const defaultDescription =
    "Cari basreng pedas, basreng daun jeruk, atau basreng original di Banyuwangi? Basrengholic solusinya! Keripik basreng renyah, bumbu melimpah, harga grosir. Pesan online sekarang!";

  const defaultImage = `${siteUrl}og-image.jpg`;

  const schemaMarkup = [
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      name: "Basreng Pedas Daun Jeruk Basrengholic",
      image: [defaultImage],
      description: description || defaultDescription,
      sku: "BSRG-PDJ-01", // Tambahan: Google Search Console sering meminta SKU
      brand: {
        "@type": "Brand",
        name: "Basrengholic",
      },
      offers: {
        "@type": "Offer",
        url: currentUrl,
        priceCurrency: "IDR",
        price: "18800",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31", // Tambahan: Validasi harga agar schema lebih sempurna
        itemCondition: "https://schema.org/NewCondition",
      },
      // Peringatan: Pastikan Anda benar-benar menampilkan rating ini di UI web (misal di halaman Product.jsx)
      // Jika Google mendeteksi schema rating tapi tidak ada di layar pengguna, bisa dianggap spam.
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "150",
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
      priceRange: "Rp", // Tambahan untuk LocalBusiness
      address: {
        "@type": "PostalAddress",
        streetAddress: "Banyuwangi",
        addressLocality: "Banyuwangi",
        addressRegion: "Jawa Timur", // Gunakan bahasa lokal yang dicari audiens
        postalCode: "68411",
        addressCountry: "ID",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -8.2192,
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
      potentialAction: {
        "@type": "OrderAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.tiktok.com/@basrengholic12",
          inLanguage: "id",
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
          ],
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Apakah Basrengholic jual basreng pedas daun jeruk di Banyuwangi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya, Basrengholic adalah pusat produksi basreng pedas daun jeruk dan basreng original terdekat di Banyuwangi. Kami melayani pengiriman ke seluruh Indonesia.",
          },
        },
        {
          "@type": "Question",
          name: "Berapa harga basreng pedas Basrengholic?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Harga basreng kami sangat terjangkau mulai dari Rp 18.800. Teksturnya renyah, tidak keras, dan bumbunya melimpah.",
          },
        },
      ],
    },
  ];

  return (
    <Helmet>
      <html lang="id" />
      {/* Front-Loading Title */}
      <title>{title ? `${title} | Basrengholic` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      {/* Meta Keywords (Meski tidak berdampak besar untuk Google, tetap bagus untuk search engine lain) */}
      <meta
        name="keywords"
        content="basreng pedas, basreng daun jeruk, basreng banyuwangi, basreng original, basrengholic"
      />
      {/* Local SEO */}
      <meta name="author" content="Basrengholic" />
      <meta name="geo.region" content="ID-JI" />
      <meta name="geo.placename" content="Banyuwangi" />
      <meta name="google-site-verification" content="google06742ab2f7d005c6" />
      <link rel="canonical" href={currentUrl} />
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta
        property="og:title"
        content={title ? `${title} | Basrengholic` : defaultTitle}
      />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:locale" content="id_ID" /> {/* Tambahan locale */}
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={title ? `${title} | Basrengholic` : defaultTitle}
      />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={image || defaultImage} />
      <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
    </Helmet>
  );
};

export default SEO;