import { defineStore } from 'pinia'
import { tags } from './helpers'
import { onLink } from '../../index'
import { sStorage } from '@/utils'

export const useTagsStore = defineStore('tag', {
  state() {
    return {
      tags: tags || [],
    }
  },
  actions: {
    /** 当前激活状态的页签索引 */
    activeTabIndex(activeMenu) {
      return this.tags.findIndex((item) => item.url === activeMenu)
    },
    setTags(tags) {
      this.tags = tags
      sStorage.set('tags', tags)
    },
    addTag(tag = {}) {
      if (this.tags.some((item) => item.url === tag.url)) return
      this.setTags([...this.tags, tag])
    },
    removeTag(url, activeMenu) {
      if (url === activeMenu) {
        const activeIndex = this.tags.findIndex((item) => item.url === url)
        if (activeIndex > 0) {
          onLink(this.tags[activeIndex - 1].url)
        } else {
          onLink(this.tags[activeIndex + 1].url)
        }
      }
      this.setTags(this.tags.filter((tag) => tag.url !== url))
    },
    removeOther(url) {
      this.setTags(this.tags.filter((tag) => tag.url === url))
    },
    removeLeft(activeMenu) {
      const curIndex = this.tags.findIndex((item) => item.url === activeMenu)
      const filterTags = this.tags.filter((item, index) => index >= curIndex)
      this.setTags(filterTags)
      if (!filterTags.find((item) => item.url === activeMenu)) {
        router.push(filterTags[filterTags.length - 1].url)
      }
    },
    removeRight(activeMenu) {
      const curIndex = this.tags.findIndex((item) => item.url === activeMenu)
      const filterTags = this.tags.filter((item, index) => index <= curIndex)
      this.setTags(filterTags)
      if (!filterTags.find((item) => item.url === activeMenu)) {
        router.push(filterTags[filterTags.length - 1].url)
      }
    },
  },
})
