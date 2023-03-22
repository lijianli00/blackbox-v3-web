<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="flex leading-40">
    <div class="w-320">
      <n-checkbox v-model:checked="option.selected" :label="option.name" @update:checked="checkedMenu" />
    </div>
    <div class="flex-1">
      <n-space>
        <div v-for="(item, index) in option.resources" :key="index">
          <n-checkbox v-model:checked="item.selected" :disabled="!option.selected" :label="item.resourceName" />
          <ResourceItem
            v-if="item.classList && item.classList.length"
            :item="item"
            :class-type-id="classTypeId"
          ></ResourceItem>
        </div>
      </n-space>
    </div>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import ResourceItem from './ResourceItem.vue'

const props = defineProps({
  option: {
    type: Object,
    default: () => {
      return {}
    },
  },
  classTypeId: {
    type: String,
    default: '',
  },
  treeList: {
    // 整颗资源树
    type: Array,
    default: () => {
      return []
    },
  },
})

watch(
  () => props.option.selected,
  (val) => {
    props.option.resources.forEach((item) => {
      item.selected = val
    })
  }
)

// 选中取消菜单时默认把下面子菜单也选中
const checkedMenu = (checked) => {
  // 有下级的时候默认选中下级
  if (props.option.children) {
    recursionCheckedTree(props.option.children, checked)
  }
  recursionCheckedParentTree(props.treeList, checked)
}
// 递归选中子菜单
const recursionCheckedTree = (tree, checked) => {
  tree.forEach((item) => {
    item.selected = checked
    if (item.children) {
      recursionCheckedTree(item.children, checked)
    }
  })
}
const recursionCheckedParentTree = (tree, checked) => {
  for (const key in tree) {
    if (tree[key].id === props.option.id) {
      return true
    } else if (tree[key].children && recursionCheckedParentTree(tree[key].children, checked)) {
      // 如果是选中状态默认把父级选中
      if (checked) {
        tree[key].selected = true
      } else {
        // 取消状态，如果没有其它子元素被选中
        let num = 0
        for (const i in tree[key].children) {
          if (tree[key].children[i].selected) {
            num++
          }
        }
        // 则取消选中状态
        if (num === 0) {
          tree[key].selected = false
        }
      }
      return true
    }
  }
  return false
}
</script>

<style lang="scss" scoped></style>
