import { defineStore } from 'pinia'
import { fromatMenuList, USER_INFO, USER_TOKEN, getToken, getUserInfo } from './helpers'
import { sStorage } from '@/utils'
import { onLink } from '@/index'

export const useUserStore = defineStore('user', {
  state() {
    return {
      token: getToken(),
      userInfo: getUserInfo(),
      activeMenu: '',
    }
  },
  getters: {
    userId() {
      return this.userInfo?.personId
    },
    name() {
      return this.userInfo?.loginName
    },
    avatar() {
      return this.userInfo?.avatar
    },
    menuList() {
      return fromatMenuList(this.userInfo?.menuList)
    },
    resourceCode() {
      return this.userInfo.resourceCodes
    },
  },
  actions: {
    // 退出登录
    async logout() {
      this.removeUserInfo()
      this.removeToken()

      onLink('/login')
    },
    // 设置用户信息
    setUserInfo(userInfo = {}) {
      this.userInfo = userInfo
      sStorage.set(USER_INFO, userInfo)
    },
    // 清除用户信息
    removeUserInfo() {
      this.userInfo = undefined
      sStorage.remove(USER_INFO)
    },

    // 设置用户信息
    setToken(token) {
      this.token = token
      sStorage.set(USER_TOKEN, token)
    },
    // 清除token
    removeToken() {
      this.token = ''
      sStorage.remove(USER_TOKEN)
    },
  },
})
