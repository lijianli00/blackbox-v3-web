<template>
  <sh-content-layout>
    <template #header>
      <n-button type="primary" @click="open"> 新增 </n-button>
    </template>
    <sh-data-table ref="tableRef" :columns="columns" :show-page="false" />
    <EditorDialog ref="dialogRef" @load-list="loadList"></EditorDialog>
    <EditorPreview ref="preview"></EditorPreview>
  </sh-content-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import EditorDialog from './components/EditorDialog.vue'
import EditorPreview from './components/EditorPreview.vue'
const tableRef = ref(null)
const dialogRef = ref(null)
const preview = ref(null)
const columns = [
  { type: 'index' },
  { title: '文章标题', key: 'title' },
  { title: '创建时间', key: 'createTime' },
  {
    title: '操作',
    key: 'handle',
    render(row) {
      return [
        $textBtn({
          text: '修改',
          onClick: () => {
            open(row, 'update')
          },
        }),
        $textBtn({
          text: '查看',
          onClick: () => {
            preview.value.open(row)
          },
        }),
      ]
    },
  },
]
const data = [
  { title: 'md-editor-v3', createTime: '2023-03-01' },
  { title: 'md-编辑器', createTime: '2023-03-01' },
]
onMounted(() => {
  tableRef.value.setTableData({ data })
})
const open = (row, type) => {
  dialogRef.value.open(row, type)
}
const loadList = () => {
  // console.log('loadList')
}
</script>

<style lang="scss" scoped></style>
