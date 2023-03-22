<template>
  <div class="rounded-4 border border-#E2E6F2 mb-16">
    <div class="title leading-32 pl-20 pr-10 flex justify-between">
      <div class="text-#2263E8">条件{{ index + 1 }}</div>
      <div class="text-#9097a5">
        <SvgAdd class="w-1em h-1em cursor-pointer" @click="emit('addItem', index)"></SvgAdd>
        <SvgDelete class="w-1em h-1em ml-5 cursor-pointer" @click="emit('deleteWrap', index)"></SvgDelete>
      </div>
    </div>
    <div class="p-20">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import SvgAdd from '@/assets/svg/add.svg'
import SvgDelete from '@/assets/svg/delete.svg'

defineProps({
  index: {
    type: Number,
    default: 0,
  },
})
const emit = defineEmits(['addItem', 'deleteWrap'])
</script>

<style lang="scss" scoped>
.title {
  background: linear-gradient(268.94deg, #edf5fc 0%, #b6ccf7 100%);
}
</style>
