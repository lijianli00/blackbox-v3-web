<script setup>
defineProps({
  width: {
    type: String,
    default: undefined,
  },
  modelValue: {
    type: [String, Number, Array],
    default: undefined,
  },
  options: {
    type: Array,
    default: undefined,
  },
  api: {
    type: [String, Function],
    default: undefined,
  },
  method: {
    validator: (val) => /^(get|post)$/i.test(val),
    default: 'post',
  },
  params: {
    type: Object,
    default: () => ({}),
  },
  nSelectProps: {
    type: Object,
    default: undefined,
  },
})

defineEmits({
  'update:modelValue': () => true,
})
</script>

<template>
  <div class="ml-20" :style="{ width }">
    <nl-select
      v-bind="nSelectProps"
      :model-value="modelValue"
      :params="params"
      :api="api"
      :options="options"
      :method="method"
      @change="$emit('update:modelValue', $event)"
    />
  </div>
</template>
