<template>
  <div class="bg-[#171717]">
    <section class="pt-12 lg:py-16 px-6 lg:px-40 overflow-hidden">
      <div class="container mx-auto space-y-8 lg:space-y-10 relative">
        <div class="relative z-20">
          <h1
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }"
            class="text-6xl sm:text-7xl lg:text-[110px] font-bold text-white mb-4 font-['Poppins']"
          >
            Multimedia <br class="block lg:hidden" />
            <span
              class="text-transparent"
              style="-webkit-text-stroke: 2px #ffffff"
              >Designer</span
            >
          </h1>
          <p
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 700, delay: 200, ease: 'easeOut' } }"
            class="text-white text-base lg:text-[16px] w-full lg:w-140 lg:ml-2 text-justify font-['Roboto']"
          >
            Combine creative vision with technical skills to produce engaging
            visual content across platforms — from graphic design and UI/UX to
            interactive game experiences.
          </p>
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400, ease: 'easeOut' } }"
            class="mt-6 lg:mt-8"
          >
            <button
              class="bg-violet-500 text-white rounded-full hover:bg-violet-600 transition text-lg lg:text-2xl font-medium px-6 py-3 lg:px-8 lg:py-4"
            >
              Get In Touch <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
    <div class="flex justify-end">
      <img
        v-motion
        :initial="{ opacity: 0, x: 80 }"
        :visible="{ opacity: 1, x: 0, transition: { duration: 900, delay: 300, ease: 'easeOut' } }"
        src="/images/Hero_Dsg.png"
        alt="hero"
        class="w-160 lg:w-340 sm:w-3/4 mt-1 lg:-mt-86 relative z-12 lg:mx-0 lg:mr-0"
      />
    </div>

    <section id="about" class="py-10 lg:py-40 px-6 lg:px-23">
      <div
        class="container mx-auto grid grid-cols-1 ml-0 lg:ml-18 lg:grid-cols-5 gap-12 lg:gap-32 items-start"
      >
        <div class="space-y-12 lg:col-span-2">
          <div
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visible="{ opacity: 1, x: 0, transition: { duration: 700, ease: 'easeOut' } }"
          >
            <h2
              class="text-4xl lg:text-[48px] font-bold font-['Poppins'] text-violet-500 mb-4 lg:mb-6"
            >
              About Me
            </h2>
            <h3
              class="text-2xl lg:text-[28px] font-medium font-['Poppins'] text-[#FBDF3A] mb-4 lg:mb-6"
            >
              <Typewriter
                :strings="['Hii...', 'I\'m Muhamad Sidik...']"
                :autoStart="true"
                :loop="true"
                :delay="75"
                :deleteSpeed="50"
                cursorClassName="Typewriter__cursor text-violet-500"
              />
            </h3>
            <div
              class="text-white space-y-4 text-sm lg:text-[16px] text-justify leading-relaxed font-['Roboto'] font-regular"
            >
              <p>
                A passionate Multimedia Designer with a strong foundation in
                visual design, game development, and user-focused interfaces.
              </p>
              <p>
                With experience as a Teaching Assistant and creative lead in
                team projects, I blend design thinking and technical skills to
                craft interactive experiences.
              </p>
              <p>
                Certified in multimedia production (BNSP - KKNI Level 2) and
                driven by curiosity and creativity.
              </p>
            </div>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visible="{ opacity: 1, x: 0, transition: { duration: 700, delay: 150, ease: 'easeOut' } }"
          >
            <h3
              class="text-2xl lg:text-[28px] font-bold font-['Poppins'] text-violet-500 mb-4 lg:mb-6"
            >
              Education
            </h3>
            <ul class="space-y-4 lg:space-y-6">
              <li
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200, ease: 'easeOut' } }"
                class="flex gap-4"
              >
                <span class="text-white mt-1.5"
                  ><i class="bi bi-circle-fill text-[8px]"></i>
                </span>
                <div>
                  <h4
                    class="text-white text-sm lg:text-[18px] font-['Roboto'] font-extrabold"
                  >
                    Telkom University
                  </h4>
                  <p
                    class="text-white text-sm lg:text-[16px] font-['Roboto'] font-regular"
                  >
                    Undergraduate in Applied Sciences, Multimedia Engineering
                    Technology
                  </p>
                  <p
                    class="text-white italic text-sm font-['Roboto'] font-light"
                  >
                    2022 - Present (GPA : 3.81 / 4.00)
                  </p>
                </div>
              </li>
              <li
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: 350, ease: 'easeOut' } }"
                class="flex gap-4"
              >
                <span class="text-white mt-1.5"
                  ><i class="bi bi-circle-fill text-[8px]"></i>
                </span>
                <div>
                  <h4
                    class="text-white text-sm lg:text-[18px] font-['Roboto'] font-extrabold"
                  >
                    SMKN 1 Belitang III
                  </h4>
                  <p
                    class="text-white text-sm lg:text-[16px] font-['Roboto'] font-regular"
                  >
                    Multimedia
                  </p>
                  <p
                    class="text-white italic text-sm font-['Roboto'] font-light"
                  >
                    2019 - 2022
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visible="{ opacity: 1, x: 0, transition: { duration: 700, delay: 300, ease: 'easeOut' } }"
          >
            <h3
              class="text-2xl lg:text-[28px] font-bold font-['Poppins'] text-violet-500 mb-4 lg:mb-6"
            >
              Skills
            </h3>
            <ul class="space-y-4 lg:space-y-6">
              <li
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: 350, ease: 'easeOut' } }"
                class="flex gap-4"
              >
                <span class="text-white mt-1.5"
                  ><i class="bi bi-circle-fill text-[8px]"></i>
                </span>
                <div>
                  <h4
                    class="text-white text-sm lg:text-[18px] font-['Roboto'] font-extrabold"
                  >
                    Hard Skills
                  </h4>
                  <p
                    class="text-white text-sm lg:text-[16px] leading-relaxed font-['Roboto'] font-regular"
                  >
                    UI/UX Design • Graphic Design • Layout Design • Game
                    Development • Asset Compositing & AR/VR
                  </p>
                </div>
              </li>
              <li
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: 500, ease: 'easeOut' } }"
                class="flex gap-4"
              >
                <span class="text-white mt-1.5"
                  ><i class="bi bi-circle-fill text-[8px]"></i>
                </span>
                <div>
                  <h4
                    class="text-white text-sm lg:text-[18px] font-['Roboto'] font-extrabold"
                  >
                    Soft Skills
                  </h4>
                  <p
                    class="text-white text-sm lg:text-[16px] leading-relaxed font-['Roboto'] font-regular"
                  >
                    Creative Thinking • Team Collaboration • Problem Solving •
                    Attention to Detail • Time Management • Adaptability
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-span-1 lg:col-span-3 space-y-12 lg:space-y-16 lg:pl-10">
          <div class="flex flex-row gap-8 lg:gap-20">
            <div
              v-motion
              :initial="{ opacity: 0, scale: 0.8 }"
              :visible="{ opacity: 1, scale: 1, transition: { duration: 600, ease: 'easeOut' } }"
              class="flex flex-col items-start w-1/2 lg:w-auto"
            >
              <img
                src="/images/ceklis.png"
                alt="check"
                class="w-10 lg:w-12 mb-5"
              />
              <h4
                class="text-4xl lg:text-[48px] font-bold font-['Poppins'] text-[#FBDF3A]"
              >
                02+
              </h4>
              <p
                class="text-white text-[14px] lg:text-[16px] font-['Roboto'] font-regular"
              >
                Years of Practical Experience
              </p>
            </div>
            <div
              v-motion
              :initial="{ opacity: 0, scale: 0.8 }"
              :visible="{ opacity: 1, scale: 1, transition: { duration: 600, delay: 200, ease: 'easeOut' } }"
              class="flex flex-col items-start w-1/2 lg:w-auto"
            >
              <img
                src="/images/ceklis.png"
                alt="check"
                class="w-10 lg:w-12 mb-5"
              />
              <h4
                class="text-4xl lg:text-[48px] font-bold font-['Poppins'] text-[#FBDF3A]"
              >
                15+
              </h4>
              <p
                class="text-white text-[14px] lg:text-[16px] font-['Roboto'] font-regular"
              >
                Completed Personal & Team Projects
              </p>
            </div>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 800, delay: 100, ease: 'easeOut' } }"
            class="relative mt-10 lg:mt-22 pb-10 lg:pb-0"
          >
            <img
              src="/images/about_me.png"
              alt="About Me Graphic"
              class="w-full lg:w-xl"
            />
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :visible="{ opacity: 1, x: 0, transition: { duration: 700, delay: 100, ease: 'easeOut' } }"
            class="relative mt-10 lg:mt-25 pb-10 lg:pb-0"
          >
            <h3
              class="text-2xl lg:text-[28px] font-bold font-['Poppins'] text-violet-500 mb-4 lg:mb-6"
            >
              Languages
            </h3>
            <ul class="space-y-4 lg:space-y-6 relative z-20">
              <li
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200, ease: 'easeOut' } }"
                class="flex gap-4"
              >
                <span class="text-white mt-0"
                  ><i class="bi bi-circle-fill text-[8px]"></i>
                </span>
                <div>
                  <h4
                    class="text-white text-sm lg:text-[18px] font-['Roboto'] font-extrabold"
                  >
                    Indonesian
                  </h4>
                  <p
                    class="text-white text-sm lg:text-[16px] font-['Roboto'] font-medium"
                  >
                    Native
                  </p>
                  <p
                    class="text-white text-sm italic lg:text-[16px] font-['Roboto'] font-light"
                  >
                    ✦ Certification : n/a
                  </p>
                </div>
              </li>
              <li
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: 350, ease: 'easeOut' } }"
                class="flex gap-4"
              >
                <span class="text-white mt-1.5"
                  ><i class="bi bi-circle-fill text-[8px]"></i>
                </span>
                <div>
                  <h4
                    class="text-white text-sm lg:text-[18px] font-['Roboto'] font-extrabold"
                  >
                    English
                  </h4>
                  <p
                    class="text-white text-sm lg:text-[16px] font-['Roboto'] font-medium"
                  >
                    Intermediate (CEFR B1)
                  </p>
                  <p
                    class="text-white text-sm italic lg:text-[16px] font-['Roboto'] font-light"
                  >
                    ✦ Certification : EPRT Score: 483 – Telkom University
                  </p>
                </div>
                <img
                  src="/images/accent_1.png"
                  alt="Accent"
                  class="w-24 lg:w-40 absolute lg:relative bottom-0 right-0 lg:float-end opacity-40 lg:opacity-100 z-10 pointer-events-none"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Typewriter from 'vue-typewriter-effect'
</script>
