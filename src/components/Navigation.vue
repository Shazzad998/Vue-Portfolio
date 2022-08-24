<template>
  <div class="fixed top-0 left-0 right-0 z-40 mx-6">
    <header class="container mx-auto flex items-center justify-between py-4">
      <!-- LOGO -->
      <router-link
        :to="{ name: 'home' }"
        class="nav-item flex items-center p-2"
      >
        <img src="../images/logo.svg" alt="" class="h-12 w-12" />
      </router-link>

      <nav class="hidden md:block">
        <ul class="flex text-xl md:gap-x-12 lg:gap-x-16 xl:gap-x-20">
          <li
            v-for="(NavItem, index) in navItems"
            :key="index"
            class="nav-item"
          >
            <!-- <router-link
              :to="NavItem.to"
              class="before:content-[' '] relative py-2 before:bottom-0 before:left-1/2 before:h-px before:w-4 before:-translate-x-1/2 before:bg-white before:duration-200 hover:before:absolute"
            > -->

            <router-link
              :to="NavItem.to"
              class="nav-link relative py-2 px-8 text-xs uppercase tracking-wider text-zinc-400 transition-colors duration-200 hover:text-zinc-200"
            >
              {{ NavItem.label }}
            </router-link>
          </li>
        </ul>
      </nav>

      <div class="nav-item hidden pl-6 md:block">
        <PrimaryButton :label="'Hire me'" :link="{ name: 'portfolio' }" />
      </div>

      <nav
        class="z-40 mx-2 flex items-center justify-between py-4 text-xl text-zinc-50 md:hidden"
      >
        <div
          class="fixed inset-0 left-1/4 flex flex-col gap-y-6 bg-[#1a1a1a] px-12 py-36 text-lg font-semibold duration-200 ease-in md:left-1/2"
          :class="[navExpanded ? '' : 'translate-x-full']"
        >
          <div v-for="(NavItem, index) in navItems" :key="index" class="p-4">
            <router-link
              class="group relative uppercase tracking-wider duration-200 ease-in hover:text-gray-700 md:text-4xl"
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
      <button
        class="nav-toggle nav-item z-50 outline-none md:hidden"
        @click="navToggle"
      >
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
import { onMounted, ref } from "vue";

import gsap from "gsap";
import PrimaryButton from "./PrimaryButton.vue";

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

onMounted(() => {
  gsap.from(".nav-item", {
    y: "-80px",
    opacity: 0,
    stagger: 0.3,
    duration: 0.5,
    delay: 1.5,
  });
});
</script>

<style>
.nav-link.router-link-active::before {
  content: " ";
  width: 12px;
  height: 12px;
  border-top: 1px solid #cbcbcb;
  border-left: 1px solid #cbcbcb;
  position: absolute;
  top: 0;
  left: 0;
}

.nav-link.router-link-active::after {
  content: " ";
  width: 12px;
  height: 12px;
  border-bottom: 1px solid #cbcbcb;
  border-right: 1px solid #cbcbcb;
  position: absolute;
  bottom: 0;
  right: 0;
}

.nav-link.router-link-active {
  color: #ededed;
}
</style>
