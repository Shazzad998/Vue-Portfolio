<template>
  <!-- <section class="grid grid-cols-1 gap-y-6 px-4 sm:gap-y-8">
    <router-link to="/" class="relative flex flex-col sm:flex-row">
      <div class="flex items-center sm:w-4/6">
        <div class="relative sm:ml-4">
          <img
            src="../images/work1.png"
            alt=""
            class="aspect-video rounded object-cover"
          />
          <span
            class="absolute -top-2 -left-1 text-5xl font-bold sm:-top-4 sm:-left-4 sm:text-6xl"
            >01</span
          >
        </div>
      </div>
      <div
        class="z-10 -mt-8 px-3 sm:mt-0 sm:ml-4 sm:flex sm:w-2/6 sm:items-center sm:px-0"
      >
        <div class="rounded-sm bg-[#232323] px-5 py-3 sm:bg-transparent sm:p-0">
          <div class="text-lg font-medium sm:text-3xl">Management Software</div>
          <div
            class="mt-2 -ml-24 hidden rounded bg-[#232323] px-8 py-6 text-sm font-light text-zinc-300 sm:block"
          >
            Build this project from scratch. Started from sketching then
            gradually build the whole project with vue js in the front end and
            laravel with MySql database in the backend.
          </div>
          <div
            class="mt-2 flex flex-wrap gap-x-2 text-sm font-medium text-zinc-500"
          >
            <span>Figma</span>
            <span>Photoshop</span>
            <span>VueJs</span>
          </div>
        </div>
      </div>
    </router-link>

    <router-link to="/" class="relative flex flex-col sm:flex-row-reverse">
      <div class="flex items-center sm:w-4/6">
        <div class="relative sm:mr-4">
          <img
            src="../images/work3.png"
            alt=""
            class="aspect-video rounded object-cover"
          />
          <span
            class="absolute -top-2 -right-1 text-5xl font-bold sm:-top-4 sm:-right-4 sm:text-6xl"
            >02</span
          >
        </div>
      </div>
      <div
        class="z-10 -mt-8 px-3 sm:mt-0 sm:flex sm:w-2/6 sm:items-center sm:px-0"
      >
        <div class="rounded-sm bg-[#232323] px-5 py-3 sm:bg-transparent sm:p-0">
          <div class="text-lg font-medium sm:px-8 sm:text-3xl">Portfolio</div>
          <div
            class="mt-2 -mr-24 hidden rounded bg-[#232323] px-8 py-6 text-sm font-light text-zinc-300 sm:block"
          >
            Build this project from scratch. Started from sketching then
            gradually build the whole project with vue js in the front end and
            laravel with MySql database in the backend.
          </div>
          <div
            class="mt-2 flex flex-wrap gap-x-2 text-sm font-medium text-zinc-500 sm:px-8"
          >
            <span>Figma</span>
            <span>Photoshop</span>
            <span>VueJs</span>
          </div>
        </div>
      </div>
    </router-link>
  </section> -->

  <SectionWrapper>
    <div class="relative">
      <SectionHeader :label="'Latest Work'" />
      <div
        class="relative grid grid-cols-1 gap-y-6 pt-20 sm:gap-y-8 sm:px-6 md:gap-y-12 xl:gap-y-28"
      >
        <router-link
          v-for="(project, index) in featured_projects"
          :to="{ name: 'project.detail', params: { id: project.id } }"
          class="relative flex flex-col"
          :class="[index++ % 2 == 0 ? 'sm:flex-row' : 'sm:flex-row-reverse']"
        >
          <div class="flex items-center sm:w-4/6">
            <div class="relative">
              <img
                :src="project.thumb"
                alt=""
                class="aspect-video rounded object-cover"
              />
              <span
                class="absolute -top-2 text-5xl font-extrabold sm:-top-4 sm:text-6xl lg:-top-8 lg:text-7xl"
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
            class="z-10 -mt-8 px-3 sm:mt-0 sm:flex sm:w-2/6 sm:items-center sm:px-0"
          >
            <div
              class="rounded-sm bg-[#232323] px-5 py-3 sm:bg-transparent sm:p-0"
            >
              <div
                class="text-lg font-medium sm:text-3xl lg:text-4xl xl:text-5xl"
                :class="[
                  index % 2 == 0 ? 'sm:-mr-24 sm:pl-8 xl:pl-10' : 'sm:ml-4 ',
                ]"
              >
                <span
                  class="hidden text-lg font-medium uppercase tracking-[0.25rem] text-zinc-500 xl:block"
                  >{{ project.type }}</span
                >
                {{ project.title }}
              </div>
              <div
                class="mt-2 hidden rounded bg-[#232323] px-8 py-6 text-sm font-light text-zinc-300 sm:block lg:text-base xl:mt-6 xl:px-10 xl:py-8 xl:text-lg"
                :class="[index % 2 == 0 ? '-mr-24' : '-ml-24']"
              >
                <span
                  class="hidden text-lg font-medium uppercase tracking-[0.25rem] text-zinc-500 xl:block"
                  >Project Description</span
                >
                {{ project.description }}
              </div>
              <div
                class="mt-2 xl:mt-6"
                :class="[index % 2 == 0 ? 'sm:pl-8 xl:pl-10' : 'sm:ml-4']"
              >
                <span
                  class="hidden text-lg font-medium uppercase tracking-[0.25rem] text-zinc-500 xl:block"
                  >Technology used</span
                >
                <div
                  class="flex flex-wrap gap-x-4 text-sm font-medium text-zinc-500 lg:gap-x-6 lg:text-lg xl:text-xl xl:text-zinc-200"
                >
                  <span v-for="tech in project.techs">{{ tech }}</span>
                </div>
              </div>
            </div>
          </div>
        </router-link>

        <div class="flex justify-center md:justify-end">
          <PrimaryButton :label="'All works'" :link="{ name: 'portfolio' }" />
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

const { featured_projects } = useProjects();
</script>
