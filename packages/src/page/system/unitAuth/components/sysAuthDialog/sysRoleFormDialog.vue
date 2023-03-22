<template>
  <n-modal v-model:show="showModal" preset="card" class="w-600" :title="`${typeTxt}系统角色`">
    <div class="pt-20">
      <n-spin :show="loading">
        <sh-form ref="formRef" :model="formValue">
          <sh-form-item label="角色名称" path="roleName" rule="required">
            <n-input v-model:value="formValue.roleName" placeholder="请输入" />
          </sh-form-item>
          <sh-form-item label="说明" path="description">
            <n-input v-model:value="formValue.description" type="textarea" placeholder="请输入" />
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
import { useModal } from '@/hooks'
import { orgRolePerson } from '@/apis/org'

const emit = defineEmits(['loadList'])

const { formRef, loading, showModal, type, typeTxt, formValue, reseForm, validate } = useModal({
  roleName: '',
  description: '',
  roleType: 1,
})

const init = (optionType, row) => {
  showModal.value = true
  type.value = optionType

  if (optionType === 'add') {
    reseForm()
    formValue.value.unitRoleId = row.id
  } else {
    row.roleName = row.name
    reseForm(row)
  }
}

const onSubmit = async () => {
  loading.value = true
  const { code, msg } = await orgRolePerson[type.value](formValue.value)
  loading.value = false
  if (code === 0) {
    $message.success('成功')
    showModal.value = false
    emit('loadList')
  } else {
    $message.error(msg)
  }
}

defineExpose({ init })
</script>

<style lang="scss" scoped></style>
