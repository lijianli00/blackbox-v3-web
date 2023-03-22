<template>
  <div>
    <div class="mb-20">
      <n-button v-if="$isCode('system-dept-personAdd')" type="primary" @click="open"> 新增成员 </n-button>
    </div>
    <n-spin :show="table.loading">
      <sh-data-table
        ref="tableRef"
        :row-key="(row) => row.id"
        :params="formValue"
        :columns="columns"
        :api="orgPerson.listMainDeptPerson"
      />
    </n-spin>
    <FormDialog ref="dialogRef" :active-dept="activeDept" :dept-tree="deptTree" @load-list="loadList"></FormDialog>
  </div>
</template>

<script setup>
import FormDialog from './PersonFormDialog.vue'
import { orgPerson } from '@/apis/org'
import { watch, reactive, ref, nextTick } from 'vue'

const props = defineProps({
  activeDept: {
    type: Object,
    default: () => {
      return {}
    },
  },
  deptTree: {
    type: Object,
    default: () => {
      return {}
    },
  },
})

const columns = [
  { type: 'selection' },
  { type: 'index' },
  { title: '名字', key: 'name', resizable: true },
  { title: '部门', key: 'deptName', resizable: true },
  { title: '职务', key: 'duty', resizable: true },
  { title: '手机号', key: 'phone', resizable: true },
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
          code: 'system-dept-personUpdate',
          divider: true,
        }),
        $textBtn({
          text: '删除',
          onClick: () => {
            $delete(orgPerson.quit, { personIds: [row.id] }, loadList)
          },
          code: 'system-dept-personDelete',
          type: 'error',
        }),
      ]
    },
  },
]

const dialogRef = ref(null)
const tableRef = ref(null)
const table = reactive({
  list: [],
  loading: false,
})

// 检索数据
const formValue = reactive({
  name: '',
  deptName: '',
  deptId: '',
  phone: '',
  gender: '',
})
// 重置数据
const reset = () => {
  formValue.name = ''
  formValue.deptName = ''
  formValue.phone = ''
  formValue.gender = ''
  loadList()
}

const loadList = () => {
  formValue.deptId = props.activeDept.type === 'team' ? '' : props.activeDept.id
  nextTick(() => {
    tableRef.value.loadList()
  })
}

const open = (row) => {
  dialogRef.value.open(row)
}

defineExpose({
  loadList,
})
</script>

<style lang="scss" scoped></style>
