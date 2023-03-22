<template>
  <n-modal v-model:show="modal.show" preset="card" class="w-600" :title="`${typeObj[modal.type]}资源`">
    <div class="p-20">
      <n-spin :show="modal.loading">
        <sh-form ref="formRef" :model="formValue">
          <sh-form-item label="部门名称" path="deptName" rule="required">
            <n-input v-model:value="formValue.deptName" placeholder="请输入" />
          </sh-form-item>
          <sh-form-item label="排序" path="sortNum" rule="required">
            <n-input-number v-model:value="formValue.sortNum" placeholder="请输入" />
          </sh-form-item>
          <sh-form-item label="状态" rule="required">
            <n-switch v-model:value="formValue.status" :checked-value="1" :unchecked-value="0" />
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
import { orgUnitDept } from '@/apis/org'
const props = defineProps({
  teamId: {
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
const initFormVlue = (parentId) => {
  return {
    teamId: props.teamId,
    parentId,
    deptName: '',
    sortNum: 0,
    status: 1,
    description: '',
  }
}
const formValue = reactive(initFormVlue())
// 重置数据
const reset = (resourceId) => {
  Object.assign(formValue, initFormVlue(resourceId))
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
  const { code, msg } = await orgUnitDept[modal.type](formValue)
  modal.loading = false
  if (code === 0) {
    $message.success('成功')
    modal.show = false
    emit('loadList')
  } else {
    $message.error(msg)
  }
}

const getDateInfo = async (id) => {
  modal.loading = true
  const { code, msg, data } = await orgUnitDept.get({ id })
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
    getDateInfo(row.id)
  } else {
    modal.type = 'add'
    // 判断是否是根节点
    reset(row.type === 'team' ? '-1' : row.id)
  }
}

defineExpose({
  open,
})
</script>

<style lang="scss" scoped></style>
