import './styles/index.scss'
import 'uno.css'
import { setupComponents } from './naiveui'
import { loadAddExample } from './utils/auth'

export function setupBlackbox(app, router) {
  // 注册全局组件
  setupComponents(app)
  // 权限方法获取app实例
  loadResourceCodes = loadAddExample(app)
  onLink = (url) => {
    router.push(url)
  }
}
// 加载权限
export function loadResourceCodes() {}
export function onLink() {}

export * from './layout'
export * from './store'
export * from './utils'
export * from './router'
