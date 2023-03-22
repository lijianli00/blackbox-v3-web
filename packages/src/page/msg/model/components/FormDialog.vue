<template>
  <n-modal v-model:show="modal.show" preset="card" class="w-800" :title="`${typeObj[modal.type]}消息模板`">
    <div class="pt-20">
      <n-spin :show="modal.loading">
        <sh-form ref="formRef" :model="formValue">
          <sh-form-item label="模板名称" path="modelName" rule="required" :span="12">
            <n-input v-model:value="formValue.modelName" placeholder="请输入" />
          </sh-form-item>
          <sh-form-item label="模板标识" path="modelCode" rule="required" :span="12">
            <n-input v-model:value="formValue.modelCode" placeholder="请输入" />
          </sh-form-item>
          <sh-form-item label="模板类型" path="modelType" rule="required" :span="12">
            <sh-select-comma v-model:value="formValue.modelType" :options="modelTypeList"></sh-select-comma>
          </sh-form-item>
          <!-- <sh-form-item label="关联id" path="relationId" :span="12">
            <n-input v-model:value="formValue.relationId" placeholder="请输入" />
          </sh-form-item> -->
          <sh-form-item label="模板主题" path="modelTopic" rule="required">
            <n-input v-model:value="formValue.modelTopic" placeholder="请输入" />
          </sh-form-item>
          <sh-form-item label="模板内容" path="modelContent" rule="required">
            <n-input
              v-model:value="formValue.modelContent"
              type="textarea"
              placeholder="请输入"
              @dragover="(e) => e.preventDefault()"
              @drop="dragEnter"
              @blur="onBlur"
            />
          </sh-form-item>
          <!-- <sh-form-item label="变量模型" path="modelVariables">
            <JsonEditorVue v-model="formValue.modelVariables" class="w-full" />
          </sh-form-item> -->
          <sh-form-item label="变量模型:" path="" :span="24"> </sh-form-item>
          <sh-form-item label="" path="" :span="24">
            <n-button class="ml-10 -mt-45" type="primary" size="small" @click="addRow()"> 新增行 </n-button>
          </sh-form-item>
          <n-data-table
            ref="tableRef"
            class="-mt-25"
            :max-height="500"
            :columns="columns"
            :data="formValue.modelVariablesList"
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
import { reactive, ref, h, resolveComponent } from 'vue'
import { msgModel } from '@/apis/msg'
// import JsonEditorVue from 'json-editor-vue3'
import { modelTypeList } from '../js/modelType'
import { NInput, NIcon } from 'naive-ui'
import { Move } from '@vicons/ionicons5'

const ShFormItem = resolveComponent('ShFormItem')
const emit = defineEmits(['loadList'])

const typeObj = {
  add: '新增',
  update: '修改',
}

const formRef = ref(null)
const modal = reactive({
  show: false,
  loading: false,
  type: 'add',
})

// 初始化数据
const initFormVlue = () => {
  return {
    modelName: '',
    modelCode: '',
    modelType: '',
    modelTopic: '',
    modelContent: '',
    modelVariables: {},
    modelVariablesList: [],
    // relationId: '',
  }
}
const formValue = reactive(initFormVlue())
// 重置数据
const reset = () => {
  Object.assign(formValue, initFormVlue())
}

const validateForm = () => {
  formRef.value?.validate((errors) => {
    if (errors) return
    onSubmit()
  })
}
const onSubmit = async () => {
  modal.loading = true
  formValue.modelVariables = {}
  formValue.modelVariablesList.forEach((item) => {
    formValue.modelVariables[item.varName] = item.varValue
  })
  const modelVariables = JSON.stringify(formValue.modelVariables)

  const { code, msg } = await msgModel[modal.type]({
    ...formValue,
    modelVariables: modelVariables === '{}' ? '' : modelVariables,
  })
  modal.loading = false
  if (code === 0) {
    $message.success('成功')
    modal.show = false
    emit('loadList')
  } else {
    $message.error(msg)
  }
}

const getMsgModel = async (id) => {
  modal.loading = true
  const { code, data, msg } = await msgModel.get({ id })
  modal.loading = false
  if (code === 0) {
    Object.assign(formValue, data)
    formValue.modelVariables = JSON.parse(data.modelVariables || '{}')
    formValue.modelVariablesList = []
    Object.keys(formValue.modelVariables).forEach((key) => {
      formValue.modelVariablesList.push({
        varName: key,
        varValue: formValue.modelVariables[key],
      })
    })
  } else {
    $message.error(msg)
  }
}

const open = (row) => {
  modal.show = true
  blurIndex.value = null
  if (row && row.id) {
    modal.type = 'update'
    getMsgModel(row.id)
  } else {
    modal.type = 'add'
    reset()
  }
}

const columns = [
  {
    title: '变量名（可拖拽至模板内容中）',
    key: 'varName',
    render(row, index) {
      return h(
        ShFormItem,
        {
          path: `modelVariablesList.${index}.varName`,
          rule: 'required',
        },
        {
          default: () =>
            h(
              'div',
              {
                draggable: true,
                class: 'cursor-move flex flex-center',
                onDragstart: (e) => dragstart(e, formValue.modelVariablesList[index].varName),
              },
              [
                h(NIcon, { size: 20, class: 'mr-14' }, () => h(Move)),
                h(NInput, {
                  value: row.varName,
                  onUpdateValue(v) {
                    formValue.modelVariablesList[index].varName = v
                  },
                }),
              ]
            ),
        }
      )
    },
  },
  {
    title: '变量值',
    key: 'varValue',
    render(row, index) {
      return h(
        ShFormItem,
        {
          path: `modelVariablesList.${index}.varValue`,
          rule: 'required',
        },
        () =>
          h(NInput, {
            value: row.varValue,
            onUpdateValue(v) {
              formValue.modelVariablesList[index].varValue = v
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
          text: '删除',
          onClick: () => {
            formValue.modelVariablesList.splice(index, 1)
          },
        }),
      ]
    },
  },
]

// 初始化数据
const initFormValue = () => {
  return {
    varValue: '',
    varName: '',
  }
}

// 新增
const addRow = (row = initFormValue()) => {
  formValue.modelVariablesList.push({ ...row })
}

const currentDragText = ref('')
const blurIndex = ref(null) // 光标位置
const dragstart = (e, varName = '') => {
  currentDragText.value = '${' + varName + '}'
}
const dragEnter = () => {
  let index = blurIndex.value
  let str = formValue.modelContent
  if (typeof index === 'number') {
    //插入到指定光标处
    formValue.modelContent = str.slice(0, index) + currentDragText.value + str.slice(index)
  } else {
    // 没有指定插入直接添加到最后
    formValue.modelContent += currentDragText.value
  }
}
const onBlur = (e) => {
  blurIndex.value = e.srcElement.selectionStart
}

defineExpose({
  open,
})
</script>

<style lang="scss" scoped></style>
