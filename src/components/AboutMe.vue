<template>
  <SectionWrapper>
    <div class="grid grid-cols-1 gap-y-10 md:grid-cols-2">
      <div class="relative">
        <SectionHeader :label="'About me'" class="about-title" />
        <div class="pt-12 xl:text-2xl">
          <div class="about-text px-1 tracking-wider text-zinc-400">
            <p class="text-justify">
              Hello! My name is Shazzad and I enjoy creating things that live on
              the internet. My interest in web development started back in 2019
              when I had to build a website with HTML & CSS for my college
              project.
            </p>
            <p class="mt-4 text-justify">
              Fast-forward to today, and I’ve learned both front-end & back-end
              and build some projects as well. I also have passion for design.
              Most of the projects I've built, I used my own designs.
            </p>
            <p class="mt-4 text-justify">
              Here are a few technologies I’ve been working with recently:
            </p>
          </div>
          <ul
            class="tech-list mt-4 grid list-disc grid-cols-2 gap-y-2 pl-5 uppercase tracking-widest"
          >
            <li>laravel</li>
            <li>vuejs</li>
            <li>tailwindcss</li>
            <li>shopify</li>
            <li>wordpress</li>
          </ul>
        </div>
      </div>

      <div class="about-image flex items-center justify-end">
        <div class="md:px-4">
          <div class="relative mx-auto w-52 rounded-sm md:w-64 lg:w-72 xl:w-96">
            <img src="../images/profile.jpg" alt="profile-image" class="" />
            <div
              class="absolute inset-0 z-0 -ml-6 -mt-6 mr-6 mb-6 border border-zinc-600"
            ></div>
          </div>
          <div class="about-image mt-4 flex justify-center">
            <span
              class="text-center text-xs font-semibold tracking-widest text-zinc-500 lg:text-lg"
            >
              DEVELOPER AND GRAPHICS DESIGNER . BASED IN BANGLADESH</span
            >
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup>
import SectionHeader from "./SectionHeader.vue";
import SectionWrapper from "./SectionWrapper.vue";
import useAnimation from "@/composable/animation";
import { onMounted } from "vue";

const { animate } = useAnimation();

onMounted(() => {});
</script>

<style>
.about-text p {
  clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);
}
</style>
