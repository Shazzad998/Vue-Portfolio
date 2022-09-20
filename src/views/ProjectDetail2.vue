<script setup>
import SectionWrapper from "@/components/SectionWrapper.vue";
import useProjects from "@/composable/projects";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const { current_project, getProject } = useProjects();
const route = useRoute();

const props = defineProps({
  id: String,
});

onMounted(() => {
  getProject(route.params.id);
});
</script>

<template>
  <SectionWrapper>
    <div class="relative min-h-screen font-saira text-zinc-200">
      <div class="">
        <div class="mb-6 grid grid-cols-2 gap-2 sm:mb-8">
          <div
            class="aspect-video"
            v-if="current_project[0]"
            v-for="(image, index) in current_project[0].images.slice(0, 1)"
            :class="[index == 0 ? 'col-span-2' : 'col-span-1']"
          >
            <img :src="image" alt="" class="h-full w-full object-cover" />
          </div>
        </div>
        <div class="mb-6">
          <h3
            class="text-lg font-light tracking-widest text-zinc-400 sm:text-2xl"
          >
            {{ current_project[0]?.type }}
          </h3>
          <h1 class="mb-2 text-3xl font-semibold tracking-wider sm:text-5xl">
            {{ current_project[0]?.title }}
          </h1>

          <p class="text-zinc-400 sm:text-lg">
            {{ current_project[0]?.description }}
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6 sm:gap-8">
          <div>
            <h2 class="mb-2 text-xl font-semibold sm:text-3xl">WHAT IS DONE</h2>
            <ul class="ml-6 list-disc text-zinc-300 sm:text-xl">
              <li
                v-if="current_project[0]"
                v-for="(step, index) in current_project[0].steps"
                :key="index"
              >
                {{ step }}
              </li>
            </ul>
          </div>

          <div>
            <h2 class="mb-2 text-xl font-semibold sm:text-3xl">
              TECHNOLOGY USED
            </h2>
            <ul
              class="flex flex-wrap gap-x-3 gap-y-1 font-semibold text-zinc-400 sm:text-xl"
            >
              <li
                v-if="current_project[0]"
                v-for="(tech, index) in current_project[0].techs"
                :key="index"
              >
                {{ tech }}
              </li>
            </ul>
          </div>

          <div class="mt-7 flex items-center justify-between">
            <h3 class="font-medium tracking-widest text-zinc-300 sm:text-xl">
              {{ current_project[0]?.completed_at }}
            </h3>
            <button
              class="border border-zinc-500 px-8 py-2 font-semibold uppercase transition-colors duration-200 hover:bg-zinc-100 hover:text-zinc-900"
            >
              Visit Site
            </button>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>
