<template>
  <n-modal v-model:show="modal.show" preset="card" class="w-550" title="修改密码">
    <div class="p-20">
      <n-spin :show="modal.loading">
        <sh-form ref="formRef" :model="formValue" label-width="90">
          <sh-form-item label="旧密码" path="oldPassword" rule="required||password">
            <n-input
              v-model:value="formValue.oldPassword"
              placeholder="请输入"
              type="password"
              show-password-on="mousedown"
            />
          </sh-form-item>
          <sh-form-item label="新密码" path="password" rule="required||password">
            <n-input
              v-model:value="formValue.password"
              placeholder="请输入"
              type="password"
              show-password-on="mousedown"
            />
          </sh-form-item>
          <sh-form-item
            label="确认新密码"
            path="enterPassword"
            :rule="{ validator: enterPasswordValidator, trigger: 'blur' }"
          >
            <n-input
              v-model:value="formValue.enterPassword"
              placeholder="请输入"
              type="password"
              show-password-on="mousedown"
            />
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
import { swUser } from '../../../apis/sw'

const formRef = ref(null)
const modal = reactive({
  show: false,
  loading: false,
})

const formValue = reactive({
  oldPassword: '',
  password: '',
  enterPassword: '',
})

const validateForm = () => {
  formRef.value?.validate((errors) => {
    if (errors) return
    onSubmit()
  })
}
const enterPasswordValidator = (rule, value) => {
  if (value !== formValue.password) {
    return new Error('密码输入不一致')
  }
  return true
}
const onSubmit = async () => {
  modal.loading = true
  const { code, message } = await swUser.updatePassword(formValue)
  modal.loading = false
  if (code === 0) {
    $message.success('成功')
    modal.show = false
  } else {
    $message.error(message)
  }
}

const open = (row) => {
  modal.show = true
}

defineExpose({
  open,
})
</script>

<style lang="scss" scoped></style>
