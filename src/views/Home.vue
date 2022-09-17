<template>
  <div>
    <Hero />

    <!-- ABOUT SECTION -->
    <!-- <AboutMe /> -->

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
</script>
