<template>
  <n-dropdown v-if="options && options.length" trigger="click" :options="options" @select="handleSelect">
    <n-button text tag="a" class="mr-10">
      <component :is="dot" class="w-14 h-14"></component>
    </n-button>
  </n-dropdown>
</template>

<script setup>
import { computed } from 'vue'
import dot from '@/assets/svg/dot.svg'
const props = defineProps({
  treeItem: {
    type: Object,
    default: () => {
      return {}
    },
  },
  suffix: {
    type: Function,
    default: undefined,
  },
})
const options = computed(() => {
  // 资源code判断
  return props.suffix
    ? props.suffix(props.treeItem).filter((item) => {
        return !item.code || $isCode(item.code)
      })
    : []
})

const handleSelect = (value) => {
  const index = options.value.findIndex((item) => item.key === value)
  options.value[index].onClick(props.treeItem)
}
</script>

<style lang="scss" scoped></style>
