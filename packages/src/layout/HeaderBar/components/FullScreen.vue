<template>
  <div class="cursor-pointer w-40px h-full" v-bind="$attrs">
    <n-popover>
      <template #trigger>
        <div class="w-full h-full flex-center" @click="toggle">
          <component v-bind="$attrs" :is="isFullscreen ? fullscreenExit : fullscreen"></component>
        </div>
      </template>
      全屏
    </n-popover>
  </div>
</template>

<script setup>
import { useFullscreen } from '@vueuse/core'
import fullscreen from '@/assets/svg/fullscreen.svg'
import fullscreenExit from '@/assets/svg/fullscreen-exit.svg'

const { isFullscreen, toggle } = useFullscreen()
</script>

<style lang="scss" scoped></style>
