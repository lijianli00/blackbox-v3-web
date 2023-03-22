import { defineStore } from 'pinia'
import { nextTick } from 'vue'

export const useAppStore = defineStore('app', {
  state() {
    return {
      env: null,
      reloadFlag: true, // 重载页面
      collapsed: false, // 侧边栏折叠状态
      settingDrawerVisible: false, // 项目配置的抽屉可见状态
      loading: false,
      router: null,
    }
  },
  getters: {
    title() {
      return this.env?.VITE_APP_TITLE
    },
    baseURL() {
      return this.env?.VITE_APP_BASE_API
    },
  },
  actions: {
    /** 设置侧边栏折叠状态 */
    setSiderCollapse(collapse) {
      this.collapsed = collapse
    },
    //**设置抽屉的可见性 */
    setSettingDrawer(visible) {
      this.settingDrawerVisible = visible
    },
    setEnv(env) {
      this.env = env
    },
    setRouter(router) {
      this.router = router
    },
    onLink(url) {
      this.router.push(url)
    },
    /** 重新加载页面 */
    async reloadPage() {
      $loadingBar.start()
      this.reloadFlag = false
      await nextTick()
      this.reloadFlag = true

      setTimeout(() => {
        document.documentElement.scrollTo({ left: 0, top: 0 })
        $loadingBar.finish()
      }, 100)
    },
  },
})
