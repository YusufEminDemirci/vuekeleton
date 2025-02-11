import { acceptHMRUpdate, defineStore } from 'pinia'
import { type Ref, ref } from 'vue'

export const exampleStore = defineStore('example-store', () => {
  const count: Ref<number> = ref(0)

  function increment(): void {
    count.value++
  }
  function decrement(): void {
    count.value--
  }
  return {
    count,
    increment,
    decrement,
  }
})

/* HMR Support - (https://pinia.vuejs.org/cookbook/hot-module-replacement.html#HMR-Hot-Module-Replacement-) */
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(exampleStore, import.meta.hot))
}
