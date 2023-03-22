<template>
  <sh-container class="h-full">
    <div class="h-full flex">
      <div ref="bsWrapper" class="flex-1-hidden h-full">
        <sh-better-scroll ref="bsScroll" :options="{ scrollX: true, scrollY: false }">
          <TagsDetail @scroll="handleScroll"></TagsDetail>
        </sh-better-scroll>
      </div>
      <ReloadButton class="w-64px"></ReloadButton>
    </div>
  </sh-container>
</template>

<script setup name="NlAppTags">
import { ref } from 'vue'
import TagsDetail from './TagsDetail/index.vue'
import { useElementBounding } from '@vueuse/core'
import ReloadButton from './ReloadButton/index.vue'

const bsScroll = ref()
const bsWrapper = ref()
const { width: bsWrapperWidth, left: bsWrapperLeft } = useElementBounding(bsWrapper)

// 选择时自动自动到中间位置
const handleScroll = (clientX) => {
  const currentX = clientX - bsWrapperLeft.value
  const deltaX = currentX - bsWrapperWidth.value / 2
  if (bsScroll.value) {
    const { maxScrollX, x: leftX } = bsScroll.value.instance
    const rightX = maxScrollX - leftX
    const update = deltaX > 0 ? Math.max(-deltaX, rightX) : Math.min(-deltaX, -leftX)
    bsScroll.value?.instance.scrollBy(update, 0, 300)
  }
}
</script>

<style lang="scss" scoped></style>
