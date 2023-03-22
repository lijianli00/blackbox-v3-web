<template>
  <n-tree-select
    v-bind="$attrs"
    label-field="name"
    key-field="id"
    :filterable="filterable"
    :options="tree.list"
    :default-expanded-keys="tree.defaultExpandedKeys"
    :render-prefix="renderPrefix"
  />
</template>

<script setup name="ShTreeSelectDept">
import { reactive, h, resolveComponent } from 'vue'
import { useDataStore } from '@/store'

const ShIcon = resolveComponent('sh-icon')
defineProps({
  filterable: {
    type: Boolean,
    default: true,
  },
})

const dataStore = useDataStore()

const tree = reactive({
  list: [],
  defaultExpandedKeys: [],
})

const getOrgDept = async () => {
  tree.list = await dataStore.getOrgDept()
  tree.list.forEach((item) => {
    tree.defaultExpandedKeys.push(item.id)
  })
}
getOrgDept()

const renderPrefix = ({ option }) => {
  return h(ShIcon, {
    name: option.type === 'team' ? 'company' : 'dept',
  })
}
</script>

<style lang="scss" scoped></style>
