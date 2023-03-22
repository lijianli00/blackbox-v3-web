<template>
  <div class="flex items-center">
    <div class="relative mx-1" @click.stop="clickNode(nodeInfo)">
      <div class="arrows absolute top-50% mt--4 left--6 border-4 border-transparent border-l-red"></div>
      <div class="appro_wrap rounded-4 box_shadow w-120 overflow-hidden relative z-2 cursor-pointer">
        <div class="title h-28 leading-28 flex items-center w-full text-#fff pr-5">
          <div class="w-3 h-14 bg-#ffffff4d rounded-r-2"></div>
          <div class="px-2 flex-1 w-0">
            <BaseInput :node-info="nodeInfo"></BaseInput>
          </div>
          <component :is="closeIcon" class="close w-14 h-14 hidden" @click="deleteNode"></component>
        </div>
        <div class="h-36 flex items-center justify-between px-10 text-#606877 bg-#fff">
          <div class="">所有人</div>
          <component :is="arrowRight" class="rotate-270 w-18 h-18"></component>
        </div>
      </div>
    </div>
    <NodeAdd :node-info="nodeInfo"></NodeAdd>
    <component
      :is="nodeCom[nodeInfo?.nextNode?.type]"
      :node-info="nodeInfo.nextNode"
      :parent-node="nodeInfo"
    ></component>
  </div>
</template>

<script setup>
import { nodeCom } from './index'
import NodeAdd from './NodeAdd.vue'
import BaseInput from './BaseInput.vue'
import { inject } from 'vue'
import arrowRight from '@/assets/svg/arrow-right.svg'
import closeIcon from '@/assets/svg/close.svg'

const clickNode = inject('clickNode')

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
  childIndex: {
    type: Number,
    default: -1,
  },
})

const emit = defineEmits(['deleteBranch'])

const deleteNode = () => {
  if (props.childIndex === -1) {
    // eslint-disable-next-line vue/no-mutating-props
    props.parentNode.nextNode = props.nodeInfo.nextNode
  } else if (props.parentNode.childNodes.length <= 2) {
    $dialog.warning({
      title: '警告',
      content: '分支至少需要有两个节点，继续删除将会删除整个分支节点，是否确定删除?',
      positiveText: '确定',
      negativeText: '关闭',
      onPositiveClick: async () => {
        emit('deleteBranch')
      },
    })
  } else {
    // eslint-disable-next-line vue/no-mutating-props
    props.parentNode.childNodes.splice(props.childIndex, 1)
  }
}
</script>

<style lang="scss" scoped>
.arrows {
  border-left-color: #8996af;
  border-left-width: 6px;
}
.appro_wrap {
  .title {
    background-color: var(--node-color);
  }
  &:hover {
    box-shadow: 0 0 0 1px var(--node-color), 0 0 5px 4px rgb(0 0 0 / 20%);
    .close {
      display: inherit;
    }
  }
}
</style>
