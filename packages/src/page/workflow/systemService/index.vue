<template>
  <sh-content-layout>
    <template #header>
      <sh-search-area :form="formValue" :dropdown-list="dropdownList" @load-list="loadList" @reset="reset">
        <template #left>
          <n-button type="primary" @click="open">新增</n-button>
        </template>
        <sh-form-item label="业务名称" path="busienssName">
          <n-input v-model:value="formValue.busienssName"></n-input>
        </sh-form-item>
      </sh-search-area>
    </template>

    <sh-data-table
      ref="tableRef"
      :row-key="(row) => row.id"
      :columns="columns"
      :api="systemService.list"
      :params="formValue"
    />

    <!-- 新增修改 -->
    <FormDialog ref="dialogRef" @load-list="loadList"></FormDialog>

    <!-- 条件变量列表 -->
    <ConditionVariable ref="ConditionVariableDialog"></ConditionVariable>
  </sh-content-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useForm } from '@/hooks'
import { systemService } from '@/apis/workflow'
import FormDialog from './components/FormDialog.vue'
import ConditionVariable from './components/ConditionVariableList.vue'

const tableRef = ref(null)
const dialogRef = ref(null)
const ConditionVariableDialog = ref(null)

const { formValue, reseForm } = useForm({
  busienssName: '',
})
const dropdownList = [{ label: '业务名称', key: 'busienssName' }]

const columns = [
  { type: 'index' },
  { title: '业务名称', key: 'businessName' },
  { title: '创建人', key: 'createName' },
  { title: '创建时间', key: 'createTime' },
  {
    title: '操作',
    key: 'handle',
    render(row) {
      return [
        $textBtn({
          text: '条件变量',
          onClick: () => {
            openCondition(row)
          },
          code: '',
          divider: true,
        }),
        $textBtn({
          text: '删除',
          onClick: () => {
            $delete(systemService.delete, { id: row.id }, loadList)
          },
          code: '',
          type: 'error',
        }),
      ]
    },
  },
]

// 重置检索
const reset = async () => {
  await reseForm()
  loadList()
}

const loadList = () => {
  tableRef.value.loadList()
}

// 新增
const open = (row) => {
  dialogRef.value.open(row)
}

// 条件变量列表
const openCondition = (row) => {
  ConditionVariableDialog.value.init(row)
}
</script>

<style lang="scss" scoped></style>
