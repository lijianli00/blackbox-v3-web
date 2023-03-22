import { RouterSystem, RouterMsg, RouterFile, RouterWorkflow, RouterWorkflowBlank } from 'blackbox-ui'

export const system = {
  path: '/system',
  meta: { title: '系统管理' },
  component: () => import('~/layout/AdminLayout/index.vue'),
  children: [...RouterSystem, ...RouterMsg, ...RouterFile, ...RouterWorkflow],
}

export const systemBlank = {
  path: '/systemBlank',
  component: () => import('~/layout/BlankLayout/index.vue'),
  children: [...RouterWorkflowBlank],
}
