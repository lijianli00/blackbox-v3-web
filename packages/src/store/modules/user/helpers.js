import { sStorage } from '@/utils'

// 用户信息标识
export const USER_INFO = 'ACCESS_USERINFO'
export const USER_TOKEN = 'ACCESS_TOKEN'

export function getUserInfo() {
  return sStorage.get(USER_INFO)
}
export function getToken() {
  return sStorage.get(USER_TOKEN)
}

// 格式化菜单过滤掉空的children
export function fromatMenuList(list = []) {
  return list.map((item) => {
    if (item.children && item.children.length) {
      return {
        ...item,
        children: fromatMenuList(item.children),
      }
    } else {
      delete item.children
      return item
    }
  })
}
