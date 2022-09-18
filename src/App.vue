<script setup>
import NavigationVue from "./components/Navigation.vue";
import FooterVue from "./components/Footer.vue";
import gsap from "gsap";
import { onMounted } from "vue";
import SocialIcons from "./components/SocialIcons.vue";

onMounted(() => {
  gsap.to(".overlay", {
    y: "-100%",
    duration: 1,
    ease: "power4.inOut",
    delay: 0.5,
  });
});
</script>

<template>
  <div class="">
    <div
      class="overlay fixed top-0 left-0 z-50 h-screen w-full bg-[#1f1f1f]"
    ></div>

    <div class="mx-6">
      <div
        class="background container mx-auto min-h-screen border-r border-[#343438]"
      >
        <SocialIcons />
        <NavigationVue />

        <main>
          <router-view> </router-view>
        </main>
      </div>
    </div>

    <!-- FOOTER -->

    <FooterVue />
  </div>
</template>

<style>
.background {
  background-image: repeating-linear-gradient(
      90deg,
      #343438 0px,
      #343438 1px,
      transparent 1px,
      transparent 25%
    ),
    linear-gradient(90deg, #1f1f1f, #1f1f1f);
}
</style>
