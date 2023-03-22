<template>
  <sh-content-layout>
    <template #header>
      <sh-search-area :form="formValue" :dropdown-list="dropdownList" @load-list="loadList" @reset="reset">
        <template #let>
          <n-button type="primary" @click="open('editor/add')"> 新增 </n-button>
        </template>
        <sh-form-item :span="12" label="流程名称" path="processName">
          <n-input v-model:value="formValue.processName"></n-input>
        </sh-form-item>
      </sh-search-area>
    </template>

    <sh-data-table
      ref="tableRef"
      :row-key="(row) => row.roleId"
      :columns="columns"
      :api="bbxProcessInfo.list"
      :params="formValue"
    />
  </sh-content-layout>
</template>

<script setup>
import { reactive, ref, h } from 'vue'
import { bbxProcessInfo } from '@/apis/workflow'
import { useRouter } from 'vue-router'

const router = useRouter()
const tableRef = ref(null)
const loading = ref(false)
const dropdownList = [{ label: '流程名称', key: 'processName' }]

const columns = [
  { type: 'index' },
  { title: '流程名称', key: 'processName' },
  { title: '版本描述', key: 'description' },
  { title: '版本ID', key: 'versionId' },
  {
    title: '状态',
    key: 'status',
    render(row) {
      return $nSwitch({
        status: row.status,
        code: 'system-dictionary-status',
        onClick: async () => {
          loading.value = true
          row.status = row.status ? 0 : 1
          const { code, msg } = await bbxProcessInfo.updateStatus({
            id: row.id,
            status: row.status,
          })
          loading.value = false
          if (code === 0) {
            $message.success(msg)
            loadList()
          } else {
            $message.error(msg)
          }
        },
      })
    },
  },
  { title: '创建人', key: 'createName' },
  { title: '创建时间', key: 'createTime' },
  {
    title: '操作',
    key: 'handle',
    render(row) {
      return [
        $textBtn({
          text: '编辑',
          onClick: () => {
            open(`editor/${row.id}`)
          },
          code: 'system-imgList-delete',
        }),
      ]
    },
  },
]

// 初始化数据
const initFormVlue = () => {
  return {
    processName: '',
    status: '',
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

const open = (url) => {
  router.push(url)
}
</script>

<style lang="scss" scoped></style>
