<template>
  <n-modal v-model:show="modal.show" preset="card" class="w-800" :title="`批量授权`">
    <div class="pt-20">
      <n-transfer
        ref="transfer"
        v-model:value="person.unitIds"
        target-filterable
        source-filterable
        class="h-600"
        :options="options"
        :render-source-list="renderSourceList"
        virtual-scroll
        @update:value="updateTransfer"
      />
      <div class="text-right mt-20">
        <n-button @click="modal.show = false"> 关闭 </n-button>
        <n-button type="primary" @click="onSubmit"> 确定 </n-button>
      </div>
    </div>
  </n-modal>
</template>

<script setup>
import { computed, h, reactive, resolveComponent } from 'vue'
import { orgPerson, orgRolePersonRelation } from '@/apis/org'

const ShTree = resolveComponent('sh-tree')

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
const person = reactive({
  list: [],
  unitIds: [],
  checkedKeys: [],
})
const options = computed(() => {
  return flattenTree(person.list)
})
const renderSourceList = function ({ onCheck, pattern }) {
  return h(ShTree, {
    style: 'margin: 0 4px;',
    keyField: 'id',
    labelField: 'name',
    checkable: true,
    selectable: false,
    blockLine: true,
    cascade: true,
    checkOnClick: true,
    data: person.list,
    pattern,
    checkedKeys: person.checkedKeys,
    onUpdateCheckedKeys: (checkedKeys, option) => {
      person.unitIds = []
      person.checkedKeys = []
      option.forEach((item) => {
        if (item.type === 'person') {
          person.unitIds.push(item.id)
        }
        person.checkedKeys = checkedKeys
      })
    },
  })
}
const updateTransfer = (value) => {
  person.checkedKeys = value
}

const onSubmit = async () => {
  if (!person.unitIds.length) {
    $message.warning('请先选择企业')
  }
  modal.loading = true
  let personIds = []
  for (const key in options.value) {
    if (person.unitIds.indexOf(options.value[key].id) !== -1) {
      personIds.push(options.value[key].personId)
    }
  }
  const { code, msg } = await orgRolePersonRelation.add({
    roleId: props.activeRoleId,
    personIds,
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
  const { code, msg, data } = await orgPerson.deptPersonTree()
  if (code === 0) {
    person.list = data || []
  } else {
    $message.error(msg)
    person.list = []
  }
  modal.loading = false
}
function flattenTree(list) {
  const result = []
  function flatten(_list = []) {
    _list.forEach((item) => {
      // 只有为人的时候才过滤
      if (item.type === 'person') {
        result.push({
          ...item,
          value: item.id,
          label: item.name,
        })
      }
      if (item.children && item.children.length) {
        flatten(item.children)
      }
    })
  }
  flatten(list)
  return result
}

const open = () => {
  modal.show = true
  person.unitIds = []
  person.checkedKeys = []
  getNotAuthUnit()
}

defineExpose({
  open,
})
</script>

<style lang="scss" scoped></style>
