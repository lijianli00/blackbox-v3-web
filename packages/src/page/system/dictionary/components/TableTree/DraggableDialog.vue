<template>
  <n-modal v-model:show="modal.show" preset="card" class="w-400" title="拖拽排序">
    <div class="p-20">
      <n-spin :show="modal.loading">
        <div class="bg-[#f0f0f0] dark:bg-[#000] rounded-4 overflow-hidden">
          <div
            class="h-32 w-full text-[#fff] text-center leading-32"
            :style="{ 'background-color': themeStore.themeColor }"
          >
            字典值
          </div>
          <div ref="listRef" class="max-h-450 overflow-auto">
            <div
              v-for="item in draggableList"
              :key="item.id"
              class="item h-50 m-10 px-10 bg-[#fff] dark:bg-[#26262a] text-[#8996AF] flex items-center"
            >
              <div class="bg-#f3f5fc dark:bg-[#101014] flex-center w-35 h-35 rounded-4 text-18">
                <component :is="dictionary" :style="{ color: themeStore.themeColor }"></component>
              </div>
              <div class="ml-16 flex-1 w-0 truncate">{{ item.dictionaryName }}</div>
            </div>
          </div>
        </div>
        <div class="text-right mt-20">
          <n-button @click="modal.show = false"> 关闭 </n-button>
          <n-button type="primary" @click="onSubmit"> 确定 </n-button>
        </div>
      </n-spin>
    </div>
  </n-modal>
</template>

<script setup>
import { nextTick, reactive, ref } from 'vue'
import { swDataDictionary } from '@/apis/sw'
import Sortable from 'sortablejs'
import { useThemeStore } from '@/store'
import dictionary from '@/assets/svg/dictionary.svg'

const themeStore = useThemeStore()

const emit = defineEmits(['loadList'])

const listRef = ref(null)
const modal = reactive({
  show: false,
  loading: false,
  type: 'add',
})

const draggableList = ref([])

// 提交
const onSubmit = async () => {
  modal.loading = true
  const ids = draggableList.value.map((item) => {
    return item.id
  })
  const { code, msg } = await swDataDictionary.updateBatchSortNum({ ids })
  modal.loading = false
  if (code === 0) {
    $message.success('成功')
    modal.show = false
    emit('loadList')
  } else {
    $message.error(msg)
  }
}

const open = async (list = []) => {
  modal.show = true
  draggableList.value = list.map((item) => {
    return {
      dictionaryName: item.dictionaryName,
      id: item.id,
    }
  })
  await nextTick()
  initSortable()
}

// 拖拽排序
const initSortable = () => {
  const el = listRef.value
  // 创建拖拽实例
  Sortable.create(el, {
    //  指定父元素下可被拖拽的子元素
    draggable: '.item',
    animation: 150,
    onEnd({ newIndex, oldIndex }) {
      const currRow = draggableList.value.splice(oldIndex, 1)[0]
      draggableList.value.splice(newIndex, 0, currRow)
    },
  })
}

defineExpose({
  open,
})
</script>

<style lang="scss" scoped></style>
