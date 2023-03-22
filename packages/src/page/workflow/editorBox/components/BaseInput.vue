<template>
  <div>
    <n-input
      v-if="showInput"
      ref="inputRef"
      v-model:value="textValue"
      type="text"
      placeholder="请输入"
      size="tiny"
      autofocus
      class="w-full"
      @blur="blur"
    />
    <div v-else class="truncate px-5" @click="onClick">{{ nodeInfo.text }}</div>
  </div>
</template>

<script setup>
import { nextTick, ref } from 'vue'

let props = defineProps({
  nodeInfo: {
    type: Object,
    default: () => {
      return {}
    },
  },
})

const textValue = ref('')
const showInput = ref(false)
const inputRef = ref(false)

const onClick = async () => {
  showInput.value = true
  textValue.value = props.nodeInfo.text
  await nextTick()
  inputRef.value?.focus()
}
const blur = () => {
  showInput.value = false
  if (textValue.value) {
    // eslint-disable-next-line vue/no-mutating-props
    props.nodeInfo.text = textValue.value
  }
}
</script>

<style lang="scss" scoped>
.n-input {
  background-color: #fff3 !important;
  ::v-deep(.n-input__input-el) {
    color: #fff !important;
  }
}
</style>
