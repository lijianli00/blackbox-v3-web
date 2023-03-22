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
        :render-label="renderLabel"
        @update:selected-keys="selectedKeys"
      />
    </n-spin>
    <div class="text-red text-30 pl-40 border-l border-#E1E7F8 flex-1">
      <UnitList
        v-if="tree.activeType === 'unitRole' || tree.activeType === 'sysRole'"
        :active-role-id="tree.activeId"
      ></UnitList>
    </div>
    <FormDialog ref="dialogRef" @load-list="loadList"></FormDialog>
    <AuthDialog ref="authRef"></AuthDialog>
    <!-- 系统角色 -->
    <systemRoleFormDialog ref="sysTeamDialogRef" @load-list="loadList"></systemRoleFormDialog>
    <sysAuthDialog ref="sysAuthDialogRef"></sysAuthDialog>
  </div>
</template>

<script setup>
import { h, reactive, ref } from 'vue'
import { orgRoleUnit, orgRolePerson } from '@/apis/org'
import FormDialog from './components/FormDialog.vue'
import AuthDialog from './components/AuthDialog/index.vue'
import UnitList from './components/UnitList/index.vue'
import { useThemeStore } from '@/store'
import sysAuthDialog from '../role/components/AuthDialog/index.vue' // 与角色管理的授权一致
import systemRoleFormDialog from './components/sysAuthDialog/sysRoleFormDialog.vue'
import appSvg from '@/assets/svg/app.svg'
import roleSvg from '@/assets/svg/role.svg'
import unitRoleSvg from '@/assets/svg/unit-role.svg'

const themeStore = useThemeStore()
const dialogRef = ref(null)
const sysTeamDialogRef = ref(null)
const authRef = ref(null)
const sysAuthDialogRef = ref(null)

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
  const { code, data } = await orgRoleUnit.listUnitRole()
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
      label: '新增企业角色',
      key: 'add',
      code: 'system-unitAuth-roleAdd',
      onClick: () => {
        open('add', item)
      },
    })
  } else if (item.type === 'unitRole') {
    //企业角色
    arr.push({
      label: '新增系统角色',
      key: 'add',
      code: '',
      onClick: () => {
        openSysTeamDialog('add', item)
      },
    })

    arr.push({
      label: '修改',
      key: 'update',
      code: 'system-unitAuth-roleUpdate',
      onClick: () => {
        open('update', item)
      },
    })

    arr.push({
      label: '授权',
      key: 'auth',
      code: 'system-unitAuth-roleAuth',
      onClick: () => {
        open('auth', item)
      },
    })
    arr.push({
      label: '删除',
      key: 'delete',
      code: 'system-unitAuth-roleDelete',
      onClick: () => {
        $delete(orgRoleUnit.delete, { id: item.id }, loadList)
      },
    })
  } else {
    //系统角色
    arr.push({
      label: '授权',
      key: 'auth',
      code: '',
      onClick: () => {
        openSysTeamDialog('auth', item)
      },
    })
    arr.push({
      label: '修改',
      key: 'update',
      code: '',
      onClick: () => {
        openSysTeamDialog('update', item)
      },
    })
    arr.push({
      label: '删除',
      key: 'delete',
      code: '',
      onClick: () => {
        $delete(orgRolePerson.delete, { id: item.id }, loadList)
      },
    })
  }
  return arr
}
// tree 前图标
const renderPrefix = (TreeOption) => {
  let type = TreeOption.option.type
  return type === 'app'
    ? h(appSvg, { style: { color: themeStore.themeColor } })
    : type === 'unitRole'
    ? h(unitRoleSvg)
    : h(roleSvg)
}

const renderLabel = ({ option }) => {
  return h(
    'span',
    {
      style: { color: option.type === 'app' ? '#202837' : '#515E78' },
    },
    option.name
  )
}
// 打开弹框
const open = (type, row) => {
  if (type === 'auth') {
    authRef.value.open(row)
  } else {
    dialogRef.value.open(type, row)
  }
}

// 系统角色
const openSysTeamDialog = (type, row) => {
  if (type === 'auth') {
    sysAuthDialogRef.value.open(row)
  } else {
    sysTeamDialogRef.value.init(type, row)
  }
}
</script>

<style lang="scss" scoped></style>
