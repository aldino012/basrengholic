import React from "react";
import { FaEye, FaTiktok } from "react-icons/fa";

const Content = () => {
  // OPTIMASI 1: Menyisipkan kata kunci incaran pada judul dan deskripsi video
  const localVideos = [
    {
      id: 1,
      src: "/vid/cartisol-content.mp4",
      poster: "/img/poster-cartisol.jpg", // Tambahan: Gambar thumbnail agar video tidak loading berat di awal
      title: "ASMR Basreng Pedas Daun Jeruk 🤤",
      views: "523",
      description:
        "Video ASMR renyahnya Basreng Pedas Daun Jeruk premium dari Basrengholic Banyuwangi. Bumbu rempah melimpah bikin nagih.",
      uploadDate: "2024-01-01T08:00:00+08:00",
      keywords: "asmr basreng, basreng pedas daun jeruk, basreng banyuwangi", // Tambahan untuk AI Schema
    },
    {
      id: 2,
      src: "/vid/discount-content.mp4",
      poster: "/img/poster-discount.jpg",
      title: "Promo Grosir Basreng Ugal-ugalan! 💸",
      views: "197",
      description:
        "Informasi diskon dan promo harga grosir untuk pembelian cemilan basreng pedas dan original Basrengholic.",
      uploadDate: "2024-01-15T12:00:00+08:00",
      keywords: "promo basreng, grosir basreng, harga basreng",
    },
    {
      id: 3,
      src: "/vid/pov-content.mp4",
      poster: "/img/poster-pov.jpg",
      title: "POV: Nyemil Basreng Basah & Kering 😵‍💫",
      views: "93",
      description:
        "Video POV seru menikmati perpaduan basreng basah dan basreng kering super pedas dari Basrengholic.",
      uploadDate: "2024-02-01T15:30:00+08:00",
      keywords: "basreng basah, cemilan pedas, basreng kering",
    },
  ];

  const videoSchemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: localVideos.map((video, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "VideoObject",
        name: video.title,
        description: video.description,
        contentUrl: `https://www.basrengholic.online${video.src}`,
        // Gunakan URL poster spesifik jika ada, jika tidak fallback ke og-image
        thumbnailUrl: `https://www.basrengholic.online${video.poster || "/og-image.jpg"}`,
        uploadDate: video.uploadDate,
        keywords: video.keywords, // Mengirim sinyal kata kunci langsung ke AI & Mesin Pencari
        interactionStatistic: {
          "@type": "InteractionCounter",
          interactionType: { "@type": "WatchAction" },
          userInteractionCount: parseInt(video.views.replace(/[^0-9]/g, "")),
        },
      },
    })),
  };

  return (
    <section
      id="content"
      className="py-24 relative overflow-hidden bg-gray-50 scroll-mt-20 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:2rem_2rem]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchemaData) }}
      />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-100/50 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-100/50 blur-[100px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-xs font-bold uppercase tracking-widest mb-4 shadow-md">
            {/* OPTIMASI 2: Menyisipkan keyword pada badge */}
            <FaTiktok className="text-lg" /> ASMR Basreng Pedas
          </div>

          {/* OPTIMASI 3: Heading Tag (H2) sekarang mengandung keyword yang dicari orang, bukan sekadar hashtag */}
          <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-4 text-gray-900 drop-shadow-sm">
            Review Basreng <span className="text-red-600">Daun Jeruk</span>
          </h2>

          {/* OPTIMASI 4: Paragraph Tag menyertakan target lokasi dan keyword deskriptif */}
          <p className="text-gray-500 font-medium tracking-wide max-w-xl mx-auto bg-white/60 backdrop-blur-sm p-2 rounded-xl inline-block">
            Tonton keseruan review ASMR dan promo ugal-ugalan basreng pedas dari
            pusatnya di Banyuwangi. Siap-siap ngiler lihat bumbunya!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {localVideos.map((video) => (
            <div
              key={video.id}
              className="relative aspect-[9/16] bg-black rounded-[2rem] overflow-hidden shadow-xl border-4 border-white/50 hover:border-red-100 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 flex flex-col group"
            >
              <div className="absolute top-0 left-0 w-full p-5 z-20 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
                {/* Gunakan tag H3 untuk judul video di dalam grid agar hirarki SEO jelas */}
                <h3 className="text-white font-bold text-sm md:text-base leading-tight mb-2 drop-shadow-md">
                  {video.title}
                </h3>
                <div className="flex items-center gap-1.5 text-gray-300 text-[10px] md:text-xs font-semibold tracking-wider">
                  <FaEye /> {video.views} Views
                </div>
              </div>

              {/* OPTIMASI 5: Atribut video untuk SEO dan Performa Halaman */}
              <video
                src={video.src}
                poster={video.poster} // Mencegah layar hitam sebelum di-play & mempercepat loading halaman
                title={video.title} // Bagus untuk aksesibilitas (Screen Reader) dan SEO Gambar/Video
                className="w-full h-full object-cover z-10"
                controls
                playsInline
                preload="none" // Ubah dari 'metadata' ke 'none' agar bandwidth hemat sebelum user benar-benar nge-klik play
              >
                Browser kamu tidak mendukung pemutaran video basreng ini.
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content;