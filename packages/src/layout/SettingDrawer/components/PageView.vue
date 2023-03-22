<template>
  <div>
    <n-divider title-placement="center">界面展示 </n-divider>
    <n-space vertical size="large">
      <setting-menu label="面包屑">
        <n-switch :value="themeStore.header.crumb.visible" @update:value="themeStore.setHeaderCrumbVisible" />
      </setting-menu>
      <setting-menu label="面包屑图标">
        <n-switch :value="themeStore.header.crumb.showIcon" @update:value="themeStore.setHeaderCrumbIconVisible" />
      </setting-menu>
      <setting-menu label="菜单图标">
        <n-switch :value="themeStore.menu.showIcon" @update:value="themeStore.setMenuIconVisible" />
      </setting-menu>
      <setting-menu label="多页签">
        <n-switch :value="themeStore.tab.visible" @update:value="themeStore.setTabVisible" />
      </setting-menu>
      <!-- <setting-menu label="多页签风格">
        <n-select
          class="w-120px"
          size="small"
          :value="themeStore.tab.mode"
          :options="themeStore.tab.modeList"
          @update:value="themeStore.setTabMode"
        />
      </setting-menu> -->
    </n-space>
  </div>
</template>

<script setup>
import SettingMenu from './SettingMenu.vue'
import { useThemeStore } from '@/store'

const themeStore = useThemeStore()
</script>

<style lang="scss" scoped></style>
