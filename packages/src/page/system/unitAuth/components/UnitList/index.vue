<template>
  <div>
    <div class="mb-20">
      <n-button v-if="$isCode('system-unitAuth-batchAuth')" type="primary" @click="open"> 批量授权 </n-button>
      <n-button v-if="$isCode('system-unitAuth-batchAuth-delete')" @click="deleteBatches"> 批量移除 </n-button>
    </div>
    <sh-data-table
      ref="tableRef"
      :row-key="(row) => row.id"
      :columns="columns"
      :api="orgUnitRoleRelation.listAuthUnitByRole"
      :autoload="false"
      @update:checked-row-keys="handleCheck"
    />
    <UnitAuthRole ref="dialogRef" :active-role-id="activeRoleId" @load-list="loadList"></UnitAuthRole>
  </div>
</template>

<script setup>
import { orgUnitRoleRelation } from '@/apis/org'
import { watch, ref, nextTick } from 'vue'
import UnitAuthRole from './UnitAuthRole.vue'

const props = defineProps({
  activeRoleId: {
    type: String,
    default: '',
  },
})

const columns = [
  { type: 'selection' },
  { type: 'index' },
  { title: '企业名称', key: 'unitName' },
  { title: '企业code', key: 'unitCode' },
]

const dialogRef = ref(null)
const tableRef = ref(null)
const checkRowKeys = ref([])

// 监听菜单id编号重新加载资源
watch(
  () => props.activeRoleId,
  (val) => {
    if (val) {
      nextTick(() => {
        loadList()
      })
    }
  },
  { immediate: true }
)

const loadList = async () => {
  tableRef.value.loadList({ roleId: props.activeRoleId })
}

// 批量删除
const deleteBatches = () => {
  if (!checkRowKeys.value.length) {
    $message.warning('请先选择数据')
    return
  }
  $delete(
    orgUnitRoleRelation.delete,
    { roleId: props.activeRoleId, unitIds: checkRowKeys.value },
    () => {
      loadList()
      checkRowKeys.value = []
    },
    '是否要批量移除数据？此操作不可逆'
  )
}
const handleCheck = (rowKeys) => {
  checkRowKeys.value = rowKeys
}

const open = (row) => {
  if (props.activeRoleId === '-1') {
    $message.warning('子节点不允许新增')
  } else {
    dialogRef.value.open(row)
  }
}
</script>

<style lang="scss" scoped></style>
