<template>
  <div class="h-790 flex">
    <n-spin :show="tree.loading" class="w-400 mr-40">
      <div class="mb-30">
        <n-input v-model:value="tree.pattern" class="mt-10" placeholder="请输入关键字" />
      </div>
      <sh-tree
        :data="tree.list"
        label-field="name"
        key-field="id"
        :pattern="tree.pattern"
        default-expand-all
        :render-prefix="renderPrefix"
        :suffix="suffix"
        @update:selected-keys="selectedKeys"
      />
    </n-spin>
    <div class="text-red text-30 pl-40 border-l border-#E1E7F8 flex-1">
      <PersonList v-if="tree.activeType === 'role'" :active-role-id="tree.activeId"></PersonList>
    </div>
    <FormDialog ref="dialogRef" @load-list="loadList"></FormDialog>
    <AuthDialog ref="authRef"></AuthDialog>
  </div>
</template>

<script setup>
import { h, reactive, ref } from 'vue'
import { orgRolePerson } from '@/apis/org'
import FormDialog from './components/FormDialog.vue'
import PersonList from './components/PersonList/index.vue'
import AuthDialog from './components/AuthDialog/index.vue'
import { useThemeStore } from '@/store'
import companySvg from '@/assets/svg/company.svg'
import achievementExpert from '@/assets/svg/achievement-expert.svg'
import sysRole from '@/assets/svg/sys-role.svg'

const themeStore = useThemeStore()
const dialogRef = ref(null)
const authRef = ref(null)

const tree = reactive({
  list: [],
  loading: false,
  pattern: '',
  activeId: '',
  activeType: '',
})

// 菜单树
const loadList = async () => {
  tree.loading = true
  const { code, data } = await orgRolePerson.listPersonRole()
  tree.loading = false
  if (code === 0) {
    tree.list = data || []
  }
}
loadList()

const selectedKeys = (key, option) => {
  if (key[0]) {
    tree.activeId = key[0]
    tree.activeType = option[0].type
  }
}
// tree后图标
const suffix = (item) => {
  let arr = []
  if (item.type === 'app') {
    arr.push({
      label: '新增角色',
      key: 'add',
      code: 'system-role-add',
      onClick: () => {
        open('add', item)
      },
    })
  } else {
    if (!item.roleType) {
      arr.push({
        label: '授权',
        key: 'auth',
        code: 'system-role-auth',
        onClick: () => {
          open('auth', item)
        },
      })

      arr.push({
        label: '修改',
        key: 'update',
        code: 'system-role-update',
        onClick: () => {
          item.roleName = item.name
          open('update', item)
        },
      })

      arr.push({
        label: '删除',
        key: 'delete',
        code: 'system-role-delete',
        onClick: () => {
          $delete(orgRolePerson.delete, { id: item.id }, loadList)
        },
      })
    }
  }
  return arr
}
// tree 前图标
const renderPrefix = (TreeOption) => {
  return TreeOption.option.type === 'app'
    ? h(companySvg, { style: { color: themeStore.themeColor } })
    : TreeOption.option.roleType
    ? h(achievementExpert)
    : h(sysRole)
}
// 打开弹框
const open = (type, row) => {
  if (type === 'auth') {
    authRef.value.open(row)
  } else {
    dialogRef.value.open(type, row)
  }
}
</script>

<style lang="scss" scoped></style>
