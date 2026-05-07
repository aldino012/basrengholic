import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  // Nomor WA dan pesan default otomatis
  const phoneNumber = "6289683027911";
  const message = "Halo Admin Basreng Holic! Saya mau order nih";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    // z-[100] memastikan tombol ini selalu berada di atas komponen apa pun
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100]">
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center relative"
        aria-label="Chat WhatsApp"
      >
        {/* TOOLTIP BUBBLE (Hanya muncul saat di-hover di layar besar) */}
        <div className="absolute right-full mr-4 bg-white text-gray-800 text-xs md:text-sm font-bold px-4 py-2.5 rounded-2xl shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 whitespace-nowrap pointer-events-none hidden md:block">
          Pesan Sekarang! 🚀
          {/* Segitiga panah penunjuk pada tooltip */}
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white rotate-45 border-r border-t border-gray-100"></div>
        </div>

        {/* EFEK GELOMBANG (PING/PULSE) ANIMATION */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-60"></div>

        {/* TOMBOL UTAMA */}
        <div className="relative bg-gradient-to-tr from-green-600 to-green-400 text-white p-4 md:p-5 rounded-full shadow-[0_10px_40px_rgba(34,197,94,0.5)] group-hover:scale-110 group-hover:shadow-[0_10px_50px_rgba(34,197,94,0.7)] transition-all duration-300 flex items-center justify-center">
          <FaWhatsapp className="text-3xl md:text-4xl drop-shadow-md" />
        </div>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;