<template>
  <n-modal v-model:show="modal.show" preset="card" class="w-600" title="修改字典">
    <div class="p-20">
      <n-spin :show="modal.loading">
        <sh-form ref="formRef" :model="formValue">
          <sh-form-item label="字典值" path="dictionaryName" rule="required">
            <n-input v-model:value="formValue.dictionaryName" placeholder="请输入" />
          </sh-form-item>
          <sh-form-item label="字典键" path="dictionaryKey" rule="required">
            <n-input v-model:value="formValue.dictionaryKey" disabled placeholder="请输入" />
          </sh-form-item>
        </sh-form>
        <div class="text-right mt-20">
          <n-button @click="modal.show = false"> 关闭 </n-button>
          <n-button type="primary" @click="validateForm"> 确定 </n-button>
        </div>
      </n-spin>
    </div>
  </n-modal>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { swDataDictionary } from '@/apis/sw'

const emit = defineEmits(['loadList'])

const formRef = ref(null)
const modal = reactive({
  show: false,
  loading: false,
  type: 'add',
})

// 初始化数据
const initFormVlue = (parentId) => {
  return {
    id: '',
    dictionaryName: '',
    dictionaryKey: '',
    sortNum: '',
    status: 1,
  }
}
const formValue = reactive(initFormVlue())

const validateForm = () => {
  formRef.value?.validate((errors) => {
    if (errors) return
    onSubmit()
  })
}
// 提交
const onSubmit = async () => {
  modal.loading = true
  const { code, msg } = await swDataDictionary.update(formValue)
  modal.loading = false
  if (code === 0) {
    $message.success('成功')
    modal.show = false
    emit('loadList')
  } else {
    $message.error(msg)
  }
}

const open = (row) => {
  modal.show = true
  Object.assign(formValue, row)
}

defineExpose({
  open,
})
</script>

<style lang="scss" scoped></style>
