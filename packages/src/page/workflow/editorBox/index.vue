<template>
  <div class="min-h-500 flex items-center editor_box">
    <NodeStart :node-info="nodeInfo"></NodeStart>
  </div>
</template>

<script setup>
import NodeStart from './components/NodeStart.vue'

defineProps({
  nodeInfo: {
    type: Object,
    default: () => {
      return {}
    },
  },
})
</script>

<style lang="scss" scoped>
::v-deep(.box_shadow) {
  box-shadow: 0 4px 16px rgba(15, 33, 71, 0.16);
}
.editor_box {
  width: max-content;
}
</style>
