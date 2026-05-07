import React, { useState } from "react";
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
  const tiktokLink = "https://www.tiktok.com/@basrengholic12?is_from_webapp=1&sender_device=pc";

  const navLinks = [
    { name: "Beranda", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Produk", href: "#produk" },
    { name: "Content", href: "#content" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans scroll-smooth">
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navLinks={navLinks}
      />

      <Hero tiktokLink={tiktokLink} />

      <About tiktokLink={tiktokLink} />

      <Product tiktokLink={tiktokLink} />

      <Content />

      <ContactUs />

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
