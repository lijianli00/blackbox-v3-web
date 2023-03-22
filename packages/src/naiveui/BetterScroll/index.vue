<template>
  <div ref="bsWrap" class="h-full">
    <div ref="bsContent" class="inline-block" :class="{ 'h-full': !isScrollY }">
      <slot></slot>
    </div>
  </div>
</template>

<script setup name="ShBetterScroll">
import BScroll from '@better-scroll/core'
import { onMounted, ref, computed, watch } from 'vue'
import { useElementSize } from '@vueuse/core'

const props = defineProps({
  options: {
    type: Object,
    default: () => {
      return {}
    },
  },
})

const bsWrap = ref()
const instance = ref()
const bsContent = ref()

const isScrollY = computed(() => Boolean(props.options.scrollY))

// 初始化bs
const initBetterScroll = () => {
  if (!bsWrap.value) return
  instance.value = new BScroll(bsWrap.value, props.options)
}

// 滚动元素发生变化，刷新BS
const { width: wrapWidth } = useElementSize(bsWrap)
const { width, height } = useElementSize(bsContent)
watch([() => wrapWidth.value, () => width.value, () => height.value], () => {
  if (instance.value) {
    instance.value.refresh()
  }
})

onMounted(() => {
  initBetterScroll()
})

// 抛出
defineExpose({ instance })
</script>
