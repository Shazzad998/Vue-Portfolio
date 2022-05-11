<template>
  <div class="absolute">
    <div class="relative">
      <div class="flex">
        <div class="mr-4 ml-4 h-8 w-24 border-l border-t border-zinc-500"></div>
        <div class="-mt-3">
          <span
            class="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 lg:text-sm xl:text-lg"
            >{{ label }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
});
</script>
