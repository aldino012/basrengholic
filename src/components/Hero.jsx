import React, { useState, useEffect } from "react";
// Import icon yang dibutuhkan, termasuk FaRocket
import { FaFire, FaTiktok, FaShippingFast, FaRocket } from "react-icons/fa";

const Hero = ({ tiktokLink }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "VARIAN RASA TERBARU",
      subtitle:
        "Cicipi sensasi Pedas & Gurih lagi VIRAL! Stok terbatas setiap harinya.",
      // Gambar Slide 1: Spicy Food Macro
      image:
        "https://images.unsplash.com/photo-1716043145344-6bb80f119750?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <FaFire className="text-red-500" />,
      accent: "border-red-500",
    },
    {
      title: "SERBU PROMO LIVE TIKTOK",
      subtitle:
        "Diskon ugal-ugalan khusus kamu yang checkout pas kita lagi Live Stream!",
      // Gambar Slide 2: Live Stream Setup / Gadget
      image:
        "https://images.unsplash.com/photo-1764162051244-1391c41122ac?q=80&w=1626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <FaTiktok className="text-orange-500" />,
      accent: "border-orange-500",
    },
    {
      title: "KIRIM KE SELURUH INDONESIA",
      subtitle:
        "Ngidam Basreng Holic? Tenang, kita kirim secepat kilat ke rumahmu!",
      // Gambar Slide 3: Happy Delivery
      image:
        "https://images.unsplash.com/photo-1752070182361-9fa562ed7f97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <FaShippingFast className="text-yellow-500" />,
      accent: "border-yellow-500",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="scroll-mt-16">
      <div className="relative h-[500px] md:h-[650px] overflow-hidden pt-16 bg-black">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 flex items-center justify-center ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mt-12 md:mt-0">
              <div className="inline-flex items-center gap-3 mb-6 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 animate-bounce shadow-lg">
                {slide.icon}
                <span className="text-white text-xs font-black tracking-[0.2em] uppercase">
                  Official Promo
                </span>
              </div>

              <h1 className="text-4xl md:text-7xl lg:text-8xl font-black mb-6 italic uppercase drop-shadow-2xl tracking-tighter text-white leading-none">
                {slide.title}
              </h1>

              <p className="text-base md:text-xl lg:text-2xl mb-10 font-medium text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                {slide.subtitle}
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <a
                  href={tiktokLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white text-red-600 px-8 md:px-12 py-4 md:py-5 rounded-full font-black text-lg md:text-xl hover:bg-red-600 hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(220,38,38,0.6)] uppercase italic flex items-center gap-3"
                >
                  AMBIL PROMO SEKARANG
                  {/* Icon Rocket dari react-icons dengan efek terbang saat di-hover */}
                  <FaRocket className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* INDICATORS */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 transition-all duration-500 rounded-full shadow-lg cursor-pointer ${
                i === currentSlide
                  ? "w-12 bg-red-500"
                  : "w-4 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* SIDE DECORATION */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8 text-white/20 text-xs font-black rotate-180 [writing-mode:vertical-lr] tracking-[1em] uppercase pointer-events-none">
          Basreng Holic Premium Snack
        </div>
      </div>
    </section>
  );
};

export default Hero;