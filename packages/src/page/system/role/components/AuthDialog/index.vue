<template>
  <n-drawer v-model:show="modal.show" width="70%">
    <n-drawer-content title="权限配置">
      <div class="border border-#C0C7D4 rounded-8 relative">
        <div class="absolute w-1 h-100% left-320 top-0 bg-#C0C7D4 z-2"></div>
        <div class="flex">
          <div class="w-320">
            <div class="title">菜单</div>
          </div>
          <div class="flex-1">
            <div class="title">
              资源
              <n-dropdown
                trigger="hover"
                :options="classType.list"
                key-field="id"
                label-field="className"
                @select="handleSelect"
              >
                <span class="text-14 text-#3370ff cursor-pointer">
                  {{ showClassName }}
                  <component :is="arrowRight" class="w-14 h-14 align-middle"></component>
                </span>
              </n-dropdown>
            </div>
          </div>
        </div>
        <div class="container">
          <sh-tree :data="tree.list" label-field="name" key-field="id" default-expand-all :render-label="renderLabel" />
        </div>
      </div>
      <div class="text-right mt-20">
        <n-button @click="modal.show = false"> 关闭 </n-button>
        <n-button type="primary" @click="onSubmit"> 确定 </n-button>
      </div>
    </n-drawer-content>
  </n-drawer>
</template>

<script setup>
import { computed, h, reactive, ref } from 'vue'
import { orgRolePerson, orgClass } from '@/apis/org'
import TreeItem from './TreeItem.vue'
import arrowRight from '@/assets/svg/arrow-right.svg'

const modal = reactive({
  show: false,
  loading: false,
})
const tree = reactive({
  list: [],
  loading: false,
  roleId: '',
})
const classType = reactive({
  list: [],
  id: '',
})

const onSubmit = async () => {
  modal.loading = true
  const { code, msg } = await orgRolePerson.saveAuthTreeByRoleId({
    roleId: tree.roleId,
    menuTreeList: tree.list,
  })
  modal.loading = false
  if (code === 0) {
    $message.success(msg)
    modal.show = false
  } else {
    $message.error(msg)
  }
}

const getTreeList = async (id) => {
  modal.loading = true
  const { code, msg, data } = await orgRolePerson.findAuthTreeByRoleId({ id: tree.roleId })
  modal.loading = false
  if (code === 0) {
    // tree.list = data || []

    let newData = []
    let pcMenu = []
    let moveMenu = []

    if (data && data.length) {
      data.forEach((item) => {
        item.children.forEach((itemChildren) => {
          if (itemChildren.menuType) {
            moveMenu.push(itemChildren)
          } else {
            pcMenu.push(itemChildren)
          }
        })
        item.children = []

        item.children.push({
          id: '-2',
          name: 'pc菜单',
          children: pcMenu,
          menuType: 0,
          selected: pcMenu.length && pcMenu.every((item) => item.selected === true),
          resources: [],
        })
        item.children.push({
          id: '-3',
          name: '移动端菜单',
          children: moveMenu,
          menuType: 1,
          selected: moveMenu.length && moveMenu.every((item) => item.selected === true),
          resources: [],
        })

        item.selected = item.children.every((item) => item.selected === true)
        newData.push(item)
      })
    }

    tree.list = newData
  } else {
    $message.error(msg)
  }
}

const renderLabel = (info) => {
  return h(TreeItem, {
    option: info.option,
    classTypeId: classType.id,
    treeList: tree.list,
  })
}

const getClassTypeList = async () => {
  const { code, msg, data } = await orgClass.listAllClass()
  if (code === 0) {
    classType.list = data || []
  } else {
    $message.error(msg)
  }
}
getClassTypeList()

const showClassName = computed(() => {
  for (const key in classType.list) {
    if (classType.list[key].id === classType.id) {
      return classType.list[key].className
    }
  }
  return '请选择'
})
const handleSelect = (val) => {
  classType.id = val
}

const open = (row) => {
  modal.show = true
  tree.roleId = row.id
  getTreeList()
}

defineExpose({
  open,
})
</script>

<style lang="scss" scoped>
::v-deep(.n-tree-node-wrapper) {
  border-bottom: 1px solid #e1e7f8;
}
::v-deep(.n-tree__empty) {
  margin-top: 200px;
}
.container {
  height: calc(100vh - 200px);
  overflow: auto;
}
.title {
  line-height: 40px;
  padding-left: 40px;
  position: relative;
  border-bottom: 1px solid;
  border-color: #c0c7d4;
  color: #202837;
  &::after {
    content: '';
    position: absolute;
    left: 20px;
    top: 12px;
    width: 6px;
    height: 16px;
    background-color: #3370ff;
  }
}
</style>
