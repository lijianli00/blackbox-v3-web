import { getColorPalette, lStorage } from '@/utils'
import defuateSettings from './theme.json'
import { naiveThemeOverrides } from './theme.js'

export function initThemeSettings() {
  const isProd = true || import.meta.env.PROD
  // 生产环境才缓存主题配置，本地开发实时调整配置更改配置的json
  const storageSettings = lStorage.get('theme-settings')
  if (isProd && storageSettings) {
    return storageSettings
  }
  return defuateSettings
}

/** css 暗黑模式 */
const DARK_CLASS = 'dark'
export function addDarkClass() {
  document.documentElement.classList.add(DARK_CLASS)
}
export function removeDarkClass() {
  document.documentElement.classList.remove(DARK_CLASS)
}

// 缓存主题
export function setThemeSettings(settings) {
  lStorage.set('theme-settings', settings)
}
/** 清除缓存配置 */
export function clearThemeSettings() {
  lStorage.remove('theme-settings')
}

// 主题色
export function getNaiveThemeOverrides({ themeColor, darkMode }) {
  // 黑暗模式只改变主题色
  return darkMode
    ? {
        common: {
          primaryColor: themeColor,
          primaryColorHover: getColorPalette(themeColor, 5),
          primaryColorPressed: getColorPalette(themeColor, 4),
          primaryColorSuppl: getColorPalette(themeColor, 7),
        },
      }
    : {
        ...naiveThemeOverrides,
        common: {
          ...naiveThemeOverrides.common,
          primaryColor: themeColor,
          primaryColorHover: getColorPalette(themeColor, 5),
          primaryColorPressed: getColorPalette(themeColor, 4),
          primaryColorSuppl: getColorPalette(themeColor, 7),
        },
      }
}
