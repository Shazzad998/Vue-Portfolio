<template>
  <swiper
    :slides-per-view="1"
    :space-between="50"
    :loop="true"
    :pagination="{
      clickable: true,
      type: 'bullets',
      el: '.swiper-pagination',
    }"
    :modules="modules"
    :navigation="{
      nextEl: '.button-next',
      prevEl: '.button-prev',
    }"
  >
    <swiper-slide v-for="(image, i) in props.images" :key="i">
      <div class="flex aspect-[4/3] items-center">
        <img
          :src="image"
          alt=""
          class="h-full w-full rounded-sm object-cover"
        />
      </div>
    </swiper-slide>

    <div class="mt-4 flex items-center justify-center gap-x-4">
      <div
        class="flex w-[50vw] items-center gap-x-3 sm:w-[40vw] md:w-[30vw] lg:w-[20vw] xl:w-[15vw]"
      >
        <div class="swiper-pagination"></div>
      </div>
    </div>

    <div
      class="absolute inset-x-0 top-1/2 z-40 flex -translate-y-1/2 justify-between gap-x-3"
    >
      <button class="button-prev px-4 py-2 text-4xl text-zinc-50">
        <i class="fa-solid fa-angle-left"></i>
      </button>
      <button class="button-next px-4 py-2 text-4xl text-zinc-50">
        <i class="fa-solid fa-angle-right"></i>
      </button>
    </div>
  </swiper>
</template>
<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import required modules
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const modules = [Pagination, Navigation];

const props = defineProps({
  images: Object,
});
</script>
