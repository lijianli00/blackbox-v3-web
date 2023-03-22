<template>
  <sh-content-layout>
    <template #header>
      <sh-search-area :form="formValue" :dropdown-list="dropdownList" @load-list="loadList" @reset="reset">
        <sh-form-item label="文件名" :span="12" path="fileName">
          <n-input v-model:value="formValue.fileName"></n-input>
        </sh-form-item>
        <sh-form-item :span="12" label="业务主键" path="dataId">
          <n-input v-model:value="formValue.dataId"></n-input>
        </sh-form-item>
        <sh-form-item :span="12" label="文件归类" path="fileDir">
          <n-input v-model:value="formValue.fileDir"></n-input>
        </sh-form-item>
        <sh-form-item :span="12" label="上传人" path="createName">
          <n-input v-model:value="formValue.createName"></n-input>
        </sh-form-item>
      </sh-search-area>
    </template>
    <sh-data-table
      ref="tableRef"
      :row-key="(row) => row.roleId"
      :columns="columns"
      :api="swFile.list"
      :params="formValue"
    />
  </sh-content-layout>
</template>

<script setup>
import { reactive, ref, h } from 'vue'
import { swFile } from '@/apis/sw'

const tableRef = ref(null)

const dropdownList = [
  { label: '文件名', key: 'fileName' },
  { label: '业务主键', key: 'dataId' },
  { label: '文件归类', key: 'fileDir' },
  { label: '上传人', key: 'createName' },
]

const columns = [
  { type: 'index' },
  { title: '文件名', key: 'fileName' },
  { title: '文件归类', key: 'fileDir' },
  { title: '业务数据主键', key: 'dataId' },
  { title: '上传人', key: 'createName' },
  {
    title: '操作',
    key: 'handle',
    render(row) {
      return [
        $textBtn({
          text: '删除',
          onClick: () => {
            $delete(swFile.delete, { id: row.id }, loadList)
          },
          code: 'system-fileList-delete',
          type: 'error',
        }),
      ]
    },
  },
]

// 初始化数据
const initFormVlue = () => {
  return {
    fileName: '',
    dataId: '',
    fileDir: '',
    createName: '',
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
</script>

<style lang="scss" scoped></style>
