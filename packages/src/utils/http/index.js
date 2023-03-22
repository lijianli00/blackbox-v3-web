import axios from 'axios'
import { resResolve, resReject, reqResolve, reqReject } from './interceptors'
import { useAppStore } from '@/store'

export function createAxios(options = {}) {
  const defaultOptions = {
    baseURL: '',
    timeout: 30000,
    method: 'post',
  }
  const service = axios.create({
    ...defaultOptions,
    ...options,
  })
  service.interceptors.request.use(reqResolve, reqReject)
  service.interceptors.response.use(resResolve, resReject)
  return service
}

export const setupAxios = () => {
  const appStore = useAppStore()
  return createAxios({
    baseURL: appStore.baseURL,
  })
}
