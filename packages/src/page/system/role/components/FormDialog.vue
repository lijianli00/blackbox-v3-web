<template>
  <n-modal v-model:show="modal.show" preset="card" class="w-600" :title="`${typeObj[modal.type]}角色`">
    <div class="p-20">
      <n-spin :show="modal.loading">
        <sh-form ref="formRef" :model="formValue">
          <sh-form-item label="角色名称" path="roleName" rule="required">
            <n-input v-model:value="formValue.roleName" placeholder="请输入" />
          </sh-form-item>
          <sh-form-item label="说明" path="description">
            <n-input v-model:value="formValue.description" type="textarea" placeholder="请输入" />
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
import { orgRolePerson } from '@/apis/org'

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
    roleName: '',
    description: '',
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
  const { code, msg } = await orgRolePerson[modal.type](formValue)
  modal.loading = false
  if (code === 0) {
    $message.success('成功')
    modal.show = false
    emit('loadList')
  } else {
    $message.error(msg)
  }
}

const open = (type, row) => {
  modal.show = true
  modal.type = type
  if (type === 'update') {
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
