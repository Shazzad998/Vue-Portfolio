<template>
  <SectionWrapper>
    <div class="grid grid-cols-1 gap-y-10 md:grid-cols-2">
      <div class="relative">
        <SectionHeader :label="'About me'" class="about-title" />
        <div class="pt-12 xl:text-xl">
          <div class="about-text px-1 tracking-wider text-zinc-400">
            <p class="text-justify">
              Hello! My name is Shazzad and I enjoy creating things that live on
              the internet. My interest in web development started back in 2012
              when I decided to try editing custom Tumblr themes — turns out
              hacking together a custom reblog button taught me a lot about HTML
              & CSS!
            </p>
            <p class="mt-4 text-justify">
              Fast-forward to today, and I’ve had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a
              student-led design studio. My main focus these days is building
              accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients.
            </p>
            <p class="mt-4 text-justify">
              Here are a few technologies I’ve been working with recently:
            </p>
          </div>
          <ul
            class="tech-list mt-4 grid list-disc grid-cols-2 gap-y-2 pl-5 uppercase tracking-widest"
          >
            <li>laravel</li>
            <li>vuejs</li>
            <li>tailwindcss</li>
            <li>shopify</li>
            <li>wordpress</li>
          </ul>
        </div>
      </div>

      <div class="about-image flex items-center justify-center">
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
          <div class="about-image mt-4 flex justify-center">
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
import useAnimation from "@/composable/animation";
import { onMounted } from "vue";

const { animate } = useAnimation();

onMounted(() => {
  animate.from(".about-title", {
    scrollTrigger: { trigger: ".about-title", start: "top 80%" },
    opacity: 0,
    x: "-60px",
  });

  let tl = animate.timeline({
    defaults: { duration: 1, ease: "power4.inOut" },
    scrollTrigger: {
      trigger: ".about-text",
      start: "top 80%",
    },
  });

  tl.from(
    ".about-text p",
    {
      y: "60px",
      opacity: 0,
      stagger: 0.1,
    },
    "-=.8"
  ).from(
    ".tech-list li",
    {
      y: "60px",
      opacity: 0,
      stagger: 0.2,
    },
    "-=.8"
  );

  let tl2 = animate.timeline({
    defaults: { duration: 2, ease: "power4.inOut" },
    scrollTrigger: {
      trigger: ".about-image",
      start: "top 80%",
    },
  });

  tl2.from(".about-image", {
    y: "60px",
    opacity: 0,
    stagger: 0.2,
  });
});
</script>

<style>
.about-text p {
  clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);
}
</style>
