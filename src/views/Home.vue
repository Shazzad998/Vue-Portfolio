<template>
  <div>
    <div
      class="overlay fixed top-0 left-0 z-50 h-screen w-full bg-[#1f1f1f]"
    ></div>
    <Hero />

    <!-- ABOUT SECTION -->
    <AboutMe />

    <!-- LATEST WORKS -->
    <Featured />

    <!-- SERVICES SECTION -->
    <Services />

    <Contact />
  </div>
</template>

<script setup>
import Contact from "@/components/Contact.vue";
import Featured from "@/components/Featured.vue";
import AboutMe from "@/components/AboutMe.vue";
import Services from "@/components/Services.vue";
import Hero from "@/components/Hero.vue";
import gsap from "gsap";
import { onMounted } from "vue";

onMounted(() => {
  gsap.to(".overlay", {
    y: "-100%",
    duration: 1,
    ease: "power4.inOut",
    delay: 0.5,
  });
});
</script>
