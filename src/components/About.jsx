import React, { useState, useEffect } from "react";
import { FaTiktok } from "react-icons/fa";

const About = ({ tiktokLink }) => {
  const [currentPoster, setCurrentPoster] = useState(0);

  const posters = [
    {
      img: "/basreng-poster.png",
      badge: "Bumbu Rempah Asli",
      alt: "Basreng Pedas Daun Jeruk Basrengholic - Bumbu Rempah Melimpah",
    },
    {
      img: "/jamur-poster.png",
      badge: "Jamur Crispy Pilihan",
      alt: "Jamur Crispy Gurih Basrengholic - Camilan Renyah Pilihan",
    },
    {
      img: "/poster-rengginang.png",
      badge: "Renyahnya Juara",
      alt: "Rengginang Bumbu Tradisional Basrengholic Banyuwangi",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPoster((prev) => (prev === posters.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [posters.length]);

  return (
    <section
      id="about"
      className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* LEFT SIDE: POSTER CAROUSEL */}
        <div className="relative group px-2 md:px-0">
          <div className="w-full h-80 md:h-96 bg-gray-100 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-dashed border-gray-200 relative">
            {posters.map((poster, index) => (
              <img
                key={index}
                src={poster.img}
                alt={poster.alt} // SEO: Deskripsi gambar yang kuat
                loading="lazy" // Performa: Lazy load untuk carousel
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                  index === currentPoster
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-105 z-0"
                }`}
              />
            ))}
          </div>

          {/* FLOATING BADGE */}
          <div className="absolute -bottom-4 right-4 md:-bottom-6 md:-right-6 bg-orange-500 text-white p-4 md:p-6 rounded-2xl shadow-xl transform md:group-hover:rotate-3 transition-transform z-20">
            <p className="font-black text-sm md:text-xl italic uppercase tracking-tighter transition-all duration-500">
              {posters[currentPoster].badge}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: CONTENT */}
        <div className="text-center md:text-left mt-4 md:mt-0">
          {/* SEO Heading: Menggunakan kalimat yang memancing interaksi dan kata kunci */}
          <h2 className="text-3xl md:text-4xl font-black text-red-600 mb-4 md:mb-6 italic uppercase tracking-tighter leading-tight">
            Camilan Basreng Pedas{" "}
            <span className="text-gray-900">Banyuwangi</span> Terbaik!
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            Cari <strong>Basreng Pedas Daun Jeruk</strong> yang bumbunya gak
            pelit?
            <strong> Basrengholic</strong> adalah solusinya! Kami menghadirkan
            sensasi camilan renyah khas Banyuwangi dengan bumbu rempah asli yang
            bikin nagih. Melalui sistem <em>Omnichannel</em> kami, kamu bisa cek
            stok secara
            <em> real-time</em> dan belanja dengan mudah melalui{" "}
            <strong>TikTok Shop</strong> atau pesan langsung via WhatsApp.
            Kualitas premium, rasa juara!
          </p>

          <div className="w-full md:max-w-sm mx-auto md:mx-0">
            <a
              href={tiktokLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-4 md:p-5 bg-black text-white rounded-2xl flex items-center justify-center gap-3 font-bold hover:bg-gray-800 transition-all uppercase text-xs md:text-sm tracking-widest shadow-lg active:scale-95"
            >
              <FaTiktok className="text-lg md:text-xl" />
              BELI DI TIKTOK SHOP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;