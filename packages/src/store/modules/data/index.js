import { defineStore } from 'pinia'
import { swDataDictionary } from '@/apis/sw'
import { orgPerson, orgUnitDept } from '@/apis/org'
import { filterNullChildren } from '@/utils/common'
import { filterDictionaryStatus } from './helpers'
import { cloneDeep } from 'lodash'

export const useDataStore = defineStore('data', {
  state() {
    return {
      dictionaryKeyObj: {},
      dictionaryKeyObjAll: {},
      orgPersonTree: null,
      orgDeptTree: null,
    }
  },
  getters: {},
  actions: {
    // 获取字典数据
    async getDictionaryList(key, is = false) {
      // 有数据则直接返回
      if (this.dictionaryKeyObj[key]) {
        return is ? this.dictionaryKeyObjAll[key] : this.dictionaryKeyObj[key]
      }

      // 请求字典数据
      const { code, msg, data } = await swDataDictionary.listSelect({ dictionaryCode: key })
      if (code === 0) {
        this.dictionaryKeyObjAll[key] = filterNullChildren(data)
        this.dictionaryKeyObj[key] = filterNullChildren(filterDictionaryStatus(cloneDeep(data)))
        return is ? this.dictionaryKeyObjAll[key] : this.dictionaryKeyObj[key]
      }
      // 接口报错
      $message.error(msg)
      return []
    },

    // 获取部门人员
    async getOrgPerson() {
      if (this.orgPersonTree) {
        return this.orgPersonTree
      }
      const { code, msg, data } = await orgPerson.deptPersonTree()
      if (code === 0) {
        this.orgPersonTree = filterNullChildren(data)
        return this.orgPersonTree
      } else {
        $message.error(msg)
        return []
      }
    },
    // 获取部门
    async getOrgDept() {
      if (this.orgDeptTree) {
        return this.orgDeptTree
      }
      const { code, msg, data } = await orgUnitDept.deptTree()
      if (code === 0) {
        this.orgDeptTree = filterNullChildren(data)
        return this.orgDeptTree
      } else {
        $message.error(msg)
        return []
      }
    },
  },
})
