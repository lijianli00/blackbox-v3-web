<template>
  <sh-content-layout>
    <template #header>
      <sh-search-area :form="formValue" :dropdown-list="dropdownList" @load-list="loadList" @reset="reset">
        <template #left>
          <n-button v-if="$isCode('system-team-add')" type="primary" @click="open"> 新增 </n-button>
        </template>
        <!-- <sh-form-item :span="12" label="团队名称" path="teamName">
          <n-input v-model:value="formValue.teamName"></n-input>
        </sh-form-item> -->
      </sh-search-area>
    </template>

    <sh-data-table
      ref="tableRef"
      :row-key="(row) => row.roleId"
      :columns="columns"
      :api="orgUnitTeam.list"
      :params="formValue"
    />
    <!-- 新增修改 -->
    <FormDialog ref="dialogRef" @load-list="loadList"></FormDialog>
  </sh-content-layout>
</template>

<script setup>
import { reactive, ref, h } from 'vue'
import { orgUnitTeam } from '@/apis/org'
import FormDialog from './components/FormDialog.vue'

const tableRef = ref(null)
const dialogRef = ref(null)

const dropdownList = [{ label: '团队名称', key: 'teamName' }]

const columns = [
  { type: 'index' },
  { title: '团队名称', key: 'teamName' },
  { title: '说明', key: 'description' },
  {
    title: '状态',
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
          code: 'system-team-update',
          divider: true,
        }),
        $textBtn({
          text: '删除',
          onClick: () => {
            $delete(orgUnitTeam.delete, { id: row.id }, loadList)
          },
          code: 'system-team-delete',
          type: 'error',
        }),
      ]
    },
  },
]

// 初始化数据
const initFormVlue = () => {
  return {
    teamName: '',
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

const open = (row) => {
  dialogRef.value.open(row)
}
</script>

<style lang="scss" scoped></style>
