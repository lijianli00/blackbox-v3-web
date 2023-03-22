<template>
  <div>
    <div class="text-right mb-10">
      <n-button v-if="$isCode('system-dictionary-add')" type="primary" size="small" @click="open()"> 新增 </n-button>
    </div>
    <n-spin :show="tree.loading">
      <n-data-table
        ref="tableRef"
        striped
        :bordered="false"
        :columns="columns"
        :data="tree.list"
        :bottom-bordered="false"
        :row-key="(row) => row.id"
        default-expand-all
        :autoload="false"
        :single-line="false"
      />
    </n-spin>
    <FormDialog ref="dialogRef" @load-list="loadList"></FormDialog>
    <UpdateDialog ref="updateRef" @load-list="loadList"></UpdateDialog>
    <DraggableDialog ref="draggableRef" @load-list="loadList"></DraggableDialog>
  </div>
</template>

<script setup>
import { swDataDictionary } from '@/apis/sw'
import { watch, reactive, ref } from 'vue'
import FormDialog from './FormDialog.vue'
import UpdateDialog from './UpdateDialog.vue'
import DraggableDialog from './DraggableDialog.vue'
import { addColorAlpha } from '@/utils'
import { useThemeStore } from '@/store'
const themeStore = useThemeStore()
const tdBgColor = ref(themeStore.themeColor)
const thBgColor = ref(themeStore.themeColor)
const props = defineProps({
  groupItem: {
    type: Object,
    default: () => {
      return {}
    },
  },
})

const tableRef = ref(null)
const dialogRef = ref(null)
const updateRef = ref(null)
const draggableRef = ref(null)
const tree = reactive({
  list: [],
  loading: false,
})
const columns = [
  { title: '字典值', key: 'dictionaryName' },
  { title: '字典键', key: 'dictionaryKey' },
  {
    title: '状态',
    key: 'status',
    render(row) {
      return $nSwitch({
        status: row.status,
        code: 'system-dictionary-status',
        onClick: async () => {
          tree.loading = true
          row.status = row.status ? 0 : 1
          const { code, msg } = await swDataDictionary.update({
            ...row,
            status: row.status,
          })
          tree.loading = false
          if (code === 0) {
            $message.success(msg)
            loadList()
          } else {
            $message.success(msg)
          }
        },
      })
    },
  },
  {
    title: '操作',
    key: 'handle',
    render(row) {
      return [
        $textBtn({
          text: '排序',
          show: row.grade < props.groupItem.grade && row?.children?.length > 1,
          onClick: () => {
            openDraggable(row.children)
          },
          code: 'system-dictionary-sort',
        }),
        $textBtn({
          text: '新增',
          show: row.grade < props.groupItem.grade,
          onClick: () => {
            open(row.id)
          },
          code: 'system-dictionary-add',
        }),
        $textBtn({
          text: '修改',
          onClick: () => {
            openUpdate(row)
          },
          code: 'system-dictionary-update',
        }),
        $textBtn({
          text: '删除',
          onClick: () => {
            $delete(swDataDictionary.delete, { id: row.id }, loadList, '请确认删除，删除后关联数据可能丢失?')
          },
          code: 'system-dictionary-delete',
          type: 'error',
        }),
      ]
    },
  },
]

watch(
  () => props.groupItem,
  (val) => {
    if (val.id) {
      loadList()
    }
  },
  { immediate: true }
)
const handleBgColor = (val) => {
  tdBgColor.value = addColorAlpha(val, 0.06)
  thBgColor.value = addColorAlpha(val, 0.03)
}

watch(
  () => themeStore.themeColor,
  (val) => {
    handleBgColor(val)
  },
  {
    immediate: true,
  }
)

const loadList = async () => {
  tree.loading = true
  const { code, msg, data } = await swDataDictionary.findTree({ groupId: props.groupItem.id })
  tree.loading = false
  if (code === 0) {
    tree.list = data || []
  } else {
    $message.error(msg)
  }
}

const open = (parentId = '-1') => {
  if (props.groupItem.id) {
    dialogRef.value.open({
      groupId: props.groupItem.id,
      parentId,
    })
  } else {
    $message.error('请选择字典类型')
  }
}
const openUpdate = (row) => {
  updateRef.value.open(row)
}
const openDraggable = (list) => {
  draggableRef.value.open(list)
}
</script>

<style lang="scss" scoped>
::v-deep(.n-data-table .n-data-table-wrapper) {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
::v-deep(.n-data-table) {
  font-size: 14px;
  .n-data-table-th {
    // background-color: var(--primaryBgColor);
    background-color: v-bind('thBgColor');
    color: #8996af;
    border-color: #fff;
    font-weight: 700;
    padding: 0;
    .n-data-table-th__title {
      height: 42px;
      line-height: 42px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      padding: 0 16px;
    }
  }
  .n-data-table-td {
    padding: 0 16px;
    height: 42px;
    line-height: 42px;
  }
  .n-data-table-tr.n-data-table-tr--striped .n-data-table-td {
    background-color: v-bind('tdBgColor');
    // background-color: red;
  }
  &:not(.n-data-table--single-line) .n-data-table-td {
    border-right: none;
  }
}
</style>
