<template>
  <!-- VISIT AND CONTACT -->

  <SectionWrapper>
    <div class="relative pb-20 lg:pb-32">
      <SectionHeader :label="'Visit & Contact'" class="contact-title" />

      <div class="relative grid grid-cols-1 gap-y-16 pt-16 md:grid-cols-2">
        <!-- PERSONAL INFO -->
        <div class="uppercase" data-aos="fade-right" data-aos-duration="1000">
          <div class="location flex flex-col gap-y-4 sm:text-lg md:text-xl">
            <div class="flex items-center gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"
                  clip-rule="evenodd"
                />
              </svg>
              <p class="tracking-widest">dormotola, jashore sadar, jashore</p>
            </div>

            <div class="flex items-center gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                />
              </svg>
              <p class="tracking-widest">+880-1992327887</p>
            </div>

            <div class="flex items-center gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <p class="tracking-widest">shazzadulislam998@gmail.com</p>
            </div>

            <div class="flex items-center gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                  clip-rule="evenodd"
                />
              </svg>
              <p class="tracking-widest">freshstart.com</p>
            </div>
          </div>
          <div class="mt-8 md:mr-8 md:mt-8 lg:mr-20"></div>
        </div>

        <!-- CONTACT FORM  -->
        <div class="md:pl-6" data-aos="fade-left" data-aos-duration="1000">
          <form
            action="#"
            class="contact-form flex flex-col gap-y-8 md:gap-y-12"
          >
            <!-- NAME -->
            <div
              class="flex items-center gap-x-4 border-b border-zinc-600 pb-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>

              <input
                type="text"
                class="w-full appearance-none border-none bg-transparent uppercase placeholder:text-[0.6rem] placeholder:tracking-widest focus:outline-none focus:ring-0 sm:placeholder:text-sm"
                placeholder="TYPE YOUR NAME"
              />
            </div>

            <!-- EMAIL -->
            <div
              class="flex items-center gap-x-4 border-b border-zinc-600 pb-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                  clip-rule="evenodd"
                />
              </svg>

              <input
                type="email"
                class="w-full appearance-none border-none bg-transparent uppercase placeholder:text-[0.6rem] placeholder:tracking-widest focus:outline-none focus:ring-0 sm:placeholder:text-sm"
                placeholder="TYPE YOUR EMAIL"
              />
            </div>

            <!-- SUBJECT -->
            <div
              class="flex items-center gap-x-4 border-b border-zinc-600 pb-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                />
              </svg>

              <input
                type="text"
                class="w-full appearance-none border-none bg-transparent uppercase placeholder:text-[0.6rem] placeholder:tracking-widest focus:outline-none focus:ring-0 sm:placeholder:text-sm"
                placeholder="TYPE YOUR SUBJECT (FOR ATTENTION)"
              />
            </div>

            <!-- MESSAGE -->
            <div class="flex gap-x-4 border-b border-zinc-600 pb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                  clip-rule="evenodd"
                />
              </svg>
              <textarea
                class="w-full appearance-none border-none bg-transparent uppercase placeholder:text-[0.6rem] placeholder:tracking-widest focus:outline-none focus:ring-0 sm:placeholder:text-sm"
                placeholder="TYPE YOUR MESSAGE"
                rows="4"
              ></textarea>
            </div>

            <!-- BUTTON  -->
            <div class="mt-10">
              <SecondaryButton :label="'send'" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup>
import SectionHeader from "./SectionHeader.vue";
import SecondaryButton from "./SecondaryButton.vue";
import SectionWrapper from "./SectionWrapper.vue";
import useAnimation from "@/composable/animation";
import { onMounted } from "vue";

const { animate } = useAnimation();

onMounted(() => {
  animate.from(".contact-title", {
    scrollTrigger: { trigger: ".contact-title", start: "top 80%" },
    opacity: 0,
    x: "-60px",
  });

  let tl = animate.timeline({
    defaults: { duration: 1, ease: "power4.inOut" },
    scrollTrigger: { trigger: ".location", start: "top 80%" },
  });

  tl.from(".location .flex", {
    opacity: 0,
    y: "60px",
    stagger: 0.2,
  });

  let tl2 = animate.timeline({
    defaults: { duration: 1, ease: "power4.inOut" },
    scrollTrigger: { trigger: ".contact-form", start: "top 80%" },
  });

  tl2.from(".contact-form div", {
    opacity: 0,
    y: "60px",
    stagger: 0.2,
  });
});
</script>
