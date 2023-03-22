<template>
  <div class="pdf-preview">
    <div class="pdf-wrap">
      <vue-pdf-embed :source="state.source" :style="scale" class="vue-pdf-embed" :page="state.pageNum" />
    </div>
    <div class="page-tool">
      <div class="page-tool-item" @click="lastPage()">上一页</div>
      <div class="page-tool-item" @click="nextPage()">下一页</div>
      <div class="page-tool-item">{{ state.pageNum }}/{{ state.numPages }}</div>
      <div class="page-tool-item" @click="pageZoomOut()">放大</div>
      <div class="page-tool-item" @click="pageZoomIn()">缩小</div>
      <div class="page-tool-item" @click="close">关闭</div>
    </div>
  </div>
</template>
<script setup>
import VuePdfEmbed from 'vue-pdf-embed'
//import { createLoadingTask } from "vue3-pdfjs/esm/vue-pdf.js";
import * as pdfjsLib from 'pdfjs-dist'
import { reactive, onMounted, computed } from 'vue'
import { useUserStore } from '!/store'
import { swFile } from '!/apis/sw'

const props = defineProps({
  pdfId: {
    type: String,
    default: '',
  },
})
const emit = defineEmits(['close'])
const close = () => {
  emit('close')
}

const userStore = useUserStore()

const token = computed(() => {
  return userStore.token
})
const state = reactive({
  source: swFile.download({ id: props.pdfId, token: token.value }), //预览pdf文件地址
  pageNum: 1, //当前页面
  scale: 1, // 缩放比例
  numPages: 0, // 总页数
})
const scale = computed(() => `transform:scale(${state.scale})`)
function lastPage() {
  if (state.pageNum > 1) {
    state.pageNum -= 1
  }
}
function nextPage() {
  if (state.pageNum < state.numPages) {
    state.pageNum += 1
  }
}
function pageZoomOut() {
  if (state.scale < 2) {
    state.scale += 0.1
  }
}
function pageZoomIn() {
  if (state.scale > 0.8) {
    state.scale -= 0.1
  }
}
onMounted(() => {
  pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.js'
  const loadingTask = pdfjsLib.getDocument(state.source)
  loadingTask.promise.then((pdf) => {
    state.numPages = pdf.numPages
  })
})
</script>

<style lang="css" scoped>
.pdf-preview {
  position: fixed;
  height: 100vh;
  width: 100vw;
  padding: 20px 0;
  box-sizing: border-box;
  background-color: #e9e9e9;
  left: 0;
  top: 0;
  z-index: 99999999;
  overflow-y: auto;
}

.pdf-wrap {
  overflow-y: auto;
}

.vue-pdf-embed {
  text-align: center;
  width: 60vw;
  border: 1px solid #e5e5e5;
  margin: 0 auto;
  box-sizing: border-box;
}

.page-tool {
  position: fixed;
  bottom: 35px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  align-items: center;
  background: rgb(66, 66, 66);
  border-radius: 19px;
  z-index: 100;
  cursor: pointer;
  margin-left: 50%;
  transform: translateX(-50%);
}

.page-tool-item {
  padding: 8px 15px;
  padding-left: 10px;
  cursor: pointer;
  color: #fff !important;
}
</style>
