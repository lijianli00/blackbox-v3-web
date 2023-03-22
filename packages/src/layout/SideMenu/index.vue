<template>
  <sh-container class="shadow-xl h-full relative" :inverted="themeStore.sider.inverted">
    <div class="h-full overflow-auto">
      <div class="h-36 text-right cursor-pointer text-#c0c7d4 pr-10 pt-10 text-16">
        <sh-icon
          name="directory"
          :class="{ 'rotate-180': appStore.collapsed }"
          class="leading-36"
          @click="appStore.collapsed = !appStore.collapsed"
        ></sh-icon>
      </div>
      <n-menu
        :value="userStore.activeMenu"
        :collapsed="appStore.collapsed"
        :collapsed-width="themeStore.sider.collapsedWidth"
        :collapsed-icon-size="22"
        :options="userStore.menuList"
        key-field="url"
        label-field="menuName"
        accordion
        :render-icon="renderMenuIcon"
        :expand-icon="expandIcon"
        @update:value="handleMenuSelect"
      />
    </div>
  </sh-container>
</template>

<script setup>
import { useAppStore, useUserStore, useTagsStore, useThemeStore } from '@/store'
import { isExternal, renderIcon } from '@/utils'
import { useRouter } from 'vue-router'
import arrowRight from '@/assets/svg/arrow-right.svg'
import { h } from 'vue'

const router = useRouter()

const appStore = useAppStore()
const userStore = useUserStore()
const tagsStore = useTagsStore()
const themeStore = useThemeStore()

// 菜单图标
const renderMenuIcon = (option) => {
  return option.svg && themeStore.menu.showIcon ? renderIcon(option.svg) : renderIcon('menu-defaultMenu')
}
// 折叠图标
const expandIcon = () => {
  // return renderIcon('arrow-right')
  return h(arrowRight)
}
// 路由跳转
const handleMenuSelect = (key, item) => {
  if (isExternal(item.url)) {
    window.open(item.url)
  } else {
    // 添加keep缓存
    tagsStore.addTag(item)

    router.push(item.url)
  }
}
</script>

<style lang="scss" scoped></style>
