import { ref, computed } from 'vue'

const currentLang = ref('EN')

export const toggleLanguage = () => {
  currentLang.value = currentLang.value === 'EN' ? 'ID' : 'EN'
}

export const useLanguage = () => {
  return {
    lang: currentLang,
    toggleLanguage,
    t: (key) => {
      return translations[currentLang.value][key] || key
    },
  }
}

const translations = {
  EN: {
    // Navbar
    nav_home: 'Home',
    nav_about: 'About',
    nav_experience: 'Experience',
    nav_projects: 'Projects',
    nav_achievements: 'Achievements',
    nav_contact: 'Contact Me',

    // Hero / About
    typewriter_1: 'Hii...',
    typewriter_2: "I'm Muhamad Sidik...",
    hero_designer: 'Technologist',
    hero_desc:
      'Combining creative design, technical development, and systems thinking to transform concepts into interactive prototypes, digital solutions, and scalable experiences.',
    hero_contact: 'Get In Touch',
    show_more: 'Read More',
    show_less: 'Show Less',
    about_title: 'About Me',
    about_intro_1:
      'I’m most engaged by ideas that need to become more than just a visual concept. With a background in Multimedia Engineering, I approach creative work with an understanding of the assets, logic, systems, and technical constraints behind it.',
    about_intro_2:
      'I tend to learn by building. I like turning ideas into working prototypes, testing them in practice, and troubleshooting what breaks along the way. Bugs and technical limitations are part of the process, and I enjoy figuring out why something fails and how to improve it.',
    about_intro_3:
      'This hands-on approach helps me turn creative ideas into digital experiences that are designed, built, tested, and refined.',
    education_title: 'Education',
    edu_1_desc: 'Applied Sciences in Multimedia Engineering Technology',
    edu_1_detail: '2022 - 2026 (GPA: 3.83 / 4.00, Cum Laude)',
    edu_2_desc: 'Multimedia',
    edu_2_detail: '2019 - 2022',
    skills_title: 'Skills',
    skills_design_title: 'Design',
    skills_design_desc: 'UI Design • Graphic Design • Prototyping',
    skills_tech_title: 'Technology',
    skills_tech_desc: 'Web & App Development • Game Development • AR Development',
    skills_process_title: 'Process',
    skills_process_desc: 'Creative Thinking • Problem Solving',
    stat_years: 'Years of Hands-On Experience',
    stat_projects: 'Personal & Collaborative Projects',
    lang_title: 'Language',
    lang_id_title: 'Indonesian',
    lang_id_desc: 'Native',
    lang_en_title: 'English',
    lang_en_level: 'Intermediate • CEFR B1',
    lang_en_cert: 'EPRT Score: 483 • Telkom University',

    // Experience
    exp_title: 'Experience',
    exp_desc:
      'A collection of experiences across design, technology, and interactive projects, shaped through academic, professional, and collaborative work.',
    exp_work_org: 'Work & Organizational Experience',
    // Work items
    exp_w1_title: 'IT Support & Web Developer',
    exp_w1_sub: 'Intern | PT Jasa dan Kepariwisataan Jabar (Perseroda)',
    exp_w1_desc:
      'Executed a dual-responsibility role as primary IT Support and Web Developer. Handled daily hardware/software troubleshooting, office network maintenance, and IT systems reliability. Simultaneously contributed to UI/UX interface design and responsive web feature development for internal and public-facing operational platforms.',
    exp_w2_title: 'Laboratory Teaching Assistant',
    exp_w2_sub: 'School of Applied Science | Telkom University',
    exp_w2_desc:
      'Mentored 100+ undergraduate students over two years across technical laboratory courses, focusing on interactive application development, Unity Engine, UI/UX principles, and practical debugging. Also led lab sessions covering databases, computer networks, operating systems, and computer architectures.',
    exp_w3_title: 'Brand & Visual Identity Designer',
    exp_w3_sub: 'MAPS 2023 Event | Telkom University',
    exp_w3_desc:
      'Crafted the comprehensive visual identity for the annual MAPS 2023 event, including committee apparel, official credentials, certificates, and promotional merchandise. Designed digital marketing assets and promotional social media frames while coordinating visual coverage guidelines.',
    exp_w4_title: 'Creative Media & Video Production Crew',
    exp_w4_sub: 'SMKN 1 Belitang III (Early Experience)',
    exp_w4_desc:
      'Active member of the school multimedia production team, handling institutional event video documentation, creative music video production, and audiovisual equipment operations.',
    exp_w5_title: 'Graphic Design & Print Production Lead Intern',
    exp_w5_sub: 'Production Unit of SMKN 1 Belitang III',
    exp_w5_desc:
      'Led a vocational internship project team focused on custom graphic design and commercial print production (mugs, invitations, marketing collateral). Managed prepress quality control and cross-divisional execution, earning an Excellent performance rating.',

    // Projects Exp
    exp_proj_title: 'Projects Experience',
    earlier_experience_title: 'Earlier Experience',
    additional_projects_title: 'Additional Projects',
    show_additional_projects: 'Show Earlier Projects (2024 – 2025)',
    hide_additional_projects: 'Hide Earlier Projects',
    exp_p7_title: 'Project Creator, Lead Dev & Main UI Designer',
    exp_p7_sub: 'Mathmagic',
    exp_p7_desc:
      'Developed an interactive educational math game in Unity 6 (C#) integrated with Firebase and a Vite Web Admin Dashboard for real-time student learning telemetry.',
    exp_p7_tech: 'Unity 6 · C# · Firebase · Vite · Figma',
    exp_p8_title: 'Mobile Dev & UI/UX Designer',
    exp_p8_sub: 'AppliQ',
    exp_p8_desc:
      'Developed a Flutter & Supabase mobile job tracker featuring interactive Kanban pipelines, on-device ATS resume/cover letter PDF rendering, and Google Calendar sync.',
    exp_p8_tech: 'Flutter · Dart · Supabase · PostgreSQL · Figma',
    exp_p1_title: 'Project Manager & Game Dev',
    exp_p1_sub: 'RideXP',
    exp_p1_desc:
      'Led a team in developing a Unity-based arcade game, handling project planning, game development, UI design, branding, and exhibition preparation.',
    exp_p1_tech: 'Unity · ESP32 · JSON',
    exp_p9_title: 'Lead AR Developer & Designer',
    exp_p9_sub: 'Djaswita AR',
    exp_p9_desc:
      'Developed an interactive promotional platform for PT Jaswita Jabar (BUMD), integrating an Android AR app (Unity & Vuforia) with a Web CMS (Vite & Supabase) for instant, zero-rebuild content updates.',
    exp_p9_tech: 'Unity · Vuforia · Vite · Supabase · C#',
    exp_p4_title: 'AR Developer & Designer',
    exp_p4_sub: 'Stellar Adventures',
    exp_p4_desc:
      'Created an AR space adventure in Unity with Vuforia, combining interactive markers, animated assets, and user-friendly interface.',
    exp_p4_tech: 'Unity · Vuforia',
    exp_p2_title: 'Game Dev & UI/UX Designer',
    exp_p2_sub: 'MathRift',
    exp_p2_desc:
      'Built a Unity-based educational platformer with Firebase integration, focused on math-physics gameplay, complete UI/UX flow, and optimized performance.',
    exp_p2_tech: 'Unity · Firebase',
    exp_p5_title: 'UI/UX Designer',
    exp_p5_sub: 'U-Asprak',
    exp_p5_desc:
      "Created high-fidelity mockups in Figma based on the team's wireframes. Defined visual style through early sketches, color palettes, and typography choices.",
    exp_p5_tech: 'Figma',
    exp_p6_title: 'Frontend & Backend Dev',
    exp_p6_sub: 'IUDEX Web Portfolio',
    exp_p6_desc:
      'Developed a portfolio website using PHP, SQL (CRUD), and JavaScript animation templates. Handled both frontend layout and backend logic.',
    exp_p6_tech: 'PHP · SQL · JavaScript',
    exp_p3_title: 'VR Dev & Environment Designer',
    exp_p3_sub: 'MindEscape: VR Chamber',
    exp_p3_desc:
      'Developed an immersive VR escape room in Unity, designing environments, mechanics integration, user navigation, and optimizing headset performance.',
    exp_p3_tech: 'Unity · SteamVR',

    // Achievements
    ach_title_1: 'Achievements &',
    ach_title_2: 'Certificates',
    ach_desc:
      'Selected achievements and certifications throughout my creative journey, reflecting key milestones that shaped my expertise in multimedia and digital design.',

    // Contact
    contact_title_1: 'Contact &',
    contact_title_2: 'Connect',
    contact_title_3: ' with Me',
    contact_phone: 'Phone',
    contact_email: 'Email',
    contact_addr: 'Address',
    contact_socmed: 'Social Media',
    contact_btn: 'DOWNLOAD',
    contact_footer: 'All rights reserved.',
    contact_views: 'Total Views',

    // Contact Form
    contact_form_title: 'Send Me a Message',
    contact_form_sub: 'Have a project, question, or opportunity? Send a message directly below.',
    contact_form_name: 'Full Name *',
    contact_form_name_placeholder: 'Your Name',
    contact_form_email: 'Email *',
    contact_form_email_placeholder: 'email@domain.com',
    contact_form_subject: 'Subject (Optional)',
    contact_form_subject_placeholder: 'Message title or topic',
    contact_form_message: 'Message *',
    contact_form_message_placeholder: 'Write your message here...',
    contact_form_send: 'Send Message',
    contact_form_sending: 'Sending...',
    contact_form_success_title: 'Message Sent!',
    contact_form_success_desc: 'Thank you for reaching out. Your message has been sent to',
    contact_form_send_another: 'Send Another Message',
    contact_form_error: 'Failed to send message via server. Opening email app...',

    // CTA Popup (EN)
    cta_title: 'Have a project in mind?',
    cta_desc:
      'Whether you want to brainstorm an idea or discuss a project, feel free to reach out!',
    cta_contact: "Let's Talk",
    cta_dismiss: 'Maybe later',

    // Skills Section
    skills_badge: 'MY APPS',
    skills_heading: 'SOME SOFTWARE THAT I USE',
    skills_sub:
      'A versatile toolkit that supports my workflow across UI/UX, game development, and interactive media, spanning wireframes and design assets to real-time prototypes and immersive experiences.',

    // Some Projects
    project_tag: 'Selected Works',
    some_proj_title_1: "Some Projects I've Designed &",
    some_proj_title_2: 'Developed',
    some_proj_desc:
      'A selection of works spanning UI/UX design, game development, AR/VR, and web-based platforms, built during academic and collaborative projects.',

    // My Projects
    my_proj_badge: 'PROJECT CONTRIBUTIONS',
    my_proj_title: 'What I Did',
    my_proj_desc:
      "A showcase of roles I've taken, problems I've solved, and experiences I've crafted across design, development, and creative tech.",
    my_proj_role: 'Role',
    my_proj_team_label: 'Project Team',
    my_proj_tools: 'Tools',
    my_proj_overview: 'Brief Description',
    my_proj_whatidid: 'What I Did',
    my_proj_view_work: 'VIEW PROJECT',
    my_proj_view_all: 'VIEW ALL PROJECTS',
    my_proj_show_less: 'SHOW LESS',

    // Design Showcase
    ds_badge: 'Design Showcase',
    ds_title: 'Visual Explorations',
    ds_desc:
      'A curated collection of my creative works, ranging from digital illustration, UI/UX conceptualization, to brand identity.',
    ds_scroll: 'Scroll',
    ds_scroll: 'Scroll',
    ds_tools: 'Tools',
    ds_date: 'Date',
    ds_close: 'Close Detail',

    // FAB
    fab_top: 'Back to Top',
    fab_cv: 'Download CV',
  },
  ID: {
    // Navbar
    nav_home: 'Beranda',
    nav_about: 'Tentang',
    nav_experience: 'Pengalaman',
    nav_projects: 'Proyek',
    nav_achievements: 'Pencapaian',
    nav_contact: 'Kontak',

    // Hero / About
    typewriter_1: 'Halo...',
    typewriter_2: 'Saya Muhamad Sidik...',
    hero_designer: 'Technologist',
    hero_desc:
      'Memadukan desain kreatif, pengembangan teknis, dan systems thinking untuk mengubah konsep menjadi prototipe interaktif serta solusi digital yang scalable.',
    hero_contact: 'Get In Touch',
    show_more: 'Baca Selengkapnya',
    show_less: 'Tampilkan Sedikit',
    about_title: 'Tentang Saya',
    about_intro_1:
      'Saya paling tertarik pada ide-ide yang menuntut lebih dari sekadar konsep visual. Berlatar belakang Multimedia Engineering, saya mendekati karya kreatif dengan pemahaman tentang aset, logika, sistem, dan batasan teknis di baliknya.',
    about_intro_2:
      'Saya terbiasa belajar lewat proses membangun langsung. Saya suka mengubah ide menjadi prototipe fungsional, testing them in practice dan mencari tahu apa yang bermasalah di sepanjang prosesnya. Bug dan limitasi teknis adalah bagian dari proses, dan saya menikmati mencari tahu mengapa sesuatu gagal serta bagaimana memperbaikinya.',
    about_intro_3:
      'Pendekatan hands-on ini membantu saya mewujudkan ide-ide kreatif menjadi pengalaman digital yang dirancang, dibangun, diuji, dan disempurnakan.',
    education_title: 'Pendidikan',
    edu_1_desc: 'Fakultas Ilmu Terapan, Teknologi Rekayasa Multimedia',
    edu_1_detail: '2022 - 2026 (IPK: 3.83 / 4.00, Cum Laude)',
    edu_2_desc: 'Multimedia',
    edu_2_detail: '2019 - 2022',
    skills_title: 'Keahlian',
    skills_design_title: 'Desain',
    skills_design_desc: 'UI Design • Desain Grafis • Prototyping',
    skills_tech_title: 'Teknologi',
    skills_tech_desc: 'Web & App Development • Game Development • AR Development',
    skills_process_title: 'Proses',
    skills_process_desc: 'Berpikir Kreatif • Problem Solving',
    stat_years: 'Tahun Berkarya',
    stat_projects: 'Proyek Personal & Tim',
    lang_title: 'Bahasa',
    lang_id_title: 'Bahasa Indonesia',
    lang_id_desc: 'Native Speaker',
    lang_en_title: 'Bahasa Inggris',
    lang_en_level: 'Menengah • CEFR B1',
    lang_en_cert: 'Skor EPRT: 483 • Universitas Telkom',

    // Experience
    exp_title: 'Pengalaman',
    exp_desc:
      'Kumpulan pengalaman di bidang desain, teknologi, dan proyek interaktif, terbentuk melalui kegiatan akademik, profesional, dan kolaboratif.',
    exp_work_org: 'Pengalaman Kerja & Organisasi',
    // Work items
    exp_w1_title: 'IT Support & Web Developer',
    exp_w1_sub: 'Intern | PT Jasa dan Kepariwisataan Jabar (Perseroda)',
    exp_w1_desc:
      'Menjalankan peran ganda sebagai IT Support utama dan Web Developer. Bertanggung jawab atas troubleshooting perangkat keras/lunak, pemeliharaan infrastruktur jaringan kantor, serta stabilitas sistem TI. Turut berkontribusi dalam perancangan antarmuka (UI/UX) dan pengembangan modul web responsif untuk platform digital operasional perusahaan.',
    exp_w2_title: 'Asisten Praktikum Laboratorium',
    exp_w2_sub: 'Fakultas Ilmu Terapan | Universitas Telkom',
    exp_w2_desc:
      'Mendampingi 100+ mahasiswa selama 2 tahun dalam sesi laboratorium teknis dengan fokus pada pengembangan aplikasi interaktif, Unity Engine, prinsip UI/UX, dan pemecahan masalah praktis. Turut mengampu modul basis data, jaringan komputer, sistem operasi, serta arsitektur komputer.',
    exp_w3_title: 'Desainer Identitas Visual & Publikasi Kreatif',
    exp_w3_sub: 'Event MAPS 2023 | Universitas Telkom',
    exp_w3_desc:
      'Merancang sistem identitas visual menyeluruh untuk acara tahunan MAPS 2023, mencakup ID card, seragam kepanitiaan, sertifikat resmi, dan merchandise eksklusif. Memproduksi materi promosi media sosial dan frame digital serta menyusun standar visual publikasi.',
    exp_w4_title: 'Kru Produksi Multimedia & Dokumentasi',
    exp_w4_sub: 'SMKN 1 Belitang III (Pengalaman Awal)',
    exp_w4_desc:
      'Berperan aktif dalam tim multimedia sekolah untuk dokumentasi video kegiatan resmi, produksi video musik kreatif, serta manajemen peralatan audio-visual.',
    exp_w5_title: 'Ketua Tim Proyek Percetakan & Desain Grafis',
    exp_w5_sub: 'Unit Produksi SMKN 1 Belitang III',
    exp_w5_desc:
      'Memimpin tim magang kejuruan dalam desain grafis dan alur produksi percetakan kustom (mug, undangan, dan materi cetak komersial). Mengoordinasikan alur kerja lintas divisi dan kontrol kualitas cetak hingga meraih predikat performa Excellent.',

    // Projects Exp
    exp_proj_title: 'Pengalaman Proyek',
    earlier_experience_title: 'Pengalaman Sebelumnya',
    additional_projects_title: 'Proyek Tambahan',
    show_additional_projects: 'Lihat Proyek Lainnya (2024 – 2025)',
    hide_additional_projects: 'Sembunyikan Proyek Lainnya',
    exp_p7_title: 'Project Creator, Lead Dev & Main UI Designer',
    exp_p7_sub: 'Mathmagic',
    exp_p7_desc:
      'Mengembangkan game edukasi matematika interaktif Unity 6 (C#) yang terintegrasi dengan Firebase dan Web Admin Dashboard (Vite) untuk pemantauan telemetri belajar siswa secara real-time.',
    exp_p7_tech: 'Unity 6 · C# · Firebase · Vite · Figma',
    exp_p8_title: 'Mobile Dev & UI/UX Designer',
    exp_p8_sub: 'AppliQ',
    exp_p8_desc:
      'Mengembangkan aplikasi pelacak karier berbasis Flutter & Supabase dengan Kanban pipeline interaktif, generator PDF resume ATS on-device, dan sinkronisasi Google Calendar.',
    exp_p8_tech: 'Flutter · Dart · Supabase · PostgreSQL · Figma',
    exp_p1_title: 'Project Manager & Game Dev',
    exp_p1_sub: 'RideXP',
    exp_p1_desc:
      'Memimpin tim dalam mengembangkan game arcade berbasis Unity, menangani perencanaan proyek, pengembangan game, desain UI, branding, dan persiapan pameran.',
    exp_p1_tech: 'Unity · ESP32 · JSON',
    exp_p9_title: 'Lead AR Developer & Designer',
    exp_p9_sub: 'Djaswita AR',
    exp_p9_desc:
      'Membangun platform media promosi interaktif untuk PT Jaswita Jabar (BUMD) yang memadukan aplikasi AR Android (Unity & Vuforia) dan Web CMS (Vite + Supabase) untuk update konten mandiri tanpa rebuild.',
    exp_p9_tech: 'Unity · Vuforia · Vite · Supabase · C#',
    exp_p4_title: 'AR Developer & Designer',
    exp_p4_sub: 'Stellar Adventures',
    exp_p4_desc:
      'Membuat petualangan luar angkasa AR di Unity dengan Vuforia, menggabungkan penanda interaktif, aset animasi, dan antarmuka yang ramah pengguna.',
    exp_p4_tech: 'Unity · Vuforia',
    exp_p2_title: 'Game Dev & UI/UX Designer',
    exp_p2_sub: 'MathRift',
    exp_p2_desc:
      'Membangun game platformer 2D edukatif berbasis Unity dengan integrasi Firebase, berfokus pada gameplay matematika-fisika, alur UI/UX lengkap, dan optimasi performa.',
    exp_p2_tech: 'Unity · Firebase',
    exp_p5_title: 'UI/UX Designer',
    exp_p5_sub: 'U-Asprak',
    exp_p5_desc:
      'Membuat mockup dengan ketelitian tinggi (high-fidelity) di Figma berdasarkan wireframe tim. Menentukan gaya visual melalui sketsa awal, palet warna, dan pilihan tipografi.',
    exp_p5_tech: 'Figma',
    exp_p6_title: 'Frontend & Backend Dev',
    exp_p6_sub: 'IUDEX Web Portfolio',
    exp_p6_desc:
      'Mengembangkan website portofolio menggunakan PHP, SQL (CRUD), dan template animasi JavaScript. Menangani tata letak frontend dan logika backend.',
    exp_p6_tech: 'PHP · SQL · JavaScript',
    exp_p3_title: 'VR Dev & Environment Designer',
    exp_p3_sub: 'MindEscape: VR Chamber',
    exp_p3_desc:
      'Mengembangkan escape room VR yang imersif di Unity, merancang lingkungan, integrasi mekanik, navigasi pengguna, dan mengoptimalkan performa headset.',
    exp_p3_tech: 'Unity · SteamVR',

    // Achievements
    ach_title_1: 'Pencapaian &',
    ach_title_2: 'Sertifikat',
    ach_desc:
      'Beberapa pencapaian dan sertifikasi selama perjalanan kreatif saya yang ikut membentuk keahlian di bidang multimedia dan desain digital.',

    // Contact
    contact_title_1: 'Kontak &',
    contact_title_2: 'Terhubung',
    contact_title_3: 'dengan Saya',
    contact_phone: 'Telepon',
    contact_email: 'Email',
    contact_addr: 'Alamat',
    contact_socmed: 'Media Sosial',
    contact_btn: 'UNDUH',
    contact_footer: 'Hak cipta dilindungi.',
    contact_views: 'Total Kunjungan',

    // Contact Form
    contact_form_title: 'Kirim Pesan',
    contact_form_sub:
      'Punya proyek, pertanyaan, atau penawaran? Kirim pesan langsung di bawah ini.',
    contact_form_name: 'Nama Lengkap *',
    contact_form_name_placeholder: 'Nama Anda',
    contact_form_email: 'Email *',
    contact_form_email_placeholder: 'email@domain.com',
    contact_form_subject: 'Subjek (Opsional)',
    contact_form_subject_placeholder: 'Judul pesan atau topik',
    contact_form_message: 'Pesan *',
    contact_form_message_placeholder: 'Tuliskan pesan Anda di sini...',
    contact_form_send: 'Kirim Pesan',
    contact_form_sending: 'Mengirim...',
    contact_form_success_title: 'Pesan Terkirim!',
    contact_form_success_desc: 'Terima kasih sudah menghubungi. Pesan Anda telah dikirimkan ke',
    contact_form_send_another: 'Kirim Pesan Lain',
    contact_form_error: 'Gagal mengirim pesan via server. Membuka aplikasi email...',

    // CTA Popup (ID)
    cta_title: 'Punya Ide Keren?',
    cta_desc: 'Kalau mau ngobrol santai, diskusi proyek, atau sekadar tanya-tanya, mari terhubung!',
    cta_contact: 'Yuk Ngobrol',
    cta_dismiss: 'Lain kali',

    // Skills Section
    skills_badge: 'MY APPS',
    skills_heading: 'SOME SOFTWARE THAT I USE',
    skills_sub:
      'Tools yang saya pakai sehari-hari untuk desain UI/UX, game dev, dan konten digital, dari wireframe dan aset visual sampai prototipe interaktif.',

    // Some Projects
    project_tag: 'Portofolio Terpilih',
    some_proj_title_1: 'Beberapa Proyek yang Pernah Saya Rancang &',
    some_proj_title_2: 'Kembangkan',
    some_proj_desc:
      'Kumpulan karya dari berbagai bidang seperti desain UI/UX, game dev, AR/VR, dan web yang dibuat selama kuliah maupun proyek bersama tim.',

    // My Projects
    my_proj_badge: 'KONTRIBUSI PROYEK',
    my_proj_title: 'What I Did',
    my_proj_desc:
      'Showcase peran yang saya jalani, masalah yang dipecahkan, dan pengalaman yang saya rancang di bidang desain, dev, dan teknologi kreatif.',
    my_proj_role: 'Peran',
    my_proj_team_label: 'Tim Proyek',
    my_proj_tools: 'Tools',
    my_proj_overview: 'Deskripsi Singkat',
    my_proj_whatidid: 'Kontribusi & Peran',
    my_proj_view_work: 'LIHAT PROYEK',
    my_proj_view_all: 'LIHAT SEMUA PROYEK',
    my_proj_show_less: 'TAMPILKAN LEBIH SEDIKIT',

    // Design Showcase
    ds_badge: 'Pameran Desain',
    ds_title: 'Eksplorasi Visual',
    ds_desc:
      'Koleksi karya kreatif saya, mulai dari ilustrasi digital dan konsep UI/UX, sampai identitas brand.',
    ds_scroll: 'Geser',
    ds_tools: 'Tools',
    ds_date: 'Tanggal',
    ds_close: 'Tutup Detail',

    // FAB
    fab_top: 'Kembali ke Atas',
    fab_cv: 'Unduh CV',
  },
}
