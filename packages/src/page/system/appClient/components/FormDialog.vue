<template>
  <n-modal v-model:show="showModal" preset="card" class="w-600" :title="`${typeTxt}应用`">
    <div class="pt-20">
      <n-spin :show="loading">
        <sh-form ref="formRef" :model="formValue" label-width="150">
          <sh-form-item label="应用名称" path="appName" rule="required">
            <n-input v-model:value="formValue.appName" placeholder="请输入" />
          </sh-form-item>
          <sh-form-item label="重定向授权登录地址" path="appRedirectUri" rule="required">
            <n-input v-model:value="formValue.appRedirectUri" placeholder="请输入" />
          </sh-form-item>
          <sh-form-item label="重定向地址附带参数" path="additionalInformation">
            <n-input v-model:value="formValue.additionalInformation" placeholder="请输入" />
          </sh-form-item>

          <sh-form-item label="app登录成功地址" path="mobileRedirectUri">
            <n-input v-model:value="formValue.mobileRedirectUri" placeholder="请输入" />
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
import { appClient } from '@/apis/app'
import { useModal } from '@/hooks'

const emit = defineEmits(['loadList'])

// modal hook
const { formRef, loading, showModal, type, typeTxt, formValue, reseForm, validate } = useModal({
  appName: '',
  appRedirectUri: '',
  additionalInformation: '',
  autoapprove: '',
  mobileRedirectUri: '',
})

const onSubmit = async () => {
  loading.value = true
  const { code, msg } = await appClient[type.value](formValue.value)
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
  if (row && row.appId) {
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
