<template>
  <n-modal v-model:show="showModal" preset="card" class="w-500" title="转审">
    <n-spin :show="loading">
      <div class="p-20">
        <sh-form ref="formRef" :model="formValue">
          <sh-form-item label="处理人" :path="processDealUser" :rule="rules">
            <TreeSelectPersonArr v-model:value="formValue.processDealUser"></TreeSelectPersonArr>
          </sh-form-item>
          <sh-form-item label="审批意见" path="processRemark">
            <n-input v-model:value="formValue.processRemark" type="textarea" placeholder="请输入" />
          </sh-form-item>
        </sh-form>
      </div>
      <div class="text-right mt-20">
        <n-button @click="showModal = false"> 关闭 </n-button>
        <n-button type="primary" @click="validate"> 提交 </n-button>
      </div>
    </n-spin>
  </n-modal>
</template>

<script setup>
import TreeSelectPersonArr from './HandleDialog/TreeSelectPersonArr.vue'
import { bbxProcessRunTask } from '@/apis/workflow'
import { useModal } from '@/hooks'

const emit = defineEmits(['close'])

// modal hook
const { formRef, loading, showModal, formValue, reseForm } = useModal({
  processTaskId: '',
  processRemark: '',
  processDealUser: [],
})

const validate = () => {
  formRef.value.validate(onSubmit)
}

const onSubmit = async () => {
  loading.value = true
  const { code, msg } = await bbxProcessRunTask.change(formValue.value)
  loading.value = false
  if (code === 0) {
    $message.success('成功')
    showModal.value = false
    emit('close')
  } else {
    $message.error(msg)
  }
}

const open = (row) => {
  showModal.value = true
  reseForm()
  formValue.value.processTaskId = row.id
}

defineExpose({
  open,
})
</script>

<style lang="scss" scoped></style>
