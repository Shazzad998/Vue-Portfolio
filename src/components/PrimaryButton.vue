<template>
  <div
    class="group relative inline-block rounded-full border border-zinc-500 bg-[#1f1f1f] px-8 py-4 text-xs font-semibold uppercase transition-colors duration-200 hover:border-zinc-300 hover:text-zinc-100 md:py-4 md:px-10"
  >
    <span
      class="absolute -left-5 top-1/2 flex h-6 w-10 -translate-y-1/2 items-center bg-[#1f1f1f] text-zinc-500 transition-transform duration-200 group-hover:translate-x-2 group-hover:text-zinc-300 md:-left-7 md:w-12"
    >
      <svg
        width="84"
        height="24"
        viewBox="0 0 84 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M83.0607 13.0607C83.6464 12.4749 83.6464 11.5251 83.0607 10.9393L73.5147 1.3934C72.9289 0.807618 71.9792 0.807618 71.3934 1.3934C70.8076 1.97919 70.8076 2.92894 71.3934 3.51472L79.8787 12L71.3934 20.4853C70.8076 21.0711 70.8076 22.0208 71.3934 22.6066C71.9792 23.1924 72.9289 23.1924 73.5147 22.6066L83.0607 13.0607ZM-1.31134e-07 13.5L82 13.5L82 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z"
          fill=""
        />
      </svg>
    </span>

    {{ label }}
  </div>
</template>

<script setup>
defineProps({
  label: String,
});
</script>
