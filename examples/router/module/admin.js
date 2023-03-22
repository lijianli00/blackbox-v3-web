import { RouterError404, RouterError405 } from 'blackbox-ui'

export const admin = {
  path: '/',
  meta: { title: '系统管理', notAuth: true },
  component: () => import('~/layout/AdminLayout/index.vue'),
  children: [
    {
      path: '/workbench',
      meta: { title: '首页' },
      component: () => import('~/views/index/index.vue'),
    },
    {
      path: '/test',
      meta: { title: '测试' },
      component: () => import('~/views/test/index.vue'),
    },
    {
      path: '/markdown',
      meta: { title: '编辑器demo' },
      component: () => import('~/views/demo/index.vue'),
    },
    RouterError405,
  ],
}

export const blank = {
  path: '/blank',
  meta: { title: '空白布局' },
  component: () => import('~/layout/BlankLayout/index.vue'),
  children: [
    {
      path: '/login',
      meta: { title: '登录', notLogin: true },
      component: () => import('~/views/login/index.vue'),
    },
    RouterError404,
  ],
}
