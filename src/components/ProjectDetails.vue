<template>
  <div class="min-h-screen bg-[#1e1e1e] font-saira text-zinc-200">
    <div
      class="container mx-auto px-4 py-32 sm:px-8 md:px-16 lg:px-20 xl:px-24 2xl:px-32"
    >
      <div class="mb-6">
        <h3
          class="text-lg font-light tracking-widest text-zinc-400 sm:text-2xl"
        >
          FULL-STACK
        </h3>
        <h1 class="mb-2 text-3xl font-semibold tracking-wider sm:text-5xl">
          TASK MANAGER
        </h1>

        <p class="text-zinc-400 sm:text-lg">
          A typical todo list with much more functionalities and work history.
          Built with vue js and tailwind css in the front end and laravel in the
          back end
        </p>
      </div>

      <div class="mb-6 grid grid-cols-2 gap-2 sm:mb-8">
        <div class="col-span-2 aspect-[4/3]">
          <div class="h-full w-full bg-zinc-300"></div>
        </div>
        <div class="aspect-[4/3]">
          <div class="h-full w-full bg-zinc-300"></div>
        </div>
        <div class="aspect-[4/3]">
          <div class="h-full w-full bg-zinc-300"></div>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-6 sm:gap-8">
        <div>
          <h2 class="mb-2 text-xl font-semibold sm:text-3xl">WHAT IS DONE</h2>
          <ul class="ml-6 list-disc text-zinc-300 sm:text-xl">
            <li>Simple Ui Design with Figma</li>
            <li>Front-End Development with vue js and Tailwind css</li>
            <li>Back-End Api Development with Laravel 9</li>
          </ul>
        </div>

        <div>
          <h2 class="mb-2 text-xl font-semibold sm:text-3xl">
            TECHNOLOGY USED
          </h2>
          <ul
            class="flex flex-wrap gap-x-3 gap-y-1 font-semibold text-zinc-400 sm:text-xl"
          >
            <li>Figma</li>
            <li>Photoshop</li>
            <li>Vue js</li>
            <li>Laravel</li>
          </ul>
        </div>

        <div class="mt-7 flex items-center justify-between">
          <h3 class="font-medium tracking-widest text-zinc-300 sm:text-xl">
            27 September, 2022
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
</template>

<script setup></script>
