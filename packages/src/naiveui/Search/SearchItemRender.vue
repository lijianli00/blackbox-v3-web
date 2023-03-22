<template>
  <itemRender></itemRender>
</template>

<script setup>
import { watch } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    default: () => {
      return {}
    },
  },
})
// eslint-disable-next-line vue/no-setup-props-destructure
let itemRender = () => {}

watch(
  () => props.item.render,
  (val) => {
    itemRender = val
  },
  { immediate: true, deep: true }
)
</script>

<style lang="scss" scoped></style>
