<template>
  <n-modal v-model:show="showModal" preset="card" class="w-600" title="流程处理">
    <n-spin :show="loading">
      <div class="h-400 overflow-auto">
        {{ type }}
        <n-tabs type="line" animated>
          <n-tab-pane name="1" tab="流程审批">
            <div>流程表单</div>
          </n-tab-pane>
          <n-tab-pane name="2" tab="流程图"> Hey Jude </n-tab-pane>
          <n-tab-pane name="3" tab="流转记录"> Hey Jude </n-tab-pane>
        </n-tabs>
      </div>
      <div class="text-right mt-20 flex justify-end">
        <n-button @click="showModal = false"> 关闭 </n-button>
        <n-button v-if="type === 'add'" type="primary" @click="onSubmit"> 发起 </n-button>
        <div v-else class="ml-10">
          <n-button @click="recall"> 撤回 </n-button>
          <n-button @click="onBack"> 退回 </n-button>
          <n-button @click="onChange"> 转审 </n-button>
          <n-button type="primary" @click="onAgree"> 同意 </n-button>
        </div>
      </div>
    </n-spin>
  </n-modal>
  <!-- 发起 -->
  <HandleDialog ref="handleRef" @close="close"></HandleDialog>
  <!-- 同意 -->
  <AgreeDialog ref="agreeRef" @close="close"></AgreeDialog>
  <!-- 转审 -->
  <ChangeDialog ref="changeRef" @close="close"></ChangeDialog>
  <!-- 退回 -->
  <BackDialog ref="backRef" @close="close"></BackDialog>
</template>

<script setup>
import HandleDialog from './HandleDialog/index.vue'
import AgreeDialog from './AgreeDialog.vue'
import ChangeDialog from './ChangeDialog.vue'
import BackDialog from './BackDialog.vue'
import { useModal } from '@/hooks'
import { ref } from 'vue'
import { bbxProcessRunTask } from '@/apis/workflow'

const emit = defineEmits(['loadList'])

const handleRef = ref(null)
const agreeRef = ref(null)
const changeRef = ref(null)
const backRef = ref(null)
const businessData = ref({})

// modal hook
const { type, loading, showModal } = useModal()

const open = (handle, row) => {
  showModal.value = true
  type.value = handle
  businessData.value = row
}
const close = () => {
  showModal.value = false
  emit('loadList')
}
const onSubmit = () => {
  handleRef.value.open(businessData.value)
}
const onAgree = () => {
  agreeRef.value.open(businessData.value)
}
const onChange = () => {
  changeRef.value.open(businessData.value)
}
const onBack = () => {
  backRef.value.open(businessData.value)
}

const recall = () => {
  $delete(
    bbxProcessRunTask.recall,
    { processBusinessDataId: businessData.value.businessDataId },
    close,
    '是否确定撤回流程？'
  )
}

defineExpose({
  open,
})
</script>

<style lang="scss" scoped></style>
