<template>
  <n-dropdown
    :show="dropdownShow"
    :options="options"
    :x="x"
    :y="y"
    placement="bottom-start"
    @clickoutside="handleHideDropdown"
    @select="handleSelect"
  />
</template>

<script setup>
import { useTagsStore, useAppStore, useUserStore } from '@/store'
import { renderIcon } from '@/utils'
import { computed, h } from 'vue'
import refreshSvg from '@/assets/svg/refresh.svg'
import closeSvg from '@/assets/svg/close.svg'
import closeLeftSvg from '@/assets/svg/close-left.svg'
import closeOtherSvg from '@/assets/svg/close-other.svg'
import closeRightSvg from '@/assets/svg/close-right.svg'

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  x: {
    type: Number,
    default: 0,
  },
  y: {
    type: Number,
    default: 0,
  },
  url: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:show'])

const tagsStore = useTagsStore()
const appStore = useAppStore()
const userStore = useUserStore()

const options = computed(() => [
  {
    label: '重新加载',
    key: 'reload',
    disabled: false,
    // icon: () => renderIcon('refresh'),
    icon: () => h(refreshSvg, { style: { width: '14px', height: '14px' } }),
  },
  {
    label: '关闭',
    key: 'close',
    disabled: tagsStore.tags.length <= 1,
    icon: () => h(closeSvg, { style: { width: '14px', height: '14px' } }),
  },
  {
    label: '关闭其他',
    key: 'close-other',
    disabled: tagsStore.tags.length <= 1,
    icon: () => h(closeOtherSvg, { style: { width: '14px', height: '14px' } }),
  },
  {
    label: '关闭左侧',
    key: 'close-left',
    disabled: tagsStore.tags.length <= 1 || props.url === tagsStore.tags[0].url,
    icon: () => h(closeLeftSvg, { style: { width: '14px', height: '14px' } }),
  },
  {
    label: '关闭右侧',
    key: 'close-right',
    disabled: tagsStore.tags.length <= 1 || props.url === tagsStore.tags[tagsStore.tags.length - 1].url,
    icon: () => h(closeRightSvg, { style: { width: '14px', height: '14px' } }),
  },
])

const dropdownShow = computed({
  get() {
    return props.show
  },
  set(show) {
    emit('update:show', show)
  },
})

const actionMap = new Map([
  [
    'reload',
    () => {
      appStore.reloadPage()
    },
  ],
  [
    'close',
    () => {
      tagsStore.removeTag(props.url, userStore.activeMenu)
    },
  ],
  [
    'close-other',
    () => {
      tagsStore.removeOther(props.url)
    },
  ],
  [
    'close-left',
    () => {
      tagsStore.removeLeft(props.url)
    },
  ],
  [
    'close-right',
    () => {
      tagsStore.removeRight(props.url)
    },
  ],
])

function handleHideDropdown() {
  dropdownShow.value = false
}

function handleSelect(key) {
  const actionFn = actionMap.get(key)
  actionFn && actionFn()
  handleHideDropdown()
}
</script>
