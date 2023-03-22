<template>
  <div class="cursor-pointer w-40px h-full">
    <n-popover>
      <template #trigger>
        <div class="w-full h-full flex-center" @click="changeDark">
          <!-- <sh-icon :name="themeStore.darkMode ? 'theme-dark' : 'theme-light'" /> -->
          <component :is="themeStore.darkMode ? themeDark : themeLight"></component>
        </div>
      </template>
      主题
    </n-popover>
  </div>
</template>

<script setup>
import { useThemeStore } from '@/store'
import themeLight from '@/assets/svg/theme-light.svg'
import themeDark from '@/assets/svg/theme-dark.svg'

const themeStore = useThemeStore()

const changeDark = () => {
  // 设置夜间模式
  themeStore.setDarkTheme()
  // 缓存主题
  themeStore.cacheThemeSettings()
}
</script>

<style lang="scss" scoped></style>
