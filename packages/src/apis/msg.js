import { request } from '@/store'

// 消息模板
export const msgModel = {
  add: (params) => request.post('/bbxMsgModel/add', params),
  delete: (params) => request.post('/bbxMsgModel/delete', params),
  update: (params) => request.post('/bbxMsgModel/update', params),
  get: (params) => request.post('/bbxMsgModel/get', params),
  list: (params) => request.post('/bbxMsgModel/list', params),
  checkModelCode: (params) => request.post('/bbxMsgModel/checkModelCode', params),
}

// 消息任务
export const mgsTask = {
  get: (params) => request.post('/bbxMgsTask/get', params),
  list: (params) => request.post('/bbxMgsTask/listTask', params),
  taskStorageList: (params) => request.post('/bbxMgsTask/listTaskStorage', params),
  getTaskStorage: (params) => request.post('/bbxMgsTask/getTaskStorage', params),
}
