<template>
  <n-modal v-model:show="modal.show" preset="card" class="w-600" :title="`${typeObj[modal.type]}资源`">
    <div class="pt-20">
      <n-spin :show="modal.loading">
        <sh-form ref="formRef" :model="formValue">
          <sh-form-item label="资源名称" path="resourceName" rule="required">
            <n-input v-model:value="formValue.resourceName" placeholder="请输入" />
          </sh-form-item>
          <sh-form-item label="资源编码" path="resourceCode" rule="required">
            <n-input v-model:value="formValue.resourceCode" placeholder="请输入" />
          </sh-form-item>
          <sh-form-item label="排序" path="sortNum">
            <n-input-number v-model:value="formValue.sortNum" placeholder="请输入" />
          </sh-form-item>
          <sh-form-item label="启用过滤" path="dataPermission" label-placement="left">
            <n-switch
              v-model:value="formValue.dataPermission"
              :checked-value="1"
              :unchecked-value="0"
              @update:value="updateDataPermission"
            />
          </sh-form-item>
          <template v-if="formValue.dataPermission">
            <sh-form-item v-if="formValue.dataPermission" label="过滤" path="filterUrl" rule="required">
              <n-input v-model:value="formValue.filterUrl" placeholder="请输入" />
            </sh-form-item>
            <sh-form-item label="权限类型" path="classTypeId" rule="required">
              <n-select
                v-model:value="formValue.classTypeId"
                label-field="name"
                value-field="id"
                :options="classTypeIdOptions"
              />
            </sh-form-item>
          </template>

          <sh-form-item v-if="modal.type === 'update'" label="状态">
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
import { appResource } from '@/apis/app'
import { orgClass } from '@/apis/org'
const props = defineProps({
  activeMenuId: {
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
const classTypeIdOptions = ref([])

// 初始化数据
const initFormVlue = () => {
  return {
    resourceName: '',
    resourceCode: '',
    menuId: props.activeMenuId,
    filterUrl: '',
    status: 1,
    sortNum: 0,
    classTypeId: '',
    description: '',
    dataPermission: 0,
  }
}
const formValue = reactive(initFormVlue())
// 重置数据
const reset = () => {
  Object.assign(formValue, initFormVlue())
}
// 数据权限改变时制空请求url
const updateDataPermission = () => {
  formValue.filterUrl = ''
}

const validateForm = () => {
  formRef.value?.validate((errors) => {
    if (errors) return
    onSubmit()
  })
}
const onSubmit = async () => {
  modal.loading = true
  const { code, msg } = await appResource[modal.type](formValue)
  modal.loading = false
  if (code === 0) {
    $message.success('成功')
    modal.show = false
    emit('loadList')
  } else {
    $message.error(msg)
  }
}

const getClassTypeIdOptions = async () => {
  const { code, msg, data } = await orgClass.listClassType()
  if (code === 0) {
    classTypeIdOptions.value = data || []
  } else {
    $message.error(msg)
  }
}
getClassTypeIdOptions()

const open = (row) => {
  modal.show = true
  if (row && row.id) {
    modal.type = 'update'
    Object.assign(formValue, row)
  } else {
    modal.type = 'add'
    reset()
  }
}

defineExpose({
  open,
})
</script>

<style lang="scss" scoped></style>
