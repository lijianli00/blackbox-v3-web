import { request } from '@/store'

// 用户账号
export const swUser = {
  updatePassword: (params) => request.post('/bbxUser/updatePassword', params),
  resetPassword: (params) => request.post('/bbxUser/resetPassword', params),
  updateStatus: (params) => request.post('/bbxUser/updateStatus', params),
  list: (params) => request.post('/bbxUser/list', params),
  updateRealName: (params) => request.post('/bbxUser/updateRealName', params),
}

// 数据字典组
export const swDataDictionaryGroup = {
  add: (params) => request.post('/bbxDataDictionaryGroup/add', params),
  list: (params) => request.post('/bbxDataDictionaryGroup/list', params),
  update: (params) => request.post('/bbxDataDictionaryGroup/update', params),
  delete: (params) => request.post('/bbxDataDictionaryGroup/delete', params),
}
// 数据字典
export const swDataDictionary = {
  add: (params) => request.post('/bbxDataDictionary/add', params),
  listSelect: (params) => request.post('/bbxDataDictionary/listSelect', params),
  update: (params) => request.post('/bbxDataDictionary/update', params),
  delete: (params) => request.post('/bbxDataDictionary/delete', params),
  addBatch: (params) => request.post('/bbxDataDictionary/addBatch', params),
  findTree: (params) => request.post('/bbxDataDictionary/findTree', params),
  updateBatchSortNum: (params) => request.post('/bbxDataDictionary/updateBatchSortNum', params),
}

// 文件上传
export const swFile = {
  upload: (params, options) => request.post('/bbxFileInfo/addUpload', params, options),
  listByDataId: (params) => request.post('/bbxFileInfo/listByDataId', params),
  updateEnableDownload: (params) => request.post('/bbxFileInfo/updateEnableDownload', params),
  download: ({ id, token }) => `/bbxFileInfo/getDownload?id=${id}&token=${token}`,
  list: (params) => request.post('/bbxFileInfo/list', params),
  delete: (params) => request.post('/bbxFileInfo/delete', params),
}
// 图片上传
export const swFileImg = {
  uploadImg: (params, options) => request.post('/bbxFileImg/uploadImg', params, options),
  showImg: ({ id, token, claritys = 'LOW' }) => `/bbxFileImg/getShowImg?id=${id}&token=${token}&clarity=${claritys}`,
  list: (params) => request.post('/bbxFileImg/list', params),
  delete: (params) => request.post('/bbxFileImg/delete', params),
}
