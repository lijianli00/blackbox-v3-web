<template>
  <n-modal v-model:show="modal.show" preset="card" class="w-600" :title="`${typeObj[modal.type]}成员`">
    <div class="p-20">
      <n-spin :show="modal.loading">
        <sh-form ref="formRef" :model="formValue" label-width="80">
          <sh-form-item label="姓名" path="name" rule="required">
            <n-input v-model:value="formValue.name" placeholder="请输入" />
          </sh-form-item>
          <sh-form-item label="手机号" path="phone" rule="required||phone">
            <n-input v-model:value="formValue.phone" placeholder="请输入" />
          </sh-form-item>
          <sh-form-item label="账号" path="loginName" rule="required||account">
            <n-input
              v-model:value="formValue.loginName"
              :disabled="modal.type === 'update'"
              placeholder="必须包含数字、大小写字母,且8-32位"
            />
          </sh-form-item>
          <sh-form-item v-if="modal.type === 'add'" label="	密码" path="password" rule="required||password">
            <n-input
              v-model:value="formValue.password"
              type="password"
              show-password-on="mousedown"
              placeholder="包含数字、大小写字母三种,且8-30位"
            />
          </sh-form-item>
          <sh-form-item label="部门" path="deptId" rule="required">
            <sh-tree-select-dept
              v-model:value="formValue.deptId"
              @update:value="handleUpdateValue"
            ></sh-tree-select-dept>
          </sh-form-item>
          <sh-form-item label="性别" path="gender">
            <n-radio-group v-model:value="formValue.gender">
              <n-space>
                <n-radio :value="1"> 男 </n-radio>
                <n-radio :value="0"> 女 </n-radio>
              </n-space>
            </n-radio-group>
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
import { orgPerson } from '@/apis/org'

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
    name: '',
    phone: '',
    loginName: '',
    password: '',
    deptId: '1033876568584880a30714aef1899db6',
    duty: '',
    entryTime: '',
    gender: 1,
    roleIds: [],
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
  const { code, msg } =
    modal.type === 'add' ? await orgPerson.addUserAndPerson(formValue) : await orgPerson.update(formValue)
  modal.loading = false
  if (code === 0) {
    $message.success('成功')
    modal.show = false
    emit('loadList')
  } else {
    $message.error(msg)
  }
}

const getPerson = async (id) => {
  modal.loading = true
  const { code, msg, data } = await orgPerson.get({ id })
  modal.loading = false
  if (code === 0) {
    Object.assign(formValue, data)
  } else {
    $message.error(msg)
  }
}

const handleUpdateValue = (value, option) => {
  if (option.type === 'dept') {
    formValue.deptId = value
  }
}

const open = (row) => {
  modal.show = true
  if (row && row.id) {
    modal.type = 'update'
    getPerson(row.id)
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
