import { request } from '@/store'

/**
 * 认证鉴权
 */
export const auth = {
  login: (params, config) => request.post('/oauth/login', params, config),
  logout: (params) => request.post('/logout', params),
  captcha: (params) => request.get('/auth/captcha', params),
  getUser: (params) => request.post('/oauth/getUser', params),
  authorize: (params) => request.post('/oauth/authorize', params),
  getToken: (params) => request.post('/oauth/getToken', params),
  accessToken: (params) => request.post('/oauth/accessToken', params),
}

// 权限
export const permission = {
  getUserPermission: (params) => request.post('/bbxPermission/getUserPermission', params),
}

// axios.create({
//   ...defaultOptions,
//   ...options,
//   // headers: {
//   //   'Content-Type': 'plain/text',
//   // },
// })
