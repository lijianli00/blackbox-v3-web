<template>
  <n-tree
    :data="treeData"
    :block-line="blockLine"
    v-bind="$attrs"
    :show-irrelevant-nodes="showIrrelevantNodes"
    :render-prefix="prefix ? prefixFun : renderPrefix"
    :render-suffix="suffix ? suffixFun : renderSuffix"
  />
</template>

<script setup name="ShTree">
import { computed, h, resolveComponent } from 'vue'
import NlTreeSuffix from './NlTreeSuffix.vue'
const ShIcon = resolveComponent('sh-icon')
const props = defineProps({
  data: {
    type: Array,
    default: () => {
      return []
    },
  },
  blockLine: {
    type: Boolean,
    default: true,
  },
  renderSuffix: {
    type: Function,
    default: undefined,
  },
  suffix: {
    type: Function,
    default: undefined,
  },
  renderPrefix: {
    type: Function,
    default: undefined,
  },
  prefix: {
    type: Function,
    default: undefined,
  },
  showIrrelevantNodes: {
    type: Boolean,
    default: false,
  },
})

const treeData = computed(() => {
  clearItemChildren(props.data)
  return props.data
})
// 清理空的children
const clearItemChildren = (tree) => {
  tree.forEach((item) => {
    if (item.children) {
      if (item.children.length) {
        clearItemChildren(item.children)
      } else {
        item.children = null
      }
    }
  })
}

const suffixFun = ({ option }) => {
  return h(NlTreeSuffix, {
    treeItem: option,
    suffix: props.suffix,
  })
}
const prefixFun = ({ option }) => {
  return h(ShIcon, props.prefix(option))
}
</script>

<style lang="scss" scoped>
::v-deep(.n-tree-node-content) {
  font-size: 16px;
  .n-tree-node-content__suffix {
    display: none;
  }
  &:hover .n-tree-node-content__suffix {
    display: block;
  }
}
::v-deep(.n-tree-node-checkbox),
::v-deep(.n-tree-node-switcher) {
  height: 40px;
}
::v-deep(.n-tree-node--selected),
::v-deep(.n-tree-node--pending) {
  .n-tree-node-content__suffix {
    display: block;
  }
}
</style>
