<!-- eslint-disable vue/no-mutating-props -->
<template>
  <n-modal
    v-model:show="showModal"
    preset="card"
    class="w-500"
    title="请选择所属业务"
    :close-on-esc="false"
    @after-leave="afterLeave"
  >
    <div class="p-20">
      <n-spin :show="loading">
        <sh-form ref="formRef" :model="form">
          <sh-form-item label="所属业务" path="businessId" rule="required">
            <n-select
              v-model:value="form.businessId"
              filterable
              placeholder="请选择"
              :options="businessList"
              label-field="businessName"
              value-field="id"
            />
          </sh-form-item>
        </sh-form>
        <div class="text-right mt-20">
          <n-button @click="onLink"> 关闭 </n-button>
          <n-button type="primary" @click="validate(close)"> 确定 </n-button>
        </div>
      </n-spin>
    </div>
  </n-modal>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useModal } from '@/hooks'
import { inject } from 'vue'

const props = defineProps({
  form: {
    type: Object,
    default: () => {
      return {}
    },
  },
})
const emit = defineEmits(['callback'])
const businessList = inject('businessList')
const router = useRouter()

const { formRef, showModal, loading, validate, close } = useModal()

const onLink = () => {
  router.go(-1)
}
const afterLeave = () => {
  if (props.form.businessId) {
    emit('callback', props.form.businessId)
  } else {
    onLink()
  }
}

const open = () => {
  showModal.value = true
}

defineExpose({
  open,
})
</script>

<style lang="scss" scoped>
::v-deep(.n-card > .n-card-header .n-card-header__close) {
  display: none;
}
</style>
