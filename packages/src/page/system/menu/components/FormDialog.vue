<template>
  <n-modal
    v-model:show="modal.show"
    preset="card"
    class="w-600"
    :title="`${typeObj[modal.type]}${menuType ? '移动端' : 'PC'}菜单`"
  >
    <div class="pt-20">
      <n-spin :show="modal.loading">
        <sh-form ref="formRef" :model="formValue">
          <sh-form-item label="菜单名称" path="menuName" rule="required">
            <n-input v-model:value="formValue.menuName" placeholder="请输入" />
          </sh-form-item>
          <sh-form-item label="图标" path="svg">
            <n-input v-model:value="formValue.svg" placeholder="请输入" />
          </sh-form-item>
          <sh-form-item label="菜单路由" path="url" rule="required">
            <n-input v-model:value="formValue.url" placeholder="请输入" />
          </sh-form-item>
          <sh-form-item label="排序" path="sortNum" rule="required">
            <n-input-number v-model:value="formValue.sortNum" placeholder="请输入" />
          </sh-form-item>
          <sh-form-item label="说明" path="description">
            <n-input v-model:value="formValue.description" type="textarea" placeholder="请输入" />
          </sh-form-item>
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
import { reactive, ref } from 'vue'
import { appMenu } from '@/apis/app'
const props = defineProps({
  appId: {
    type: String,
    default: '',
  },
})

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
const initFormVlue = (parentId, menuType) => {
  return {
    appId: props.appId,
    parentId,
    menuName: '',
    svg: '',
    type: 0,
    url: '',
    status: 1,
    sortNum: 0,
    description: '',
    menuType: menuType,
  }
}

let menuType = ref(0)
const formValue = reactive(initFormVlue())
// 重置数据
const reset = (resourceId) => {
  let parentId = resourceId
  if (resourceId === '-2' || resourceId === '-3') {
    parentId = '-1'
  }
  Object.assign(formValue, initFormVlue(parentId, menuType.value))
}

const validateForm = () => {
  formRef.value?.validate((errors) => {
    if (errors) return
    onSubmit()
  })
}
// 提交
const onSubmit = async () => {
  modal.loading = true
  const { code, msg } = await appMenu[modal.type](formValue)
  modal.loading = false
  if (code === 0) {
    $message.success('成功')
    modal.show = false
    emit('loadList')
  } else {
    $message.error(msg)
  }
}

const getMenuInfo = async (id) => {
  modal.loading = true
  const { code, msg, data } = await appMenu.get({ id })
  modal.loading = false
  if (code === 0) {
    Object.assign(formValue, data)
  } else {
    $message.error(msg)
  }
}

const open = (type, row) => {
  modal.show = true
  modal.type = type
  if (type === 'update') {
    getMenuInfo(row.id)
  } else {
    modal.type = 'add'
    menuType.value = row.menuType
    reset(row.id)
  }
}

defineExpose({
  open,
})
</script>

<style lang="scss" scoped></style>
