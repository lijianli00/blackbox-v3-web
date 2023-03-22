<template>
  <div>
    <sh-search v-model:form="formValue" :load-list="loadList" :reset="reset" :dropdown-list="dropdownList">
      <template #left>
        <n-button v-if="$isCode('system-person-add')" type="primary" @click="open"> 新增 </n-button>
        <n-button v-if="$isCode('system-person-batches-delete')" @click="deleteBatches"> 批量删除 </n-button>
      </template>
    </sh-search>
    <sh-data-table
      ref="tableRef"
      :row-key="(row) => row.id"
      :columns="columns"
      :api="orgPerson.listMainDeptPerson"
      :params="formValue"
      @update:checked-row-keys="handleCheck"
    />
    <!-- 新增修改 -->
    <FormDialog ref="dialogRef" @load-list="loadList"></FormDialog>
  </div>
</template>

<script setup>
import { reactive, ref, h } from 'vue'
import { orgPerson } from '@/apis/org'
import FormDialog from './components/FormDialog.vue'

const tableRef = ref(null)
const dialogRef = ref(null)
const checkRowKeys = ref([])
const dropdownList = [
  { label: '名字', value: 'name' },
  { label: '部门', value: 'deptName' },
]

const columns = [
  { type: 'selection' },
  { title: '名字', key: 'name', resizable: true },
  { title: '部门', key: 'deptName', resizable: true },
  { title: '职务', key: 'duty', resizable: true },
  { title: '手机号', key: 'phone', resizable: true },
  {
    title: '性别',
    key: 'gender',
    resizable: true,
    render(row) {
      return row.gender ? '男' : '女'
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
          code: 'system-person-update',
        }),
        $textBtn({
          text: '删除',
          onClick: () => {
            $delete(orgPerson.quit, { personIds: [row.id] }, loadList)
          },
          code: 'system-person-delete',
          type: 'error',
        }),
      ]
    },
  },
]

// 初始化数据
const initFormVlue = () => {
  return {
    name: '',
    deptName: '',
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
// 批量删除
const deleteBatches = () => {
  if (!checkRowKeys.value.length) {
    $message.warning('请先选择数据')
    return
  }
  $delete(
    orgPerson.quit,
    { personIds: checkRowKeys.value },
    () => {
      loadList()
      checkRowKeys.value = []
    },
    '是否要批量删除数据？此操作不可逆'
  )
}
const handleCheck = (rowKeys) => {
  checkRowKeys.value = rowKeys
}
const open = (row) => {
  dialogRef.value.open(row)
}
</script>

<style lang="scss" scoped></style>
