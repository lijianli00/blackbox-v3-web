<template>
  <sh-content-layout>
    <template #header>
      <!-- ShSearchArea -->
      <sh-search-area :form="formValue" :dropdown-list="dropdownList" @load-list="loadList">
        <template #left>
          <n-button v-if="$isCode('system-unit-add')" type="primary" @click="open"> 新增 </n-button>
        </template>
        <sh-form-item :span="12" label="企业名称" path="unitName" label-width="80px">
          <n-input v-model:value="formValue.unitName"></n-input>
        </sh-form-item>
        <sh-form-item :span="12" label="企业编码" path="unitCode">
          <n-input v-model:value="formValue.unitCode"></n-input>
        </sh-form-item>
      </sh-search-area>
    </template>

    <sh-data-table
      ref="tableRef"
      :row-key="(row) => row.roleId"
      :columns="columns"
      :api="orgUnit.list"
      :params="formValue"
    />

    <!-- 新增修改 -->
    <FormDialog ref="dialogRef" @load-list="loadList"></FormDialog>
  </sh-content-layout>
</template>

<script setup>
import { reactive, ref, h } from 'vue'
import { orgUnit } from '@/apis/org'
import FormDialog from './components/FormDialog.vue'

const tableRef = ref(null)
const dialogRef = ref(null)
const dropdownList = [
  { label: '企业名称', key: 'unitName' },
  { label: '企业编码', key: 'unitCode' },
]
const columns = [
  { type: 'index' },
  { title: '企业名称', key: 'unitName' },
  { title: '企业信用代码', key: 'unitCode' },
  { title: '详细地址', key: 'unitAddress' },
  {
    title: '企业状态',
    key: 'status',
    render(row) {
      return row.status ? '正常' : '冻结'
    },
  },
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
          code: 'system-unit-update',
        }),
      ]
    },
  },
]

// 初始化数据
const initFormVlue = () => {
  return {
    unitName: '',
    unitCode: '',
  }
}
let formValue = reactive(initFormVlue())

const loadList = () => {
  tableRef.value.loadList()
}

const open = (row) => {
  dialogRef.value.open(row)
}
</script>

<style lang="scss" scoped>
// ::v-deep(.btn-box) {
//   &::after {
//     content: ' ';
//     position: absolute;
//     top: 0;
//     right: -7px;
//     width: 1px;
//     height: 16px;
//     background-color: var(--n-text-color);
//   }
// }

// ::v-deep(.btn-box + .btn-box) {
//   margin-left: 13px;
// }
</style>
