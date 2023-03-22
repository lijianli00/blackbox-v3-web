import { request } from '@/store'

// 流程管理
export const bbxProcessInfo = {
  add: (params) => request.post('/bbxProcessInfo/add', params),
  update: (params) => request.post('/bbxProcessInfo/update', params),
  updateStatus: (params) => request.post('/bbxProcessInfo/updateStatus', params),
  get: (params) => request.post('/bbxProcessInfo/get', params),
  list: (params) => request.post('/bbxProcessInfo/list', params),
}

// 任务管理
export const bbxProcessRunTask = {
  list: (params) => request.post('/bbxProcessRunTask/list', params),
  findNextNodes: (params) => request.post('/bbxProcessRunTask/findNextNodes', params),
  start: (params) => request.post('/bbxProcessRunTask/start', params),
  submit: (params) => request.post('/bbxProcessRunTask/submit', params),
  change: (params) => request.post('/bbxProcessRunTask/change', params),
  findByProcessDataId: (params) => request.post('/bbxProcessRunTask/findByProcessDataId', params),
  recall: (params) => request.post('/bbxProcessRunTask/recall', params),
  findBackNodes: (params) => request.post('/bbxProcessRunTask/findBackNodes', params),
  back: (params) => request.post('/bbxProcessRunTask/back', params),
}

// 系统业务
export const systemService = {
  add: (params) => request.post('/bbxProcessBusiness/add', params),
  list: (params) => request.post('/bbxProcessBusiness/list', params),
  delete: (params) => request.post('/bbxProcessBusiness/delete', params),
}

// 系统业务-条件变量
export const conditionVariable = {
  add: (params) => request.post('/bbxProcessVariable/add', params),
  update: (params) => request.post('/bbxProcessVariable/update', params),
  list: (params) => request.post('/bbxProcessVariable/list', params),
  delete: (params) => request.post('/bbxProcessVariable/delete', params),
  get: (params) => request.post('/bbxProcessVariable/get', params),
  findByBusinessId: (params) => request.post('/bbxProcessVariable/findByBusinessId', params),
}
