<template>
  <div class="title text-#515E78 text-16 font-600 flex justify-between border-b border-#D5DCEC pb-5">
    <div class="flex items-center">
      <div class="w-6 h-16 bg-#3370FF mr-10"></div>
      <div>{{ title }}</div>
    </div>
    <div class="mr-20">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '节点属性',
  },
})
</script>

<style lang="scss" scoped></style>
