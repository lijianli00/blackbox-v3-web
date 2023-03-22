<template>
  <div class="flex">
    <div class="w-400 h-auto">
      <div class="mb-30 mr-40">
        <n-select
          v-model:value="client.appId"
          :options="client.list"
          label-field="appName"
          value-field="appId"
          @update:value="selectClient"
        />
        <n-input v-model:value="tree.pattern" class="mt-10" placeholder="请输入关键字" />
      </div>
      <div class="tree_height pr-40">
        <n-spin :show="tree.loading">
          <sh-tree
            :data="tree.list"
            label-field="name"
            key-field="id"
            :pattern="tree.pattern"
            :default-expanded-keys="tree.defaultExpandedKeys"
            :render-prefix="renderPrefix"
            :suffix="suffix"
            @update:selected-keys="selectedKeys"
          />
        </n-spin>
      </div>
    </div>
    <div class="pl-40 border-l border-#E1E7F8 flex-1">
      <ResourceList :active-menu-id="tree.activeId"></ResourceList>
    </div>
    <FormDialog ref="dialogRef" :app-id="client.appId" @load-list="loadList"></FormDialog>
  </div>
</template>

<script setup>
import { h, reactive, ref } from 'vue'
import { appMenu, appClient } from '@/apis/app'
import FormDialog from './components/FormDialog.vue'
import ResourceList from './components/ResourceList.vue'
import { useThemeStore } from '@/store'
import companySvg from '@/assets/svg/company.svg'
import pcMenuSvg from '@/assets/svg/pcmenu.svg'
import moveMenuSvg from '@/assets/svg/movemenu.svg'
import { NTooltip } from 'naive-ui'

const themeStore = useThemeStore()
const dialogRef = ref(null)
const tree = reactive({
  list: [],
  loading: false,
  pattern: '',
  defaultExpandedKeys: ['-1'],
  activeId: '',
})
const client = reactive({
  appId: '',
  appName: '',
  list: [],
})

// 加载应用列表
const loadClientList = async () => {
  tree.loading = true
  const { code, msg, data } = await appClient.list({ page: 1, limit: 100 })
  if (code === 0) {
    client.list = data || []
    if (client.list.length) {
      client.appId = client.list[0].appId
      client.appName = client.list[0].appName

      loadList()
    }
  } else {
    tree.loading = false
    $message.error(msg)
  }
}
loadClientList()

const selectClient = (value, { appName, appId }) => {
  client.appId = appId
  client.appName = appName
  loadList()
}

// 菜单树
const loadList = async () => {
  tree.loading = true
  const { code, data } = await appMenu.getMenuTree({ appId: client.appId })
  tree.loading = false

  let pcMenu = []
  let moveMenu = []
  if (data.length) {
    data.forEach((item) => {
      if (item.menuType) {
        moveMenu.push(item)
      } else {
        pcMenu.push(item)
      }
    })
  }
  if (code === 0) {
    tree.list = [
      {
        id: '-1',
        name: client.appName,
        children: [
          {
            id: '-2',
            name: 'PC菜单',
            menuType: 0,
            children: pcMenu,
          },
          {
            id: '-3',
            name: '移动端菜单',
            menuType: 1,
            children: moveMenu,
          },
        ],
      },
    ]
  }
}

const selectedKeys = (key) => {
  if (key[0]) {
    tree.activeId = key[0]
  }
}
// tree后图标
const suffix = (item) => {
  let arr = []

  if (item.id !== '-1') {
    arr = [
      {
        label: '新增',
        key: 'add',
        code: 'system-menu-add',
        onClick: () => {
          open('add', item)
        },
      },
    ]
  }
  if (!['-1', '-2', '-3'].includes(item.id)) {
    arr.push({
      label: '修改',
      key: 'update',
      code: 'system-menu-update',
      onClick: () => {
        open('update', item)
      },
    })
    arr.push({
      label: '删除',
      key: 'delete',
      code: 'system-menu-delete',
      onClick: () => {
        $delete(appMenu.delete, { id: item.id }, loadList)
      },
    })
  }
  return arr
}
// tree 前图标
const renderPrefix = (MenuOption) => {
  return MenuOption.option.id === '-1'
    ? h(companySvg, { style: { color: themeStore.themeColor } })
    : getSelection(MenuOption.option.menuType)
}

const getSelection = (menuType) => {
  return menuType
    ? h(NTooltip, { trigger: 'hover' }, { trigger: () => h(moveMenuSvg), default: () => '移动端' })
    : h(NTooltip, { trigger: 'hover' }, { trigger: () => h(pcMenuSvg), default: () => 'pc端' })
}

// 打开弹框
const open = (type, row) => {
  dialogRef.value.open(type, row)
}
</script>

<style lang="scss" scoped>
.tree_height {
  height: 620px;
  overflow: auto;
}
</style>
