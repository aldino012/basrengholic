import React from "react";
import { FaEye, FaTiktok } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Content = () => {
  // Data JSON asli dari hasil Scrape TikTok
  const rawTikTokData = [
    {
      "videoMeta.coverUrl":
        "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/oIAIWEAqIeBEolOEE4nGeDCrKpALAABAAe7UQP~tplv-tiktokx-origin.image?dr=9636&x-expires=1784170800&x-signature=45A8rxyMCHe0Ru7Y%2BO2C2tNISgg%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
      text: "ayo ges beli produk cemilan dari basrengholic ada basreng rengginang jamur crispy @illit_official aja suka ya kali, kalian gak suka 😍ayo buruan ke beli di toko kami\n\n#basreng #kpop #itsme #illit #fyp",
      src: "/vid/video1.mp4", // TUGAS ANDA: Ganti dengan nama file MP4 lokal Anda
    },
    {
      "videoMeta.coverUrl":
        "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/oUiykgsiplhiKEaBIVzYRcPj0dIBDbAW3iEFA~tplv-tiktokx-origin.image?dr=9636&x-expires=1784170800&x-signature=I9OyRrY667tEkBA8JBoD6McW4T8%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
      text: "ges ayo beli produk jajan dari kami murah kok ges buat mahasiswa 🥰 sama admin bisa dapat nilai A\n#cemilanviral #basreng #trending #china #fyp ",
      src: "/vid/video2.mp4",
    },
    {
      "videoMeta.coverUrl":
        "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/oUv8GVjESsQgFeqqAKNQRKBFkfAUVSEUBDOBgM~tplv-tiktokx-origin.image?dr=9636&x-expires=1784170800&x-signature=VHhCj%2FErENxqfYQhS%2FYsrQ3Scxg%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
      text: "basreng holic ada produk baru nih buruan beli nih enak tau ada basreng rengginang makaroni coming soon\nges bantu lah beli biar dapat nilai A 😘\n#promomakangajian #tiktokgogempar #cemilanviral #fypシ゚ ",
      src: "/vid/video3.mp4",
    },
    {
      "videoMeta.coverUrl":
        "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/owJoIwCqBgAQnBVqAEWTfADA55KDPFx0PULf5C~tplv-tiktokx-origin.image?dr=9636&x-expires=1784170800&x-signature=%2FzRwWa%2BI7KPekM5B64epNhfMqTw%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
      text: "CONTENT COLLAB \nyang lagi stress sama tugas yuk minum loka brew biar pikiran plong gpp kok kalian istirahat sebentar aja yang cocok ya loka brew gw mah yang brew brew aja anak skena mah minum BREW dari LOKA BREW\n#fyp #kopi #murah #skena #enak\n@lokabrew5",
      src: "/vid/video4.mp4",
    },
    {
      "videoMeta.coverUrl":
        "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/oIEuGHIASXALeIPfBNrHqdeRAiGEDFAQuAEUZ0~tplv-tiktokx-origin.image?dr=9636&x-expires=1784170800&x-signature=ZxdS8OewUri4BRPG%2BEl%2BuhPCWPo%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
      text: "trump pilih basreng kalian kira kira yang mana nih ? 😍😍 kalau mimin basreng dong \n#fyp #viral#komedi #trump #usa",
      src: "/vid/video5.mp4",
    },
    {
      "videoMeta.coverUrl":
        "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/o4Q2RUj6MuAABIGZR4vAaUA3liYAtiAErqpHw~tplv-tiktokx-origin.image?dr=9636&x-expires=1784170800&x-signature=33B546zmNyoab7d%2BtXkYH0mgYvo%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
      text: "kasihan loh guys sudah di lempar kardus ya kali gak di beli produk nya 😭😭 \n#komedi #fyp ##kontenhiburan #viral #basreng",
      src: "/vid/video6.mp4",
    },
    {
      "videoMeta.coverUrl":
        "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/oIFZkWMgWJGdCQAPSyQIxfKALAfAeeAN5o8MXB~tplv-tiktokx-origin.image?dr=9636&x-expires=1784170800&x-signature=MWpyqG06WRcaDQQwKSY9Un9q1LQ%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
      text: "ayo lah ges beli dari pada di datengin pengamen freak ini 😂😂 udah suara nya kayak mau mecahin gendang telinga terus no effort \n#fypシ゚ #komedi #virall #basrengviral #meme\ninspired by: @hansenvendiagus14",
      src: "/vid/video7.mp4",
    },
    {
      "videoMeta.coverUrl":
        "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/ossjMPAlE1iQA01AsAuLpTinBlAY9UyAAIauS~tplv-tiktokx-origin.image?dr=9636&x-expires=1784170800&x-signature=zizasLhVso%2FrCwWg9QQ1THebIKM%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
      text: "CONTENT COLLAB\nayo ges mau Kopi murah dan culture banget bagi anak muda ya @lokabrew5, ya kali oufit udah skena banget gak minum lokabrew plus harga murah lagi cuman 16K ada varian brown sugar matcha thai tea gw mah yang brew brew aja kali !!! \n\n#kopi #fyp #kopiviral #murah #minumanviral",
      src: "/vid/video8.mp4",
    },
    {
      "videoMeta.coverUrl":
        "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/oMAalraBi23xpjAWAAAAvpAE7kEvAiiRnYIIY~tplv-tiktokx-origin.image?dr=9636&x-expires=1784170800&x-signature=%2Bs5xaatY4ZrmykzJx0dQ3IhcCDE%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
      text: "SUN BLINKING\npas semesta bilang 'udah diem aja, nih basreng'. Mungkin ini yang dinamakan takdir buat kamu yang belum coba produk basrengHolic untuk buruan checkout!\n\n#relateble #childhood #nostalgia #basreng #basrengpedasdaunjeruk",
      src: "/vid/video9.mp4",
    },
    {
      "videoMeta.coverUrl":
        "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/o8BDETGQLAO1RwHfAjDAAEWITeTIQ4AeAU8DRI~tplv-tiktokx-origin.image?dr=9636&x-expires=1784170800&x-signature=lqVD1hbyqNnCbWoq5bypmOYvlVk%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
      text: "bonjour we are in Paris 🫢\nLiburan di paris ya ges ya\nayo ges bantu beli produk kami agar bisa liburan ke paris\n\n#paris #fyp #efieltower  #basrengviral #trend ",
      src: "/vid/video10.mp4",
    },
    {
      "videoMeta.coverUrl":
        "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/oQYRABl9hiBXVpgaXAInEAiaFvAlEAHz6iA7A~tplv-tiktokx-origin.image?dr=9636&x-expires=1784170800&x-signature=yNO12GdcA3MVeG5bEJ9k2Th88zU%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
      text: "MORINO CHIISANA PART 2\nihh horor banget loh ya rek \n\n#morinochiisanarestaurant #horor #basreng #cemilanviral #fyp",
      src: "/vid/video11.mp4",
    },
    {
      "videoMeta.coverUrl":
        "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/ocITLsDyIFAIQFCH2AEcAgCABx4MfVNfq4jAgg~tplv-tiktokx-origin.image?dr=9636&x-expires=1784170800&x-signature=t2Gtdbrs6nl%2BXTk%2FNYLdXLbgX3c%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
      text: "ASMR RENGGINANG rasa udang harga nya murah sedap nyooo 😋\n\n#ASMR #cemilanviral #makananviral #rengginang #fyp",
      src: "/vid/video12.mp4",
    },
    {
      "videoMeta.coverUrl":
        "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/oEEXArFUTOdVfF8dwXAD9AAESeDfAQ0ATIAUEq~tplv-tiktokx-origin.image?dr=9636&x-expires=1784170800&x-signature=qmc65rJ9nCLy17Y5%2FqCL8Kr%2FUHk%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
      text: "kalau nonton film paling enak jelas sambil nyemil basreng apa lagi ayo buruan beli basreng nya kakak di toko kami ada diskon loh murah ramah tamah bagi kalian \n\n#basreng#pov#cemilanviral #makananviral#fyp",
      src: "/vid/video13.mp4",
    },
    {
      "videoMeta.coverUrl":
        "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/o0Eqj9HEAAAlAVdegIF0GIcDcfRoA7BEBCCAwQ~tplv-tiktokx-origin.image?dr=9636&x-expires=1784170800&x-signature=wElJ98IJzSLCcptu1r7vSobwniw%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
      text: "mau makan basreng yang renyah dan pedas tentu nya di bareng holic dong sayang 😍masa sih gak beli harga nya murah meriah ramah kantong mahasiswa\nayo dong kalian bantu kakak meraih nilai A,  \n\n#ASMR #basreng #cemilanviral #fyp #murah",
      src: "/vid/video14.mp4",
    },
    {
      "videoMeta.coverUrl":
        "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/okQGUADEEd3PICCBZwQDAs9AII4pAf9QtAeLje~tplv-tiktokx-origin.image?dr=9636&x-expires=1784170800&x-signature=tmktL80iF%2BSKN%2FvxbUTKEJ%2BM%2BXw%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
      text: "Satu gigitan untuk kenikmatan. Satu kantong untuk keabadian. Karena terkadang, rasa yang paling enak adalah rasa yang takkan pernah bisa kamu ulangi lagi. Selamat menikmati suapan terakhirmu bersama Lazora.\nJangan menoleh ke belakang. Fokus saja pada pedasnya.\n#basrengviral #basrengpedasdaunjeruk \n#morinochiisanarestaurant \n#creepy ",
      src: "/vid/video15.mp4",
    },
    {
      "videoMeta.coverUrl":
        "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/oYv1zY1AAABiAHwuzRBIO0IdfEANdTIqNilCDL~tplv-tiktokx-origin.image?dr=9636&x-expires=1784170800&x-signature=w63VpLPG2RdGb69P9cPVxynTw5I%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
      text: '"Cortisol tinggi? Tenang, ada Basreng penyelamat hari! 🌶️✨ Mood langsung naik, tugas pun terbantai. Cobain sensasi pedas renyahnya sekarang! 👇"\n#cortisol #basrengpedas #stresseating #kulinertiktok #pejuangdeadline ',
      src: "/vid/video16.mp4",
    },
    {
      "videoMeta.coverUrl":
        "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/oIGvAIyAhgy3lLVIo4VeOJXGf8A0EjAFeTQsAD~tplv-tiktokx-origin.image?dr=9636&x-expires=1784170800&x-signature=CBxt%2FlaSQ1YjkMw%2FxwL1e47HnWg%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
      text: "Nabung itu rencana, beli Basreng itu panggilan jiwa! ✨\n\nPOV: Berantem sama diri sendiri tiap liat saldo vs liat kriuknya Basreng Lazora. Nabung memang penting buat masa depan, tapi ngunyah basreng penting buat masa sekarang biar gak emosian. Uang bisa dicari, tapi gurih pedasnya Lazora seringkali cepat habis! 🌶️🏃💨\nMending ikutin kata hati, checkout sekarang! 🛒\n#pov  #basreng \n #JajananViral #tabungan  #CamilanPedas",
      src: "/vid/video17.mp4",
    },
    {
      "videoMeta.coverUrl":
        "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/oEEAIc9fpAmEqKERPn7pfAFw0AvDYDgBAtm8uC~tplv-tiktokx-origin.image?dr=9636&x-expires=1784170800&x-signature=Vk9nLM%2F%2BFne9%2BFYQVy30yPcyTUs%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
      text: "AWAS, JANGAN DI-SCROLL KALAU NGGAK MAU KETAGIHAN! 🫣🔥\n\nHai Basrenglovers! 👀✨\nAda yang baru nih dari tim BasrengHolic. Kenalin, Basreng Lazora rasa Pedas Jeruk Cikruh! 🌶️🍃\n\nBukan sembarang basreng, yang ini bumbunya melimpah (cikruh), pedasnya nendang, dan gurihnya beneran nagih dari gigitan pertama. Teksturnya super renyah, nggak bakal bikin gigi pegel!\n\n🎁 SPESIAL LAUNCHING:\nDISKON 20% buat kamu pelanggan baru! Dari harga awal 20rb, sekarang CUMA 16rb aja! (Promo cuma 15 hari, ya! ⏳)\n\nJangan sampai kelewatan atau cuma bisa ngeliatin orang lain yang asyik ngunyah! 😉\n\n👉 Yuk, langsung amankan stokmu di keranjang kuning sebelum diskon berakhir!\n#basreng #cemilanpedas #basrengpedas #foryou #anakkampus ",
      src: "/vid/video18.mp4",
    },
    {
      "videoMeta.coverUrl":
        "https://p16-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/oIRCPFBIApCfDx758pmxAEculAEEIAepDgAdEg~tplv-tiktokx-origin.image?dr=9636&x-expires=1784170800&x-signature=%2BQ965A7%2FfUmdcN1ubLlwKVVfTW4%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=43f4a2f9&idc=useast5",
      text: "AWAS, JANGAN DI-SCROLL KALAU NGGAK MAU KETAGIHAN! 🫣🔥\n\nHai Basrenglovers! 👀✨\nAda yang baru nih dari tim BasrengHolic. Kenalin, Basreng Lazora rasa Pedas Jeruk Cikruh! 🌶️🍃\n\nBukan sembarang basreng, yang ini bumbunya melimpah (cikruh), pedasnya nendang, dan gurihnya beneran nagih dari gigitan pertama. Teksturnya super renyah, nggak bakal bikin gigi pegel!\n\n🎁 SPESIAL LAUNCHING:\nDISKON 20% buat kamu pelanggan baru! Dari harga awal 20rb, sekarang CUMA 16rb aja! (Promo cuma 15 hari, ya! ⏳)\n\nJangan sampai kelewatan atau cuma bisa ngeliatin orang lain yang asyik ngunyah! 😉\n\n👉 Yuk, langsung amankan stokmu di keranjang kuning sebelum diskon berakhir!\n#basreng #cemilanpedas #basrengpedas #foryou #anakkampus ",
      src: "/vid/video19.mp4",
    },
  ];

  // Fungsi untuk membersihkan dan merapikan data agar cocok dengan format React sebelumnya
  const formattedVideos = rawTikTokData.map((item, index) => {
    // 1. Ekstrak Hashtag untuk SEO Keywords
    const hashTagsMatch = item.text.match(/#[\w]+/g);
    const keywords = hashTagsMatch
      ? hashTagsMatch.map((tag) => tag.replace("#", "")).join(", ")
      : "basreng, cemilan pedas";

    // 2. Buat Judul (Ambil kalimat pertama atau 40 karakter pertama sebelum hashtag)
    let cleanText = item.text.split("#")[0].trim();
    let title =
      cleanText.length > 40 ? cleanText.substring(0, 40) + "..." : cleanText;
    if (!title) title = "Video BasrengHolic"; // Fallback jika teks kosong

    return {
      id: index + 1,
      src: item.src,
      poster: item["videoMeta.coverUrl"],
      title: title,
      description:
        cleanText || "Video keseruan nyemil basreng pedas dari BasrengHolic.",
      keywords: keywords,
      // Default view karena data view tidak ter-export di JSON
      views: Math.floor(Math.random() * (900 - 100 + 1) + 100).toString(),
      uploadDate: new Date().toISOString(), // Menggunakan tanggal hari ini untuk AI Schema
    };
  });

  // Schema SEO untuk Google
  const videoSchemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: formattedVideos.map((video, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "VideoObject",
        name: video.title,
        description: video.description,
        contentUrl: `https://www.basrengholic.online${video.src}`,
        thumbnailUrl: video.poster,
        uploadDate: video.uploadDate,
        keywords: video.keywords,
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
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-xs font-bold uppercase tracking-widest mb-4 shadow-md">
            <FaTiktok className="text-lg" /> Konten BasrengHolic
          </div>

          <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-4 text-gray-900 drop-shadow-sm">
            Review Basreng <span className="text-red-600">Terfavorit</span>
          </h2>

          <p className="text-gray-500 font-medium tracking-wide max-w-xl mx-auto bg-white/60 backdrop-blur-sm p-2 rounded-xl inline-block">
            Tonton keseruan review ASMR dan promo ugal-ugalan basreng pedas dari
            kami. Siap-siap ngiler lihat bumbunya!
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
            }}
            className="pb-16 pt-4 px-2"
          >
            {formattedVideos.map((video) => (
              <SwiperSlide key={video.id}>
                <div className="relative aspect-[9/16] bg-black rounded-[2rem] overflow-hidden shadow-xl border-4 border-white/50 hover:border-red-100 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 flex flex-col group h-full">
                  <div className="absolute top-0 left-0 w-full p-5 z-20 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
                    <h3 className="text-white font-bold text-sm md:text-base leading-tight mb-2 drop-shadow-md">
                      {video.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-gray-300 text-[10px] md:text-xs font-semibold tracking-wider">
                      <FaEye /> {video.views} Views
                    </div>
                  </div>

                  <video
                    src={video.src}
                    poster={video.poster}
                    title={video.title}
                    className="w-full h-full object-cover z-10"
                    controls
                    playsInline
                    preload="none"
                  >
                    Browser kamu tidak mendukung pemutaran video basreng ini.
                  </video>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Content;
