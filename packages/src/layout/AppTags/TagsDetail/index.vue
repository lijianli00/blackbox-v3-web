<template>
  <div ref="tabRef" class="h-full" :class="[isChromeMode ? 'flex items-end' : 'flex-y-center']">
    <component
      :is="activeComponent"
      v-for="item in tagsStore.tags"
      :key="item.url"
      :is-active="userStore.activeMenu === item.url"
      :dark-mode="themeStore.darkMode"
      :primary-color="themeStore.themeColor"
      :class="{ 'ml-10px': !isChromeMode }"
      @click="update(item)"
      @close="handleClose(item)"
      @contextmenu="handleContextMenu($event, item)"
    >
      <div class="flex-center">
        <sh-icon v-if="themeStore.menu.showIcon" class="align-middle mr-4" :name="item.svg || 'menu'"></sh-icon>
        {{ item.menuName }}
      </div>
    </component>
  </div>
  <ContextMenu
    v-model:show="contextMenuOption.show"
    :url="contextMenuOption.url"
    :x="contextMenuOption.x"
    :y="contextMenuOption.y"
  ></ContextMenu>
</template>

<script setup>
import { useTagsStore, useUserStore, useThemeStore } from '@/store'
import { computed, reactive, nextTick, watch, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ButtonTab, ChromeTab } from '@soybeanjs/vue-admin-tab'
import ContextMenu from './ContextMenu.vue'

const emit = defineEmits(['scroll'])
const tagsStore = useTagsStore()
const userStore = useUserStore()
const themeStore = useThemeStore()
const router = useRouter()
const tabRef = ref()

const isChromeMode = computed(() => themeStore.tab.mode === 'chrome')
const activeComponent = computed(() => (isChromeMode.value ? ChromeTab : ButtonTab))

const handleClose = ({ url }) => {
  if (tagsStore.tags.length === 1) {
    $message.error('最后一个了')
    return
  }
  tagsStore.removeTag(url, userStore.activeMenu)
}
const update = ({ url }) => {
  router.push(url)
}

const contextMenuOption = reactive({
  show: false,
  x: 0,
  y: 0,
  url: '',
})

// 右击菜单
async function handleContextMenu(e, { url }) {
  // 阻止冒泡
  e.preventDefault()
  const { clientX, clientY } = e
  hideContextMenu()
  setContextMenu(clientX, clientY, url)
  await nextTick()
  showContextMenu()
}
function showContextMenu() {
  contextMenuOption.show = true
}
function hideContextMenu() {
  contextMenuOption.show = false
}
function setContextMenu(x, y, url) {
  Object.assign(contextMenuOption, { x, y, url })
}

async function getActiveTabClientX() {
  await nextTick()
  const activeTabIndex = tagsStore.activeTabIndex(userStore.activeMenu)
  if (tabRef.value && tabRef.value.children.length && tabRef.value.children[activeTabIndex]) {
    const activeTabElement = tabRef.value.children[activeTabIndex]
    const { x, width } = activeTabElement.getBoundingClientRect()
    const clientX = x + width / 2
    setTimeout(() => {
      emit('scroll', clientX)
    }, 50)
  }
}

watch(
  () => userStore.activeMenu,
  () => {
    getActiveTabClientX()
  },
  {
    immediate: true,
  }
)
</script>

<style lang="scss" scoped>
// ::v-deep(.admin-tab__chrome-tab__divider) {
//   background-color: #e1e7f8;
//   height: 28px;
// }
::v-deep(.admin-tab__chrome-tab) {
  .admin-tab__chrome-tab__bg {
    display: none;
  }
  .admin-tab__chrome-tab__divider {
    background-color: #e1e7f8;
    height: 28px;
  }
  .admin-tab__chrome-tab__divider--hide {
    opacity: 1;
  }
}
::v-deep(.admin-tab__chrome-tab--active) {
  color: var(--n-text-color);
  // border-right: 1px solid #e1e7f8;
  &::after {
    position: absolute;
    content: '';
    width: 88%;
    height: 1px;
    background-color: var(--n-text-color);
    bottom: 0;
    left: 11px;
  }
}
</style>
