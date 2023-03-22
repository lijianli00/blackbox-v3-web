import { watch, onUnmounted } from 'vue'
import { useThemeStore } from '../modules/theme'
import { addDarkClass, removeDarkClass } from '../modules/theme/helpers'

/** 订阅theme store */
export default function subscribeThemeStore() {
  const themeStore = useThemeStore()
  // 监听暗黑模式
  const stopDarkMode = watch(
    () => themeStore.darkMode,
    (newValue) => {
      if (newValue) {
        addDarkClass()
      } else {
        removeDarkClass()
      }
    },
    {
      immediate: true,
    }
  )

  onUnmounted(() => {
    stopDarkMode()
  })
}
