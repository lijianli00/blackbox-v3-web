<template>
  <n-modal v-model:show="showModal" preset="card" class="w-600" :title="`${typeTxt}系统业务`">
    <div class="p-20">
      <n-spin :show="loading">
        <sh-form ref="formRef" :model="formValue" label-width="100">
          <sh-form-item label="业务名称" path="businessName" rule="required">
            <n-input v-model:value="formValue.businessName" placeholder="请输入" />
          </sh-form-item>
        </sh-form>
        <div class="text-right mt-20">
          <n-button @click="showModal = false"> 关闭 </n-button>
          <n-button type="primary" @click="validate(onSubmit)"> 确定 </n-button>
        </div>
      </n-spin>
    </div>
  </n-modal>
</template>

<script setup>
import { systemService } from '@/apis/workflow'
import { useModal } from '@/hooks'

const emit = defineEmits(['loadList'])

// modal hook
const { formRef, loading, showModal, type, typeTxt, formValue, reseForm, validate } = useModal({
  businessName: '',
})

const onSubmit = async () => {
  loading.value = true
  const { code, msg } = await systemService[type.value](formValue.value)
  loading.value = false
  if (code === 0) {
    $message.success('成功')
    showModal.value = false
    emit('loadList')
  } else {
    $message.error(msg)
  }
}

const open = (row) => {
  showModal.value = true
  if (row && row.id) {
    type.value = 'update'
    reseForm(row)
  } else {
    type.value = 'add'
    reseForm()
  }
}

defineExpose({
  open,
})
</script>

<style lang="scss" scoped></style>
