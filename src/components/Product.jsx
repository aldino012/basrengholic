import React from "react";
import { FaWhatsapp, FaTiktok, FaFireAlt, FaLock } from "react-icons/fa";

const Product = ({ tiktokLink }) => {
  const siteUrl = "https://www.basrengholic.online";

  const products = [
    {
      id: 1,
      name: "Basreng Pedas Daun Jeruk Premium",
      sku: "BSRG-PDJ-01", // Tambahan untuk kelengkapan data terstruktur
      price: "Rp 18.800",
      originalPrice: "Rp 20.000",
      image: "/basreng-poster.png",
      description:
        "Keripik basreng pedas daun jeruk premium khas Banyuwangi. Tekstur renyah, tidak keras, dengan bumbu rempah melimpah.", // Tambahan deskripsi untuk AI
      altText:
        "Basreng Pedas Daun Jeruk Premium Basrengholic Banyuwangi - Renyah dan Gurih",
      isAvailable: true,
      badge: "Best Seller",
      badgeIcon: <FaFireAlt className="text-white" />,
      badgeColor: "bg-red-600 text-white shadow-md",
    },
    {
      id: 2,
      name: "Jamur Crispy Khas Banyuwangi",
      sku: "JMR-CRP-02",
      price: "Rp 15.000",
      originalPrice: null,
      image: "/jamur-poster.png",
      description:
        "Camilan jamur crispy pilihan dengan varian rasa gurih yang renyah dan sehat khas Basrengholic.",
      altText:
        "Jamur Crispy Varian Rasa Basrengholic - Camilan Sehat dan Renyah",
      isAvailable: true,
    },
    {
      id: 3,
      name: "Rengginang Bumbu Tradisional",
      sku: "RNG-BMB-03",
      price: "Rp 20.000",
      originalPrice: null,
      image: "/poster-rengginang.png",
      description:
        "Rengginang bumbu tradisional premium dari Basrengholic Banyuwangi, gurih alami dan renyah juara.",
      altText: "Rengginang Bumbu Tradisional Basrengholic Banyuwangi",
      isAvailable: true,
    },
  ];

  // ==========================================
  // IMPLEMENTASI GEO: GENERATIVE ENGINE OPTIMIZATION (DIOPTIMALKAN)
  // ==========================================
  const geoSchemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        sku: product.sku,
        description: product.description, // AI sangat bergantung pada deskripsi untuk memahami entitas produk
        image: `${siteUrl}${product.image}`, // Menggunakan domain resmi website Anda
        brand: {
          "@type": "Brand",
          name: "Basrengholic",
        },
        offers: {
          "@type": "Offer",
          url: siteUrl,
          priceCurrency: "IDR",
          price: product.price.replace(/[^0-9]/g, ""),
          priceValidUntil: "2026-12-31",
          itemCondition: "https://schema.org/NewCondition",
          availability: product.isAvailable
            ? "https://schema.org/InStock"
            : "https://schema.org/OutOfStock",
        },
      },
    })),
  };

  return (
    <section
      id="produk"
      className="py-24 relative scroll-mt-20 bg-gray-50 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(geoSchemaData) }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          {/* OPTIMASI SEO & GEO: Heading menggunakan kata kunci pencarian transaksional */}
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 italic uppercase tracking-tighter drop-shadow-sm">
            Katalog Basreng &{" "}
            <span className="text-red-600">Camilan Pedas</span>
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-red-600 to-orange-400 mx-auto rounded-full"></div>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-[1.5rem] shadow-lg border border-gray-100 overflow-hidden group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* IMAGE CONTAINER */}
              <div className="h-60 w-full overflow-hidden bg-gray-100 relative">
                <img
                  src={product.image}
                  alt={product.altText}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 z-0"
                />

                {/* DYNAMIC BADGE */}
                {product.badge && (
                  <div
                    className={`absolute top-4 right-4 ${product.badgeColor} px-3 py-1.5 rounded font-bold uppercase tracking-wider text-[10px] flex items-center gap-1.5 z-20`}
                  >
                    {product.badgeIcon}
                    {product.badge}
                  </div>
                )}
              </div>

              {/* CONTENT AREA */}
              <div className="p-6 flex-1 flex flex-col bg-white">
                <div className="mb-auto">
                  {/* OPTIMASI SEO: Menggunakan Tag H3 untuk nama produk agar hirarki data dibaca sempurna oleh Googlebot */}
                  <h3 className="font-extrabold text-gray-900 uppercase text-sm mb-2 tracking-tight">
                    {product.name}
                  </h3>

                  {/* Tambahan visual deskripsi singkat untuk memperkuat kepadatan kata kunci (Keyword Density) */}
                  <p className="text-gray-500 text-xs mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* PRICE SECTION */}
                  <div className="flex items-end gap-2 mb-6">
                    <p className="text-red-600 font-black text-xl italic leading-none">
                      {product.price}
                    </p>
                    {product.originalPrice && (
                      <p className="text-gray-400 text-xs line-through italic font-medium">
                        {product.originalPrice}
                      </p>
                    )}
                  </div>
                </div>

                {/* CALL TO ACTION BUTTONS */}
                <div className="mt-2 flex flex-col gap-3">
                  {product.isAvailable ? (
                    <>
                      {/* Primary CTA: TikTok Shop */}
                      <a
                        href={tiktokLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 bg-black text-white rounded-lg text-xs font-black uppercase hover:bg-gray-800 transition-colors tracking-widest flex items-center justify-center gap-2 shadow-sm active:scale-95"
                      >
                        <FaTiktok className="text-sm" />
                        Beli di TikTok Shop
                      </a>

                      {/* Secondary CTA: WhatsApp */}
                      <button
                        onClick={() =>
                          window.open("https://wa.me/6289683027911", "_blank")
                        }
                        className="text-gray-400 hover:text-green-600 font-bold text-[9px] uppercase tracking-wider flex items-center justify-center gap-1 transition-colors"
                      >
                        <FaWhatsapp className="text-xs" /> Atau Pesan Manual Via
                        Whatsapp
                      </button>
                    </>
                  ) : (
                    <>
                      {/* Disabled State */}
                      <button
                        className="w-full py-3 bg-gray-100 text-gray-400 rounded-lg text-xs font-black uppercase cursor-not-allowed tracking-widest flex items-center justify-center gap-2 border border-gray-200"
                        disabled
                      >
                        <FaLock className="text-sm" />
                        Belum Tersedia
                      </button>
                      <div className="h-[12px]"></div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;