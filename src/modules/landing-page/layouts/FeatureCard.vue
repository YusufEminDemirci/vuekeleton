<template>
  <div
    class="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 transition-transform duration-300"
  >
    <Icon :icon="feature.icon" class="text-5xl text-indigo-500 mb-4" />
    <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
    <p class="text-gray-600">{{ feature.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Feature {
  title: string
  icon: string
  description: string
}

defineProps<{
  feature: Feature
}>()
</script>
