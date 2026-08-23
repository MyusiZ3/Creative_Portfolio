import { ref, computed } from 'vue';

const currentLang = ref('EN');

export const toggleLanguage = () => {
  currentLang.value = currentLang.value === 'EN' ? 'ID' : 'EN';
};

export const useLanguage = () => {
  return {
    lang: currentLang,
    toggleLanguage,
    t: (key) => {
      return translations[currentLang.value][key] || key;
    }
  };
};

const translations = {
  EN: {
    // Navbar
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_achievements: "Achievements",
    nav_contact: "Contact Me",

    // Hero / About
    typewriter_1: "Hii...",
    typewriter_2: "I'm Muhamad Sidik...",
    hero_designer: "Creative Developer",
    hero_desc: "Combine creative vision with technical coding skills to produce engaging interactive experiences across platforms — from game development and AR/VR to modern web & UI/UX.",
    hero_contact: "Get In Touch",
    about_title: "About Me",
    about_intro_1: "A passionate Creative Developer & Game Developer with a strong foundation in interactive technology, game dev, and user-focused experiences.",
    about_intro_2: "With experience as a Teaching Assistant and creative lead in team projects, I blend design thinking and technical coding skills to craft immersive interactive experiences.",
    about_intro_3: "Certified in multimedia production (BNSP - KKNI Level 2) and driven by curiosity and creativity.",
    education_title: "Education",
    edu_1_desc: "Undergraduate in Applied Sciences, Multimedia Engineering Technology",
    edu_2_desc: "Multimedia",
    skills_title: "Skills",
    hard_skills: "Hard Skills",
    soft_skills: "Soft Skills",
    hard_skills_desc: "UI/UX Design • Graphic Design • Layout Design • Game Development • Asset Compositing & AR/VR",
    soft_skills_desc: "Creative Thinking • Team Collaboration • Problem Solving • Attention to Detail • Time Management • Adaptability",
    stat_years: "Years of Practical Experience",
    stat_projects: "Completed Personal & Team Projects",
    lang_native: "Native",
    lang_title: "Language",

    // Experience
    exp_title: "Experience",
    exp_desc: "Experienced in designing and developing interactive solutions across education, design, games, AR/VR, and UI/UX platforms — from lab teaching to full product prototyping.",
    exp_work_org: "Work & Organizational Experience",
    // Work items
    exp_w1_title: "Information Technology & Web Dev",
    exp_w1_sub: "Internship | PT. Jasa & Kepariwisataan Jabar",
    exp_w1_desc: "Developed multi-language (i18n) features for the DJourney website, built mobile responsive layouts, and performed bug fixes on destination search filters and UI display issues.",
    exp_w2_title: "Teaching Assistant",
    exp_w2_sub: "School of Applied Science | Telkom University",
    exp_w2_desc: "Assisted practical sessions across 5 courses, supporting students with technical tasks, evaluating their work, managing lab resources, and coordinating with lecturers.",
    exp_w3_title: "Publication & Media Designer",
    exp_w3_sub: "MAPS 2023 Event | Telkom University",
    exp_w3_desc: "Designed event merchandise and digital assets for promotion; collaborated with the documentation team on content coverage and visual output.",
    exp_w4_title: "Multimedia Project Crew",
    exp_w4_sub: "SMKN 1 Belitang III",
    exp_w4_desc: "Contributed to school multimedia organization by filming documentation, creating cover music videos, and supporting video production tasks for events and school activities.",
    exp_w5_title: "Team Leader - Intern Project",
    exp_w5_sub: "Production Unit of SMKN 1 Belitang III",
    exp_w5_desc: "Led a design-production project during vocational internship (PKL Based On Project), producing custom printed mugs in a multimedia lab. Managed design, printing, and coordination with other divisions. Rated \"Excellent\".",

    // Projects Exp
    exp_proj_title: "Projects Experience",
    exp_p1_title: "Project Manager & Game Dev",
    exp_p1_sub: "RideXP | Arcade Game Project",
    exp_p1_desc: "Led a team to develop a Unity-based arcade game with ESP32 input, JSON leaderboard, dynamic AI NPCs, and fully custom UI/UX. Also handled project planning, branding, and presentation for public exhibition.",
    exp_p2_title: "Game Dev & UI/UX Designer",
    exp_p2_sub: "MathRift | Educational 2D Platformer Game",
    exp_p2_desc: "Built a Unity-based educational platformer with Firebase integration, focused on math-physics gameplay, complete UI/UX flow, and optimized performance.",
    exp_p3_title: "VR Dev & ENV Designer",
    exp_p3_sub: "MindEscape: VR Chamber - VR Game",
    exp_p3_desc: "Developed an immersive VR escape room in Unity, designing environments, mechanics integration, user navigation, and optimizing headset performance.",
    exp_p4_title: "AR Developer & Designer",
    exp_p4_sub: "Stellar Adventures | AR Game Project",
    exp_p4_desc: "Created an AR space adventure in Unity with Vuforia, combining interactive markers, animated assets, and user-friendly interface.",
    exp_p5_title: "UI/UX Designer",
    exp_p5_sub: "U-Asprak Project | Team Case Study",
    exp_p5_desc: "Created high-fidelity mockups in Figma based on the team's wireframes. Defined visual style through early sketches, color palettes, and typography choices.",
    exp_p6_title: "Frontend & Backend Dev",
    exp_p6_sub: "IUDEX Web Portfolio | Team Project",
    exp_p6_desc: "Developed a portfolio website using PHP, SQL (CRUD), and JavaScript animation templates. Handled both frontend layout and backend logic.",

    // Achievements
    ach_title_1: "Achievements &",
    ach_title_2: "Certificates",
    ach_desc: "Achievements and certifications that reflect my creative journey — this section highlights a few selected milestones that shaped my skills in multimedia and digital design.",

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
    cta_desc: "I'm currently available for work. Let's create something amazing together! ✨",
    cta_contact: "Contact Me",
    cta_dismiss: "Not now",

    // Skills Section
    skills_badge: "MY SKILLS",
    skills_heading: "SOME SOFTWARE THAT I USE",
    skills_sub: "A versatile toolkit that supports my workflow across UI/UX, game development, and interactive media — from wireframes and design assets to real-time prototypes and immersive experiences.",

    // Some Projects
    project_tag: "Selected Works",
    some_proj_title_1: "Some Projects I've Designed &",
    some_proj_title_2: "Developed",
    some_proj_desc: "A selection of works spanning UI/UX design, game development, AR/VR, and web-based platforms — built during academic and collaborative projects.",

    // My Projects
    my_proj_badge: "PROJECT CONTRIBUTIONS",
    my_proj_title: "What I Did",
    my_proj_desc: "A showcase of roles I've taken, problems I've solved, and experiences I've crafted — across design, development, and creative tech.",
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
    ds_desc: "A curated collection of my creative works, ranging from digital illustration, UI/UX conceptualization, to brand identity.",
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
    nav_skills: "Keahlian",
    nav_projects: "Proyek",
    nav_achievements: "Pencapaian",
    nav_contact: "Kontak",

    // Hero / About
    typewriter_1: "Halo...",
    typewriter_2: "Saya Muhamad Sidik...",
    hero_designer: "Creative Developer",
    hero_desc: "Saya gabungkan visi kreatif dengan skill pemrograman teknis buat bikin pengalaman interaktif yang engaging — dari game development dan AR/VR, sampai web modern & UI/UX.",
    hero_contact: "Hubungi Saya",
    about_title: "Tentang Saya",
    about_intro_1: "Saya Creative Developer & Game Developer yang antusias, dengan background kuat di teknologi interaktif, game dev, dan antarmuka yang berfokus pada pengalaman pengguna.",
    about_intro_2: "Punya pengalaman jadi Asisten Praktikum dan lead kreatif di berbagai proyek tim — terbiasa gabungin design thinking dengan skill koding teknis.",
    about_intro_3: "Tersertifikasi di bidang produksi multimedia (BNSP - KKNI Level 2), dan selalu terdorong oleh rasa ingin tahu serta kreativitas.",
    education_title: "Pendidikan",
    edu_1_desc: "Sarjana Terapan Teknik Rekayasa Multimedia",
    edu_2_desc: "Multimedia",
    skills_title: "Keahlian",
    hard_skills: "Keahlian Teknis",
    soft_skills: "Soft Skills",
    hard_skills_desc: "Desain UI/UX • Desain Grafis • Tata Letak • Game Development • Komposisi Aset & AR/VR",
    soft_skills_desc: "Berpikir Kreatif • Kolaborasi Tim • Problem Solving • Teliti • Manajemen Waktu • Adaptif",
    stat_years: "Tahun Pengalaman",
    stat_projects: "Proyek Selesai",
    lang_native: "Asli",
    lang_title: "Bahasa",

    // Experience
    exp_title: "Pengalaman",
    exp_desc: "Punya pengalaman bikin berbagai solusi interaktif — dari jadi asisten lab, desain game, AR/VR, sampai bikin prototipe produk dari nol.",
    exp_work_org: "Pengalaman Kerja & Organisasi",
    // Work items
    exp_w1_title: "Teknologi Informasi & Web Dev",
    exp_w1_sub: "Magang | PT. Jasa & Kepariwisataan Jabar",
    exp_w1_desc: "Mengembangkan fitur multi-language (i18n) pada website DJourney milik PT. Jaswita Jabar, membangun tampilan responsif mobile, serta melakukan perbaikan bug (bug fix) pada filter pencarian destinasi dan antarmuka web.",
    exp_w2_title: "Asisten Praktikum",
    exp_w2_sub: "Fakultas Ilmu Terapan | Universitas Telkom",
    exp_w2_desc: "Jadi asisten untuk 5 mata kuliah — bantu mahasiswa di sesi praktikum, nilai tugas, kelola lab, dan koordinasi sama dosen.",
    exp_w3_title: "Desainer Publikasi & Media",
    exp_w3_sub: "Event MAPS 2023 | Universitas Telkom",
    exp_w3_desc: "Desain merchandise dan aset digital untuk promosi acara, plus kolaborasi sama tim dokumentasi buat konten dan visual event.",
    exp_w4_title: "Kru Multimedia Sekolah",
    exp_w4_sub: "SMKN 1 Belitang III",
    exp_w4_desc: "Aktif di organisasi multimedia sekolah — dokumentasi acara, bikin video musik cover, dan bantu produksi video untuk berbagai kegiatan.",
    exp_w5_title: "Ketua Tim - Proyek Magang",
    exp_w5_sub: "Unit Produksi SMKN 1 Belitang III",
    exp_w5_desc: "Mimpin proyek cetak mug kustom saat PKL Berbasis Proyek di lab multimedia SMK. Urus desain, cetak, sampai koordinasi antar divisi. Hasilnya: nilai 'Sangat Baik'.",

    // Projects Exp
    exp_proj_title: "Pengalaman Proyek",
    exp_p1_title: "Project Manager & Game Dev",
    exp_p1_sub: "RideXP | Proyek Game Arkade",
    exp_p1_desc: "Mimpin tim bikin game arkade Unity dengan input ESP32, leaderboard JSON, AI dinamis, dan UI/UX custom penuh. Juga urus planning, branding, sampai pameran publik.",
    exp_p2_title: "Game Dev & UI/UX Designer",
    exp_p2_sub: "MathRift | Game Edukasi Platformer 2D",
    exp_p2_desc: "Bikin game platformer edukasi di Unity terintegrasi Firebase, dengan gameplay fisika-matematika, alur UI/UX lengkap, dan performa yang dioptimasi.",
    exp_p3_title: "VR Dev & Environment Designer",
    exp_p3_sub: "MindEscape: VR Chamber - Game VR",
    exp_p3_desc: "Kembangkan escape room VR di Unity — rancang environment, integrasi mekanik, navigasi user, dan optimasi buat headset VR.",
    exp_p4_title: "AR Developer & Designer",
    exp_p4_sub: "Stellar Adventures | Proyek Game AR",
    exp_p4_desc: "Buat game AR petualangan luar angkasa di Unity pakai Vuforia — marker interaktif, aset animasi, dan antarmuka yang intuitif.",
    exp_p5_title: "UI/UX Designer",
    exp_p5_sub: "Proyek U-Asprak | Studi Kasus Tim",
    exp_p5_desc: "Buat mockup high-fidelity di Figma dari wireframe tim. Tentukan visual mulai dari sketsa awal, palet warna, sampai tipografi.",
    exp_p6_title: "Frontend & Backend Dev",
    exp_p6_sub: "IUDEX Web Portofolio | Proyek Tim",
    exp_p6_desc: "Kembangkan situs portofolio pakai PHP, SQL (CRUD), dan template animasi JavaScript. Handle frontend sekaligus backend-nya.",

    // Achievements
    ach_title_1: "Pencapaian &",
    ach_title_2: "Sertifikat",
    ach_desc: "Beberapa pencapaian dan sertifikasi selama perjalanan kreatif saya — tonggak penting yang ikut membentuk skill di bidang multimedia dan desain digital.",

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
    cta_desc: "Saya lagi terbuka untuk kolaborasi. Yuk bikin sesuatu yang keren bareng! ✨",
    cta_contact: "Hubungi Saya",
    cta_dismiss: "Nanti dulu",

    // Skills Section
    skills_badge: "MY SKILLS",
    skills_heading: "SOME SOFTWARE THAT I USE",
    skills_sub: "Tools yang saya pakai sehari-hari untuk desain UI/UX, game dev, dan konten digital — dari wireframe dan aset visual sampai prototipe interaktif.",

    // Some Projects
    project_tag: "Portofolio Terpilih",
    some_proj_title_1: "Beberapa Proyek yang Pernah Saya Rancang &",
    some_proj_title_2: "Kembangkan",
    some_proj_desc: "Kumpulan karya dari berbagai bidang — desain UI/UX, game dev, AR/VR, dan web — yang dibuat selama kuliah maupun proyek bareng tim.",

    // My Projects
    my_proj_badge: "KONTRIBUSI PROYEK",
    my_proj_title: "What I Did",
    my_proj_desc: "Showcase peran yang saya jalani, masalah yang dipecahkan, dan pengalaman yang saya rancang di bidang desain, dev, dan teknologi kreatif.",
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
    ds_desc: "Koleksi karya kreatif saya — dari ilustrasi digital dan konsep UI/UX, sampai identitas brand.",
    ds_scroll: "Geser",
    ds_tools: "Tools",
    ds_date: "Tanggal",
    ds_close: "Tutup Detail",

    // FAB
    fab_top: "Kembali ke Atas",
    fab_cv: "Unduh CV",
  }
};
