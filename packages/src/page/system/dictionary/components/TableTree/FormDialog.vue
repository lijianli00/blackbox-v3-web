<template>
  <n-modal v-model:show="modal.show" preset="card" class="w-600" :title="`新增字典`">
    <div>
      <n-spin :show="modal.loading">
        <div class="mb-10 text-right">
          <n-button type="primary" size="small" @click="addRow()"> 新增行 </n-button>
        </div>
        <sh-form ref="formRef" :model="formValue" :gutter="0">
          <n-data-table
            ref="tableRef"
            :max-height="500"
            :columns="columns"
            :data="formValue.saveList"
            :row-key="(row) => row.sortNum"
          />
        </sh-form>
        <div class="text-right mt-20">
          <n-button @click="modal.show = false"> 关闭 </n-button>
          <n-button type="primary" @click="validateForm"> 确定 </n-button>
        </div>
      </n-spin>
    </div>
  </n-modal>
</template>

<script setup>
import { reactive, ref, h, resolveComponent, nextTick } from 'vue'
import { swDataDictionary } from '@/apis/sw'
import { NInput } from 'naive-ui'
import Sortable from 'sortablejs'

const emit = defineEmits(['loadList'])
const ShFormItem = resolveComponent('ShFormItem')

const formRef = ref(null)
const tableRef = ref(null)
const modal = reactive({
  show: false,
  loading: false,
  type: 'add',
})
const columns = [
  {
    title: '数据字典值',
    key: 'dictionaryName',
    render(row, index) {
      return h(
        ShFormItem,
        {
          path: `saveList.${index}.dictionaryName`,
          rule: 'required',
        },
        () =>
          h(NInput, {
            value: row.dictionaryName,
            maxlength: 32,
            onUpdateValue(v) {
              formValue.saveList[index].dictionaryName = v
            },
          })
      )
    },
  },
  {
    title: '数据字典键',
    key: 'dictionaryKey',
    render(row, index) {
      return h(
        ShFormItem,
        {
          path: `saveList.${index}.dictionaryKey`,
          rule: 'required',
        },
        () =>
          h(NInput, {
            value: row.dictionaryKey,
            maxlength: 32,
            onUpdateValue(v) {
              formValue.saveList[index].dictionaryKey = v
            },
          })
      )
    },
  },
  {
    title: '操作',
    key: 'handle',
    width: 120,
    render(row, index) {
      return [
        $textBtn({
          text: '复制',
          onClick: () => {
            addRow(row)
          },
        }),
        $textBtn({
          text: '删除',
          onClick: () => {
            if (formValue.saveList.length > 1) {
              formValue.saveList.splice(index, 1)
            } else {
              $message.warning('最后一行了')
            }
          },
        }),
      ]
    },
  },
]

// 初始化数据
const initFormVlue = () => {
  return {
    dictionaryKey: '',
    dictionaryName: '',
    sortNum: $dayjs().valueOf(),
    status: 1,
  }
}
const formValue = reactive({
  groupId: '',
  parentId: '',
  saveList: [],
})

const validateForm = () => {
  formRef.value?.validate((errors) => {
    if (errors) return
    onSubmit()
  })
}
const onSubmit = async () => {
  modal.loading = true
  formValue.saveList = formValue.saveList.map((item, index) => {
    item.sortNum = index
    return item
  })
  const { code, msg } = await swDataDictionary.addBatch(formValue)
  modal.loading = false
  if (code === 0) {
    $message.success('成功')
    modal.show = false
    emit('loadList')
  } else {
    $message.error(msg)
  }
}

const addRow = (row = initFormVlue()) => {
  formValue.saveList.push({
    ...row,
    sortNum: $dayjs().valueOf(),
  })
}

const open = (row) => {
  modal.show = true

  formValue.groupId = row.groupId
  formValue.parentId = row.parentId || -1
  formValue.saveList = [initFormVlue()]

  // nextTick(() => {
  //   initSortable()
  // })
}

// 拖拽排序
const initSortable = () => {
  const el = tableRef.value.$el.querySelector('.n-data-table-table > tbody')
  // 创建拖拽实例
  Sortable.create(el, {
    //  指定父元素下可被拖拽的子元素
    draggable: '.n-data-table-tr',
    onEnd({ newIndex, oldIndex }) {
      const currRow = formValue.saveList.splice(oldIndex, 1)[0]
      formValue.saveList.splice(newIndex, 0, currRow)
    },
  })
}

defineExpose({
  open,
})
</script>

<style lang="scss" scoped>
::v-deep(.n-form-item) {
  display: block;
}
::v-deep(.n-data-table .n-data-table-td) {
  padding-bottom: 0px;
  .n-button {
    margin-bottom: 26px;
  }
}
</style>
