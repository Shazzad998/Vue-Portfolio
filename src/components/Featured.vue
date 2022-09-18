<template>
  <SectionWrapper>
    <div class="relative">
      <SectionHeader :label="'Latest Work'" class="work-title" />
      <div
        class="relative grid grid-cols-1 gap-y-6 pt-20 sm:gap-y-8 sm:px-6 md:gap-y-12 xl:gap-y-28 xl:px-20"
      >
        <router-link
          v-for="(project, index) in featured_projects"
          :to="{ name: 'project.detail', params: { id: project.id } }"
          class="relative flex flex-col"
          :class="[
            index++ % 2 == 0
              ? 'card-left sm:flex-row ' + 'project-card-' + index
              : 'card-right sm:flex-row-reverse ' + 'project-card-' + index,
          ]"
        >
          <div class="flex items-center sm:w-3/5">
            <div class="relative">
              <img
                :src="project.thumb"
                alt=""
                class="aspect-[4/3] rounded object-cover"
              />
              <span
                class="card-item absolute -top-2 z-10 text-3xl font-bold sm:-top-4 sm:text-4xl lg:-top-6 lg:text-5xl"
                :class="[
                  index % 2 == 0
                    ? '-right-1 sm:-right-4 '
                    : '-left-1 sm:-left-4',
                ]"
                >{{ index > 9 ? index : "0" + index }}
              </span>
            </div>
          </div>
          <div
            class="z-10 -mt-8 px-3 sm:mt-0 sm:flex sm:w-2/5 sm:items-center sm:px-0"
          >
            <div
              class="rounded-sm bg-[#232323] px-5 py-3 sm:bg-transparent sm:p-0"
            >
              <div
                class="card-item text-lg font-medium sm:text-3xl lg:text-4xl"
                :class="[
                  index % 2 == 0 ? 'sm:-mr-24 sm:pl-8 xl:pl-10' : 'sm:ml-4 ',
                ]"
              >
                <span
                  class="card-item hidden text-lg font-medium uppercase tracking-[0.25rem] text-zinc-500 xl:block"
                  >{{ project.type }}</span
                >
                {{ project.title }}
              </div>
              <div
                class="card-item mt-2 hidden rounded bg-[#232323] px-8 py-6 text-sm font-light text-zinc-300 shadow-2xl sm:block lg:text-base xl:mt-3 xl:px-10 xl:py-8 xl:text-lg"
                :class="[index % 2 == 0 ? '-mr-24' : '-ml-24']"
              >
                <!-- <span
                  class="card-item hidden text-lg font-medium uppercase tracking-[0.25rem] text-zinc-500 xl:block"
                  >Project Description</span
                > -->
                {{ project.description }}
              </div>
              <div
                class="card-item mt-2 xl:mt-3"
                :class="[index % 2 == 0 ? 'sm:pl-8 xl:pl-10' : 'sm:ml-4']"
              >
                <!-- <span
                  class="card-item hidden text-lg font-medium uppercase tracking-[0.25rem] text-zinc-500 xl:block"
                  >Technology used</span
                > -->
                <div
                  class="project-tech flex flex-wrap gap-x-4 text-sm font-medium text-zinc-500 lg:gap-x-6 lg:text-lg xl:text-xl xl:text-zinc-200"
                >
                  <span v-for="tech in project.techs">{{ tech }}</span>
                </div>
              </div>
            </div>
          </div>
        </router-link>

        <div class="button flex justify-center md:justify-end">
          <router-link :to="{ name: 'portfolio' }">
            <PrimaryButton>All works</PrimaryButton>
          </router-link>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup>
import SectionHeader from "./SectionHeader.vue";
import PrimaryButton from "./PrimaryButton.vue";
import useProjects from "@/composable/projects";
import SectionWrapper from "./SectionWrapper.vue";
import useAnimation from "@/composable/animation";
import { onMounted } from "vue";

const { featured_projects } = useProjects();

const { animate } = useAnimation();

onMounted(() => {
  animate.from(".work-title", {
    scrollTrigger: { trigger: ".work-title", start: "top 80%" },
    opacity: 0,
    x: "-60px",
  });
  animate.from(".button", {
    scrollTrigger: { trigger: ".button", start: "top 80%" },
    opacity: 0,
    y: "60px",
  });

  for (let i = 1; i <= featured_projects.length; i++) {
    let tl = animate.timeline({
      defaults: { duration: 1, ease: "power4.inOut" },
      scrollTrigger: { trigger: ".project-card-" + i, start: "top 80%" },
    });

    if (i % 2 == 0) {
      tl.from(
        ".project-card-" + i + " img",
        {
          opacity: 0,
          y: "60px",
        },
        "-=.8"
      ).from(
        ".project-card-" + i + " .card-item",
        {
          opacity: 0,
          x: "-60px",
          stagger: 0.2,
        },
        "-=.8"
      );
    } else {
      tl.from(".project-card-" + i + " img", {
        opacity: 0,
        y: "60px",
      }).from(
        ".project-card-" + i + " .card-item",
        {
          opacity: 0,
          x: "60px",
          stagger: 0.1,
        },
        "-=.8"
      );
    }
  }
});
</script>
