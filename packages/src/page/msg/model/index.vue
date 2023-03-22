<template>
  <sh-content-layout>
    <template #header>
      <sh-search-area :form="formValue" :dropdown-list="dropdownList" @load-list="loadList" @reset="reset">
        <template #left>
          <n-button v-if="$isCode('system-msgModel-add')" type="primary" @click="open"> 新增 </n-button>
        </template>
        <sh-form-item :span="12" label="模板名称" path="modelName">
          <n-input v-model:value="formValue.modelName"></n-input>
        </sh-form-item>
        <sh-form-item :span="12" label="模板标识" path="modelCode">
          <n-input v-model:value="formValue.modelCode"></n-input>
        </sh-form-item>
        <sh-form-item :span="12" label="模板类型" path="modelType">
          <n-input v-model:value="formValue.modelType"></n-input>
        </sh-form-item>
        <sh-form-item :span="12" label="关联id" path="relationId">
          <n-input v-model:value="formValue.relationId"></n-input>
        </sh-form-item>
      </sh-search-area>
    </template>

    <sh-data-table
      ref="tableRef"
      :row-key="(row) => row.roleId"
      :columns="columns"
      :api="msgModel.list"
      :params="formValue"
      @update:checked-row-keys="handleCheck"
    />
    <!-- 新增修改 -->
    <FormDialog ref="dialogRef" @load-list="loadList"></FormDialog>
  </sh-content-layout>
</template>

<script setup>
import { reactive, ref, h } from 'vue'
import { msgModel } from '@/apis/msg'
import FormDialog from './components/FormDialog.vue'

const tableRef = ref(null)
const dialogRef = ref(null)
const checkRowKeys = ref([])
const dropdownList = [
  { label: '模板名称', key: 'modelName' },
  { label: '模板标识', key: 'modelCode' },
  { label: '模板类型', key: 'modelType' },
  { label: '关联id', key: 'relationId' },
]

const columns = [
  // { type: 'selection' },
  { type: 'index' },
  { title: '模板名称', key: 'modelName' },
  { title: '模板标识', key: 'modelCode' },
  { title: '模板类型', key: 'modelType' },
  { title: '创建时间', key: 'createTime' },
  {
    title: '操作',
    key: 'handle',
    render(row) {
      return [
        $textBtn({
          text: '修改',
          onClick: () => {
            open(row)
          },
          code: 'system-msgModel-update',
          divider: true,
        }),
        $textBtn({
          text: '删除',
          onClick: () => {
            $delete(msgModel.delete, { id: row.id }, loadList)
          },
          code: 'system-msgModel-delete',
          type: 'error',
        }),
      ]
    },
  },
]

// 初始化数据
const initFormVlue = () => {
  return {
    modelName: '',
    modelCode: '',
    modelType: '',
    relationId: '',
  }
}
let formValue = reactive(initFormVlue())
// 重置数据
const reset = () => {
  Object.assign(formValue, initFormVlue())
  loadList()
}

const loadList = () => {
  tableRef.value.loadList()
}

const handleCheck = (rowKeys) => {
  checkRowKeys.value = rowKeys
}
const open = (row) => {
  dialogRef.value.open(row)
}
</script>

<style lang="scss" scoped></style>
