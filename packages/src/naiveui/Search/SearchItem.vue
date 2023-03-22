<template>
  <div class="flex leading-40">
    <div class="whitespace-nowrap text-gray-500" :style="{ width: labelWidth }">{{ label }}</div>
    <div class="flex-1 text-#515E78">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: '',
  },
  labelWidth: {
    type: String,
    default: '200px',
  },
})
</script>

<style lang="scss" scoped></style>
