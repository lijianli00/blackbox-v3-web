<template>
  <n-drawer
    :show="appStore.settingDrawerVisible"
    display-directive="show"
    :width="330"
    @mask-click="appStore.setSettingDrawer(false)"
    @after-leave="themeStore.cacheThemeSettings()"
  >
    <n-drawer-content title="主题配置" :native-scrollbar="false">
      <DarkMode></DarkMode>
      <LayoutMode></LayoutMode>
      <ThemeColorSelect></ThemeColorSelect>
      <PageFunc></PageFunc>
      <PageView></PageView>
      <ThemeConfig></ThemeConfig>
    </n-drawer-content>
  </n-drawer>
</template>

<script setup name="NlSettingDrawer">
import { useAppStore, useThemeStore } from '@/store'
import { ThemeColorSelect, DarkMode, PageView, LayoutMode, PageFunc, ThemeConfig } from './components'

const appStore = useAppStore()
const themeStore = useThemeStore()
</script>

<style lang="scss" scoped></style>
