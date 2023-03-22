import { useAppStore } from '@/store'
// 设置项目title
export function createPageTitleGuard(router) {
  const appStore = useAppStore()
  router.afterEach((to) => {
    const pageTitle = to.meta?.title
    const baseTitle = appStore.title
    if (pageTitle) {
      document.title = `${pageTitle} | ${baseTitle}`
    } else {
      document.title = baseTitle
    }
  })
}
