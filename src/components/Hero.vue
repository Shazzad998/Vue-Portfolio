<template>
  <SectionWrapper>
    <div class="mt-16 grid grid-cols-1 sm:py-8 md:grid-cols-5 md:py-14">
      <div
        class="relative md:col-span-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div class="absolute">
          <div class="p-4">
            <div class="flex">
              <div
                class="mr-4 h-44 w-10 border-l border-t border-zinc-500"
              ></div>
              <div class="-mt-3">
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
                class="bg-[#1f1f1f] text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 xl:text-sm"
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
            <div>MD.</div>
            <div class="text-5xl font-semibold text-zinc-100 lg:text-7xl">
              SHAZZAD<span
                class="text-3xl font-normal text-zinc-400 lg:text-5xl"
                >UL <span>islam</span></span
              >
            </div>
          </div>

          <div
            class="mt-8 text-xl font-normal tracking-widest text-zinc-300 lg:text-2xl"
          >
            I'm a designer who loves to code
          </div>
          <div class="mt-2 lg:mt-4">
            <p class="text-sm tracking-wider text-zinc-400 lg:text-base">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when.It is a long established fact
              that a reader will be distracted.
            </p>
          </div>
          <div class="mt-6 flex gap-x-2 sm:gap-x-8 lg:mt-10 xl:mt-16">
            <router-link
              :to="{ name: 'portfolio' }"
              class="rounded-sm border border-zinc-600 bg-zinc-300 px-8 py-2 text-xs font-medium uppercase text-zinc-800 duration-200 ease-in hover:bg-zinc-400 sm:text-sm md:py-3 md:text-xs lg:text-lg lg:font-semibold"
            >
              View Protfolio
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from "./SectionWrapper.vue";
</script>
