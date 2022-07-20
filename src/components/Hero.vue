<template>
  <section
    class="flex min-h-screen items-center justify-center sm:px-4 lg:px-16 xl:px-20 2xl:px-32"
  >
    <div class="grid grid-cols-1 sm:py-8 md:grid-cols-5 md:py-14">
      <div class="relative md:col-span-4">
        <div class="absolute">
          <div class="p-4">
            <div class="flex">
              <div
                class="section-title mr-4 h-44 w-10 border-l border-t border-zinc-500"
              ></div>
              <div class="section-title -mt-3">
                <span
                  class="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400 xl:text-sm"
                >
                  hi, my name is</span
                >
              </div>
            </div>
            <div
              class="absolute -ml-[3.3rem] mt-14 inline-block -rotate-90 xl:-ml-[3.7rem]"
            >
              <span
                class="section-title bg-[#1f1f1f] text-xs font-bold uppercase tracking-[0.3em] text-zinc-400 xl:text-sm"
              >
                INTRODUCTION</span
              >
            </div>
          </div>
        </div>
        <div class="ml-10 pt-16 md:ml-16">
          <div
            class="space-y-2 text-3xl font-normal uppercase tracking-widest text-zinc-400 lg:text-5xl"
          >
            <div class="hero-text">MD.</div>
            <div class="flex flex-wrap items-end">
              <div
                class="hero-text text-5xl font-semibold text-zinc-100 lg:text-7xl"
              >
                SHAZZAD<span
                  class="hero-text mr-3 text-3xl font-normal text-zinc-400 lg:text-5xl"
                  >UL</span
                >
              </div>

              <span
                class="hero-text text-3xl font-normal text-zinc-400 lg:text-5xl"
                >islam</span
              >
            </div>
          </div>

          <div
            class="hero-text mt-8 text-xl font-normal tracking-widest text-zinc-300 lg:text-3xl"
          >
            I'm a designer who loves to code
          </div>
          <div class="hero-text mt-2 lg:mt-4">
            <p class="text-sm tracking-wider text-zinc-400 lg:text-xl">
              I'm a full-stack web developer specializing in building (and
              occasionally designing) exceptional digital experience. Currently
              I'm focused on creating websites for clients in Fiver.
            </p>
          </div>
        </div>
        <div class="hero-button mt-20 ml-16 lg:mt-10 xl:mt-20">
          <!-- <router-link
            :to="{ name: 'portfolio' }"
            class="rounded-sm border border-zinc-600 bg-zinc-300 px-8 py-2 text-xs font-medium uppercase text-zinc-800 duration-200 ease-in hover:bg-zinc-400 sm:text-sm md:py-3 md:text-xs lg:text-lg lg:font-semibold"
          >
            View Protfolio
          </router-link> -->

          <!-- <router-link
            :to="{ name: 'portfolio' }"
            class="relative rounded-full border border-zinc-600 bg-[#1f1f1f1f] px-10 py-2 text-xs font-medium uppercase text-zinc-200 duration-200 ease-in before:absolute before:h-0 before:w-4 before:bg-red-500 hover:bg-zinc-400 sm:text-sm md:py-4 md:text-xs lg:text-base lg:font-medium"
          >
            View Protfolio
          </router-link> -->

          <router-link
            :to="{ name: 'portfolio' }"
            class="relative rounded-full border border-zinc-500 bg-[#1f1f1f] px-12 py-5 text-xs uppercase"
          >
            <span
              class="absolute -left-10 top-1/2 flex h-6 w-16 -translate-y-1/2 items-center bg-[#1f1f1f] text-zinc-500"
            >
              <div class="h-px w-full bg-zinc-500"></div>
              <i class="fa-solid fa-angle-right -ml-1"></i>
            </span>

            View Portfolio
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "vue";

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
