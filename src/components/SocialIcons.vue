<template>
  <div class="fixed inset-x-6 mx-auto hidden md:block">
    <div
      class="container relative mx-auto flex h-screen items-center justify-end"
    >
      <div
        class="absolute -right-8 flex w-16 flex-col gap-y-8 bg-[#1f1f1f] py-6 text-2xl"
      >
        <a
          v-for="(link, index) in links"
          :href="link.link"
          :key="index"
          class="flex justify-center p-2 text-gray-400"
          :class="link.color"
        >
          <i :class="[link.icon]" class="duration-200 ease-in"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const links = [
  {
    icon: "fa-brands fa-facebook-f",
    link: "https://www.facebook.com/Shazzad71973",
    color: "hover:text-[#3b5998]",
  },
  {
    icon: "fa-brands fa-instagram",
    link: "https://www.facebook.com/Shazzad71973",
    color: "hover:text-[#C32AA3]",
  },
  {
    icon: "fa-brands fa-whatsapp",
    link: "https://www.facebook.com/Shazzad71973",
    color: "hover:text-[#25D366]",
  },
  {
    icon: "fa-brands fa-linkedin-in",
    link: "https://www.facebook.com/Shazzad71973",
    color: "hover:text-[#007bb6]",
  },
];
</script>
