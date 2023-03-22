<template>
  <div>
    <div class="flex h-full">
      <div class="w-350 border-r border-#efeff5 h-full pr-40">
        <n-spin :show="modal.loading">
          <div class="mb-20 flex">
            <div class="mr-10 flex-1">
              <n-input placeholder="请输入关键字过滤" class="w-full">
                <template #suffix>
                  <component :is="search"></component>
                </template>
              </n-input>
            </div>
            <n-button v-if="$isCode('system-dictionary-group-add')" type="primary" @click="open"> 新增 </n-button>
          </div>
          <div v-if="modal.list.length" class="list_box">
            <div
              v-for="item in modal.list"
              :key="item.id"
              :class="{ active: modal.activeItem?.id === item.id }"
              class="item_box flex items-center text-16 h-36 text-#606266 cursor-pointer px-10 mb-1"
              @click="modal.activeItem = item"
            >
              <component :is="dictionary" class="text-#2263e8 w-16 h-16"></component>
              <div class="ml-5 truncate flex-1">{{ item.groupName }}</div>
              <n-dropdown v-if="filterOptions.length" trigger="click" :options="filterOptions" @select="handleSelect">
                <n-button text tag="a" class="mr-10 hidden item_dot">
                  <component :is="dot" class="w-14 h-14"></component>
                </n-button>
              </n-dropdown>
            </div>
          </div>
          <div v-else class="list_box flex-center">
            <n-empty description="无数据"></n-empty>
          </div>
        </n-spin>
      </div>
      <div class="flex-1">
        <TableTree :group-item="modal.activeItem" class="ml-40"></TableTree>
      </div>
    </div>
    <FormDialog ref="dialogRef" @load-list="loadList"></FormDialog>
  </div>
</template>

<script setup>
import { swDataDictionaryGroup } from '@/apis/sw'
import { reactive, ref, computed } from 'vue'
import FormDialog from './components/FormDialog.vue'
import TableTree from './components/TableTree/index.vue'
import dot from '@/assets/svg/dot.svg'
import dictionary from '@/assets/svg/dictionary.svg'
import search from '@/assets/svg/search.svg'

const dialogRef = ref(null)
const modal = reactive({
  loading: false,
  list: [],
  activeItem: {},
})
const options = [
  { label: '修改', key: 'update', code: 'system-dictionary-group-update' },
  { label: '删除', key: 'delete', code: 'system-dictionary-group-delete' },
]

const filterOptions = computed(() => {
  return options.filter((item) => {
    return $isCode(item.code)
  })
})

const loadList = async () => {
  modal.loading = true
  const { code, msg, data } = await swDataDictionaryGroup.list({
    page: 1,
    limit: 999,
  })
  modal.loading = false
  if (code === 0) {
    if (data?.length) {
      modal.list = data
      modal.activeItem?.id ? '' : (modal.activeItem = data[0])
    } else {
      modal.list = []
    }
  } else {
    $message.error(msg)
  }
}
loadList()

const open = (row) => {
  dialogRef.value.open(row)
}
const handleSelect = (key) => {
  switch (key) {
    case 'update':
      open(modal.activeItem)
      break
    case 'delete':
      $delete(swDataDictionaryGroup.delete, { id: modal.activeItem.id }, () => {
        modal.activeItem = {}
        loadList()
      })
      break
  }
}
</script>

<style lang="scss" scoped>
.list_box {
  height: calc(100vh - 240px);
  overflow: auto;
}
.active,
.item_box:hover {
  background-color: #e8effd;
  .item_dot {
    display: block;
  }
}
</style>
