<template>
  <div class="cursor-pointer w-40px h-full">
    <n-popover>
      <template #trigger>
        <div class="w-full h-full flex-center" @click="appStore.setSettingDrawer(true)">
          <component :is="setting" class="w-20 h-20"></component>
        </div>
      </template>
      设置
    </n-popover>
  </div>
</template>

<script setup>
import { useAppStore } from '@/store'
import setting from '@/assets/svg/setting.svg'

const appStore = useAppStore()
</script>

<style lang="scss" scoped></style>
