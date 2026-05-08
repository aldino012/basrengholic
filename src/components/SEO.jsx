// src/components/SEO.jsx
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, image }) => {
  const siteUrl = "https://www.basrengholic.online/";
  const defaultDescription =
    "Nikmati sensasi keripik basreng pedas daun jeruk asli dari Basrengholic. Renyah, gurih, dan bumbu melimpah.";
  const defaultImage = `${siteUrl}og-image.jpg`;

  return (
    <Helmet>
      <title>{title} | Basrengholic</title>
      <meta name="description" content={description || defaultDescription} />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
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
    </Helmet>
  );
};

export default SEO;
