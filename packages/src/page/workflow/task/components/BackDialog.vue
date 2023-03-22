<template>
  <n-modal v-model:show="showModal" preset="card" class="w-500" title="退回">
    <n-spin :show="loading">
      <div class="p-20">
        <sh-form ref="formRef" :model="formValue">
          <sh-form-item label="退回节点" path="processNodeId" rule="required">
            <n-radio-group v-model:value="formValue.processNodeId" name="radiogroup">
              <n-space>
                <n-radio v-for="song in songs" :key="song.processNodeId" :value="song.processNodeId">
                  {{ song.processNodeText }}
                </n-radio>
              </n-space>
            </n-radio-group>
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
import { bbxProcessRunTask } from '@/apis/workflow'
import { useModal } from '@/hooks'
import { ref } from 'vue'

const emit = defineEmits(['close'])
const songs = ref([])

// modal hook
const { formRef, loading, showModal, formValue, reseForm } = useModal({
  processTaskId: '',
  processRemark: '',
  processNodeId: '',
})

const validate = () => {
  formRef.value.validate(onSubmit)
}

const onSubmit = async () => {
  loading.value = true
  const { code, msg } = await bbxProcessRunTask.back(formValue.value)
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
const findBackNodes = async (row) => {
  loading.value = true
  const { code, data, msg } = await bbxProcessRunTask.findBackNodes({
    processTaskId: row.id,
  })

  loading.value = false
  if (code === 0) {
    songs.value = data || []
  } else {
    $message.error(msg)
  }
}

const open = (row) => {
  showModal.value = true
  reseForm()
  findBackNodes(row)
  formValue.value.processTaskId = row.id
}

defineExpose({
  open,
})
</script>

<style lang="scss" scoped></style>
