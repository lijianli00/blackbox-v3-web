<template>
  <n-modal v-model:show="showModal" preset="card" class="w-1000" :title="`${typeTxt}业务变量`">
    <div class="p-15">
      <n-spin :show="loading">
        <sh-form ref="formRef" :model="formValue" label-width="100">
          <sh-form-item label="变量名称" path="varName" rule="required" :span="12">
            <n-input v-model:value="formValue.varName" placeholder="请输入" />
          </sh-form-item>

          <sh-form-item label="变量属性" path="varValue" rule="required" :span="12">
            <n-input v-model:value="formValue.varValue" placeholder="请输入" />
          </sh-form-item>

          <sh-form-item label="变量类型" path="varType" rule="required" :span="12">
            <n-select v-model:value="formValue.varType" :options="options" @update:value="clearAttribute" />
          </sh-form-item>

          <sh-form-item label="" path="" :span="24">
            <n-button type="primary" size="small" :disabled="[1, 2].includes(formValue.varType)" @click="addRow()">
              新增行
            </n-button>
          </sh-form-item>

          <n-data-table ref="tableRef" :max-height="500" :columns="columns" :data="formValue.child" />
        </sh-form>

        <div class="text-right mt-20">
          <n-button @click="showModal = false"> 关闭 </n-button>
          <n-button type="primary" @click="validate(onSubmit)"> 确定 </n-button>
        </div>
      </n-spin>
    </div>
  </n-modal>
</template>

<script setup>
import { conditionVariable } from '@/apis/workflow'
import { useModal } from '@/hooks'
import { reactive, h, resolveComponent } from 'vue'
import { NInput } from 'naive-ui'

const emit = defineEmits(['loadList'])
const ShFormItem = resolveComponent('ShFormItem')
const options = reactive([
  {
    label: 'String',
    value: 0,
  },
  {
    label: 'Integer',
    value: 1,
  },
  {
    label: 'Double',
    value: 2,
  },
])
const oldChild = reactive([])

const clearAttribute = (value) => {
  Object.assign(oldChild, formValue.value.child)
  if (value) {
    formValue.value.child = []
  } else {
    formValue.value.child = oldChild
  }
}

// modal hook
const { formRef, loading, showModal, type, typeTxt, formValue, reseForm, validate } = useModal({
  businessId: '',
  varName: '',
  varValue: '',
  varType: 0,
  child: [],
})

const onSubmit = async () => {
  loading.value = true
  const { code, msg } = await conditionVariable[type.value](formValue.value)
  loading.value = false
  if (code === 0) {
    $message.success('成功')
    showModal.value = false
    emit('loadList')
  } else {
    $message.error(msg)
  }
}

const get = async (row) => {
  const { code, data, msg } = await conditionVariable.get({ id: row.id })
  if (code === 0) {
    data.child = data.child ? data.child : []
    reseForm(data)
  } else {
    $message.error(msg)
  }
}

const open = (row, businessId) => {
  showModal.value = true
  if (row && row.id) {
    type.value = 'update'
    get(row)
  } else {
    type.value = 'add'
    reseForm()
    formValue.value.businessId = businessId
  }
  Object.assign(oldChild, [])
}

const columns = [
  {
    title: '属性名',
    key: 'varName',
    render(row, index) {
      return h(
        ShFormItem,
        {
          path: `child.${index}.varName`,
          rule: 'required',
        },
        () =>
          h(NInput, {
            value: row.varName,
            maxlength: 32,
            onUpdateValue(v) {
              formValue.value.child[index].varName = v
            },
          })
      )
    },
  },
  {
    title: '属性值',
    key: 'varValue',
    render(row, index) {
      return h(
        ShFormItem,
        {
          path: `child.${index}.varValue`,
          rule: 'required',
        },
        () =>
          h(NInput, {
            value: row.varValue,
            maxlength: 32,
            onUpdateValue(v) {
              formValue.value.child[index].varValue = v
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
            formValue.value.child.splice(index, 1)
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
  formValue.value.child.push({ ...row })
}

defineExpose({
  open,
})
</script>

<style lang="scss" scoped></style>
