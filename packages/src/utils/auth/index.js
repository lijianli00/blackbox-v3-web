import { getUserInfo } from '@/store/modules/user/helpers'
// import { app } from '@/main'

export function loadAddExample(app) {
  return () => {
    const userInfo = getUserInfo()
    // 按钮权限
    const isCode = getResourceCode(userInfo?.resourceCodes || [])
    app.config.globalProperties.$isCode = isCode
    window.$isCode = isCode

    // 菜单权限
    const isRouter = getResourceRouter(userInfo?.menuList || [])
    app.config.globalProperties.$isRouter = isRouter
    window.$isRouter = isRouter
  }
}
/**
 * 闭包，避免多次遍历
 * @param {String} code 资源code
 */
export function getResourceCode(resourceCode) {
  const obj = {}
  resourceCode.forEach((item) => {
    obj[item] = true
  })
  return function (code) {
    return !!obj[code]
  }
}

/**
 * 闭包，避免多次遍历
 * @param {String} url url
 */
const getResourceRouter = function (urlList) {
  let obj = getResourceSubRouter(urlList)
  return function (url) {
    return !!obj[url]
  }
}
function getResourceSubRouter(list) {
  let obj = {}
  list.forEach((items) => {
    const url = items.url.split('?')[0]
    obj[url] = true
    if (items.children) {
      obj = { ...obj, ...getResourceSubRouter(items.children) }
    }
  })
  return obj
}
