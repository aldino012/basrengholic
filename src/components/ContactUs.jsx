import React, { useState } from "react";
// Import icon FontAwesome yang relevan
import { FaWhatsapp, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const ContactUs = () => {
  // State untuk menyimpan data inputan form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Fungsi untuk mengirim pesan ke WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman

    // Nomor WA kamu (pastikan formatnya 62 tanpa + atau awalan 0)
    const phoneNumber = "6289683027911";

    // Format pesan yang akan dikirim
    const textMessage = `Halo Tim Basreng Holic! 🌶️\n\n*Nama:* ${formData.name}\n*Email:* ${formData.email}\n\n*Pesan:*\n${formData.message}`;

    // Encode URL agar spasi dan enter terbaca dengan benar di WA
    const encodedMessage = encodeURIComponent(textMessage);

    // Buat URL WhatsApp API
    const waURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Buka di tab baru
    window.open(waURL, "_blank");

    // Opsional: Kosongkan form setelah mengirim
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-red-600 text-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white text-gray-900 rounded-[3rem] p-8 md:p-14 shadow-2xl flex flex-col md:flex-row gap-12 border-t-8 border-orange-500">
          {/* LEFT SIDE: INFORMASI KONTAK */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-black mb-4 italic uppercase tracking-tighter text-red-600">
              ADA PERTANYAAN?
            </h2>
            <p className="text-gray-500 mb-10 font-medium text-sm leading-relaxed">
              Mau cuan dari rumah? Yuk gabung jadi bagian dari keluarga Basreng
              Holic dan dapetin harga spesial grosir! Silakan isi form di
              samping atau hubungi kami langsung.
            </p>

            <div className="space-y-8">
              {/* WHATSAPP INFO */}
              <div
                className="flex items-center gap-5 group cursor-pointer"
                onClick={() =>
                  window.open("https://wa.me/6289683027911", "_blank")
                }
              >
                <div className="w-14 h-14 bg-green-100 flex items-center justify-center rounded-2xl group-hover:bg-green-200 transition-colors">
                  <FaWhatsapp className="text-3xl text-green-600" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 font-sans">
                    WhatsApp Official
                  </p>
                  <p className="font-black text-gray-800 tracking-tight text-sm">
                    +62 896-8302-7911
                  </p>
                </div>
              </div>

              {/* LOCATION INFO */}
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-blue-100 flex items-center justify-center rounded-2xl group-hover:bg-blue-200 transition-colors">
                  <FaMapMarkerAlt className="text-2xl text-blue-600" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 font-sans">
                    Pusat Produksi
                  </p>
                  <p className="font-black text-gray-800 tracking-tight text-sm">
                    Banyuwangi, Jawa Timur
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: FORM WHATSAPP */}
          <form
            onSubmit={handleSubmit}
            className="md:w-1/2 space-y-4 font-sans text-xs flex flex-col justify-center"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nama Lengkap Kamu"
              required
              className="w-full p-4 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all font-bold text-gray-700"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email (Biar Kita Kirim Katalog)"
              required
              className="w-full p-4 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all font-bold text-gray-700"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tanya apa aja tentang Basreng Holic..."
              rows="4"
              required
              className="w-full p-4 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all font-bold text-gray-700 resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl hover:bg-red-700 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <FaPaperPlane className="text-lg" />
              KIRIM VIA WHATSAPP
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
