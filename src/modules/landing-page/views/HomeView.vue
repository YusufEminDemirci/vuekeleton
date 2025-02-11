<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import FeatureCard from '../layouts/FeatureCard.vue'

const mobileMenuOpen = ref(false)
const toggleMobileMenu = () => (mobileMenuOpen.value = !mobileMenuOpen.value)
const closeMobileMenu = () => (mobileMenuOpen.value = false)

const navItems = ['Features', 'Get Started', 'GitHub']

const features = [
  {
    title: 'Vue 3 & Vite',
    icon: 'logos:vue',
    description: 'Lightning-fast development with hot module replacement',
  },
  {
    title: 'TypeScript',
    icon: 'logos:typescript-icon',
    description: 'Write scalable, type-safe code with ease',
  },
  { title: 'Pinia', icon: 'logos:pinia', description: 'Intuitive, type-safe state management' },
  {
    title: 'Tailwind CSS',
    icon: 'logos:tailwindcss-icon',
    description: 'Rapidly build custom designs without leaving your HTML',
  },
  {
    title: 'ESLint & Prettier',
    icon: 'logos:eslint',
    description: 'Maintain consistent, high-quality code',
  },
  {
    title: 'Vitest',
    icon: 'logos:vitest',
    description: 'Fast, efficient testing for your Vue components',
  },
]

const socialLinks = [
  { name: 'GitHub', icon: 'mdi:github', url: 'https://github.com/YusufEminDemirci/vuekeleton' },
]

const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white font-sans"
  >
    <!-- Header -->
    <header class="container mx-auto px-4 py-6">
      <div class="flex flex-wrap justify-between items-center">
        <div class="text-2xl font-bold">🦴 Vuekeleton</div>
        <nav class="hidden md:block">
          <ul class="flex items-center gap-8">
            <li v-for="item in navItems" :key="item">
              <a
                :href="`#${item.toLowerCase()}`"
                class="text-white hover:text-yellow-300 transition-colors duration-200 text-base font-medium"
              >
                {{ item }}
              </a>
            </li>
          </ul>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden text-white hover:text-yellow-300 transition-colors"
        >
          <Icon :icon="mobileMenuOpen ? 'mdi:close' : 'mdi:menu'" class="text-2xl" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-show="mobileMenuOpen" class="md:hidden mt-4">
        <nav>
          <ul class="flex flex-col items-center gap-4">
            <li v-for="item in navItems" :key="item">
              <a
                :href="`#${item.toLowerCase()}`"
                class="text-white hover:text-yellow-300 transition-colors duration-200 text-lg font-medium"
                @click="closeMobileMenu"
              >
                {{ item }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="container mx-auto px-4 py-20 text-center">
      <h1 class="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 animate-fade-in-up">
        Build Faster with Vuekeleton
      </h1>
      <p class="text-lg md:text-xl lg:text-2xl mb-12 animate-fade-in-up animation-delay-200">
        The ultimate Vue 3 starter template for modern web development
      </p>
      <a
        href="#get-started"
        class="inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-colors animate-fade-in-up animation-delay-400"
      >
        Get Started
      </a>
    </section>

    <!-- Features Section -->
    <section id="features" class="bg-white text-gray-800 py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Supercharged Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard v-for="feature in features" :key="feature.title" :feature="feature" />
        </div>
      </div>
    </section>

    <!-- Get Started Section -->
    <section id="get-started" class="py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Get Started in Seconds</h2>
        <div class="bg-gray-800 p-4 rounded-lg shadow-lg max-w-3xl mx-auto overflow-x-auto">
          <pre class="text-green-400 whitespace-pre-wrap break-words">
            <code>
# Clone the repository
git clone https://github.com/your-username/vuekeleton.git

# Enter the project directory
cd vuekeleton

# Install dependencies
pnpm install

# Start the development server
pnpm dev
            </code>
          </pre>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 py-10">
      <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div class="text-lg mb-4 md:mb-0">
          © {{ currentYear }} Vuekeleton. All rights reserved.
        </div>
        <div class="flex space-x-6">
          <a
            v-for="link in socialLinks"
            :key="link.name"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-2xl hover:text-yellow-400 transition-colors"
          >
            <Icon :icon="link.icon" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="postcss">
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

/* Ensure the body doesn't allow horizontal scrolling */
body {
  overflow-x: hidden;
}

.nav-item {
  @apply text-white hover:text-yellow-300 transition-colors duration-200;
}

a {
  white-space: nowrap;
}
</style>
