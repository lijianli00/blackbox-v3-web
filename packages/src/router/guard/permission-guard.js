import { getToken } from '@/store/modules/user/helpers'

export function createPermissionGuard(router) {
  router.beforeEach(async (to, from, next) => {
    const { notAuth, notLogin } = to.meta
    const token = getToken()
    // 免登录 || 免授权 || 授权页
    if (notLogin || (token && notAuth) || (token && $isRouter(to.path))) {
      next()
    } else if (token && !$isRouter(to.path) && !notAuth) {
      next({ path: '/405' })
    } else {
      next({ path: '/login' })
    }
  })
}
