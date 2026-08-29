import { ref, computed } from "vue";

const currentLang = ref("EN");

export const toggleLanguage = () => {
  currentLang.value = currentLang.value === "EN" ? "ID" : "EN";
};

export const useLanguage = () => {
  return {
    lang: currentLang,
    toggleLanguage,
    t: (key) => {
      return translations[currentLang.value][key] || key;
    },
  };
};

const translations = {
  EN: {
    // Navbar
    nav_home: "Home",
    nav_about: "About",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_achievements: "Achievements",
    nav_contact: "Contact Me",

    // Hero / About
    typewriter_1: "Hii...",
    typewriter_2: "I'm Muhamad Sidik...",
    hero_designer: "Designer",
    hero_desc:
      "Combining creativity and technology to turn ideas into visual, interactive, and functional digital experiences that connect with people, across design, web, and interactive media",
    hero_contact: "Get In Touch",
    about_title: "About Me",
    about_intro_1:
      "A creative designer who enjoys exploring the space between creativity and technology, curious about how things look, work, and connect.",
    about_intro_2:
      "With experience across design, web, game, and AR development, I enjoy moving between creative areas rather than sticking to one.",
    about_intro_3:
      "I turn ideas into visual and interactive experiences, shaping their structure, building them hands-on, and bringing them to life as functional digital experiences.",
    education_title: "Education",
    edu_1_desc: "Applied Sciences in Multimedia Engineering Technology",
    edu_1_detail: "2022 - 2026 (GPA: 3.83 / 4.00, Cum Laude)",
    edu_2_desc: "Multimedia",
    edu_2_detail: "2019 - 2022",
    skills_title: "Skills",
    skills_design_title: "Design",
    skills_design_desc: "UI Design • Graphic Design • Prototyping",
    skills_tech_title: "Technology",
    skills_tech_desc: "Web Development • Game Development • AR Development",
    skills_process_title: "Process",
    skills_process_desc: "Creative Thinking • Problem Solving",
    stat_years: "Years of Hands-On Experience",
    stat_projects: "Personal & Collaborative Projects",
    lang_title: "Language",
    lang_id_title: "Indonesian",
    lang_id_desc: "Native",
    lang_en_title: "English",
    lang_en_level: "Intermediate • CEFR B1",
    lang_en_cert: "EPRT Score: 483 • Telkom University",

    // Experience
    exp_title: "Experience",
    exp_desc:
      "A collection of experiences across design, technology, and interactive projects, shaped through academic, professional, and collaborative work.",
    exp_work_org: "Work & Organizational Experience",
    // Work items
    exp_w1_title: "Information Technology & Web Dev",
    exp_w1_sub: "Internship | PT. Jasa & Kepariwisataan Jabar",
    exp_w1_desc:
      "Developed multi-language (i18n) features for the DJourney website, built mobile responsive layouts, and performed bug fixes on destination search filters and UI display issues.",
    exp_w2_title: "Teaching Assistant",
    exp_w2_sub: "School of Applied Science | Telkom University",
    exp_w2_desc:
      "Assisted practical sessions across 5 courses, supporting students with technical tasks, evaluating their work, managing lab resources, and coordinating with lecturers.",
    exp_w3_title: "Publication & Media Designer",
    exp_w3_sub: "MAPS 2023 Event | Telkom University",
    exp_w3_desc:
      "Designed event merchandise and digital assets for promotion; collaborated with the documentation team on content coverage and visual output.",
    exp_w4_title: "Multimedia Project Crew",
    exp_w4_sub: "SMKN 1 Belitang III",
    exp_w4_desc:
      "Contributed to school multimedia organization by filming documentation, creating cover music videos, and supporting video production tasks for events and school activities.",
    exp_w5_title: "Team Leader - Intern Project",
    exp_w5_sub: "Production Unit of SMKN 1 Belitang III",
    exp_w5_desc:
      'Led a design-production project during vocational internship (PKL Based On Project), producing custom printed mugs in a multimedia lab. Managed design, printing, and coordination with other divisions. Rated "Excellent".',

    // Projects Exp
    exp_proj_title: "Projects Experience",
    earlier_experience_title: "Earlier Experience",
    additional_projects_title: "Additional Projects",
    show_additional_projects: "Show Additional Projects",
    hide_additional_projects: "Hide Additional Projects",
    exp_p7_title: "Unity Developer & Programmer",
    exp_p7_sub: "Mathmagic",
    exp_p7_desc:
      "Developed an educational mathematics game for 4th-grade students in partnership with SD Laboratorium Universitas Pattimura. Worked across UI design, application flow, Unity development, and Firebase integration, building both the player experience and supporting admin CMS.",
    exp_p7_tech: "Unity · Firebase · UI Design · System Flow",
    exp_p1_title: "Project Manager & Game Dev",
    exp_p1_sub: "RideXP",
    exp_p1_desc:
      "Led a team in developing a Unity-based arcade game, handling project planning, game development, UI design, branding, and exhibition preparation.",
    exp_p1_tech: "Unity · ESP32 · JSON",
    exp_p2_title: "Game Dev & UI/UX Designer",
    exp_p2_sub: "MathRift",
    exp_p2_desc:
      "Built a Unity-based educational platformer with Firebase integration, focused on math-physics gameplay, complete UI/UX flow, and optimized performance.",
    exp_p2_tech: "Unity · Firebase",
    exp_p3_title: "VR Dev & ENV Designer",
    exp_p3_sub: "MindEscape: VR Chamber",
    exp_p3_desc:
      "Developed an immersive VR escape room in Unity, designing environments, mechanics integration, user navigation, and optimizing headset performance.",
    exp_p3_tech: "Unity · SteamVR",
    exp_p4_title: "AR Developer & Designer",
    exp_p4_sub: "Stellar Adventures",
    exp_p4_desc:
      "Created an AR space adventure in Unity with Vuforia, combining interactive markers, animated assets, and user-friendly interface.",
    exp_p4_tech: "Unity · Vuforia",
    exp_p5_title: "UI/UX Designer",
    exp_p5_sub: "U-Asprak",
    exp_p5_desc:
      "Created high-fidelity mockups in Figma based on the team's wireframes. Defined visual style through early sketches, color palettes, and typography choices.",
    exp_p5_tech: "Figma",
    exp_p6_title: "Frontend & Backend Dev",
    exp_p6_sub: "IUDEX Web Portfolio",
    exp_p6_desc:
      "Developed a portfolio website using PHP, SQL (CRUD), and JavaScript animation templates. Handled both frontend layout and backend logic.",
    exp_p6_tech: "PHP · SQL · JavaScript",

    // Achievements
    ach_title_1: "Achievements &",
    ach_title_2: "Certificates",
    ach_desc:
      "Achievements and certifications that reflect my creative journey — this section highlights a few selected milestones that shaped MY APPS in multimedia and digital design.",

    // Contact
    contact_title_1: "Contact &",
    contact_title_2: "Connect",
    contact_title_3: " with Me",
    contact_phone: "Phone",
    contact_email: "Email",
    contact_addr: "Address",
    contact_socmed: "Social Media",
    contact_btn: "DOWNLOAD",
    contact_footer: "All rights reserved.",
    contact_views: "Total Views",

    // CTA Popup
    cta_title: "Are you interested?",
    cta_desc:
      "I'm currently available for work. Let's create something amazing together! ✨",
    cta_contact: "Contact Me",
    cta_dismiss: "Not now",

    // Skills Section
    skills_badge: "MY APPS",
    skills_heading: "SOME SOFTWARE THAT I USE",
    skills_sub:
      "A versatile toolkit that supports my workflow across UI/UX, game development, and interactive media — from wireframes and design assets to real-time prototypes and immersive experiences.",

    // Some Projects
    project_tag: "Selected Works",
    some_proj_title_1: "Some Projects I've Designed &",
    some_proj_title_2: "Developed",
    some_proj_desc:
      "A selection of works spanning UI/UX design, game development, AR/VR, and web-based platforms — built during academic and collaborative projects.",

    // My Projects
    my_proj_badge: "PROJECT CONTRIBUTIONS",
    my_proj_title: "What I Did",
    my_proj_desc:
      "A showcase of roles I've taken, problems I've solved, and experiences I've crafted — across design, development, and creative tech.",
    my_proj_role: "Role",
    my_proj_tools: "Stack",
    my_proj_overview: "Overview",
    my_proj_whatidid: "Contributions",
    my_proj_view_work: "VIEW CASE STUDY",
    my_proj_view_all: "VIEW ALL PROJECTS",
    my_proj_show_less: "SHOW LESS",

    // Design Showcase
    ds_badge: "Design Showcase",
    ds_title: "Visual Explorations",
    ds_desc:
      "A curated collection of my creative works, ranging from digital illustration, UI/UX conceptualization, to brand identity.",
    ds_scroll: "Scroll",
    ds_scroll: "Scroll",
    ds_tools: "Tools",
    ds_date: "Date",
    ds_close: "Close Detail",

    // FAB
    fab_top: "Back to Top",
    fab_cv: "Download CV",
  },
  ID: {
    // Navbar
    nav_home: "Beranda",
    nav_about: "Tentang",
    nav_experience: "Pengalaman",
    nav_projects: "Proyek",
    nav_achievements: "Pencapaian",
    nav_contact: "Kontak",

    // Hero / About
    typewriter_1: "Halo...",
    typewriter_2: "Saya Muhamad Sidik...",
    hero_designer: "Designer",
    hero_desc:
      "Memadukan kreativitas dan teknologi untuk mewujudkan ide menjadi pengalaman digital yang visual, interaktif, dan fungsional, serta terhubung dengan penggunanya melalui desain, web, dan media interaktif.",
    hero_contact: "Hubungi Saya",
    about_title: "Tentang Saya",
    about_intro_1:
      "Seorang creative designer yang senang menjelajahi ruang antara kreativitas dan teknologi, penasaran dengan bagaimana sesuatu terlihat, bekerja, dan saling terhubung.",
    about_intro_2:
      "Dengan pengalaman di desain, web, game, hingga AR development, saya tidak terpatok pada satu bidang.",
    about_intro_3:
      "Saya mengubah ide menjadi pengalaman visual dan interaktif, membentuk strukturnya, membangunnya secara langsung, dan mewujudkannya sebagai pengalaman digital yang fungsional.",
    education_title: "Pendidikan",
    edu_1_desc: "Fakultas Ilmu Terapan, Teknologi Rekayasa Multimedia",
    edu_1_detail: "2022 - 2026 (IPK: 3.83 / 4.00, Cum Laude)",
    edu_2_desc: "Multimedia",
    edu_2_detail: "2019 - 2022",
    skills_title: "Keahlian",
    skills_design_title: "Desain",
    skills_design_desc: "UI Design • Desain Grafis • Prototyping",
    skills_tech_title: "Teknologi",
    skills_tech_desc: "Web Development • Game Development • AR Development",
    skills_process_title: "Proses",
    skills_process_desc: "Berpikir Kreatif • Problem Solving",
    stat_years: "Tahun Berkarya",
    stat_projects: "Proyek Personal & Tim",
    lang_title: "Bahasa",
    lang_id_title: "Bahasa Indonesia",
    lang_id_desc: "Native Speaker",
    lang_en_title: "Bahasa Inggris",
    lang_en_level: "Menengah • CEFR B1",
    lang_en_cert: "Skor EPRT: 483 • Universitas Telkom",

    // Experience
    exp_title: "Pengalaman",
    exp_desc:
      "Kumpulan pengalaman di bidang desain, teknologi, dan proyek interaktif, terbentuk melalui kegiatan akademik, profesional, dan kolaboratif.",
    exp_work_org: "Pengalaman Kerja & Organisasi",
    // Work items
    exp_w1_title: "Teknologi Informasi & Web Dev",
    exp_w1_sub: "Magang | PT. Jasa & Kepariwisataan Jabar",
    exp_w1_desc:
      "Mengembangkan fitur multi-language (i18n) pada website DJourney milik PT. Jaswita Jabar, membangun tampilan responsif mobile, serta melakukan perbaikan bug (bug fix) pada filter pencarian destinasi dan antarmuka web.",
    exp_w2_title: "Asisten Praktikum",
    exp_w2_sub: "Fakultas Ilmu Terapan | Universitas Telkom",
    exp_w2_desc:
      "Jadi asisten untuk 5 mata kuliah — bantu mahasiswa di sesi praktikum, nilai tugas, kelola lab, dan koordinasi sama dosen.",
    exp_w3_title: "Desainer Publikasi & Media",
    exp_w3_sub: "Event MAPS 2023 | Universitas Telkom",
    exp_w3_desc:
      "Desain merchandise dan aset digital untuk promosi acara, plus kolaborasi sama tim dokumentasi buat konten dan visual event.",
    exp_w4_title: "Kru Multimedia Sekolah",
    exp_w4_sub: "SMKN 1 Belitang III",
    exp_w4_desc:
      "Aktif di organisasi multimedia sekolah — dokumentasi acara, bikin video musik cover, dan bantu produksi video untuk berbagai kegiatan.",
    exp_w5_title: "Ketua Tim - Proyek Magang",
    exp_w5_sub: "Unit Produksi SMKN 1 Belitang III",
    exp_w5_desc:
      "Mimpin proyek cetak mug kustom saat PKL Berbasis Proyek di lab multimedia SMK. Urus desain, cetak, sampai koordinasi antar divisi. Hasilnya: nilai 'Sangat Baik'.",

    // Projects Exp
    exp_proj_title: "Pengalaman Proyek",
    earlier_experience_title: "Pengalaman Sebelumnya",
    additional_projects_title: "Proyek Tambahan",
    show_additional_projects: "Lihat Proyek Tambahan",
    hide_additional_projects: "Sembunyikan Proyek Tambahan",
    exp_p7_title: "Unity Developer & Programmer",
    exp_p7_sub: "Mathmagic",
    exp_p7_desc:
      "Mengembangkan game edukasi matematika untuk siswa kelas 4 SD bekerja sama dengan SD Laboratorium Universitas Pattimura. Bekerja dalam desain UI, alur aplikasi, pengembangan Unity, dan integrasi Firebase, membangun pengalaman pemain serta CMS admin pendukung.",
    exp_p7_tech: "Unity · Firebase · UI Design · System Flow",
    exp_p1_title: "Project Manager & Game Dev",
    exp_p1_sub: "RideXP",
    exp_p1_desc:
      "Memimpin tim dalam mengembangkan game arcade berbasis Unity, menangani perencanaan proyek, pengembangan game, desain UI, branding, dan persiapan pameran.",
    exp_p1_tech: "Unity · ESP32 · JSON",
    exp_p2_title: "Game Dev & UI/UX Designer",
    exp_p2_sub: "MathRift",
    exp_p2_desc:
      "Membangun game platformer 2D edukatif berbasis Unity dengan integrasi Firebase, berfokus pada gameplay matematika-fisika, alur UI/UX lengkap, dan optimasi performa.",
    exp_p2_tech: "Unity · Firebase",
    exp_p3_title: "VR Dev & Environment Designer",
    exp_p3_sub: "MindEscape: VR Chamber",
    exp_p3_desc:
      "Mengembangkan escape room VR yang imersif di Unity, merancang lingkungan, integrasi mekanik, navigasi pengguna, dan mengoptimalkan performa headset.",
    exp_p3_tech: "Unity · SteamVR",
    exp_p4_title: "AR Developer & Designer",
    exp_p4_sub: "Stellar Adventures",
    exp_p4_desc:
      "Membuat petualangan luar angkasa AR di Unity dengan Vuforia, menggabungkan penanda interaktif, aset animasi, dan antarmuka yang ramah pengguna.",
    exp_p4_tech: "Unity · Vuforia",
    exp_p5_title: "UI/UX Designer",
    exp_p5_sub: "U-Asprak",
    exp_p5_desc:
      "Membuat mockup dengan ketelitian tinggi (high-fidelity) di Figma berdasarkan wireframe tim. Menentukan gaya visual melalui sketsa awal, palet warna, dan pilihan tipografi.",
    exp_p5_tech: "Figma",
    exp_p6_title: "Frontend & Backend Dev",
    exp_p6_sub: "IUDEX Web Portfolio",
    exp_p6_desc:
      "Mengembangkan website portofolio menggunakan PHP, SQL (CRUD), dan template animasi JavaScript. Menangani tata letak frontend dan logika backend.",
    exp_p6_tech: "PHP · SQL · JavaScript",

    // Achievements
    ach_title_1: "Pencapaian &",
    ach_title_2: "Sertifikat",
    ach_desc:
      "Beberapa pencapaian dan sertifikasi selama perjalanan kreatif saya — tonggak penting yang ikut membentuk skill di bidang multimedia dan desain digital.",

    // Contact
    contact_title_1: "Kontak &",
    contact_title_2: "Terhubung",
    contact_title_3: "dengan Saya",
    contact_phone: "Telepon",
    contact_email: "Email",
    contact_addr: "Alamat",
    contact_socmed: "Media Sosial",
    contact_btn: "UNDUH",
    contact_footer: "Hak cipta dilindungi.",
    contact_views: "Total Kunjungan",

    // CTA Popup
    cta_title: "Tertarik?",
    cta_desc:
      "Saya lagi terbuka untuk kolaborasi. Yuk bikin sesuatu yang keren bareng! ✨",
    cta_contact: "Hubungi Saya",
    cta_dismiss: "Nanti dulu",

    // Skills Section
    skills_badge: "MY APPS",
    skills_heading: "SOME SOFTWARE THAT I USE",
    skills_sub:
      "Tools yang saya pakai sehari-hari untuk desain UI/UX, game dev, dan konten digital — dari wireframe dan aset visual sampai prototipe interaktif.",

    // Some Projects
    project_tag: "Portofolio Terpilih",
    some_proj_title_1: "Beberapa Proyek yang Pernah Saya Rancang &",
    some_proj_title_2: "Kembangkan",
    some_proj_desc:
      "Kumpulan karya dari berbagai bidang — desain UI/UX, game dev, AR/VR, dan web — yang dibuat selama kuliah maupun proyek bareng tim.",

    // My Projects
    my_proj_badge: "KONTRIBUSI PROYEK",
    my_proj_title: "What I Did",
    my_proj_desc:
      "Showcase peran yang saya jalani, masalah yang dipecahkan, dan pengalaman yang saya rancang di bidang desain, dev, dan teknologi kreatif.",
    my_proj_role: "Peran",
    my_proj_tools: "Stack",
    my_proj_overview: "Ringkasan",
    my_proj_whatidid: "Kontribusi",
    my_proj_view_work: "LIHAT STUDI KASUS",
    my_proj_view_all: "LIHAT SEMUA PROYEK",
    my_proj_show_less: "TAMPILKAN LEBIH SEDIKIT",

    // Design Showcase
    ds_badge: "Pameran Desain",
    ds_title: "Eksplorasi Visual",
    ds_desc:
      "Koleksi karya kreatif saya — dari ilustrasi digital dan konsep UI/UX, sampai identitas brand.",
    ds_scroll: "Geser",
    ds_tools: "Tools",
    ds_date: "Tanggal",
    ds_close: "Tutup Detail",

    // FAB
    fab_top: "Kembali ke Atas",
    fab_cv: "Unduh CV",
  },
};
