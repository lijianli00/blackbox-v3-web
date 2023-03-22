export const RouterError404 = {
  path: '/:pathMatch(.*)*',
  meta: { title: '404', notLogin: true },
  component: () => import('@/page/error/error-404.vue'),
}

export const RouterError405 = {
  path: '405',
  meta: { title: '405', notLogin: true },
  component: () => import('@/page/error/error-405.vue'),
}
export const RouterError500 = {
  path: '/500',
  meta: { title: '500', notLogin: true },
  component: () => import('@/page/error/error-500.vue'),
}

export const RouterError = [RouterError500, RouterError405, RouterError404]
