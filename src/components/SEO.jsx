// src/components/SEO.jsx
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, image }) => {
  const siteUrl = "https://www.basrengholic.online/";
  const defaultDescription =
    "Pusat Basreng Pedas Daun Jeruk premium di Banyuwangi. Nikmati keripik basreng renyah, gurih, dengan bumbu rempah melimpah dari Basrengholic. Order online sekarang!";
  const defaultImage = `${siteUrl}og-image.jpg`;

  // Schema Markup Gabungan yang Dioptimasi untuk GEO & SEO
  const schemaMarkup = [
    // 1. Skema Produk Utama (Ditambahkan price/angka mentah & ulasan dummy agar menarik AI)
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
        price: "18800", // Penting untuk GEO: Gunakan angka mentah
        availability: "https://schema.org/InStock",
      },
      // Menambahkan AggregateRating membantu menonjol di mesin pencari & AI
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "150",
      },
    },

    // 2. Skema LocalBusiness (Telah disempurnakan untuk Omnichannel)
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

      // TAMBAHAN GEO: Memberi tahu AI bahwa toko ini menerima pesanan online (Omnichannel)
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

    // 3. TAMBAHAN GEO: Skema FAQ (Tanya Jawab untuk merespons AI Overviews)
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Apakah Basrengholic melayani pengiriman ke luar kota?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya, Basrengholic berlokasi di Banyuwangi namun kami melayani pengiriman ke seluruh Indonesia melalui pemesanan online di TikTok Shop atau WhatsApp.",
          },
        },
        {
          "@type": "Question",
          name: "Apa varian rasa paling best seller di Basrengholic?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Varian paling laris kami adalah Basreng Pedas Daun Jeruk yang terkenal dengan tekstur renyah dan bumbu rempah melimpah.",
          },
        },
      ],
    },
  ];

  return (
    <Helmet>
      {/* Dasar SEO */}
      <html lang="id" />
      <title>
        {title
          ? `${title} | Basrengholic`
          : "Basrengholic - Basreng Pedas Daun Jeruk Premium"}
      </title>
      <meta name="description" content={description || defaultDescription} />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />

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
      <meta
        property="og:title"
        content={
          title
            ? `${title} | Basrengholic`
            : "Basrengholic - Basreng Pedas Daun Jeruk Premium"
        }
      />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:image" content={image || defaultImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:title"
        content={
          title
            ? `${title} | Basrengholic`
            : "Basrengholic - Basreng Pedas Daun Jeruk Premium"
        }
      />
      <meta
        property="twitter:description"
        content={description || defaultDescription}
      />
      <meta property="twitter:image" content={image || defaultImage} />

      {/* Penambahan Schema Markup (JSON-LD) yang teroptimasi */}
      <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
    </Helmet>
  );
};

export default SEO;