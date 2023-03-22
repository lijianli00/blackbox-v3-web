<template>
  <div>
    <div class="mb-20">
      <n-button v-if="$isCode('system-role-batchAuth')" type="primary" @click="open"> 批量授权 </n-button>
      <n-button v-if="$isCode('system-role-batchAuth-delete')" @click="deleteBatches"> 批量移除 </n-button>
    </div>
    <sh-data-table
      ref="tableRef"
      :row-key="(row) => row.id"
      :columns="columns"
      :api="orgRolePersonRelation.listAuthPersonByRole"
      :autoload="false"
      @update:checked-row-keys="handleCheck"
    />
    <AuthRole ref="dialogRef" :active-role-id="activeRoleId" @load-list="loadList"></AuthRole>
  </div>
</template>

<script setup>
import { orgRolePersonRelation } from '@/apis/org'
import { watch, ref, nextTick } from 'vue'
import AuthRole from './AuthRole.vue'

const props = defineProps({
  activeRoleId: {
    type: String,
    default: '',
  },
})

const columns = [
  { type: 'selection' },
  { type: 'index' },
  { title: '姓名', key: 'name' },
  {
    title: '性别',
    key: 'gender',
    render(row) {
      return row.gender ? '男' : '女'
    },
  },
  { title: '手机号', key: 'phone' },
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
    orgRolePersonRelation.delete,
    { roleId: props.activeRoleId, personIds: checkRowKeys.value },
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
    dialogRef.value.open()
  }
}
</script>

<style lang="scss" scoped></style>
