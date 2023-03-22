<template>
  <sh-tree-select-person
    :value="active"
    class="w-full"
    v-bind="$attrs"
    :multiple="multiple"
    @update:value="update"
  ></sh-tree-select-person>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  value: {
    type: [String, Array, Object],
    default: '',
  },
  multiple: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['update:value'])
const active = ref(null)

const update = (value, option) => {
  // 是否多选
  if (props.multiple) {
    // 过滤掉部门
    const users = option.filter((item) => {
      if (item.type === 'person') {
        return true
      }
    })
    emit(
      'update:value',
      users.map((item) => {
        return {
          userId: item.id,
          userName: item.name,
          unitId: item.unitId,
        }
      })
    )
    active.value = users.map((item) => {
      return item.id
    })
  } else {
    if (option.type === 'person') {
      emit('update:value', [
        {
          userId: option.id,
          userName: option.name,
          unitId: option.unitId,
        },
      ])
      active.value = value
    }
  }
}
</script>

<style lang="scss" scoped></style>
