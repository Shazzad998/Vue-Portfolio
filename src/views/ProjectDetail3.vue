<script setup>
import SectionWrapper from "@/components/SectionWrapper.vue";
import useProjects from "@/composable/projects";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import PrimaryButton from "@/components/PrimaryButton.vue";

const { current_project, getProject } = useProjects();
const route = useRoute();

const props = defineProps({
  id: String,
});

onMounted(() => {
  getProject(route.params.id);

  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
</script>

<template>
  <div class="relative text-zinc-200">
    <div class="pt-32 md:pt-44">
      <div class="mb-6 grid grid-cols-1 sm:mb-8 sm:grid-cols-2">
        <div class="aspect-video" v-if="current_project[0]">
          <h3
            class="text-lg font-light tracking-widest text-zinc-400 sm:hidden sm:text-2xl"
          >
            {{ current_project[0]?.type }}
          </h3>
          <h1
            class="mb-2 text-3xl font-semibold tracking-wider sm:hidden sm:text-5xl"
          >
            {{ current_project[0]?.title }}
          </h1>
          <div
            v-for="(image, index) in current_project[0].images"
            class="mb-10"
          >
            <img :src="image" alt="" class="h-auto w-full object-cover" />
          </div>
        </div>

        <div class="px-1 sm:px-4 lg:px-8">
          <div class="sticky top-28">
            <div class="mb-6 sm:mb-10 md:mb-14">
              <!-- subtitle -->
              <h3
                class="hidden text-lg font-light tracking-widest text-zinc-400 sm:block sm:text-xl md:text-2xl"
              >
                {{ current_project[0]?.type }}
              </h3>

              <!-- title -->
              <h1
                class="mb-2 hidden text-3xl font-semibold tracking-wider sm:block sm:text-4xl md:text-5xl"
              >
                {{ current_project[0]?.title }}
              </h1>

              <h2
                class="mb-2 text-xl font-semibold uppercase sm:hidden sm:text-3xl"
              >
                description
              </h2>

              <!-- description -->
              <p
                class="leading-10 text-zinc-400 sm:text-lg md:text-2xl md:leading-10"
              >
                {{ current_project[0]?.description }}
              </p>
            </div>

            <div class="grid grid-cols-1 gap-6 sm:gap-8">
              <div class="sm:mb-4">
                <h2
                  class="mb-2 text-xl font-semibold sm:text-2xl md:mb-4 md:text-3xl"
                >
                  WHAT IS DONE
                </h2>
                <ul class="ml-6 list-disc text-zinc-300 sm:text-xl">
                  <li
                    v-if="current_project[0]"
                    v-for="(step, index) in current_project[0].steps"
                    :key="index"
                    class="mb-3"
                  >
                    {{ step }}
                  </li>
                </ul>
              </div>

              <div>
                <h2
                  class="mb-2 text-xl font-semibold sm:text-2xl md:mb-4 md:text-3xl"
                >
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

              <div class="mt-7">
                <h3
                  class="mb-4 font-medium tracking-widest text-zinc-300 sm:text-xl"
                >
                  {{ current_project[0]?.completed_at }}
                </h3>
                <!-- <button>
                  <PrimaryButton>Visit Site</PrimaryButton>
                </button> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
