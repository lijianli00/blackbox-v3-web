<template>
  <div class="w-50 flex-center relative">
    <div class="h-1 bg-#8996AF absolute top-50% w-full"></div>
    <n-popover placement="bottom" trigger="manual" :show="showPopover" @clickoutside="clickoutside">
      <template #trigger>
        <div
          class="rounded-50% bg-#4A86FF w-20 h-20 text-center text-#fff cursor-pointer z-2 hover:scale-110 transition"
          @click="showPopover = true"
        >
          <div class="leading-20 text-16 mt--1">+</div>
        </div>
      </template>

      <div class="text-#606877 my-10">
        <div
          v-for="item in list"
          :key="item.svg"
          class="flex items-center px-5 py-10 cursor-pointer"
          @click="onClick(item)"
        >
          <!-- <sh-icon class="text-24" :name="item.svg"></sh-icon> -->
          <component :is="item.svg" class="w-1em h-1em text-24"></component>
          <div class="ml-10">{{ item.name }}</div>
        </div>
      </div>
    </n-popover>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { cloneDeep } from 'lodash'
import SvgApprove from '@/assets/svg/flow/approve.svg'
import SvgSub from '@/assets/svg/flow/sub.svg'
import SvgConditionBranch from '@/assets/svg/flow/condition-branch.svg'
import SvgChoicenBranch from '@/assets/svg/flow/choice-branch.svg'
import SvgParallelBranch from '@/assets/svg/flow/parallel-branch.svg'
import SvgTimer from '@/assets/svg/flow/timer.svg'
import { ConditionBranchData, ApproData } from '../js/config'

let props = defineProps({
  nodeInfo: {
    type: Object,
    default: () => {
      return {}
    },
  },
})

const list = [
  {
    name: '审批节点',
    svg: SvgApprove,
    render: () => {
      return cloneDeep(ApproData)
    },
  },
  // {
  //   name: '子流程',
  //   svg: SvgSub,
  //   render: () => {
  //     return {
  //       type: 'APPROVAL',
  //       text: '子流程',
  //       nextNode: null,
  //       childNodes: [],
  //     }
  //   },
  // },
  {
    name: '条件分支',
    svg: SvgConditionBranch,
    render: () => {
      return cloneDeep(ConditionBranchData)
    },
  },
  {
    name: '选择分支',
    svg: SvgChoicenBranch,
    type: 'CHOICE_BRANCH',
    render: () => {
      return {
        type: 'CHOICE_BRANCH',
        text: '选择分支',
        nextNode: null,
        childNodes: [
          {
            type: 'APPROVAL',
            text: '审批1',
            nextNode: null,
            childNodes: [],
          },
          {
            type: 'APPROVAL',
            text: '审批2',
            nextNode: null,
            childNodes: [],
          },
        ],
      }
    },
  },
  {
    name: '并行分支',
    svg: SvgParallelBranch,
    render: () => {
      return {
        type: 'PARALLEL_BRANCH',
        text: '并行分支',
        nextNode: null,
        childNodes: [
          {
            type: 'APPROVAL',
            text: '审批1',
            nextNode: null,
            childNodes: [],
          },
          {
            type: 'APPROVAL',
            text: '审批2',
            nextNode: null,
            childNodes: [],
          },
        ],
      }
    },
  },
  // {
  //   name: '定时器',
  //   svg: SvgTimer,
  //   render: () => {
  //     return {
  //       type: 'TIMER',
  //       text: '定时器',
  //       nextNode: null,
  //       childNodes: [],
  //     }
  //   },
  // },
]

const emit = defineEmits(['add'])

const showPopover = ref(false)
const clickoutside = () => {
  showPopover.value = false
}

const onClick = (item) => {
  clickoutside()
  add(item.render())
}
const add = (item) => {
  const nextNode = cloneDeep(props.nodeInfo.nextNode)
  // eslint-disable-next-line vue/no-mutating-props
  props.nodeInfo.nextNode = {
    ...item,
    nextNode,
  }
}
</script>

<style lang="scss" scoped></style>
