import { useAppStore } from './modules/app'
import { createPinia } from 'pinia'
import { setupAxios } from '@/utils/http'

export function setupStore(app, env, router) {
  app.use(createPinia())
  const appStore = useAppStore()
  appStore.setEnv(env)
  appStore.setRouter(router)
  request = setupAxios()
  onLink = (url) => {
    router.push(url)
  }
}

export function onLink() {}
export function request() {}

export * from './modules/user'
export * from './modules/theme'
export * from './modules/app'
export * from './modules/tags'
export * from './modules/data'

export * from './subscribe'
