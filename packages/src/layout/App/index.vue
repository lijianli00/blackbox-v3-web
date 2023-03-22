<template>
  <n-config-provider
    :theme-overrides="themeStore.themeOverrides"
    :theme="themeStore.naiveTheme"
    :locale="zhCN"
    :date-locale="dateZhCN"
    class="h-full bg-[#f6f9f8] dark:bg-[#101014]"
  >
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <n-spin :show="appStore.loading" class="h-full">
              <slot></slot>
            </n-spin>
            <NaiveProviderContent />
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup>
import { defineComponent, h } from 'vue'
import { zhCN, dateZhCN } from 'naive-ui'
import { setupNaiveTools, setupGlobalTools } from '@/utils'
import { loadResourceCodes } from '@/index'
import { useThemeStore, subscribeStore, useAppStore } from '@/store'

const themeStore = useThemeStore()
const appStore = useAppStore()

const NaiveProviderContent = defineComponent({
  setup(ctx) {
    // 挂载naive组件方法
    setupNaiveTools()
    // 挂载全局方法
    setupGlobalTools()
    // 挂载订阅
    subscribeStore()
    // 引入以默认加载权限
    loadResourceCodes()
  },
  render() {
    return h('div')
  },
})
</script>

<style lang="scss" scoped>
::v-deep(.n-spin-content) {
  height: 100%;
}
</style>
