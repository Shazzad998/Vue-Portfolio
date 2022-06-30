<script setup>
import NavigationVue from "./components/Navigation.vue";

import SocialIconsVue from "@/components/SocialIcons.vue";
import FooterVue from "./components/Footer.vue";
</script>

<template>
  <div class="">
    <SocialIconsVue />
    <div class="mx-6">
      <div
        class="background container mx-auto min-h-screen border-r border-[#343438]"
      >
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
