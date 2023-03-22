<template>
  <n-modal v-model:show="showModal" preset="card" class="w-1000" :title="`业务变量列表`">
    <sh-content-layout>
      <!-- <template #header>
        <sh-search-fold :model="formValue" :reset="reset" :load-list="loadList">
          <n-grid-item>
            <sh-form-item label="变量名称" path="varName">
              <n-input v-model:value="formValue.varName"></n-input>
            </sh-form-item>
          </n-grid-item>

          <n-grid-item>
            <sh-form-item label="变量属性" path="varValue">
              <n-input v-model:value="formValue.varValue"></n-input>
            </sh-form-item>
          </n-grid-item>
        </sh-search-fold>
      </template> -->

      <template #btn>
        <n-button type="primary" @click="open">新增</n-button>
      </template>
      <sh-data-table
        ref="tableRef"
        :row-key="(row) => row.id"
        :columns="columns"
        :api="conditionVariable.list"
        :params="formValue"
      />

      <!-- 新增修改 -->
      <FormDialog ref="dialogRef" @load-list="loadList"></FormDialog>
    </sh-content-layout>
  </n-modal>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useForm } from '@/hooks'
import { conditionVariable } from '@/apis/workflow'
import FormDialog from './ConditionVariableFormDialog.vue'

const tableRef = ref(null)
const dialogRef = ref(null)
const showModal = ref(false)

const { formValue, reseForm } = useForm({
  businessId: '', // 系统业务主键
})

const options = reactive(['String', 'Integer', 'Double'])

const columns = [
  { type: 'index' },
  { title: '变量名称', key: 'varName' },
  { title: '变量属性', key: 'varValue' },
  {
    title: '变量类型',
    key: 'varType',
    render(row) {
      return options[row.varType]
    },
  },
  { title: '创建时间', key: 'createTime' },
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
          code: '',
        }),
        $textBtn({
          text: '删除',
          onClick: () => {
            $delete(conditionVariable.delete, { id: row.id }, loadList)
          },
          code: '',
          type: 'error',
        }),
      ]
    },
  },
]

// 重置检索
const reset = async () => {
  await reseForm()
  loadList()
}

const loadList = () => {
  tableRef.value.loadList()
}

const init = (row) => {
  formValue.value.businessId = row.id
  showModal.value = true
}

// 新增和修改业务变量
const open = (row) => {
  dialogRef.value.open(row, formValue.value.businessId)
}

defineExpose({
  init,
})
</script>

<style lang="scss" scoped></style>
