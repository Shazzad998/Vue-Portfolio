<template>
  <div>
    <SectionWrapper>
      <div class="relative">
        <SectionHeader :label="'portfolio'" />
        <div class="pt-12">
          <div>
            <ul class="gap flex text-zinc-500">
              <li>
                <button
                  type="button"
                  class="filter__button border-b px-10 py-4 text-2xl text-zinc-200"
                  data-filter="all"
                >
                  All
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="filter__button px-10 py-4 text-2xl"
                  data-filter=".Design"
                >
                  Design
                </button>
              </li>

              <li>
                <button
                  type="button"
                  class="filter__button px-10 py-4 text-2xl"
                  data-filter=".Front-End"
                >
                  Front-End
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="filter__button px-10 py-4 text-2xl"
                  data-filter=".Back-End"
                >
                  Back-End
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="filter__button px-10 py-4 text-2xl"
                  data-filter=".Full-Stack"
                >
                  Full-Stack
                </button>
              </li>
            </ul>
          </div>

          <div
            class="projects__container mt-10 grid grid-cols-1 gap-4 md:grid-cols-3"
          >
            <router-link
              v-for="project in projects"
              :key="project.id"
              :to="{ name: 'project.detail', params: { id: project.id } }"
              class="project__card group relative aspect-[4/3] overflow-hidden rounded-md"
              :class="project.type"
            >
              <div class="absolute inset-0 z-10">
                <img
                  class="group-hover:blur-xs h-full w-full object-cover transition-all duration-200 group-hover:scale-110 group-hover:opacity-80"
                  :src="project.thumb"
                  :alt="project.title"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 right-0 z-30 opacity-0 transition-all duration-200 group-hover:opacity-100"
              >
                <h1 class="py-6 px-6 text-xl font-medium text-gray-50">
                  {{ project.title }}
                </h1>
              </div>

              <div
                class="absolute -bottom-2 -left-4 -right-4 z-20 h-24 bg-zinc-900/50 opacity-0 blur-xl transition-all duration-200 group-hover:opacity-50"
              ></div>
            </router-link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  </div>
</template>

<script setup>
import SectionWrapper from "@/components/SectionWrapper.vue";
import SectionHeader from "@/components/SectionHeader.vue";
import mixitup from "mixitup";
import { onMounted } from "vue";
import useProjects from "@/composable/projects";

const { projects } = useProjects();

let mixerProjects;
onMounted(() => {
  let containerEl = document.querySelector(".projects__container");

  if (containerEl) {
    mixerProjects = mixitup(containerEl, {
      selectors: {
        target: ".project__card",
      },
      animation: {
        duration: 300,
      },
    });
  }

  const filterButtons = document.querySelectorAll(".filter__button");

  function activeButton() {
    filterButtons.forEach((l) =>
      l.classList.remove("border-b", "text-zinc-200")
    );
    this.classList.add("border-b", "text-zinc-200");
  }

  filterButtons.forEach((l) => l.addEventListener("click", activeButton));
});
</script>
