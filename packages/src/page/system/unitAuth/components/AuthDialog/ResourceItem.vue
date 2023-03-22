<template>
  <n-dropdown
    v-if="item.classList && item.classList.length"
    trigger="hover"
    :options="item.classList"
    key-field="id"
    label-field="className"
    @select="handleSelect"
  >
    <span class="text-14 text-#3370ff cursor-pointer">
      {{ showClassName }}
      <component :is="arrowRight" class="w-14 h-14 align-middle"></component>
    </span>
  </n-dropdown>
</template>

<script setup>
import { computed, watch } from 'vue'
import arrowRight from '@/assets/svg/arrow-right.svg'

const props = defineProps({
  item: {
    type: Object,
    default: () => {
      return {}
    },
  },
  classTypeId: {
    type: String,
    default: '',
  },
})

// 默认为企业权限
const classCode = 'UNIT'

const init = () => {
  // 没有权限的时候init给默认权限
  if (!props.item.classId) {
    for (const key in props.item.classList) {
      if (props.item.classList[key].classCode === classCode) {
        // eslint-disable-next-line vue/no-mutating-props
        props.item.classId = props.item.classList[key].id
      }
    }
  }
}
init()

// 监听选中全部过滤的时候资源过滤如果有的话也选中
watch(
  () => props.classTypeId,
  (val) => {
    if (val) {
      for (const key in props.item.classList) {
        if (props.item.classList[key].id === val) {
          // eslint-disable-next-line vue/no-mutating-props
          props.item.classId = props.item.classList[key].id
        }
      }
    }
  }
)

const showClassName = computed(() => {
  for (const key in props.item.classList) {
    if (props.item.classList[key].id === props.item.classId) {
      return props.item.classList[key].className
    }
  }
  return '请选择'
})

const handleSelect = (val) => {
  // eslint-disable-next-line vue/no-mutating-props
  props.item.classId = val
}
</script>

<style lang="scss" scoped></style>
