import { useUserStore } from '@/store'
import { isNullOrUndef } from '../is'
import axios from 'axios'

const CancelToken = axios.CancelToken
let source = CancelToken.source()

export function reqResolve(config) {
  // 防止缓存，给get请求加上时间戳
  if (config.method === 'get') {
    config.params = { ...config.params, t: new Date().getTime() }
  }

  const userStore = useUserStore()

  const token = userStore.token
  if (token) {
    /**
     * * jwt token
     * ! 认证方案: Bearer
     */
    // config.headers.Authorization = config.headers.Authorization || 'Bearer ' + token
    config.headers.authorization = `Bearer ${config.headers.token || token}`
  }
  config.cancelToken = source.token // 全局添加cancelToken
  return config
}

export function reqReject(error) {
  return Promise.reject(error)
}

export function resResolve(response) {
  if (response.headers['content-type'].includes('text/plain;charset=UTF-8') && response.data) {
    return response.data
  }
  return response?.data?.code === 0 ? response?.data : resReject(response?.data)
}

export function resReject(error) {
  let { code, msg } = error || {}
  if (isNullOrUndef(code)) {
    // 未知错误
    code = 99
    msg = '未知错误'
  } else if (code === 5) {
    msg = msg || '登录已过期'
    source.cancel() // 取消其他正在进行的请求
    setTimeout(() => {
      // 重新赋值,保证后续操作的请求可正常发送
      source = axios.CancelToken.source()
    }, 1000)

    if (axios.isCancel(error)) {
      // 取消请求的情况下，终端Promise调用链
      return new Promise(() => {})
    }
    logout()
  }
  console.error(`【${code}】 ${msg}`)
  return Promise.resolve({ ...error, msg })
}

const logout = () => {
  $dialog.info({
    title: '提示',
    content: '登录过期,返回登录页？',
    positiveText: '确定',
    onPositiveClick: async () => {
      const userStore = useUserStore()
      userStore.logout()
    },
  })
}
