<template>
  <section id="experience" class="-mb-4">
    <div class="bg-white p-8 lg:p-40 relative overflow-hidden shadow-2xl">
      <!-- Accents -->
      <img
        src="/images/accent_2.png"
        alt="Accent Shape"
        class="absolute top-0 left-0 w-32 lg:w-150 pointer-events-none z-0"
      />
      <img
        src="/images/accent_4.png"
        alt="Accent Shape"
        class="absolute top-0 right-0 w-32 lg:w-260 pointer-events-none z-0"
      />
      <img
        src="/images/accent_2.png"
        alt="Accent Shape"
        class="absolute bottom-0 right-0 w-32 lg:w-150 pointer-events-none transform rotate-180 z-0"
      />
      <img
        src="/images/accent_3.png"
        alt="Accent Shape"
        class="absolute bottom-0 left-0 w-32 lg:w-180 pointer-events-none transform rotate-180 z-0"
      />

      <!-- Content -->

      <div class="relative z-10 w-full lg:w-11/12 mx-auto mb-20">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 700, ease: 'easeOut' } }"
          class="text-4xl lg:text-[48px] font-bold font-['Poppins'] text-[#171717] mb-4 mt-20"
        >
          Experience
        </h2>
        <p
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 700, delay: 150, ease: 'easeOut' } }"
          class="text-[14px] lg:text-[15px] text-gray-600 font-['Roboto'] italic mb-12 flex items-start gap-2 max-w-4xl"
        >
          <span class="text-violet-500 text-xl font-normal leading-none mt-1"
            >✦</span
          >
          <span
            >Experienced in designing and developing interactive solutions
            across education, design, games, AR/VR, and UI/UX platforms — from
            lab teaching to full product prototyping.</span
          >
        </p>

        <!-- Work & Organizational Experience -->
        <h3
          v-motion
          :initial="{ opacity: 0, x: -40 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 600, ease: 'easeOut' } }"
          class="text-2xl lg:text-[24px] font-bold font-['Poppins'] text-violet-500 mb-8"
        >
          Work & Organizational Experience
        </h3>

        <!-- Continuous Timeline Row 1 -->
        <div class="relative mb-16 px-0">
          <!-- Horizontal Line -->
          <div
            v-motion
            :initial="{ opacity: 0, scaleX: 0 }"
            :visible="{ opacity: 1, scaleX: 1, transition: { duration: 1000, delay: 100, ease: 'easeOut' } }"
            class="absolute top-[42px] left-0 right-0 h-px bg-gray-300 z-0 origin-left"
          ></div>

          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 relative z-10"
          >
            <!-- Item 1 -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
              class="flex flex-col"
            >
              <p
                class="text-[15px] font-bold text-[#302F49] font-['Roboto'] uppercase mb-2"
              >
                AUG 2025 - PRESENT
              </p>
              <div class="h-6 flex items-center mb-4">
                <div class="w-3 h-3 bg-[#171717] rounded-full ml-[20%]"></div>
              </div>
              <div>
                <h4
                  class="text-[18px] lg:text-[20px] font-semibold font-['Poppins'] text-[#171717] mb-1"
                >
                  Information Technology
                </h4>
                <p
                  class="text-[14px] lg:text-[16px] font-medium text-[#302F49] font-['Roboto'] mb-3"
                >
                  Internship | PT. Jasa & Kepariwisataan Jabar
                </p>
                <p
                  class="text-[14px] lg:text-[15px] text-[#8E949F] leading-relaxed font-['Roboto'] font-regular text-justify"
                >
                  Supported IT infrastructure by troubleshooting devices,
                  maintaining company hardware, contributing to UI design and
                  web development, handling documentation, and collaborating
                  with mentors for project delivery.
                </p>
              </div>
            </div>
            <!-- Item 2 -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 150, ease: 'easeOut' } }"
              class="flex flex-col"
            >
              <p
                class="text-[15px] font-bold text-[#302F49] font-['Roboto'] uppercase mb-2"
              >
                SEP 2023 - JUL 2025
              </p>
              <div class="h-6 flex items-center mb-4">
                <div class="w-3 h-3 bg-[#171717] rounded-full ml-[20%]"></div>
              </div>
              <div>
                <h4
                  class="text-[18px] lg:text-[20px] font-semibold font-['Poppins'] text-[#171717] mb-1"
                >
                  Teaching Assistant
                </h4>
                <p
                  class="text-[14px] lg:text-[16px] font-medium text-[#302F49] font-['Roboto'] mb-3"
                >
                  School of Applied Science | Telkom University
                </p>
                <p
                  class="text-[14px] lg:text-[15px] text-[#8E949F] leading-relaxed font-['Roboto'] font-regular text-justify"
                >
                  Assisted practical sessions across 5 courses, supporting
                  students with technical tasks, evaluating their work, managing
                  lab resources, and coordinating with lecturers.
                </p>
              </div>
            </div>
            <!-- Item 3 -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300, ease: 'easeOut' } }"
              class="flex flex-col"
            >
              <p
                class="text-[15px] font-bold text-[#302F49] font-['Roboto'] uppercase mb-2"
              >
                SEP 2023 - DEC 2023
              </p>
              <div class="h-6 flex items-center mb-4">
                <div class="w-3 h-3 bg-[#171717] rounded-full ml-[20%]"></div>
              </div>
              <div>
                <h4
                  class="text-[18px] lg:text-[20px] font-semibold font-['Poppins'] text-[#171717] mb-1"
                >
                  Publication & Media Designer
                </h4>
                <p
                  class="text-[14px] lg:text-[16px] font-medium text-[#302F49] font-['Roboto'] mb-3"
                >
                  MAPS 2023 Event | Telkom University
                </p>
                <p
                  class="text-[14px] lg:text-[15px] text-[#8E949F] leading-relaxed font-['Roboto'] font-regular text-justify"
                >
                  Designed event merchandise and digital assets for promotion;
                  collaborated with the documentation team on content coverage
                  and visual output.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Continuous Timeline Row 2 -->
        <div class="relative mb-16 px-0">
          <!-- Horizontal Line -->
          <div
            v-motion
            :initial="{ opacity: 0, scaleX: 0 }"
            :visible="{ opacity: 1, scaleX: 1, transition: { duration: 1000, delay: 100, ease: 'easeOut' } }"
            class="absolute top-[42px] left-0 right-0 h-px bg-gray-300 z-0 origin-left"
          ></div>

          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 relative z-10"
          >
            <!-- Item 4 -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
              class="flex flex-col"
            >
              <p
                class="text-[15px] font-bold text-[#302F49] font-['Roboto'] uppercase mb-2"
              >
                DEC 2019 - JUNE 2022
              </p>
              <div class="h-6 flex items-center mb-4">
                <div class="w-3 h-3 bg-[#171717] rounded-full ml-[20%]"></div>
              </div>
              <div>
                <h4
                  class="text-[18px] lg:text-[20px] font-semibold font-['Poppins'] text-[#171717] mb-1"
                >
                  Multimedia Project Crew
                </h4>
                <p
                  class="text-[14px] lg:text-[16px] font-medium text-[#302F49] font-['Roboto'] mb-3"
                >
                  SMKN 1 Belitang III
                </p>
                <p
                  class="text-[14px] lg:text-[15px] text-[#8E949F] leading-relaxed font-['Roboto'] font-regular text-justify"
                >
                  Contributed to school multimedia organization by filming
                  documentation, creating cover music videos, and supporting
                  video production tasks for events and school activities.
                </p>
              </div>
            </div>
            <!-- Item 5 -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 150, ease: 'easeOut' } }"
              class="flex flex-col"
            >
              <p
                class="text-[15px] font-bold text-[#302F49] font-['Roboto'] uppercase mb-2"
              >
                JAN 2021 - JUNE 2021
              </p>
              <div class="h-6 flex items-center mb-4">
                <div class="w-3 h-3 bg-[#171717] rounded-full ml-[20%]"></div>
              </div>
              <div>
                <h4
                  class="text-[18px] lg:text-[20px] font-semibold font-['Poppins'] text-[#171717] mb-1"
                >
                  Team Leader - Intern Project
                </h4>
                <p
                  class="text-[14px] lg:text-[16px] font-medium text-[#302F49] font-['Roboto'] mb-3"
                >
                  Production Unit of SMKN 1 Belitang III
                </p>
                <p
                  class="text-[14px] lg:text-[15px] text-[#8E949F] leading-relaxed font-['Roboto'] font-regular text-justify"
                >
                  Led a design-production project during vocational internship
                  (PKL Based On Project), producing custom printed mugs in a
                  multimedia lab. Managed design, printing, and coordination
                  with other divisions. Rated "Excellent".
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Projects Experience -->
        <h3
          v-motion
          :initial="{ opacity: 0, x: -40 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 600, ease: 'easeOut' } }"
          class="text-2xl lg:text-[24px] font-bold font-['Poppins'] text-violet-500 mb-8 mt-4"
        >
          Projects Experience
        </h3>

        <!-- Continuous Timeline Project Row 1 -->
        <div class="relative mb-16 px-0">
          <!-- Horizontal Line -->
          <div
            v-motion
            :initial="{ opacity: 0, scaleX: 0 }"
            :visible="{ opacity: 1, scaleX: 1, transition: { duration: 1000, delay: 100, ease: 'easeOut' } }"
            class="absolute top-[42px] left-0 right-0 h-px bg-gray-300 z-0 origin-left"
          ></div>

          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 relative z-10"
          >
            <!-- Project 1 -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
              class="flex flex-col"
            >
              <p
                class="text-[15px] font-bold text-[#302F49] font-['Roboto'] uppercase mb-2"
              >
                JAN 2025 - JUNE 2025
              </p>
              <div class="h-6 flex items-center mb-4">
                <div class="w-3 h-3 bg-[#171717] rounded-full ml-[20%]"></div>
              </div>
              <div>
                <h4
                  class="text-[18px] lg:text-[20px] font-semibold font-['Poppins'] text-[#171717] mb-1"
                >
                  Project Manager & Game Dev
                </h4>
                <p
                  class="text-[14px] lg:text-[16px] font-medium text-[#302F49] font-['Roboto'] mb-3"
                >
                  RideXP | Arcade Game Project
                </p>
                <p
                  class="text-[14px] lg:text-[15px] text-[#8E949F] leading-relaxed font-['Roboto'] font-regular text-justify"
                >
                  Led a team to develop a Unity-based arcade game with ESP32
                  input, JSON leaderboard, dynamic AI NPCs, and fully custom
                  UI/UX. Also handled project planning, branding, and
                  presentation for public exhibition.
                </p>
              </div>
            </div>
            <!-- Project 2 -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 150, ease: 'easeOut' } }"
              class="flex flex-col"
            >
              <p
                class="text-[15px] font-bold text-[#302F49] font-['Roboto'] uppercase mb-2"
              >
                JAN 2025 - JUNE 2025
              </p>
              <div class="h-6 flex items-center mb-4">
                <div class="w-3 h-3 bg-[#171717] rounded-full ml-[20%]"></div>
              </div>
              <div>
                <h4
                  class="text-[18px] lg:text-[20px] font-semibold font-['Poppins'] text-[#171717] mb-1"
                >
                  Game Dev & UI/UX Designer
                </h4>
                <p
                  class="text-[14px] lg:text-[16px] font-medium text-[#302F49] font-['Roboto'] mb-3"
                >
                  MathRift | Educational 2D Platformer Game
                </p>
                <p
                  class="text-[14px] lg:text-[15px] text-[#8E949F] leading-relaxed font-['Roboto'] font-regular text-justify"
                >
                  Built a Unity-based educational platformer with Firebase
                  integration, focused on math-physics gameplay, complete UI/UX
                  flow, and optimized performance.
                </p>
              </div>
            </div>
            <!-- Project 3 -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300, ease: 'easeOut' } }"
              class="flex flex-col"
            >
              <p
                class="text-[15px] font-bold text-[#302F49] font-['Roboto'] uppercase mb-2"
              >
                JAN 2025 - JUNE 2025
              </p>
              <div class="h-6 flex items-center mb-4">
                <div class="w-3 h-3 bg-[#171717] rounded-full ml-[20%]"></div>
              </div>
              <div>
                <h4
                  class="text-[18px] lg:text-[20px] font-semibold font-['Poppins'] text-[#171717] mb-1"
                >
                  VR Dev & ENV Designer
                </h4>
                <p
                  class="text-[14px] lg:text-[16px] font-medium text-[#302F49] font-['Roboto'] mb-3"
                >
                  MindEscape: VR Chamber - VR Game
                </p>
                <p
                  class="text-[14px] lg:text-[15px] text-[#8E949F] leading-relaxed font-['Roboto'] font-regular text-justify"
                >
                  Developed an immersive VR escape room in Unity, designing
                  environments, mechanics integration, user navigation, and
                  optimizing headset performance.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Continuous Timeline Project Row 2 -->
        <div class="relative px-0">
          <!-- Horizontal Line -->
          <div
            v-motion
            :initial="{ opacity: 0, scaleX: 0 }"
            :visible="{ opacity: 1, scaleX: 1, transition: { duration: 1000, delay: 100, ease: 'easeOut' } }"
            class="absolute top-[42px] left-0 right-0 h-px bg-gray-300 z-0 origin-left"
          ></div>

          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 relative z-10"
          >
            <!-- Project 4 -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
              class="flex flex-col"
            >
              <p
                class="text-[15px] font-bold text-[#302F49] font-['Roboto'] uppercase mb-2"
              >
                SEP 2024 - FEB 2025
              </p>
              <div class="h-6 flex items-center mb-4">
                <div class="w-3 h-3 bg-[#171717] rounded-full ml-[20%]"></div>
              </div>
              <div>
                <h4
                  class="text-[18px] lg:text-[20px] font-semibold font-['Poppins'] text-[#171717] mb-1"
                >
                  AR Developer & Designer
                </h4>
                <p
                  class="text-[14px] lg:text-[16px] font-medium text-[#302F49] font-['Roboto'] mb-3"
                >
                  Stellar Adventures | AR Game Project
                </p>
                <p
                  class="text-[14px] lg:text-[15px] text-[#8E949F] leading-relaxed font-['Roboto'] font-regular text-justify"
                >
                  Created an AR space adventure in Unity with Vuforia, combining
                  interactive markers, animated assets, and user-friendly
                  interface.
                </p>
              </div>
            </div>
            <!-- Project 5 -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 150, ease: 'easeOut' } }"
              class="flex flex-col"
            >
              <p
                class="text-[15px] font-bold text-[#302F49] font-['Roboto'] uppercase mb-2"
              >
                JAN 2024 - JUNE 2024
              </p>
              <div class="h-6 flex items-center mb-4">
                <div class="w-3 h-3 bg-[#171717] rounded-full ml-[20%]"></div>
              </div>
              <div>
                <h4
                  class="text-[18px] lg:text-[20px] font-semibold font-['Poppins'] text-[#171717] mb-1"
                >
                  UI/UX Designer
                </h4>
                <p
                  class="text-[14px] lg:text-[16px] font-medium text-[#302F49] font-['Roboto'] mb-3"
                >
                  U-Asprak Project | Team Case Study
                </p>
                <p
                  class="text-[14px] lg:text-[15px] text-[#8E949F] leading-relaxed font-['Roboto'] font-regular text-justify"
                >
                  Created high-fidelity mockups in Figma based on the team's
                  wireframes. Defined visual style through early sketches, color
                  palettes, and typography choices.
                </p>
              </div>
            </div>
            <!-- Project 6 -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300, ease: 'easeOut' } }"
              class="flex flex-col"
            >
              <p
                class="text-[15px] font-bold text-[#302F49] font-['Roboto'] uppercase mb-2"
              >
                SEP 2023 - FEB 2024
              </p>
              <div class="h-6 flex items-center mb-4">
                <div class="w-3 h-3 bg-[#171717] rounded-full ml-[20%]"></div>
              </div>
              <div>
                <h4
                  class="text-[18px] lg:text-[20px] font-semibold font-['Poppins'] text-[#171717] mb-1"
                >
                  Frontend & Backend Dev
                </h4>
                <p
                  class="text-[14px] lg:text-[16px] font-medium text-[#302F49] font-['Roboto'] mb-3"
                >
                  IUDEX Web Portfolio | Team Project
                </p>
                <p
                  class="text-[14px] lg:text-[15px] text-[#8E949F] leading-relaxed font-['Roboto'] font-regular text-justify"
                >
                  Developed a portfolio website using PHP, SQL (CRUD), and
                  JavaScript animation templates. Handled both frontend layout
                  and backend logic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
