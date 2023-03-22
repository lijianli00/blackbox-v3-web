<template>
  <svg width="1em" height="1em" aria-hidden="true">
    <use :xlink:href="iconName" :fill="color" />
  </svg>
</template>

<script setup name="ShIcon">
import { computed } from 'vue'
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '',
  },
})

const iconName = computed(() => `#icon-${props.name}`)
</script>

<style scoped></style>
