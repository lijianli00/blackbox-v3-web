<template>
  <sh-content-layout>
    <template #header>
      <sh-search-area :form="formValue" :dropdown-list="dropdownList" @load-list="loadList" @reset="reset">
        <sh-form-item :span="12" label="业务主键" path="dataId">
          <n-input v-model:value="formValue.dataId"></n-input>
        </sh-form-item>
        <sh-form-item :span="12" label="文件归类" path="imgDir">
          <n-input v-model:value="formValue.imgDir"></n-input>
        </sh-form-item>
        <sh-form-item :span="12" label="上传人" path="createName">
          <n-input v-model:value="formValue.createName"></n-input>
        </sh-form-item>
      </sh-search-area>
    </template>
    <sh-data-table
      ref="tableRef"
      :row-key="(row) => row.roleId"
      :columns="columns"
      :api="swFileImg.list"
      :params="formValue"
    />
  </sh-content-layout>
</template>

<script setup>
import { reactive, ref, h, computed } from 'vue'
import { swFileImg } from '@/apis/sw'
import { NImage } from 'naive-ui'
import { useUserStore, useAppStore } from '@/store'

const userStore = useUserStore()
const dropdownList = [
  { label: '业务主键', key: 'dataId' },
  { label: '文件归类', key: 'imgDir' },
  { label: '上传人', key: 'createName' },
]
const token = computed(() => {
  return userStore.token
})
const tableRef = ref(null)

const appStore = useAppStore()
const isBaseApi = appStore.env.VITE_APP_BASE_API

const columns = [
  { type: 'index' },
  {
    title: '图片',
    key: 'id',
    render(row) {
      return h(NImage, {
        width: 60,
        src: isBaseApi + swFileImg.showImg({ id: row.id, token: token.value }),
      })
    },
  },
  { title: '文件归类', key: 'imgDir' },
  { title: '上传人', key: 'createName' },
  { title: '上传时间', key: 'createTime' },
  {
    title: '操作',
    key: 'handle',
    render(row) {
      return [
        $textBtn({
          text: '删除',
          onClick: () => {
            $delete(swFileImg.delete, { id: row.id }, loadList)
          },
          code: 'system-imgList-delete',
          type: 'error',
        }),
      ]
    },
  },
]

// 初始化数据
const initFormVlue = () => {
  return {
    imgDir: '',
    createName: '',
    dataId: '',
  }
}
let formValue = reactive(initFormVlue())
// 重置数据
const reset = () => {
  Object.assign(formValue, initFormVlue())
  loadList()
}

const loadList = () => {
  tableRef.value.loadList()
}
</script>

<style lang="scss" scoped></style>
