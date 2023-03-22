import { request } from '@/store'

/**
 * 应用模块管理
 */

// 应用管理
export const appClient = {
  add: (params) => request.post('/bbxAppClient/add', params),
  delete: (params) => request.post('/bbxAppClient/delete', params),
  update: (params) => request.post('/bbxAppClient/update', params),
  get: (params) => request.post('/bbxAppClient/get', params),
  list: (params) => request.post('/bbxAppClient/list', params),
  refreshSecret: (params) => request.post('/bbxAppClient/refreshSecret', params),
}

// 应用菜单
export const appMenu = {
  add: (params) => request.post('/bbxAppMenu/add', params),
  delete: (params) => request.post('/bbxAppMenu/delete', params),
  update: (params) => request.post('/bbxAppMenu/update', params),
  get: (params) => request.post('/bbxAppMenu/get', params),
  getMenuTree: (params) => request.post('/bbxAppMenu/getMenuTree', params),
  getAuthTreeByClientId: (params) => request.post('/bbxAppMenu/getAuthTreeByClientId', params),
}

// 应用资源
export const appResource = {
  add: (params) => request.post('/bbxAppResource/add', params),
  delete: (params) => request.post('/bbxAppResource/delete', params),
  update: (params) => request.post('/bbxAppResource/update', params),
  findByMenuId: (params) => request.post('/bbxAppResource/findByMenuId', params),
}
