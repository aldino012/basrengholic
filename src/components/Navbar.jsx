import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaBoxOpen,
  FaPlayCircle,
  FaPhoneAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = ({ isMenuOpen, setIsMenuOpen, navLinks }) => {
  const [scrolled, setScrolled] = useState(false);

  // Deteksi scroll untuk mengubah style navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi icon (Dibuat sedikit lebih kecil agar rapi)
  const getNavIcon = (name) => {
    switch (name) {
      case "Beranda":
        return <FaHome className="text-[14px]" />;
      case "About Us":
        return <FaInfoCircle className="text-[14px]" />;
      case "Produk":
        return <FaBoxOpen className="text-[14px]" />;
      case "Content":
        return <FaPlayCircle className="text-[14px]" />;
      case "Contact Us":
        return <FaPhoneAlt className="text-[14px]" />;
      default:
        return null;
    }
  };

  return (
    <nav
      // Transisi super halus saat navbar berubah mode (scrolled vs top)
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out top-0 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] py-2"
          : "bg-white py-4 border-b border-gray-100"
      }`}
    >
      {/* Menggunakan max-w-[90rem] agar navbar membentang lebih lebar di layar besar */}
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          {/* LOGO SECTION - Di kiri */}
          <a
            href="#home"
            className="flex-shrink-0 flex items-center gap-3 group cursor-pointer"
          >
            <div className="overflow-hidden rounded-full shadow-sm">
              <img
                src="/logo.png"
                alt="Logo Basreng Holic"
                className="h-10 w-10 md:h-12 md:w-12 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xl md:text-2xl font-black text-gray-900 tracking-tighter uppercase italic leading-none group-hover:text-red-600 transition-colors duration-300">
                BASRENG
                <span className="text-red-600 group-hover:text-orange-500 transition-colors duration-300">
                  HOLIC
                </span>
              </span>
            </div>
          </a>

          {/* DESKTOP MENU - Jauh di kanan (gap-10 memberikan jarak antar menu yang lega) */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative flex items-center gap-2 py-2"
              >
                {/* Ikon dengan efek sedikit memantul ke atas saat di-hover */}
                <span className="text-gray-400 group-hover:-translate-y-1 group-hover:text-red-500 transition-all duration-300">
                  {getNavIcon(link.name)}
                </span>

                {/* Teks tipis, tebal, dan berjarak (Premium Typography) */}
                <span className="text-[11px] lg:text-xs font-black text-gray-500 uppercase tracking-[0.2em] group-hover:text-gray-900 transition-colors duration-300">
                  {link.name}
                </span>

                {/* ANIMASI GARIS BAWAH (Meluncur dari kiri ke kanan) */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 ease-out group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-800 hover:text-red-600 focus:outline-none p-2 rounded-lg hover:bg-gray-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6 animate-in fade-in spin-in-90 duration-300" />
            ) : (
              <FaBars className="w-6 h-6 animate-in fade-in spin-in-90 duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN - Animasi slide down halus */}
      <div
        className={`md:hidden absolute w-full bg-white/95 backdrop-blur-xl border-b shadow-2xl transition-all duration-500 ease-in-out overflow-hidden origin-top ${
          isMenuOpen
            ? "max-h-[400px] opacity-100 scale-y-100"
            : "max-h-0 opacity-0 scale-y-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-4 p-3 rounded-2xl text-gray-600 font-black uppercase text-xs tracking-[0.15em] hover:text-white hover:bg-red-600 transition-all active:scale-95 group"
            >
              <span className="text-gray-400 group-hover:text-white transition-colors">
                {getNavIcon(link.name)}
              </span>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;