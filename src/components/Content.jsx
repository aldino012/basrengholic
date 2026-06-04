import React from "react";
import { FaEye, FaTiktok } from "react-icons/fa";

const Content = () => {
  // Data video disesuaikan dengan file lokal di folder public/vid/ kamu
  const localVideos = [
    {
      id: 1,
      src: "/vid/cartisol-content.mp4",
      title: "Racun Basreng Holic 🤤",
      views: "523",
      // Tambahan deskripsi untuk Schema Markup (SEO & GEO)
      description:
        "Video ASMR dan review produk Basreng Pedas Daun Jeruk dari Basrengholic yang bikin nagih.",
      uploadDate: "2024-01-01T08:00:00+08:00",
    },
    {
      id: 2,
      src: "/vid/discount-content.mp4",
      title: "Diskon Ugal-ugalan! 💸",
      views: "197",
      description:
        "Informasi diskon dan promo ugal-ugalan untuk pembelian produk cemilan Basrengholic.",
      uploadDate: "2024-01-15T12:00:00+08:00",
    },
    {
      id: 3,
      src: "/vid/pov-content.mp4",
      title: "POV: Perang Batin Pilih Basreng atau Nabung? 😵‍💫",
      views: "93",
      description:
        "Video POV lucu tentang pilihan sulit antara menabung atau jajan cemilan pedas Basrengholic.",
      uploadDate: "2024-02-01T15:30:00+08:00",
    },
  ];

  // ==========================================
  // IMPLEMENTASI GEO: GENERATIVE ENGINE OPTIMIZATION
  // ==========================================
  // Membuat skema ItemList yang berisi daftar VideoObject agar AI
  // memahami konteks setiap video yang ada di halaman ini.
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
        // AI butuh URL absolut. Ganti domain ini saat Anda sudah live
        contentUrl: `https://www.basrengholic.online${video.src}`,
        // URL Thumbnail default (wajib untuk skema VideoObject)
        thumbnailUrl: "https://www.basrengholic.online/og-image.jpg",
        uploadDate: video.uploadDate,
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
      // Menambahkan pola Grid tipis dengan Tailwind arbitrary values
      className="py-24 relative overflow-hidden bg-gray-50 scroll-mt-20 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:2rem_2rem]"
    >
      {/* INJEKSI GEO SCHEMA VIDEO KE DALAM HALAMAN */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchemaData) }}
      />

      {/* BACKGROUND DECORATION - Soft Glow Elegant Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-100/50 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-100/50 blur-[100px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-xs font-bold uppercase tracking-widest mb-4 shadow-md">
            <FaTiktok className="text-lg" /> Konten ASMR & Promo
          </div>
          <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-4 text-gray-900 drop-shadow-sm">
            #GAKPEDASGAK<span className="text-red-600">HOLIC</span>
          </h2>
          <p className="text-gray-500 font-medium tracking-wide max-w-xl mx-auto bg-white/60 backdrop-blur-sm p-2 rounded-xl inline-block">
            Intip kegilaan para Holicers saat menikmati renyahnya produk kami.
            Jangan lupa di-play!
          </p>
        </div>

        {/* VIDEO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {localVideos.map((video) => (
            <div
              key={video.id}
              className="relative aspect-[9/16] bg-black rounded-[2rem] overflow-hidden shadow-xl border-4 border-white/50 hover:border-red-100 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 flex flex-col group"
            >
              {/* HEADER OVERLAY - Menampilkan Judul & Views */}
              <div className="absolute top-0 left-0 w-full p-5 z-20 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
                <p className="text-white font-bold text-sm md:text-base leading-tight mb-2 drop-shadow-md">
                  {video.title}
                </p>
                <div className="flex items-center gap-1.5 text-gray-300 text-[10px] md:text-xs font-semibold tracking-wider">
                  <FaEye /> {video.views} Views
                </div>
              </div>

              {/* NATIVE HTML5 VIDEO PLAYER */}
              <video
                src={video.src}
                className="w-full h-full object-cover z-10"
                controls
                playsInline
                preload="metadata"
              >
                Browser kamu tidak mendukung pemutaran video.
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content;