<template>
  <section
    class="flex items-center justify-center pb-24 pt-48 sm:min-h-screen sm:px-4 sm:pb-0 sm:pt-0 lg:px-16 xl:px-20 2xl:px-32"
  >
    <div class="grid grid-cols-1 sm:py-8 md:grid-cols-2 md:py-14">
      <div class="relative">
        <div class="ml-10 pt-16 md:ml-16">
          <div class="mb-8 flex items-center text-sm uppercase tracking-widest">
            <span class="mr-4 block h-px w-10 bg-zinc-50"></span> I am
          </div>
          <div
            class="hero-text space-y-2 font-antonio text-3xl font-bold text-zinc-100 lg:text-6xl"
          >
            <h1>Md. Shazzadul Islam.</h1>
          </div>

          <div class="hero-text mt-2 lg:mt-8">
            <p class="font-light text-zinc-400 lg:text-3xl">
              A Full-Stack
              <span
                class="font-normal text-zinc-100 underline decoration-2 underline-offset-2"
                >Web Developer</span
              >
              specializing in building exceptional Websites with
              <span
                class="font-normal text-zinc-100 underline decoration-2 underline-offset-2"
                >Laravel</span
              >
              &
              <span
                class="font-normal text-zinc-100 underline decoration-2 underline-offset-2"
                >Vue js</span
              >.
            </p>
          </div>
        </div>
        <div class="hero-button mt-20 ml-16 lg:mt-10 xl:mt-20">
          <router-link :to="{ name: 'portfolio' }">
            <PrimaryButton label="View Portfolio" />
          </router-link>
        </div>
      </div>

      <div class="hero-text">
        <img src="../../public/images/hero.svg" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "vue";
import PrimaryButton from "./PrimaryButton.vue";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  let t1 = gsap.timeline({ defaults: { duration: 0.5, delay: 1 } });

  t1.from(".section-title", {
    "clip-path": "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
    opacity: 0,
  })
    .from(
      ".hero-text",
      {
        "clip-path": "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        y: "50px",
        stagger: 0.1,
        opacity: 0,
        delay: 0,
      },
      "-=.4"
    )
    .from(
      ".hero-button",
      {
        y: "60px",
        opacity: 0,
        delay: 0,
      },
      "-=.4"
    );
});
</script>

<style>
.hero-text,
.section-title {
  clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);
}
</style>
