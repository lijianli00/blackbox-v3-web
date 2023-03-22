export const RouterMsg = [
  {
    path: 'msgModel',
    meta: { title: '消息模板' },
    component: () => import('@/page/msg/model/index.vue'),
  },
  {
    path: 'msgTask',
    meta: { title: '消息任务' },
    component: () => import('@/page/msg/task/index.vue'),
  },
  {
    path: 'msgTaskStorage',
    meta: { title: '归档消息任务' },
    component: () => import('@/page/msg/taskStorage/index.vue'),
  },
]
