<template>
  <div class="fixed top-0 left-0 right-0 z-40 mx-6">
    <header class="container mx-auto flex items-center justify-between px-4">
      <!-- LOGO -->
      <router-link :to="{ name: 'home' }" class="flex items-center p-2">
        <img src="../images/logo.svg" alt="" class="h-12 w-12" />
      </router-link>

      <nav
        class="z-40 mx-2 flex items-center justify-between py-4 text-xl text-zinc-50"
      >
        <div
          class="fixed inset-0 left-1/4 flex flex-col gap-y-6 bg-[#1a1a1a] px-12 py-36 text-lg font-semibold duration-200 ease-in md:left-1/2"
          :class="[navExpanded ? '' : 'translate-x-full']"
        >
          <div v-for="(NavItem, index) in navItems" :key="index" class="p-4">
            <router-link
              class="group relative py-4 pl-6 pr-10 uppercase tracking-wider duration-200 ease-in hover:text-gray-700 md:text-4xl"
              :to="NavItem.to"
              @click="navExpanded = false"
            >
              <span
                class="absolute inset-0 w-0 rounded-sm bg-gray-200 duration-200 ease-in group-hover:w-full"
              ></span>
              <span class="relative">{{ NavItem.label }}</span>
            </router-link>
          </div>
        </div>
      </nav>

      <!-- MENU BUTTON -->
      <button class="nav-toggle z-50 p-2 outline-none" @click="navToggle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="open-svg h-8 w-8"
          :class="[navExpanded ? 'hidden' : '']"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="close-svg h-8 w-8"
          :class="[navExpanded ? '' : 'hidden']"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </header>
  </div>
</template>

<script setup>
import { ref } from "vue";

const navExpanded = ref(false);

const navItems = ref([
  {
    label: "Home",
    to: { name: "home" },
  },

  {
    label: "Portfolio",
    to: { name: "portfolio" },
  },

  {
    label: "Contact",
    to: { name: "contact" },
  },
]);

const navToggle = () => {
  navExpanded.value = !navExpanded.value;
};
</script>
