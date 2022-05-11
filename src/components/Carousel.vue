<template>
  <Swiper
    :slidesPerView="1"
    :spaceBetween="20"
    :loop="true"
    :pagination="{
      clickable: true,
      type: 'progressbar',
      el: '.swiper-pagination',
    }"
    :navigation="{
      nextEl: '.button-next',
      prevEl: '.button-prev',
    }"
    :breakpoints="{
      '640': {
        slidesPerView: 2,
      },
      '768': {
        slidesPerView: 3,
      },
    }"
    :modules="modules"
    class="my-4"
  >
    <swiper-slide v-for="(project, i) in props.projects" :key="i">
      <div class="relative text-2xl font-semibold">
        <img :src="project.thumb" alt="" class="aspect-video object-cover" />
        <router-link
          :to="{ name: 'project.detail', params: { id: project.id } }"
          class="absolute inset-0"
        ></router-link>
      </div>
    </swiper-slide>

    <div class="mt-4 flex items-center justify-between gap-x-4">
      <div
        class="flex w-[50vw] items-center gap-x-3 sm:w-[40vw] md:w-[30vw] lg:w-[20vw] xl:w-[15vw]"
      >
        <div>01</div>
        <div class="swiper-pagination"></div>
        <div v-if="props.projects.length > 1">
          {{
            props.projects.length > 9
              ? props.projects.length
              : "0" + props.projects.length
          }}
        </div>
      </div>

      <div class="flex justify-end gap-x-3">
        <button
          class="button-prev border border-zinc-700 px-4 py-2 text-zinc-200"
        >
          <i class="fa-solid fa-angle-left"></i>
        </button>
        <button
          class="button-next border border-zinc-700 px-4 py-2 text-zinc-200"
        >
          <i class="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  </Swiper>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";

const modules = [Pagination, Navigation];

const props = defineProps({
  projects: Object,
});
</script>

<style>
.swiper-pagination-bullet {
  background: white;
}

.swiper-pagination {
  position: relative;
}

.swiper-pagination-progressbar-fill {
  background: rgb(185, 185, 185) !important;
}
</style>
