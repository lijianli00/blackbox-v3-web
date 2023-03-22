import { h } from 'vue'
import ShIcon from '@/naiveui/Icon/index.vue'

export function renderIcon(
  name,
  props = {
    style: { 'z-index': 2, position: 'relative' },
  }
) {
  return h(ShIcon, { name, ...props })
}

// 过滤children
export function filterNullChildren(list, children = 'children') {
  return list.map((item) => {
    if (item[children]?.length) {
      return {
        ...item,
        [children]: filterNullChildren(item[children]),
      }
    } else {
      delete item[children]
      return item
    }
  })
}

/**
 * @returns {string} uuid
 */
export const uuid = () =>
  'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
