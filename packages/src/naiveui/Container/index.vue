<template>
  <div
    class="dark:bg-[#18181c] dark:text-white dark:text-opacity-82 transition-all duration-300 ease-in-out"
    :class="inverted ? 'bg-[#001428] text-white dark' : 'bg-white'"
  >
    <n-config-provider :theme="inverted ? darkTheme : undefined" class="h-full">
      <slot></slot>
    </n-config-provider>
  </div>
</template>

<script setup name="ShContainer">
import { darkTheme } from 'naive-ui'
defineProps({
  inverted: Boolean,
})
</script>

<style scoped></style>
