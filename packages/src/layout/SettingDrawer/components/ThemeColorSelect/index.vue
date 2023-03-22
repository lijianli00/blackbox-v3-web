<template>
  <div>
    <n-divider title-placement="center">系统主题</n-divider>
    <n-grid :cols="8" :x-gap="8" :y-gap="12">
      <n-grid-item v-for="color in themeColorList" :key="color" class="flex-x-center">
        <ColorCheckbox
          :color="color"
          :checked="color === themeStore.themeColor"
          @click="themeStore.setThemeColor(color)"
        />
      </n-grid-item>
    </n-grid>
    <n-space :vertical="true" class="pt-12px">
      <n-color-picker :value="themeStore.themeColor" :show-alpha="false" @update-value="themeStore.setThemeColor" />
    </n-space>
  </div>
</template>

<script setup>
import { themeColorList } from '@/store/modules/theme/theme.js'
import { useThemeStore } from '@/store'
import ColorCheckbox from './components/ColorCheckbox.vue'

const themeStore = useThemeStore()
</script>

<style lang="scss" scoped></style>
