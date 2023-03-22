<template>
  <div class="h-full dark:hover:bg-[#333] hover:bg-[#f6f6f6] cursor-pointer">
    <n-tooltip placement="bottom">
      <template #trigger>
        <div class="w-full h-full flex-center text-20" @click="appStore.reloadPage">
          <component :is="refresh" class="w-20 h-20"></component>
        </div>
      </template>
      重新加载
    </n-tooltip>
  </div>
</template>

<script setup>
import { useAppStore } from '@/store'
import refresh from '@/assets/svg/refresh.svg'

const appStore = useAppStore()
</script>

<style lang="scss" scoped></style>
