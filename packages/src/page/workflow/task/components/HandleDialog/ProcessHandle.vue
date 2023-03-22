<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div>
    <sh-form ref="formRef" :model="form">
      <div v-for="item in process.processNodeNexts" :key="item.id" class="w-full">
        <sh-form-item label="处理人" :path="`processDealUsers.${item.id}`" :rule="rules">
          <!-- <n-input v-model:value="form.processDealUsers[item.id]" placeholder="请输入" /> -->
          <TreeSelectPersonArr
            v-model:value="form.processDealUsers[item.id]"
            :multiple="!!item.isCheckbox"
          ></TreeSelectPersonArr>
        </sh-form-item>
      </div>
      <sh-form-item v-if="remark" label="审批意见" path="processRemark">
        <n-input v-model:value="form.processRemark" type="textarea" placeholder="请输入" />
      </sh-form-item>
    </sh-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TreeSelectPersonArr from './TreeSelectPersonArr.vue'
import { useForm } from '@/hooks'

defineProps({
  form: {
    type: Object,
    default: () => {
      return {}
    },
  },
  process: {
    type: Object,
    default: () => {
      return {}
    },
  },
  remark: {
    type: Boolean,
    default: false,
  },
})

const { formRef, formValue, reseForm, validate } = useForm()

const rules = [
  {
    required: true,
    validator(rule, value) {
      if (value && value.length) {
        return true
      } else {
        return new Error('必填项不能为空')
      }
    },
    trigger: ['input', 'blur'],
  },
]
defineExpose({
  validate,
})
</script>

<style lang="scss" scoped></style>
