<template>
  <!-- <router-link
    :to="link"
    class="border border-zinc-600 bg-[#1f1f1f] px-10 py-3 text-sm font-semibold uppercase tracking-widest duration-300 ease-out hover:bg-zinc-200 hover:text-zinc-800"
    >{{ label }}</router-link
  > -->
  <router-link
    :to="link"
    class="group relative rounded-full border border-zinc-500 bg-[#1f1f1f] px-8 py-4 text-xs font-semibold uppercase transition-colors duration-200 hover:border-zinc-300 hover:text-zinc-100 md:py-4 md:px-10"
  >
    <span
      class="absolute -left-5 top-1/2 flex h-6 w-10 -translate-y-1/2 items-center bg-[#1f1f1f] text-zinc-500 transition-transform duration-200 group-hover:translate-x-2 group-hover:text-zinc-300 md:-left-7 md:w-12"
    >
      <div class="h-[2px] w-full bg-zinc-400 group-hover:bg-zinc-300"></div>
      <i
        class="fa-solid fa-angle-right -ml-1 mt-px text-zinc-400 group-hover:text-zinc-300"
      ></i>
    </span>

    {{ label }}
  </router-link>
</template>

<script setup>
const props = defineProps({
  label: String,
  link: Object,
});
</script>
