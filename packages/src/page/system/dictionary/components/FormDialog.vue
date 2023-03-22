<template>
  <n-modal v-model:show="modal.show" preset="card" class="w-600" :title="`${typeObj[modal.type]}字典类型`">
    <div class="pt-20">
      <n-spin :show="modal.loading">
        <sh-form ref="formRef" :model="formValue" label-width="90px">
          <sh-form-item label="名称" path="groupName" rule="required">
            <n-input v-model:value="formValue.groupName" placeholder="请输入" />
          </sh-form-item>
          <sh-form-item label="编码" path="dictionaryCode" rule="required">
            <n-input
              v-model:value="formValue.dictionaryCode"
              placeholder="请输入"
              :disabled="modal.type === 'update'"
            />
          </sh-form-item>
          <sh-form-item label="企业自定义" path="enableCustom" :span="8" label-placement="left">
            <n-switch v-model:value="formValue.enableCustom" :checked-value="1" :unchecked-value="0" />
          </sh-form-item>
          <sh-form-item label="层级" path="grade" rule="required" :span="12" label-placement="left">
            <n-input-number v-model:value="formValue.grade" :max="3" :min="1" />
          </sh-form-item>
          <sh-form-item label="描述" path="remark">
            <n-input v-model:value="formValue.remark" type="textarea" placeholder="请输入" />
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
import { swDataDictionaryGroup } from '@/apis/sw'

const emit = defineEmits(['loadList'])

const typeObj = {
  add: '新增',
  update: '修改',
}

const formRef = ref(null)
const modal = reactive({
  show: false,
  loading: false,
  type: 'add',
})

// 初始化数据
const initFormVlue = () => {
  return {
    dictionaryCode: '',
    groupName: '',
    grade: 1,
    enableCustom: 0,
    remark: '',
  }
}
const formValue = reactive(initFormVlue())
// 重置数据
const reset = () => {
  Object.assign(formValue, initFormVlue())
}

const validateForm = () => {
  formRef.value?.validate((errors) => {
    if (errors) return
    onSubmit()
  })
}
const onSubmit = async () => {
  modal.loading = true
  const { code, msg } = await swDataDictionaryGroup[modal.type](formValue)
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
  if (row && row.id) {
    modal.type = 'update'
    Object.assign(formValue, row)
  } else {
    modal.type = 'add'
    reset()
  }
}

defineExpose({
  open,
})
</script>

<style lang="scss" scoped></style>
