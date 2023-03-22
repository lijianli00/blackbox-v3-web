<template>
  <div>
    <n-divider title-placement="center">主题模式 </n-divider>
    <SettingMenu label="深色主题">
      <n-switch :value="themeStore.darkMode" @update:value="themeStore.setDarkTheme">
        <template #checked>
          <component :is="themeLight"></component>
        </template>
        <template #unchecked>
          <component :is="themeDark"></component>
        </template>
      </n-switch>
    </SettingMenu>
  </div>
</template>

<script setup>
import { useThemeStore } from '@/store'
import SettingMenu from './SettingMenu.vue'
import themeLight from '@/assets/svg/theme-light.svg'
import themeDark from '@/assets/svg/theme-dark.svg'

const themeStore = useThemeStore()
</script>

<style lang="scss" scoped>
:deep(.n-switch__rail) {
  background-color: #000e1c !important;
}
</style>
