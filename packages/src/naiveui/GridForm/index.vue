<template>
  <n-form
    v-bind="$attrs"
    ref="formRef"
    :require-mark-placement="requireMarkPlacement"
    :label-placement="labelPlacement"
  >
    <n-grid :x-gap="gutter" :cols="cols" :responsive="responsive">
      <slot />
    </n-grid>
  </n-form>
</template>

<script setup name="ShGridForm">
import { ref } from 'vue'

defineProps({
  gutter: {
    type: Number,
    default: 10,
  },
  responsive: {
    type: String,
    // default: 'screen',
    default: 'self',
  },
  cols: {
    type: String,
    // default: '2 s:2 m:2 l:3  xl:4 2xl:5',
    default: '2 845:3 1100:4',
  },
  requireMarkPlacement: {
    type: String,
    default: 'left',
  },
  labelPlacement: {
    type: String,
    default: 'left',
  },
})

const formRef = ref(null)

const validate = (callback) => {
  return formRef.value.validate(callback)
}
const restoreValidation = () => {
  formRef.value?.restoreValidation()
}
defineExpose({
  validate,
  formRef,
  restoreValidation,
})
</script>

<style lang="scss" scoped></style>
