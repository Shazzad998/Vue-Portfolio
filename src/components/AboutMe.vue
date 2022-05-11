<template>
  <SectionWrapper>
    <div class="grid grid-cols-1 gap-y-10 md:grid-cols-2">
      <div class="relative">
        <SectionHeader :label="'About me'" />
        <div class="pt-12" data-aos="fade-right" data-aos-duration="800">
          <div class="px-1 xl:text-xl">
            <p class="text-justify tracking-wider text-zinc-400">
              Hello! My name is Shazzad and I enjoy creating things that live on
              the internet. My interest in web development started back in 2012
              when I decided to try editing custom Tumblr themes — turns out
              hacking together a custom reblog button taught me a lot about HTML
              & CSS!
            </p>
            <p class="mt-4 text-justify tracking-wider text-zinc-400">
              Fast-forward to today, and I’ve had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a
              student-led design studio. My main focus these days is building
              accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients.
            </p>
            <p class="mt-4 text-justify tracking-wider text-zinc-400">
              Here are a few technologies I’ve been working with recently:
            </p>

            <ul
              class="mt-4 grid list-disc grid-cols-2 gap-y-2 pl-5 uppercase tracking-widest"
            >
              <li>laravel</li>
              <li>vuejs</li>
              <li>tailwindcss</li>
              <li>shopify</li>
              <li>wordpress</li>
            </ul>
          </div>
        </div>
      </div>

      <div
        class="flex items-center justify-center"
        data-aos="fade-left"
        data-aos-duration="800"
      >
        <div class="md:px-4">
          <div
            class="mx-auto w-52 overflow-hidden rounded-sm md:w-64 lg:w-72 xl:w-96"
          >
            <img
              src="../images/profile.jpg"
              alt="profile-image"
              class="w-full"
            />
          </div>
          <div class="mt-4 flex justify-center">
            <span
              class="lg:text-md text-center text-xs font-semibold tracking-widest text-zinc-500"
            >
              DEVELOPER AND GRAPHICS DESIGNER . BASED IN BANGLADESH</span
            >
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup>
import SectionHeader from "./SectionHeader.vue";
import SectionWrapper from "./SectionWrapper.vue";
</script>
