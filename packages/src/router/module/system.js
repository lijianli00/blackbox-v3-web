export const RouterSystem = [
  {
    path: 'dictionary',
    meta: { title: '数据字典' },
    component: () => import('@/page/system/dictionary/index.vue'),
  },
  {
    path: 'role',
    meta: { title: '角色管理' },
    component: () => import('@/page/system/role/index.vue'),
  },
  {
    path: 'menu',
    meta: { title: '菜单管理' },
    component: () => import('@/page/system/menu/index.vue'),
  },
  {
    path: 'unit',
    meta: { title: '企业管理' },
    component: () => import('@/page/system/unit/index.vue'),
  },
  {
    path: 'team',
    meta: { title: '团队管理' },
    component: () => import('@/page/system/team/index.vue'),
  },
  {
    path: 'dept',
    meta: { title: '部门管理' },
    component: () => import('@/page/system/dept/index.vue'),
  },
  {
    path: 'appClient',
    meta: { title: '应用管理' },
    component: () => import('@/page/system/appClient/index.vue'),
  },
  {
    path: 'person',
    meta: { title: '成员管理' },
    component: () => import('@/page/system/person/index.vue'),
  },
  {
    path: 'unitAuth',
    meta: { title: '企业授权' },
    component: () => import('@/page/system/unitAuth/index.vue'),
  },
  {
    path: 'workbench',
    meta: { title: '工作台' },
    component: () => import('@/page/system/unitAuth/index.vue'),
  },
]
