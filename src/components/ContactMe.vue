<template>
  <section id="contact" class="bg-[#141414] py-20 px-6 lg:px-40 relative overflow-hidden">
    <div class="container mx-auto relative z-10">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        <!-- Left Side: Contact Info -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }"
          class="w-full lg:w-1/2 space-y-10"
        >
          <h2 class="text-4xl lg:text-6xl font-bold font-['Poppins'] text-white leading-tight">
            Contact & <span class="text-violet-500">Connect</span><br />with Me
          </h2>

          <div class="space-y-8">
            <!-- Phone -->
            <div>
              <p class="text-[#8E949F] text-sm font-medium uppercase tracking-widest mb-2">Phone</p>
              <p class="text-white text-xl lg:text-2xl font-bold font-['Roboto']">(+62) 822 8242 1322</p>
            </div>

            <!-- Email -->
            <div>
              <p class="text-[#8E949F] text-sm font-medium uppercase tracking-widest mb-2">Email</p>
              <p class="text-white text-xl lg:text-2xl font-bold font-['Roboto']">muhamadsidik.imy@gmail.com</p>
            </div>

            <!-- Address -->
            <div>
              <p class="text-[#8E949F] text-sm font-medium uppercase tracking-widest mb-2">Address</p>
              <p class="text-white text-xl lg:text-2xl font-bold font-['Roboto']">Bandung, Indonesia</p>
            </div>
          </div>

          <!-- Social Media -->
          <div class="space-y-4">
            <p class="text-[#8E949F] text-sm font-medium uppercase tracking-widest">Social Media</p>
            <div class="flex gap-4">
              <a href="https://github.com/MyusiZ3" target="_blank" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-violet-500 hover:border-violet-500 transition-all duration-300">
                <i class="bi bi-github"></i>
              </a>
              <a href="#" target="_blank" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-violet-500 hover:border-violet-500 transition-all duration-300">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="#" target="_blank" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-violet-500 hover:border-violet-500 transition-all duration-300">
                <i class="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <!-- Download Button -->
          <button class="flex items-center gap-3 px-8 py-3 rounded-full border border-gray-600 text-white font-bold hover:bg-violet-500 hover:border-violet-500 transition-all duration-300 group">
            DOWNLOAD
            <i class="bi bi-chevron-right text-sm transition-transform group-hover:translate-x-1"></i>
          </button>
        </div>

        <!-- Right Side: Image with Decorative Elements -->
        <div 
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visible="{ opacity: 1, scale: 1, transition: { duration: 1000 } }"
          class="w-full lg:w-1/2 relative"
        >
          <div class="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <!-- Reference to the Hero Image -->
            <img 
              src="/images/Hero_Dsg.png" 
              alt="Muhamad Sidik" 
              class="w-full h-auto object-cover transform scale-110 lg:scale-100"
            />
            
            <!-- Purple Grid Overlay (As seen in screenshot) -->
            <div class="absolute bottom-0 right-0 w-1/2 h-1/2 bg-violet-600/20 backdrop-blur-sm -z-10 translate-x-10 translate-y-10 rounded-2xl border border-white/10"></div>
          </div>
          
          <!-- Decorative Background Shape -->
          <div class="absolute -top-10 -right-10 w-40 h-40 bg-violet-500/10 blur-3xl rounded-full"></div>
          <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-violet-500/10 blur-3xl rounded-full"></div>
        </div>
      </div>

      <!-- Footer Info -->
      <div class="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div class="flex items-center gap-4">
          <img src="/images/logo.png" alt="Muhamad Sidik" class="w-12 h-12" />
          <div>
            <h4 class="text-white font-bold font-['Poppins']">Muhamad<br />Sidik</h4>
          </div>
        </div>
        <p class="text-[#8E949F] text-sm font-['Roboto']">
          &copy; 2025 Muhamad Sidik | All rights reserved.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// No specific logic needed for now
</script>

<style scoped>
/* Specific animations or styles if needed */
</style>
