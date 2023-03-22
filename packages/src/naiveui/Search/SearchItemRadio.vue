<template>
  <div class="flex flex-wrap item_box">
    <n-button
      v-for="item in option"
      :key="item.value"
      :type="item.value === value ? 'primary' : 'default'"
      quaternary
      class="btn"
      @click="emit('update:value', item.value)"
    >
      {{ item.label }}
    </n-button>
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
  value: {
    type: [String, Number],
    default: '',
  },
})
const emit = defineEmits(['update:value'])
</script>

<style lang="scss" scoped>
.btn:first-child {
  margin-left: 10px;
}
</style>
