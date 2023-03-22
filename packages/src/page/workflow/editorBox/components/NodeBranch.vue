<template>
  <BaseBranch v-bind="$attrs" :node-info="nodeInfo" add-name="添加选择" @add-branch="addBranch"></BaseBranch>
</template>

<script setup>
import BaseBranch from './BaseBranch.vue'
let props = defineProps({
  nodeInfo: {
    type: Object,
    default: () => {
      return {}
    },
  },
})
const addBranch = () => {
  // eslint-disable-next-line vue/no-mutating-props
  props.nodeInfo.childNodes.push({
    text: `审批${props.nodeInfo.childNodes.length + 1}`,
    type: 'APPROVAL',
    nextNode: null,
    childNodes: [],
  })
}
</script>

<style lang="scss" scoped></style>
