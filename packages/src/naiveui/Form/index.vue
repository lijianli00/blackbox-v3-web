<template>
  <n-form
    v-bind="$attrs"
    ref="formRef"
    :require-mark-placement="requireMarkPlacement"
    :label-placement="labelPlacement"
    :label-width="labelWidth"
  >
    <n-row :gutter="gutter">
      <slot />
    </n-row>
  </n-form>
</template>

<script setup name="ShForm">
import { ref } from 'vue'

defineProps({
  gutter: {
    type: Number,
    default: 30,
  },
  requireMarkPlacement: {
    type: String,
    default: 'left',
  },
  labelPlacement: {
    type: String,
    default: 'left',
  },
  labelWidth: {
    type: String,
    default: '80px',
  },
})

const formRef = ref(null)

const validate = (callback) => {
  return formRef.value.validate(callback)
}
defineExpose({
  validate,
  formRef,
})
</script>

<style lang="scss" scoped></style>
