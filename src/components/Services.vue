<template>
  <SectionWrapper>
    <div class="relative">
      <SectionHeader :label="'Services'" class="service-title" />

      <div class="grid grid-cols-1 gap-5 pt-16 sm:grid-cols-2 md:grid-cols-3">
        <div
          class="service-card rounded-sm bg-[#232323] p-16 md:p-8 lg:p-12 xl:p-14"
        >
          <div class="flex items-center justify-between md:mt-16">
            <div>
              <h1
                class="service-card-content text-2xl font-bold uppercase tracking-[0.2em] text-zinc-500 md:text-xl lg:text-3xl"
              >
                design
              </h1>
            </div>
            <div class="service-card-content text-4xl text-zinc-300">
              <i class="fa-solid fa-brush"></i>
            </div>
          </div>

          <div class="mt-4">
            <p
              class="service-card-content text-xs font-semibold uppercase tracking-widest text-zinc-500"
            >
              CREATE DIGITAL PRODUCTS WITH UNIQUE IDEAS
            </p>
          </div>

          <div class="service-card-content mt-10">
            <a
              href=""
              class="font-semibold uppercase tracking-widest text-zinc-500"
            >
              <span
                class="text-7xl font-extrabold tracking-tighter text-zinc-50 md:text-4xl lg:text-7xl xl:text-8xl"
                >10</span
              >
              projects
            </a>
          </div>
        </div>

        <div
          class="service-card rounded-sm bg-[#232323] p-16 md:p-8 lg:p-12 xl:p-14"
        >
          <div class="flex items-center justify-between md:mt-16">
            <div>
              <h1
                class="service-card-content text-2xl font-bold uppercase tracking-[0.2em] text-zinc-500 md:text-xl lg:text-3xl"
              >
                front-end
              </h1>
            </div>
            <div class="service-card-content text-4xl text-zinc-300">
              <i class="fa-solid fa-code"></i>
            </div>
          </div>

          <div class="mt-4">
            <p
              class="service-card-content text-xs font-semibold uppercase tracking-widest text-zinc-500"
            >
              CREATE DIGITAL PRODUCTS WITH UNIQUE IDEAS
            </p>
          </div>

          <div class="service-card-content mt-10">
            <a
              href=""
              class="font-semibold uppercase tracking-widest text-zinc-500"
            >
              <span
                class="text-7xl font-extrabold tracking-tighter text-zinc-50 md:text-4xl lg:text-7xl xl:text-8xl"
                >10</span
              >
              projects
            </a>
          </div>
        </div>

        <div
          class="service-card rounded-sm bg-[#232323] p-16 md:p-8 lg:p-12 xl:p-14"
        >
          <div class="flex items-center justify-between md:mt-16">
            <div>
              <h1
                class="service-card-content text-2xl font-bold uppercase tracking-[0.2em] text-zinc-500 md:text-xl lg:text-3xl"
              >
                back-end
              </h1>
            </div>
            <div class="service-card-content text-4xl text-zinc-300">
              <i class="fa-solid fa-database"></i>
            </div>
          </div>

          <div class="mt-4">
            <p
              class="service-card-content text-xs font-semibold uppercase tracking-widest text-zinc-500"
            >
              CREATE DIGITAL PRODUCTS WITH UNIQUE IDEAS
            </p>
          </div>

          <div class="service-card-content mt-10">
            <a
              href=""
              class="font-semibold uppercase tracking-widest text-zinc-500"
            >
              <span
                class="text-7xl font-extrabold tracking-tighter text-zinc-50 md:text-4xl lg:text-7xl xl:text-8xl"
                >10</span
              >
              projects
            </a>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup>
import useAnimation from "@/composable/animation";
import { onMounted } from "vue";
import SectionHeader from "./SectionHeader.vue";
import SectionWrapper from "./SectionWrapper.vue";

const { animate } = useAnimation();

onMounted(() => {
  animate.from(".service-title", {
    scrollTrigger: { trigger: ".service-title", start: "top 80%" },
    opacity: 0,
    x: "-60px",
  });

  let tl = animate.timeline({
    defaults: { duration: 1, ease: "power4.inOut" },
    scrollTrigger: { trigger: ".service-card", start: "top 90%" },
  });
  tl.from(".service-card", {
    opacity: 0,
    y: 60,
    stagger: 0.3,
  }).from(
    ".service-card-content",
    {
      opacity: 0,
      y: 30,
      stagger: 0.1,
    },
    "-=2"
  );
});
</script>
