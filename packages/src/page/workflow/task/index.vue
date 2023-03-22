<template>
  <sh-content-layout>
    <template #header>
      <sh-search-area :form="formValue" :dropdown-list="dropdownList" @load-list="loadList" @reset="reset">
        <template #left>
          <n-button v-if="$isCode('system-appClient-add')" type="primary" @click="open"> 新增 </n-button>
        </template>
        <sh-form-item :span="12" label="标题" path="title">
          <n-input v-model:value="formValue.title"></n-input>
        </sh-form-item>
      </sh-search-area>
    </template>

    <sh-data-table
      ref="tableRef"
      :row-key="(row) => row.roleId"
      :columns="columns"
      :api="bbxProcessRunTask.list"
      :params="formValue"
    />
    <!-- 流程列表 -->
    <TableDialog ref="dialogRef" @load-list="loadList"></TableDialog>
    <ProcessDialog ref="processRef" @load-list="loadList"></ProcessDialog>
  </sh-content-layout>
</template>

<script setup>
import { ref } from 'vue'
import { bbxProcessRunTask } from '@/apis/workflow'
import TableDialog from './components/TableDialog.vue'
import ProcessDialog from './components/ProcessDialog.vue'
import { useForm } from '@/hooks'

const tableRef = ref(null)
const dialogRef = ref(null)
const processRef = ref(null)
const dropdownList = [{ label: '标题', key: 'title' }]

const columns = [
  { type: 'index' },
  { title: '表单数据主键', key: 'businessDataId' },
  { title: '当前所在节点', key: 'nodeText' },
  { title: '处理人', key: 'createName' },
  { title: '创建时间', key: 'createTime' },
  {
    title: '操作',
    key: 'handle',
    render(row) {
      return [
        $textBtn({
          text: '处理',
          onClick: () => {
            processRef.value.open('processing', row)
          },
          code: 'system-appClient-update',
        }),
      ]
    },
  },
]

const { formValue, reseForm } = useForm({
  title: '',
})

// 重置检索
const reset = async () => {
  await reseForm()
  loadList()
}

const loadList = () => {
  tableRef.value.loadList()
}

const open = (row) => {
  dialogRef.value.open(row)
}
</script>

<style lang="scss" scoped></style>
