<template>
  <div class="sh-content-layout flex flex-col">
    <div
      v-if="$slots.header"
      class="py-8 px-20 mb-10 rounded-8 bg-[#fff] dark:bg-[#18181c] border border-[#fff] dark:border-[#ffffff17]"
    >
      <slot name="header"></slot>
    </div>
    <div
      class="bg-[#fff] dark:bg-[#18181c] border border-[#fff] dark:border-[#ffffff17] p-20 h-full flex-1 rounded-t-8"
    >
      <div v-if="$slots.btn" :class="btnClass">
        <slot name="btn"></slot>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup name="ShContentLayout">
const props = defineProps({
  btnClass: {
    type: String,
    default: 'mb-20',
  },
})
</script>

<style lang="scss" scoped>
.sh-content-layout {
  background-color: transparent !important;
  border: none !important;
  padding: 0 !important;
}
</style>
