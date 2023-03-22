<template>
  <n-divider title-placement="center">主题配置</n-divider>
  <n-space vertical>
    <n-button type="warning" :block="true" @click="handleResetConfig">重置当前配置</n-button>
  </n-space>
</template>

<script setup>
import { useThemeStore, useAppStore } from '@/store'

const themeStore = useThemeStore()
const appStore = useAppStore()

function handleResetConfig() {
  themeStore.resetThemeStore()
  appStore.setSettingDrawer(false)
  $message.success('已重置配置！')
}
</script>

<style scoped></style>
