<template>
  <div class="pt-24">
    <ContactVue />
  </div>
</template>

<script setup>
import ContactVue from "@/components/Contact.vue";
import { onMounted } from "vue";

onMounted(() => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
</script>
