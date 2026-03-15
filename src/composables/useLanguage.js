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
    hero_designer: "Designer",
    hero_desc: "Combine creative vision with technical skills to produce engaging visual content across platforms — from graphic design and UI/UX to interactive game experiences.",
    hero_contact: "Get In Touch",
    about_title: "About Me",
    about_intro_1: "A passionate Multimedia Designer with a strong foundation in visual design, game development, and user-focused interfaces.",
    about_intro_2: "With experience as a Teaching Assistant and creative lead in team projects, I blend design thinking and technical skills to craft interactive experiences.",
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
    exp_w1_title: "Information Technology",
    exp_w1_sub: "Internship | PT. Jasa & Kepariwisataan Jabar",
    exp_w1_desc: "Supported IT infrastructure by troubleshooting devices, maintaining company hardware, contributing to UI design and web development, handling documentation, and collaborating with mentors for project delivery.",
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
    skills_heading: "Some Software That I Use",
    skills_sub: "A versatile toolkit that supports my workflow across UI/UX, game development, and interactive media — from wireframes and design assets to real-time prototypes and immersive experiences.",

    // Some Projects
    some_proj_title_1: "Some Projects I've Designed &",
    some_proj_title_2: "Developed",
    some_proj_desc: "A selection of works spanning UI/UX design, game development, AR/VR, and web-based platforms — built during academic and collaborative projects.",

    // My Projects
    my_proj_badge: "My Projects",
    my_proj_title: "What I Did ??",
    my_proj_desc: "A showcase of roles I've taken, problems I've solved, and experiences I've crafted — across design, development, and creative tech.",
    my_proj_role: "Role:",
    my_proj_tools: "Tools:",
    my_proj_overview: "Project Overview:",
    my_proj_whatidid: "What I Did:",
    my_proj_view_work: "VIEW WORK",
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
    hero_designer: "Desainer",
    hero_desc: "Menggabungkan visi kreatif dengan keterampilan teknis untuk menghasilkan konten visual interaktif di berbagai platform — mulai dari desain grafis, UI/UX, hingga game.",
    hero_contact: "Hubungi Saya",
    about_title: "Tentang Saya",
    about_intro_1: "Seorang Desainer Multimedia yang penuh semangat dengan fondasi kuat dalam desain visual, pengembangan game, dan antarmuka interaktif.",
    about_intro_2: "Berpengalaman sebagai Asisten Praktikum dan pemimpin kreatif dalam proyek tim, memadukan pemikiran desain dan skill teknis.",
    about_intro_3: "Tersertifikasi dalam produksi multimedia (BNSP - KKNI Level 2) dan didorong oleh rasa ingin tahu dan kreativitas.",
    education_title: "Pendidikan",
    edu_1_desc: "Sarjana Terapan Teknik Rekayasa Multimedia",
    edu_2_desc: "Multimedia",
    skills_title: "Keahlian",
    hard_skills: "Keahlian Teknis",
    soft_skills: "Keahlian Karakter",
    hard_skills_desc: "Desain UI/UX • Desain Grafis • Tata Letak • Game Development • Komposisi Aset & AR/VR",
    soft_skills_desc: "Berpikir Kreatif • Kolaborasi Tim • Pemecahan Masalah • Ketelitian • Manajemen Waktu • Mudah Beradaptasi",
    stat_years: "Tahun Pengalaman Praktis",
    stat_projects: "Proyek Pribadi & Tim Terselesaikan",
    lang_native: "Asli",
    lang_title: "Bahasa",

    // Experience
    exp_title: "Pengalaman",
    exp_desc: "Berpengalaman merancang dan mengembangkan solusi interaktif lintas pendidikan, desain, game, AR/VR, dan platform UI/UX — dari asisten lab hingga pembuatan purwarupa produk penuh.",
    exp_work_org: "Pengalaman Kerja & Organisasi",
    // Work items
    exp_w1_title: "Teknologi Informasi",
    exp_w1_sub: "Magang | PT. Jasa & Kepariwisataan Jabar",
    exp_w1_desc: "Mendukung infrastruktur IT dengan pemecahan masalah perangkat, memelihara perangkat keras perusahaan, berkontribusi pada desain UI dan pengembangan web, menangani dokumentasi, serta berkolaborasi dengan mentor.",
    exp_w2_title: "Asisten Praktikum",
    exp_w2_sub: "Fakultas Ilmu Terapan | Universitas Telkom",
    exp_w2_desc: "Membantu sesi praktikum untuk 5 mata kuliah, mendukung mahasiswa terkait tugas teknis, mengevaluasi nilai, mengelola fasilitas lab, dan berkoordinasi dengan dosen.",
    exp_w3_title: "Desainer Publikasi & Media",
    exp_w3_sub: "Event MAPS 2023 | Universitas Telkom",
    exp_w3_desc: "Membuat desain merchandise acara dan aset digital untuk promosi; berkolaborasi dengan tim dokumentasi mengenai peliputan dan hasil visual.",
    exp_w4_title: "Kru Organisasi Multimedia",
    exp_w4_sub: "SMKN 1 Belitang III",
    exp_w4_desc: "Berkontribusi pada organisasi multimedia sekolah dengan mendokumentasikan acara, membuat video musik cover, dan mendukung penugasan produksi video.",
    exp_w5_title: "Ketua Tim - Proyek Magang",
    exp_w5_sub: "Unit Produksi SMKN 1 Belitang III",
    exp_w5_desc: "Memimpin proyek produksi desain saat magang SMK (PKL Berbasis Proyek), memproduksi mug cetak kustom di lab multimedia. Mengelola desain, cetak, dan koordinasi dengan divisi lain.",

    // Projects Exp
    exp_proj_title: "Pengalaman Proyek",
    exp_p1_title: "Manajer Proyek & Game Dev",
    exp_p1_sub: "RideXP | Proyek Game Arkade",
    exp_p1_desc: "Memimpin tim membuat game arkade berbasis Unity dengan masukan ESP32, papan peringkat JSON, AI dinamis, dan kustom UI/UX penuh. Menangani perencanaan, branding, serta pameran.",
    exp_p2_title: "Game Dev & UI/UX Desainer",
    exp_p2_sub: "MathRift | Game Edukasi Platformer 2D",
    exp_p2_desc: "Membuat platformer edukasi berbasis Unity dengan integrasi Firebase, berfokus pada gameplay fisika-matematika, alur UI/UX lengkap, dan optimisasi.",
    exp_p3_title: "VR Dev & ENV Desainer",
    exp_p3_sub: "MindEscape: VR Chamber - Game VR",
    exp_p3_desc: "Mengembangkan permainan ruang lolos VR yang imersif di Unity, merancang lingkungan, integrasi mekanik, navigasi pengguna, dan optimisasi headset.",
    exp_p4_title: "AR Developer & Desainer",
    exp_p4_sub: "Stellar Adventures | Proyek Game AR",
    exp_p4_desc: "Membuat petualangan luar angkasa AR di Unity dengan Vuforia, menggabungkan penanda interaktif, aset beranimasi, dan antarmuka ramah pengguna.",
    exp_p5_title: "UI/UX Desainer",
    exp_p5_sub: "Proyek U-Asprak | Studi Kasus Tim",
    exp_p5_desc: "Membuat mokap resolusi tinggi di Figma berdasarkan wireframe tim. Menentukan gaya visual mulai dari sketsa awal, palet warna, dan tipografi.",
    exp_p6_title: "Frontend & Backend Dev",
    exp_p6_sub: "IUDEX Web Portofolio | Proyek Tim",
    exp_p6_desc: "Mengembangkan situs portofolio dengan PHP, SQL (CRUD), dan template animasi JavaScript. Menangani tata letak frontend serta logika backend.",

    // Achievements
    ach_title_1: "Pencapaian &",
    ach_title_2: "Sertifikat",
    ach_desc: "Pencapaian dan sertifikasi yang mencerminkan perjalanan kreatif saya — bagian ini menyoroti pencapaian terpilih yang membentuk keahlian saya di bidang multimedia dan desain digital.",

    // Contact
    contact_title_1: "Kontak &",
    contact_title_2: "Terhubung",
    contact_title_3: "dengan Saya",
    contact_phone: "Telepon",
    contact_email: "Surel",
    contact_addr: "Alamat",
    contact_socmed: "Media Sosial",
    contact_btn: "UNDUH",
    contact_footer: "Hak cipta dilindungi undang-undang.",
    contact_views: "Total Kunjungan",

    // CTA Popup
    cta_title: "Tertarik?",
    cta_desc: "Saya sedang terbuka untuk pekerjaan. Mari kita buat sesuatu yang luar biasa! ✨",
    cta_contact: "Hubungi Saya",
    cta_dismiss: "Lain kali",

    // Skills Section
    skills_badge: "KEAHLIAN",
    skills_heading: "Beberapa Perangkat Lunak Yang Saya Gunakan",
    skills_sub: "Kumpulan alat serbaguna yang mendukung alur kerja saya di UI/UX, pengembangan game, dan media interaktif — mulai dari wireframe, aset desain, hingga purwarupa real-time dan pengalaman imersif.",

    // Some Projects
    some_proj_title_1: "Beberapa Proyek Yang Telah Saya Rancang &",
    some_proj_title_2: "Kembangkan",
    some_proj_desc: "Pilihan karya yang mencakup desain UI/UX, pengembangan game, AR/VR, dan platform berbasis web — dibangun selama proyek akademik dan kolaboratif.",

    // My Projects
    my_proj_badge: "Proyek Saya",
    my_proj_title: "Apa Yang Saya Lakukan ??",
    my_proj_desc: "Sebuah pameran tentang peran yang telah saya ambil, masalah yang telah saya pecahkan, dan pengalaman yang telah saya buat — di seluruh desain, pengembangan, dan teknologi kreatif.",
    my_proj_role: "Peran:",
    my_proj_tools: "Alat:",
    my_proj_overview: "Gambaran Proyek:",
    my_proj_whatidid: "Apa Yang Saya Lakukan:",
    my_proj_view_work: "LIHAT KARYA",
    my_proj_view_all: "LIHAT SEMUA PROYEK",
    my_proj_show_less: "TAMPILKAN LEBIH SEDIKIT",

    // Design Showcase
    ds_badge: "Pameran Desain",
    ds_title: "Eksplorasi Visual",
    ds_desc: "Koleksi karya kreatif saya yang dikuratori, mulai dari ilustrasi digital, konseptualisasi UI/UX, hingga identitas merek.",
    ds_scroll: "Geser",
    ds_scroll: "Geser",
    ds_tools: "Alat",
    ds_date: "Tanggal",
    ds_close: "Tutup Detail",

    // FAB
    fab_top: "Kembali ke Atas",
    fab_cv: "Unduh CV",
  }
};
