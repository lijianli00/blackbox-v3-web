<template>
  <router-view
    v-slot="{ Component, route }"
    :style="{
      '--primaryColor': themeVars.primaryColor,
      '--primaryColorHover': themeVars.primaryColorHover,
      '--primaryBgColor': primaryBgColor,
    }"
  >
    <transition
      name="fade-slide"
      mode="out-in"
      appear
      @before-leave="handleBeforeLeave"
      @after-enter="handleAfterEnter"
    >
      <keep-alive :include="keepAliveRouteNames">
        <component
          :is="Component"
          v-if="appStore.reloadFlag"
          :key="route.path"
          class="view_box mt-20 mx-20 p-20 rounded-10 bg-[#fff] dark:bg-[#18181c] border border-[#fff] dark:border-[#ffffff17]"
          :style="{ 'min-height': `calc(100vh - ${headerHeight}px)` }"
        />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup name="NlAppRouterView">
import { useAppStore, useThemeStore } from '@/store'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { useThemeVars } from 'naive-ui'
import { getColorPalette } from '@/utils'

const emit = defineEmits(['hide-main-overflow'])

const themeVars = useThemeVars()
const appStore = useAppStore()
const themeStore = useThemeStore()
const router = useRouter()
const allRoutes = router.getRoutes()

const headerHeight = computed(() => {
  return themeStore.header.height + themeStore.tab.height + 20
})

const keepAliveRouteNames = computed(() => {
  return allRoutes.filter((route) => route.meta?.keepAlive).map((route) => route.name)
})

// 主题背景色
const primaryBgColor = computed(() => {
  const color = themeStore.darkMode ? themeVars.primaryColor : themeStore.themeColor
  return getColorPalette(color, 1)
})

function handleBeforeLeave() {
  emit('hide-main-overflow', true)
}
function handleAfterEnter() {
  emit('hide-main-overflow', false)
}
</script>

<style lang="scss">
.primary_color {
  color: var(--primaryColor);
}
.primary_color_hover {
  color: var(--primaryColor);
  cursor: pointer;
  &:hover {
    color: var(--primaryColorHover);
  }
}
.primary_bg {
  background-color: var(--primaryBgColor);
}
.primary_color_bg {
  background-color: var(--primaryColor);
}
</style>
