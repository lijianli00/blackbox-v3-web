<template>
  <div class="ml-20">
    <n-checkbox-group v-bind="$attrs">
      <n-space :size="[20, 0]">
        <n-checkbox v-for="item in option" :key="item.value" :value="item.value" :label="item.label" />
      </n-space>
    </n-checkbox-group>
  </div>
</template>

<script setup>
defineProps({
  option: {
    type: Array,
    default: () => {
      return []
    },
  },
})
</script>

<style lang="scss" scoped></style>
