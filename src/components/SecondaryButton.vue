<template>
  <button
    type="submit"
    class="border border-zinc-600 bg-[#1f1f1f] px-10 py-3 text-sm font-semibold uppercase tracking-widest duration-300 ease-out hover:bg-zinc-200 hover:text-zinc-800"
  >
    {{ label }}
  </button>
</template>

<script setup>
const props = defineProps({
  label: String,
});
</script>
