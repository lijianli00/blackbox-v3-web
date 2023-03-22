<template>
  <sh-content-layout>
    <template #header>
      <sh-search-area :form="formValue" :dropdown-list="dropdownList" @load-list="loadList" @reset="reset">
        <template #left>
          <n-button v-if="$isCode('system-appClient-add')" type="primary" @click="open"> 新增 </n-button>
        </template>
        <sh-form-item :span="12" label="应用名称" path="appName">
          <n-input v-model:value="formValue.appName"></n-input>
        </sh-form-item>
        <sh-form-item span="12" label="应用id" path="appId">
          <n-input v-model:value="formValue.appId"></n-input>
        </sh-form-item>
      </sh-search-area>
    </template>

    <sh-data-table
      ref="tableRef"
      :row-key="(row) => row.roleId"
      :columns="columns"
      :api="appClient.list"
      :params="formValue"
    />
    <!-- 新增修改 -->
    <FormDialog ref="dialogRef" @load-list="loadList"></FormDialog>
  </sh-content-layout>
</template>

<script setup>
import { ref } from 'vue'
import { appClient } from '@/apis/app'
import FormDialog from './components/FormDialog.vue'
import { useForm } from '@/hooks'

const tableRef = ref(null)
const dialogRef = ref(null)
const dropdownList = [
  { label: '应用名称', key: 'appName' },
  { label: '应用id', key: 'appId' },
]
const columns = [
  { type: 'index' },
  { title: '应用名称', key: 'appName' },
  { title: '应用id', key: 'appId' },
  { title: '应用秘钥', key: 'appSecret' },
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
          code: 'system-appClient-update',
          divider: true,
        }),
        $textBtn({
          text: '刷新密钥',
          onClick: () => {
            $delete(appClient.refreshSecret, { appId: row.appId }, loadList, '是否确认刷新密钥？')
          },
          code: 'system-appClient-refreshSecret',
        }),
        // $textBtn({
        //   text: '删除',
        //   onClick: () => {
        //     $delete(appClient.delete, { appId: row.appId }, loadList)
        //   },
        //   code: 'system-appClient-delete',
        //   type: 'error',
        // }),
      ]
    },
  },
]

const { formValue, reseForm } = useForm({
  appName: '',
  appId: '',
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
