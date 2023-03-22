<template>
  <n-modal v-model:show="showModal" preset="card" class="w-1200" title="流程" @after-leave="aftereave">
    <div class="p-20">
      <n-spin :show="loading">
        <sh-search-area
          ref="formRef"
          class="mb-10"
          :form="formValue"
          :dropdown-list="dropdownList"
          @load-list="loadList"
          @reset="reset"
        >
          <sh-form-item :span="12" label="流程名称" path="processName">
            <n-input v-model:value="formValue.processName"></n-input>
          </sh-form-item>
        </sh-search-area>
        <sh-data-table
          ref="tableRef"
          :row-key="(row) => row.roleId"
          :columns="columns"
          :api="bbxProcessInfo.list"
          :params="formValue"
        />
        <div class="text-right mt-20">
          <n-button @click="showModal = false"> 关闭 </n-button>
        </div>
      </n-spin>
    </div>
  </n-modal>
  <!-- 流程任务 -->
  <ProcessDialog ref="processRef"></ProcessDialog>
</template>

<script setup>
import ProcessDialog from './ProcessDialog.vue'
import { bbxProcessInfo } from '@/apis/workflow'
import { useModal } from '@/hooks'
import { ref } from 'vue'

const emit = defineEmits(['loadList'])

const tableRef = ref(null)
const processRef = ref(null)
// modal hook
const { formRef, loading, showModal, formValue, reseForm, validate } = useModal({
  processName: '',
  status: 1,
})
const dropdownList = [{ label: '流程名称', key: 'processName' }]

const columns = [
  { type: 'index' },
  { title: '流程名称', key: 'processName' },
  { title: '版本描述', key: 'description' },
  { title: '版本ID', key: 'versionId' },
  { title: '创建人', key: 'createName' },
  { title: '创建时间', key: 'createTime' },
  {
    title: '操作',
    key: 'handle',
    render(row) {
      return [
        $textBtn({
          text: '发起流程',
          onClick: () => {
            processRef.value.open('add', row)
          },
          code: 'system-imgList-delete',
        }),
      ]
    },
  },
]

const aftereave = () => {
  emit('loadList')
}

const loadList = () => {
  tableRef.value.loadList()
}

const reset = async () => {
  await reseForm()
  loadList()
}
const open = () => {
  showModal.value = true
}

defineExpose({
  open,
})
</script>

<style lang="scss" scoped></style>
