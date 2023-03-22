<template>
  <n-modal v-model:show="showModal" preset="card" class="w-500" title="流程处理">
    <n-spin :show="loading">
      <div class="p-20">
        <ProcessHandle ref="formRef" :form="formValue" :process="process"></ProcessHandle>
      </div>
      <div class="text-right mt-20">
        <n-button @click="showModal = false"> 关闭 </n-button>
        <n-button type="primary" @click="validate"> 提交 </n-button>
      </div>
    </n-spin>
  </n-modal>
</template>

<script setup>
import ProcessHandle from './ProcessHandle.vue'
import { bbxProcessRunTask } from '@/apis/workflow'
import { useModal } from '@/hooks'
import { ref } from 'vue'
import { uuid } from '@/utils'

const emit = defineEmits(['close'])

const process = ref({})

// modal hook
const { formRef, loading, showModal, formValue } = useModal({
  processVersionId: '',
  processBusinessDataId: '',
  processDealUsers: {},
})

const validate = () => {
  formRef.value.validate(onSubmit)
}

const onSubmit = async () => {
  loading.value = true
  const { code, msg } = await bbxProcessRunTask.start(formValue.value)
  loading.value = false
  if (code === 0) {
    $message.success('成功')
    showModal.value = false
    emit('close')
  } else {
    $message.error(msg)
  }
}

// 流程管理-第一步节点
const findNextNodes = async (row) => {
  loading.value = true
  const processBusinessDataId = uuid()
  const { code, data, msg } = await bbxProcessRunTask.findNextNodes({
    processVersionId: row.versionId,
    processBusinessId: '',
    processBusinessDataId,
  })

  loading.value = false
  if (code === 0) {
    process.value = data || {}
    formValue.value.processVersionId = row.versionId
    formValue.value.processBusinessDataId = processBusinessDataId
    data.processNodeNexts.forEach((item) => {
      formValue.value.processDealUsers[item.id] = []
    })
  } else {
    $message.error(msg)
  }
}

const open = (row) => {
  showModal.value = true
  findNextNodes(row)
}

defineExpose({
  open,
})
</script>

<style lang="scss" scoped></style>
