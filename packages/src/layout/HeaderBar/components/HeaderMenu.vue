<template>
  <div class="flex-1-hidden h-full px-10px pt-5px">
    <n-scrollbar :x-scrollable="true" class="flex-1-hidden h-full" content-class="h-full">
      <div class="flex-y-center h-full" :style="{ justifyContent: themeStore.menu.horizontalPosition }">
        <n-menu
          mode="horizontal"
          key-field="url"
          label-field="menuName"
          :value="userStore.activeMenu"
          :options="userStore.menuList"
          :inverted="themeStore.header.inverted"
          :render-icon="renderMenuIcon"
          @update:value="handleMenuSelect"
        />
      </div>
    </n-scrollbar>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { isExternal, renderIcon } from '@/utils'
import { useUserStore, useThemeStore, useTagsStore } from '@/store'

const router = useRouter()
const userStore = useUserStore()
const themeStore = useThemeStore()
const tagsStore = useTagsStore()

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

// 菜单图标
const renderMenuIcon = (option) => {
  return themeStore.menu.showIcon && option.svg ? renderIcon(option.svg) : ''
}
</script>

<style scoped>
:deep(.n-menu-item-content-header) {
  overflow: inherit !important;
}
</style>
