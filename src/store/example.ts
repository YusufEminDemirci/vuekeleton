import { acceptHMRUpdate, defineStore, storeToRefs } from 'pinia'
import { type Ref, ref } from 'vue'

export const useExampleStore: any = defineStore('example-store', () => {
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
  import.meta.hot.accept(acceptHMRUpdate(useExampleStore, import.meta.hot))
}
