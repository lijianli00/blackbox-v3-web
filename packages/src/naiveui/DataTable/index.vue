<template>
  <div class="text-[#515E78] dark:text-[#515e78] text-14">
    <n-spin :show="loading">
      <n-data-table
        class="rounded-10"
        v-bind="$attrs"
        :columns="columnsArr"
        :data="tableList"
        :remote="true"
        :size="size"
        :striped="striped"
        :bordered="bordered"
        :bottom-bordered="bottomBordered"
        :single-line="false"
      ></n-data-table>
      <div
        v-if="showPage"
        class="h-50 items-center flex justify-between px-20 border border-[#efeff5] dark:border-[#2d2d30] rounded-br-3 rounded-bl-3"
      >
        <div>共 {{ pagination.itemCount }} 项数据</div>
        <n-pagination
          v-model:page="pagination.page"
          :page-size="pagination.pageSize"
          :item-count="pagination.itemCount"
          show-size-picker
          :page-sizes="pagination.pageSizes"
          @update:page="pagination.onChange"
          @update:page-size="pagination.onUpdatePageSize"
        />
      </div>
    </n-spin>
  </div>
</template>

<script setup name="ShDataTable">
import { computed, reactive, ref, watch } from 'vue'
import { addColorAlpha } from '@/utils'
import { useThemeStore } from '@/store'
const themeStore = useThemeStore()
const tdBgColor = ref(themeStore.themeColor)
const thBgColor = ref(themeStore.themeColor)
const props = defineProps({
  api: {
    type: Function,
    default: undefined,
  },
  // 加载就请求
  autoload: {
    type: Boolean,
    default: true,
  },
  striped: {
    type: Boolean,
    default: true,
  },
  bordered: {
    type: Boolean,
    default: false,
  },
  bottomBordered: {
    type: Boolean,
    default: false,
  },
  params: {
    type: Object,
    default: () => {
      return {}
    },
  },
  size: {
    type: String,
    default: 'large',
  },
  columns: {
    type: Array,
    default: () => {
      return []
    },
  },
  showPage: {
    type: Boolean,
    default: true,
  },
})
const emit = defineEmits(['callback'])

const tableList = ref([])
const loading = ref(false)
// 分页
const pagination = reactive({
  page: 1,
  pageSize: 15,
  pageSizes: [15, 30, 100],
  itemCount: 0,
  showSizePicker: true,
  onChange: (page) => {
    pagination.page = page
    loadList()
  },
  onUpdatePageSize: (pageSize) => {
    pagination.pageSize = pageSize
    pagination.page = 1
    loadList()
  },
})

const columnsArr = computed(() => {
  return props.columns.map((item) => {
    if (item.type === 'index') {
      return {
        width: '60',
        title: '序号',
        render: (row, index) => {
          return index + 1
        },
        ...item,
      }
    }
    return item
  })
})

// 请求列表
const loadList = async (params = {}) => {
  loading.value = true
  const { code, msg, data, count } = await props.api({
    page: pagination.page,
    limit: pagination.pageSize,
    ...props.params,
    ...params,
  })
  loading.value = false
  emit('callback', data || [])
  if (code === 0) {
    tableList.value = data
    pagination.itemCount = count
  } else {
    tableList.value = []
    pagination.itemCount = 0
    $message.error(msg)
  }
}
// 默认请求
if (props.autoload && props.api) {
  loadList()
}

// 设置表格数据
const setTableData = ({ data, count = 0 }) => {
  tableList.value = data
  pagination.itemCount = count
}

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
defineExpose({
  loadList,
  setTableData,
})
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
