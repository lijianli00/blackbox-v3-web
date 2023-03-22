<template>
  <div class="flex items-center">
    <div class="flex">
      <div class="box_wrap ml-20">
        <div
          class="absolute top-50% mt--10 left--25 border border-#c0c7d4 rounded-10 bg-#fff w-50 text-#606877 text-12 box_shadow z-2 cursor-pointer hover:scale-110 transition"
          @click="addBranch"
        >
          {{ addName }}
        </div>
        <div
          v-for="(item, index) in nodeInfo.childNodes"
          :key="index"
          :class="{ top_line: !index }"
          class="item_wrap min-h-100 pl-40 flex items-center"
        >
          <div class="line"></div>
          <component
            :is="nodeCom[item?.type]"
            :parent-node="nodeInfo"
            :node-info="item"
            :child-index="index"
            @delete-branch="deleteBranch"
          ></component>
        </div>
      </div>
    </div>
    <NodeAdd :node-info="nodeInfo"></NodeAdd>
    <component
      :is="nodeCom[nodeInfo.nextNode?.type]"
      v-if="nodeInfo.nextNode"
      :node-info="nodeInfo.nextNode"
      :parent-node="nodeInfo"
    ></component>
  </div>
</template>

<script setup>
import NodeAdd from './NodeAdd.vue'
import { nodeCom } from './index'

let props = defineProps({
  parentNode: {
    type: Object,
    default: () => {
      return {}
    },
  },
  nodeInfo: {
    type: Object,
    default: () => {
      return {}
    },
  },
  addName: {
    type: String,
    default: '添加分支',
  },
})
const emit = defineEmits(['addBranch'])

const addBranch = () => {
  emit('addBranch')
}

const deleteBranch = () => {
  // eslint-disable-next-line vue/no-mutating-props
  props.parentNode.nextNode = props.nodeInfo.nextNode
}
</script>

<style lang="scss" scoped>
.box_wrap {
  position: relative;
  background-color: var(--bg-color);
}
.item_wrap {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 1px;
    background-color: #8996af;
  }
  &::before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 1px;
    background-color: #8996af;
  }
  .line {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: #8996af;
  }
}
.item_wrap:last-child {
  &::after,
  &::before {
    height: 50%;
  }
}
.top_line {
  &::after,
  &::before {
    height: 50%;
    top: 50%;
  }
}
</style>
