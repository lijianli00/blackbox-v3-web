<!-- eslint-disable vue/no-mutating-props -->
<template>
  <n-modal v-model:show="modal.show" preset="card" class="w-400" title="发布流程">
    <div class="pb-20">
      <n-spin :show="modal.loading">
        <div>确认发布【{{ process.processName }}】流程？</div>
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
import { bbxProcessInfo } from '@/apis/workflow'
import { useRouter } from 'vue-router'

const props = defineProps({
  process: {
    type: Object,
    default: () => {
      return {}
    },
  },
})
const emit = defineEmits(['loadList'])

const router = useRouter()

const formRef = ref(null)
const modal = reactive({
  show: false,
  loading: false,
  type: 'add',
})

const validateForm = () => {
  formRef.value?.validate((errors) => {
    if (errors) return
    onSubmit()
  })
}
const onSubmit = async () => {
  modal.loading = true
  const { code, msg } = await bbxProcessInfo[modal.type](props.process)
  modal.loading = false
  if (code === 0) {
    $message.success('成功')
    modal.show = false
    onModel()
  } else {
    $message.error(msg)
  }
}

const onModel = () => {
  router.push('/workflow/model')
}

const open = (row) => {
  modal.show = true
}

defineExpose({
  open,
})
</script>

<style lang="scss" scoped></style>
