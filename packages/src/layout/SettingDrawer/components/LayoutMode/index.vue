<template>
  <n-divider title-placement="center">布局模式</n-divider>
  <n-space justify="center">
    <layout-checkbox
      v-for="item in themeStore.layout.modeList"
      :key="item.value"
      :mode="item.value"
      :label="item.label"
      :checked="item.value === themeStore.layout.mode"
      @click="setLayoutMode(item)"
    />
  </n-space>
</template>

<script setup>
import { useThemeStore } from '@/store'
import LayoutCheckbox from './components/LayoutCheckbox.vue'

const themeStore = useThemeStore()

const setLayoutMode = (item) => {
  themeStore.setLayoutMode(item.value)
}
</script>

<style scoped></style>
