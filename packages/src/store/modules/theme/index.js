import { defineStore } from 'pinia'
import { darkTheme } from 'naive-ui'
import { initThemeSettings, getNaiveThemeOverrides, setThemeSettings, clearThemeSettings } from './helpers'
import { naiveThemeOverrides } from './theme'

export const useThemeStore = defineStore('theme', {
  state: () => initThemeSettings(),
  getters: {
    /** naive-ui暗黑主题 */
    naiveTheme(state) {
      return state.darkMode ? darkTheme : undefined
    },
    themeOverrides(state) {
      return getNaiveThemeOverrides(state)
    },
  },
  actions: {
    /** 重置theme状态 */
    resetThemeStore() {
      clearThemeSettings()
      this.$reset()
    },
    /** 设置侧边栏反转色 */
    setSiderInverted(isInverted) {
      this.sider.inverted = isInverted
    },
    /** 设置头部反转色 */
    setHeaderInverted(isInverted) {
      this.header.inverted = isInverted
    },
    /** 设置头部高度 */
    setHeaderHeight(height) {
      if (height) {
        this.header.height = height
      }
    },
    /** 设置多页签高度 */
    setTabHeight(height) {
      if (height) {
        this.tab.height = height
      }
    },
    /** 设置多页签缓存 */
    setTabIsCache(isCache) {
      this.tab.isCache = isCache
    },
    /** 侧边栏宽度 */
    setSiderWidth(width) {
      if (width) {
        this.sider.width = width
      }
    },
    /** 侧边栏折叠时的宽度 */
    setSiderCollapsedWidth(width) {
      this.sider.collapsedWidth = width
    },
    /** 设置布局模式 */
    setLayoutMode(mode) {
      this.layout.mode = mode
    },
    /** 设置头部面包屑可见 */
    setHeaderCrumbVisible(visible) {
      this.header.crumb.visible = visible
    },
    /** 设置头部面包屑图标可见 */
    setHeaderCrumbIconVisible(visible) {
      this.header.crumb.showIcon = visible
    },
    /** 设置菜单图标可见 */
    setMenuIconVisible(visible) {
      this.menu.showIcon = visible
    },
    /**设置多页签模式 */
    setTabMode(mode) {
      this.tab.mode = mode
    },
    /** 设置多页签可见 */
    setTabVisible(visible) {
      this.tab.visible = visible
    },
    // 设置黑暗主题
    setDarkTheme() {
      this.darkMode = !this.darkMode
    },
    // 设置默认主题样式
    setThemeColor(color) {
      this.themeColor = color
    },
    /** 缓存主题配置 */
    cacheThemeSettings() {
      setThemeSettings(this.$state)
    },
    // 还原主题样式
    removeThemeColor() {
      this.themeColor = naiveThemeOverrides.common.primaryColor
    },
  },
})
