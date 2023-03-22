export const RouterWorkflow = [
  {
    path: '/workflow/model',
    meta: { title: '工作流' },
    component: () => import('@/page/workflow/model/index.vue'),
  },
  {
    path: '/workflow/task',
    meta: { title: '任务管理' },
    component: () => import('@/page/workflow/task/index.vue'),
  },
  {
    path: '/workflow/systemService',
    meta: { title: '系统业务' },
    component: () => import('@/page/workflow/systemService/index.vue'),
  },
]

export const RouterWorkflowBlank = [
  {
    path: '/workflow/editor/:id',
    meta: { title: '工作流编辑器', notAuth: true },
    component: () => import('@/page/workflow/editor/index.vue'),
  },
]
