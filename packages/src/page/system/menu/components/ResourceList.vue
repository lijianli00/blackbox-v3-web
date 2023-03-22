<template>
  <div v-if="activeMenuId">
    <div class="mb-20">
      <n-button v-if="$isCode('system-resource-update')" type="primary" @click="open"> 新增资源 </n-button>
    </div>
    <n-spin :show="resource.loading">
      <sh-data-table ref="tableRef" :columns="columns" :show-page="false" />
    </n-spin>
    <FormDialog ref="dialogRef" :active-menu-id="activeMenuId" @load-list="loadList"></FormDialog>
  </div>
</template>

<script setup>
import FormDialog from './ResourceFormDialog.vue'
import { appResource } from '@/apis/app'
import { watch, reactive, ref } from 'vue'

const props = defineProps({
  activeMenuId: {
    type: String,
    default: '',
  },
})

const columns = [
  { title: '资源名称', key: 'resourceName' },
  { title: '资源编码', key: 'resourceCode' },
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
          code: 'system-resource-update',
        }),
        $textBtn({
          text: '删除',
          onClick: () => {
            $delete(appResource.delete, { id: row.id }, loadList)
          },
          code: 'system-resource-delete',
          type: 'error',
        }),
      ]
    },
  },
]

const dialogRef = ref(null)
const tableRef = ref(null)
const resource = reactive({
  list: [],
  loading: false,
})

// 监听菜单id编号重新加载资源
watch(
  () => props.activeMenuId,
  () => {
    loadList()
  }
)

const loadList = async () => {
  resource.loading = true
  const { code, msg, data } = await appResource.findByMenuId({ menuId: props.activeMenuId })
  resource.loading = false
  if (code === 0) {
    resource.list = data
    tableRef.value.setTableData({ data })
  } else {
    $message.error(msg)
  }
}

const open = (row) => {
  if (props.activeMenuId === '-1') {
    $message.warning('子节点不允许新增')
  } else {
    dialogRef.value.open(row)
  }
}
</script>

<style lang="scss" scoped></style>
