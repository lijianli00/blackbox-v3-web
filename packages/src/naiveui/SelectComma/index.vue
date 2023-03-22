<template>
  <n-select v-model:value="multipleSelectValue" multiple @update:value="update" />
</template>

<script setup name="ShSelectComma">
import { ref, watch } from 'vue'

const props = defineProps({
  value: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:value'])

const multipleSelectValue = ref([])

watch(
  () => props.value,
  (val) => {
    if (val) {
      multipleSelectValue.value = val.split(',')
    }
  },
  { immediate: true, deep: true }
)

const update = () => {
  emit('update:value', multipleSelectValue.value.join(','))
}
</script>

<style lang="scss" scoped></style>
