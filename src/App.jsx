import React, { useState } from "react";
// Hapus import { Helmet } karena sudah ada di dalam komponen SEO
import SEO from "./components/SEO";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Product from "./components/Product";
import Content from "./components/Content";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tiktokLink =
    "https://www.tiktok.com/@basrengholic12?is_from_webapp=1&sender_device=pc";

  const navLinks = [
    { name: "Beranda", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Produk", href: "#produk" },
    { name: "Content", href: "#content" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans scroll-smooth">
      {/* Panggil komponen SEO secara modular di sini */}
      <SEO
        title="Basreng Pedas Daun Jeruk Paling Nagih"
        description="Jagonya basreng premium dengan bumbu rempah asli. Renyah, gurih, dan bikin ketagihan. Cek produk Basrengholic di sini!"
      />

      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navLinks={navLinks}
      />

      <main>
        <section id="home">
          <Hero tiktokLink={tiktokLink} />
        </section>
        <section id="about">
          <About tiktokLink={tiktokLink} />
        </section>
        <section id="produk">
          <Product tiktokLink={tiktokLink} />
        </section>
        <section id="content">
          <Content />
        </section>
        <section id="contact">
          <ContactUs />
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
