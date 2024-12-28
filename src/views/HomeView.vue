<script setup lang="ts"></script>

<template>
  <div class="size-full grid grid-cols-2">
    <div class="flex flex-col items-center justify-center gap-y-16">
      <img
        src="@/assets/images/logo.jpeg"
        alt="Vuekeleton Logo"
        class="size-80 pointer-events-none select-none"
      />
      <span class="font-medium text-white text-5xl">
        Welcome to <span class="font-medium text-5xl text-amber-500"> Vuekeleton </span>
      </span>
    </div>
    <div class="flex flex-col items-center justify-center gap-y-4">
      <span class="text-white text-2xl"> Vue 3 + Vite </span>
      <span class="text-white text-2xl"> Language: Typescript </span>
      <span class="text-white text-2xl"> Ecosystem: Pinia + Vue Router </span>
      <span class="text-white text-2xl"> Style: Tailwind </span>
      <span class="text-white text-2xl"> Language: I18n </span>
      <span class="text-white text-2xl"> Code Quality: Eslint + Prettier + Oxlint </span>
      <span class="text-white text-2xl"> Test: Vitest </span>
    </div>
  </div>
</template>
