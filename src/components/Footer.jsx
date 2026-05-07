import React from "react";
// Import icon FontAwesome dari react-icons
import { FaTiktok, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-red-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP SECTION: BRAND & SOCIAL MEDIA */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Logo Basreng Holic"
              className="h-12 w-12 object-cover rounded-full shadow-md"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-black text-red-600 tracking-tighter uppercase italic leading-none">
                BASRENG<span className="text-orange-500">HOLIC</span>
              </span>
              <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mt-1">
                #GakPedasGakHolic
              </span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@basrengholic12?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 hover:-translate-y-1 transition-all shadow-lg"
              aria-label="TikTok Shop"
            >
              <FaTiktok className="text-xl" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/lazorabwi_/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white rounded-full flex items-center justify-center hover:-translate-y-1 transition-all shadow-lg"
              aria-label="Instagram"
            >
              <FaInstagram className="text-xl" />
            </a>

            {/* WhatsApp Direct Link */}
            <a
              href="https://wa.me/6289683027911"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 hover:-translate-y-1 transition-all shadow-lg"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-xl font-bold" />
            </a>
          </div>
        </div>

        {/* BOTTOM SECTION: COPYRIGHT */}
        <div className="text-center border-t border-gray-100 pt-8">
          <p className="text-[10px] font-black text-gray-400 tracking-[0.4em] uppercase italic opacity-80">
            &copy; 2026 BASRENG HOLIC. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
