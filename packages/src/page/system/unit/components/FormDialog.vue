<template>
  <n-modal v-model:show="modal.show" preset="card" class="w-800" :title="`${typeObj[modal.type]}企业`">
    <div class="mt-20">
      <n-spin :show="modal.loading">
        <sh-form ref="formRef" :model="formValue" label-width="110px">
          <sh-form-item label="企业名称" path="unitName" rule="required" span="12">
            <n-input v-model:value="formValue.unitName" placeholder="请输入" />
          </sh-form-item>
          <sh-form-item label="企业信用代码" path="unitCode" rule="required" span="12">
            <n-input v-model:value="formValue.unitCode" placeholder="请输入" />
          </sh-form-item>
          <div v-if="modal.type === 'add'">
            <sh-form-item label="管理员姓名" path="adminName" rule="required" span="12">
              <n-input v-model:value="formValue.adminName" placeholder="请输入" />
            </sh-form-item>
            <sh-form-item label="	管理员手机号" path="adminPhone" rule="required||phone" span="12">
              <n-input v-model:value="formValue.adminPhone" placeholder="请输入" />
            </sh-form-item>
            <sh-form-item label="管理员账号" path="adminLoginName" rule="required||account" span="12">
              <n-input v-model:value="formValue.adminLoginName" placeholder="必须包含数字、大小写字母,且8-32位" />
            </sh-form-item>
            <sh-form-item label="	管理员密码" path="adminPassword" rule="required||password" span="12">
              <n-input
                v-model:value="formValue.adminPassword"
                type="password"
                show-password-on="mousedown"
                placeholder="包含数字、大小写字母三种,且8-30位"
              />
            </sh-form-item>
          </div>
          <sh-form-item label="详细地址" path="unitAddress">
            <n-input v-model:value="formValue.unitAddress" placeholder="请输入" />
          </sh-form-item>
          <sh-form-item label="状态" label-placement="left">
            <n-switch v-model:value="formValue.status" :checked-value="1" :unchecked-value="0" />
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
import { orgUnit } from '@/apis/org'

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
    unitName: '',
    unitCode: '',
    adminName: '',
    adminLoginName: '',
    adminPhone: '',
    adminPassword: '',
    unitAddress: '',
    status: 1,
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
  const { code, msg } = await orgUnit[modal.type](formValue)
  modal.loading = false
  if (code === 0) {
    $message.success('成功')
    modal.show = false
    emit('loadList')
  } else {
    $message.error(msg)
  }
}

const getUnit = async (id) => {
  modal.loading = true
  const { code, msg, data } = await orgUnit.get({ id })
  modal.loading = false
  if (code === 0) {
    Object.assign(formValue, data)
  } else {
    $message.error(msg)
  }
}

const open = (row) => {
  modal.show = true
  if (row && row.id) {
    modal.type = 'update'
    getUnit(row.id)
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
