<template>
  <n-modal v-model:show="modal.show" preset="card" class="w-800" :title="`${typeObj[modal.type]}成员`">
    <div class="p-20">
      <n-spin :show="modal.loading">
        <sh-form ref="formRef" :model="formValue" label-width="80">
          <sh-form-item label="头像" path="headPic" :span="12">
            <sh-upload-image v-model:value="formValue.headPic" :params="modal.imgCategorize"></sh-upload-image>
          </sh-form-item>
          <sh-form-item label="部门" path="deptId" rule="required">
            <n-tree-select
              v-model:value="formValue.deptId"
              label-field="name"
              key-field="id"
              :options="deptTreeOption"
              :default-expanded-keys="deptTree.defaultExpandedKeys"
            />
          </sh-form-item>
          <sh-form-item label="姓名" path="name" rule="required" :span="12">
            <n-input v-model:value="formValue.name" placeholder="请输入" />
          </sh-form-item>
          <sh-form-item label="手机号" path="phone" rule="required||phone" :span="12">
            <n-input v-model:value="formValue.phone" placeholder="请输入" />
          </sh-form-item>
          <template v-if="modal.type === 'add'">
            <sh-form-item label="账号" path="loginName" rule="required||account" :span="12">
              <n-input v-model:value="formValue.loginName" placeholder="必须包含数字、大小写字母,且8-32位" />
            </sh-form-item>
            <sh-form-item label="	密码" path="password" rule="required||password" :span="12">
              <n-input
                v-model:value="formValue.password"
                type="password"
                show-password-on="mousedown"
                placeholder="包含数字、大小写字母三种,且8-30位"
              />
            </sh-form-item>
          </template>
          <sh-form-item label="职务" path="duty" :span="12">
            <n-input v-model:value="formValue.duty" placeholder="请输入" />
          </sh-form-item>
          <sh-form-item label="性别" path="gender" :span="12">
            <n-radio-group v-model:value="formValue.gender">
              <n-space>
                <n-radio :value="1"> 男 </n-radio>
                <n-radio :value="0"> 女 </n-radio>
              </n-space>
            </n-radio-group>
          </sh-form-item>
          <sh-form-item label="角色" path="roleIds">
            <n-select
              v-model:value="formValue.roleIds"
              multiple
              :options="modal.roleList"
              label-field="roleName"
              value-field="id"
            />
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
import { computed, reactive, ref } from 'vue'
import { orgPerson, orgRolePerson } from '@/apis/org'

const props = defineProps({
  activeDept: {
    type: Object,
    default: () => {
      return {}
    },
  },
  deptTree: {
    type: Object,
    default: () => {
      return {}
    },
  },
})
const emit = defineEmits(['loadList'])

// 过滤调一级(应用)
const deptTreeOption = computed(() => {
  return props.deptTree.list && props.deptTree.list.length ? props.deptTree.list[0].children : []
})

const typeObj = {
  add: '新增',
  update: '修改',
}

const formRef = ref(null)
const modal = reactive({
  show: false,
  loading: false,
  type: 'add',
  roleList: [],
  imgCategorize: {
    imgDir: 'headImg', //文件归类
    claritys: ['LOW'], //图片清晰度
  },
})

// 初始化数据
const initFormVlue = ({ id = '', name = '' }) => {
  return {
    deptId: id,
    deptName: name,
    name: '',
    phone: '',
    loginName: '',
    password: '',
    duty: '',
    entryTime: '',
    gender: 1,
    roleIds: [],
    headPic: [],
  }
}
const formValue = reactive(initFormVlue({}))
// 重置数据
const reset = () => {
  Object.assign(formValue, initFormVlue(props.activeDept.type === 'dept' ? props.activeDept : {}))
}

const validateForm = () => {
  formRef.value?.validate((errors) => {
    if (errors) return
    onSubmit()
  })
}
const onSubmit = async () => {
  modal.loading = true
  const require = modal.type === 'add' ? orgPerson.addUserAndPerson : orgPerson.update

  let params = { ...formValue }
  params.headPic = params.headPic.length ? params.headPic.join(',') : ''

  const { code, msg } = await require(params)
  modal.loading = false
  if (code === 0) {
    $message.success('成功')
    modal.show = false
    emit('loadList')
  } else {
    $message.error(msg)
  }
}

const getRoleList = async () => {
  const { code, msg, data } = await orgRolePerson.findPersonRoleByAppId()

  if (code === 0) {
    modal.roleList = data || []
  } else {
    $message.error(msg)
  }
}
getRoleList()

const getDetail = async (id) => {
  modal.loading = true
  const { code, msg, data } = await orgPerson.get({ id })
  modal.loading = false
  if (code === 0) {
    data.headPic = data.headPic ? data.headPic.split(',') : []
    Object.assign(formValue, data)
  } else {
    $message.error(msg)
  }
}

const open = (row) => {
  modal.show = true
  if (row && row.id) {
    modal.type = 'update'
    getDetail(row.id)
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
