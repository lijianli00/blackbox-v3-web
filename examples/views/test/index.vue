<template>
  <div>
    test
    <sh-search-fold ref="search" :model="formValue" label-placement="left" :line-num="1" :reset="reset" :btn-span="6">
      <n-grid-item>
        <sh-form-item label="业务主键" path="dataId">
          <n-input v-model:value="formValue.dataId"></n-input>
        </sh-form-item>
      </n-grid-item>
      <n-grid-item>
        <sh-form-item label="文件归类" path="imgDir">
          <n-input v-model:value="formValue.imgDir"></n-input>
        </sh-form-item>
      </n-grid-item>
      <n-grid-item>
        <sh-form-item label="上传人" path="createName">
          <n-input v-model:value="formValue.createName"></n-input>
        </sh-form-item>
      </n-grid-item>
      <n-grid-item>
        <sh-form-item label="业务主键" path="dataId">
          <n-input v-model:value="formValue.dataId"></n-input>
        </sh-form-item>
      </n-grid-item>
      <n-grid-item>
        <sh-form-item label="文件归类" path="imgDir">
          <n-input v-model:value="formValue.imgDir"></n-input>
        </sh-form-item>
      </n-grid-item>
      <n-grid-item>
        <sh-form-item label="上传人" path="createName">
          <n-input v-model:value="formValue.createName"></n-input>
        </sh-form-item>
      </n-grid-item>
      <template #btn>
        <!-- <n-button type="success">新增</n-button> -->
        <n-button type="primary" @click="loadList">查询</n-button>
      </template>
    </sh-search-fold>
    <sh-data-table
      ref="tableRef"
      :row-key="(row) => row.roleId"
      :columns="columns"
      :api="swFileImg.list"
      :params="formValue"
    />
  </div>
</template>

<script setup>
import { reactive, ref, h, computed } from 'vue'
import { swFileImg } from '@/apis/sw'
import { NImage } from 'naive-ui'
import { useUserStore } from '@/store'
const form = reactive({
  name: '',
})

const userStore = useUserStore()

const token = computed(() => {
  return userStore.token
})
const tableRef = ref(null)
const search = ref(null)
const dropdownList = [
  { label: '业务主键', value: 'dataId' },
  { label: '文件归类', value: 'imgDir' },
  { label: '上传人', value: 'createName' },
]

const columns = [
  { type: 'index' },
  {
    title: '图片',
    key: 'id',
    render(row) {
      return h(NImage, {
        width: 60,
        src: swFileImg.showImg({ id: row.id, token: token.value }),
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
  // search.value.validate((errors) => {
  //   console.log(errors)
  // })
  tableRef.value.loadList()
}
</script>

<style lang="scss" scoped></style>
