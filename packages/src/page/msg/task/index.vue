<template>
  <sh-content-layout>
    <template #header>
      <sh-search-area :form="formValue" :dropdown-list="dropdownList" @load-list="loadList" @reset="reset">
        <sh-form-item :span="12" label="关键字" path="searchKey">
          <n-input v-model:value="formValue.searchKey"></n-input>
        </sh-form-item>
      </sh-search-area>
    </template>
    <n-spin :show="table.loading">
      <sh-data-table ref="tableRef" :show-page="false" :columns="columns" />
      <n-button
        text
        type="primary"
        class="border border-#efeff5 flex-center h-40 cursor-pointer w-full"
        tag="div"
        @click="loadList"
      >
        更多数据
        <component :is="doubleRight" class="ml-5"></component>
      </n-button>
    </n-spin>
    <FormDialog ref="dialogRef"></FormDialog>
  </sh-content-layout>
</template>

<script setup>
import { mgsTask } from '@/apis/msg'
import { reactive, ref } from 'vue'
import { taskStateObj } from './js/taskState'
import FormDialog from './components/FormDialog.vue'
import doubleRight from '@/assets/svg/double-right.svg'

const dialogRef = ref(null)
const dropdownList = [{ label: '关键字', key: 'searchKey' }]
// 初始化数据
const initFormVlue = () => {
  return {
    searchKey: '',
    page: 0,
    limit: 20,
  }
}
let formValue = reactive(initFormVlue())
// 重置数据
const reset = () => {
  Object.assign(formValue, initFormVlue())
  loadList()
}

const tableRef = ref(null)
const columns = [
  // { type: 'selection' },
  { type: 'index' },
  { title: '任务id', key: 'id' },
  { title: '发送人名称', key: 'sourceName' },
  { title: '接收人名称', key: 'targetName' },
  {
    title: '是否定时',
    key: 'timing',
    render: (row) => {
      return row.timing ? '定时' : '即时'
    },
  },
  { title: '指定发送时间', key: 'futureTime' },
  {
    title: '失败是否重试',
    key: 'retry',
    render: (row) => {
      return row.retry ? '是' : '否'
    },
  },
  {
    title: '任务状态',
    key: 'retry',
    render: (row) => {
      return taskStateObj[row.retry]
    },
  },
  { title: '创建时间', key: 'createTime' },
  {
    title: '操作',
    key: 'handle',
    render(row) {
      return [
        $textBtn({
          text: '查看',
          onClick: () => {
            open(row)
          },
        }),
      ]
    },
  },
]

const open = (row) => {
  dialogRef.value.open(row)
}

const table = reactive({
  list: [], // 后端拿到数据 保存 渲染
  isBottom: false,
  loading: false,
})
const loadList = async () => {
  if (table.isBottom) {
    $message.warning('没有更多数据了')
    return
  }
  table.loading = true
  formValue.page++
  const { code, data, msg } = await mgsTask.list(formValue)

  if (code === 0) {
    if (data) {
      table.list.push(...data)
      tableRef.value.setTableData({
        data: table.list,
      })
    }
    // 到底了
    if (!data || data.length < 10) {
      table.isBottom = true
    }
  } else {
    $message.error(msg)
  }

  table.loading = false
}
loadList()
</script>

<style lang="scss" scoped></style>
