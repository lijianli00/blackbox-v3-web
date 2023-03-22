<template>
  <div class="flex items-center">
    <div
      class="node_box text-#fff rounded-4 text-center leading-14 px-5 pb-5 pt-3 text-12 min-w-40 h-40 box_shadow cursor-pointer"
      @click.stop="clickNode(nodeInfo)"
    >
      <div class="text-18">
        <component :is="Icons[svg]" class="w-1em h-1em"></component>
      </div>
      <div class="max-w-80">
        <BaseInput :node-info="nodeInfo"></BaseInput>
      </div>
    </div>
    <NodeAdd v-if="nodeInfo?.nextNode" :node-info="nodeInfo"></NodeAdd>
    <component
      :is="nodeCom[nodeInfo?.nextNode?.type]"
      v-if="nodeInfo?.nextNode"
      :node-info="nodeInfo.nextNode"
      :parent-node="nodeInfo"
    ></component>
  </div>
</template>

<script setup>
import NodeAdd from './NodeAdd.vue'
import BaseInput from './BaseInput.vue'
import { nodeCom } from './index'
import { inject } from 'vue'
import SvgStart from '@/assets/svg/start.svg'
import SvgEnd from '@/assets/svg/end.svg'

const Icons = {
  start: SvgStart,
  end: SvgEnd,
}
const clickNode = inject('clickNode')

let props = defineProps({
  nodeInfo: {
    type: Object,
    default: () => {
      return {}
    },
  },
  svg: {
    type: String,
    default: '',
  },
})
</script>

<style lang="scss" scoped>
.node_box {
  background-color: var(--node-color);
}
</style>
