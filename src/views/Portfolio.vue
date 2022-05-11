<template>
  <SectionWrapper v-if="fullStack.length">
    <div class="relative md:px-4 lg:px-8">
      <SectionHeader :label="'full-stack'" />

      <div class="relative px-4 pt-12">
        <CarouselVue :projects="fullStack" />
      </div>
    </div>
  </SectionWrapper>

  <SectionWrapper v-if="design.length">
    <div class="relative md:px-4 lg:px-8">
      <SectionHeader :label="'Design'" />

      <div class="relative px-4 pt-12">
        <CarouselVue :projects="design" />
      </div>
    </div>
  </SectionWrapper>
  <SectionWrapper v-if="frontEnd.length">
    <div class="relative md:px-4 lg:px-8">
      <SectionHeader :label="'front-end'" />

      <div class="relative px-4 pt-12">
        <CarouselVue :projects="frontEnd" />
      </div>
    </div>
  </SectionWrapper>
  <SectionWrapper v-if="backEnd.length">
    <div class="relative md:px-4 lg:px-8">
      <SectionHeader :label="'back-end'" />

      <div class="relative px-4 pt-12">
        <CarouselVue :projects="backEnd" />
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup>
import CarouselVue from "@/components/Carousel.vue";

import useProjects from "@/composable/projects.js";
import SectionHeader from "@/components/SectionHeader.vue";
import SectionWrapper from "@/components/SectionWrapper.vue";

const { projects } = useProjects();

const fullStack = projects.value.filter(
  (project) => project.type == "Full-Stack"
);

const design = projects.value.filter((project) => project.type == "Design");

const frontEnd = projects.value.filter(
  (project) => project.type == "Front-End"
);

const backEnd = projects.value.filter((project) => project.type == "Back-End");
</script>
