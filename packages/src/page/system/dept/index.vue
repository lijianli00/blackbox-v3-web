<template>
  <div class="h-790 flex">
    <div class="w-400">
      <n-spin :show="tree.loading">
        <sh-tree
          :data="tree.list"
          label-field="name"
          key-field="id"
          :default-expanded-keys="tree.defaultExpandedKeys"
          :suffix="suffix"
          :render-prefix="renderPrefix"
          :render-label="renderLabel"
          @update:selected-keys="selectedKeys"
        />
      </n-spin>
    </div>
    <div class="pl-40 border-l border-#E1E7F8 flex-1">
      <PersonList ref="personRef" :active-dept="tree.activeOption" :dept-tree="tree"></PersonList>
    </div>
    <FormDialog ref="dialogRef" :team-id="tree.teamId" @load-list="loadList"></FormDialog>
  </div>
</template>

<script setup>
import { reactive, ref, h, nextTick } from 'vue'
import { orgUnitDept } from '@/apis/org'
import FormDialog from './components/FormDialog.vue'
import PersonList from './components/PersonList.vue'
import { useThemeStore } from '@/store'
import companySvg from '@/assets/svg/company.svg'
import deptSvg from '@/assets/svg/dept.svg'

const themeStore = useThemeStore()
const tree = reactive({
  list: [],
  defaultExpandedKeys: [],
  loading: false,
  teamId: '',
  activeOption: {},
})
const dialogRef = ref(null)
const personRef = ref(null)

// 菜单树
const loadList = async () => {
  tree.loading = true
  const { code, msg, data } = await orgUnitDept.deptTree({})
  tree.loading = false
  if (code === 0) {
    tree.list = data
    if (data.length) {
      tree.defaultExpandedKeys = [...tree.defaultExpandedKeys, data[0].id]
      tree.teamId = data[0].id
    }
  } else {
    $message.error(msg)
  }
}
loadList()

const suffix = (item) => {
  let arr = [
    {
      label: '新增',
      key: 'add',
      code: 'system-dept-add',
      onClick: () => {
        open('add', item)
      },
    },
  ]
  if (item.type !== 'team') {
    arr.push({
      label: '修改',
      key: 'update',
      code: 'system-dept-update',
      onClick: () => {
        open('update', item)
      },
    })
    arr.push({
      label: '删除',
      key: 'delete',
      code: 'system-dept-delete',
      onClick: () => {
        $delete(orgUnitDept.delete, { id: item.id }, loadList)
      },
    })
  }
  return arr
}
// tree 前图标
const renderPrefix = (TreeOption) => {
  /* return option.type === 'team'
    ? { name: 'company', style: { 'font-size': '20px', color: themeStore.themeColor } }
    : { name: 'dept', style: { color: '#979daf' } } */
  return TreeOption.option.type === 'team' ? h(companySvg, { style: { color: themeStore.themeColor } }) : h(deptSvg)
}

const renderLabel = ({ option }) => {
  return h(
    'span',
    {
      style: { color: option.type === 'team' ? '#202837' : '#515E78' },
    },
    option.name
  )
}

const selectedKeys = (key, option) => {
  if (key[0]) {
    tree.activeOption = option[0]
    nextTick(() => {
      personRef.value.loadList()
    })
  }
}

// 打开弹框
const open = (type, row) => {
  dialogRef.value.open(type, row)
}
</script>

<style lang="scss" scoped></style>
