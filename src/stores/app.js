import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  // 状态
  const theme = ref('light')

  return {
    // 状态
    theme
  }
})

