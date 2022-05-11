<template>
  <SectionWrapper>
    <div class="relative md:px-4 lg:px-8">
      <SectionHeader :label="'Project overview'" />

      <div class="px-4 pt-12">
        <div
          class="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 xl:gap-x-10 2xl:gap-x-14"
        >
          <div
            class="relative flex items-center"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <ProjectGallery :images="current_project[0].images" />
          </div>

          <div
            class="mt-6 md:mt-0"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <div class="sm:mt-8 md:mt-0">
              <span
                class="font-medium uppercase tracking-widest text-zinc-500 2xl:text-2xl"
                >{{ current_project[0].type }}</span
              >
              <h1
                class="text-2xl font-bold uppercase tracking-widest sm:text-4xl md:text-2xl xl:text-3xl 2xl:text-5xl"
              >
                {{ current_project[0].title }}
              </h1>

              <p
                class="mt-6 text-justify tracking-wide text-zinc-400 sm:text-lg md:mt-4 md:text-sm xl:text-lg 2xl:text-xl"
              >
                {{ current_project[0].description }}
              </p>
            </div>

            <div class="mt-8 sm:mt-14 md:mt-6 xl:mt-8 2xl:mt-12">
              <h1
                class="text-xl font-bold uppercase tracking-widest sm:text-2xl md:text-lg xl:text-xl 2xl:text-2xl"
              >
                what is done
              </h1>
              <div class="mt-6 space-y-2 tracking-wide text-zinc-400 md:mt-2">
                <div
                  class="flex items-center gap-x-2"
                  v-for="(step, i) in current_project[0].steps"
                  :key="i"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="text-sm sm:text-base md:text-sm xl:text-lg">{{
                    step
                  }}</span>
                </div>
              </div>
            </div>

            <div
              class="mt-8 grid grid-cols-2 gap-2 gap-y-8 sm:mt-14 md:mt-6 md:gap-x-6 md:gap-y-4 xl:mt-8 xl:gap-y-8 2xl:mt-12 2xl:gap-y-12"
            >
              <div>
                <h2
                  class="text-xl font-bold uppercase tracking-widest sm:text-2xl md:text-lg xl:text-xl 2xl:text-2xl"
                >
                  Client Name
                </h2>
                <p class="mt-3 text-zinc-400 md:mt-1">
                  {{ current_project[0].client }}
                </p>
              </div>

              <div class="">
                <h2
                  class="text-xl font-bold uppercase tracking-widest sm:text-2xl md:text-lg xl:text-xl 2xl:text-2xl"
                >
                  Task
                </h2>
                <p class="mt-3 text-zinc-400 md:mt-1">
                  {{ current_project[0].task }}
                </p>
              </div>

              <div class="flex items-center">
                <h2
                  class="text-lg uppercase tracking-widest text-zinc-300 sm:text-xl"
                >
                  {{ current_project[0].completed_at }}
                </h2>
              </div>
              <div class="">
                <a
                  :href="current_project[0].live_link"
                  class="border border-zinc-600 bg-[#1f1f1f] px-8 py-2 uppercase duration-300 ease-out hover:bg-zinc-200 hover:text-zinc-800 sm:text-xl md:text-base"
                >
                  VISIT SITE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup>
import useProjects from "@/composable/projects";
import { useRoute } from "vue-router";
import ProjectGallery from "../components/ProjectGallery.vue";
import SectionHeader from "@/components/SectionHeader.vue";
import SectionWrapper from "@/components/SectionWrapper.vue";

const route = useRoute();
const { current_project, getProject } = useProjects();

getProject(route.params.id);
</script>
