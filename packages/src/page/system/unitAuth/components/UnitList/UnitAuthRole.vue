<template>
  <n-modal v-model:show="modal.show" preset="card" class="w-800" :title="`批量授权`">
    <div class="pt-20">
      <n-transfer
        ref="transfer"
        v-model:value="unit.unitIds"
        target-filterable
        source-filterable
        class="h-600"
        :options="unit.list"
        virtual-scroll
      />
      <div class="text-right mt-20">
        <n-button @click="modal.show = false"> 关闭 </n-button>
        <n-button type="primary" @click="onSubmit"> 确定 </n-button>
      </div>
    </div>
  </n-modal>
</template>

<script setup>
import { reactive } from 'vue'
import { orgUnitRoleRelation } from '@/apis/org'

const props = defineProps({
  activeRoleId: {
    type: String,
    default: '',
  },
})
const emit = defineEmits(['loadList'])

const modal = reactive({
  show: false,
  loading: false,
  type: 'add',
})
const unit = reactive({
  list: [],
  unitIds: [],
})

const onSubmit = async () => {
  if (!unit.unitIds.length) {
    $message.warning('请先选择企业')
  }
  modal.loading = true
  const { code, msg } = await orgUnitRoleRelation.add({
    roleId: props.activeRoleId,
    unitIds: unit.unitIds,
  })
  if (code === 0) {
    $message.success('成功')
    emit('loadList')
    modal.show = false
  } else {
    $message.error(msg)
  }
}

// 查询未授权企业
const getNotAuthUnit = async () => {
  modal.loading = true
  const { code, msg, data } = await orgUnitRoleRelation.listNotAuthUnitByRole({
    roleId: props.activeRoleId,
    page: 1,
    limit: 1000,
  })
  if (code === 0) {
    unit.list = data.map((item) => {
      return {
        label: item.unitName,
        value: item.id,
      }
    })
  } else {
    $message.error(msg)
    unit.list = []
  }
  modal.loading = false
}

const open = () => {
  modal.show = true
  unit.unitIds = []
  getNotAuthUnit()
}

defineExpose({
  open,
})
</script>

<style lang="scss" scoped></style>
