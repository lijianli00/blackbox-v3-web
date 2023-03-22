<template>
  <sh-layout
    class="overflow-auto"
    :mode="themeStore.layout.mode"
    :fixed-header-and-tab="themeStore.fixedHeaderAndTab"
    :header-height="themeStore.header.height"
    :tab-visible="themeStore.tab.visible"
    :tab-height="themeStore.tab.height"
    :sider-width="themeStore.sider.width"
    :sider-visible="siderVisible"
    :sider-collapsed-width="themeStore.sider.collapsedWidth"
    :sider-collapse="appStore.collapsed"
    :footer-visible="themeStore.footer.show"
    :add-main-overflow-hidden="addMainOverflowHidden"
  >
    <template #header>
      <ShHeaderBar></ShHeaderBar>
    </template>
    <template #tab>
      <ShAppTags></ShAppTags>
    </template>
    <template #sider>
      <ShSideMenu></ShSideMenu>
    </template>
    <ShAppRouterView @hide-main-overflow="setAddMainOverflowHidden"></ShAppRouterView>
  </sh-layout>

  <ShSettingDrawer></ShSettingDrawer>
</template>

<script setup name="ShLayoutAdmin">
import { ShHeaderBar, ShAppTags, ShSideMenu, ShAppRouterView, ShSettingDrawer } from '../../index'
import ShLayout from '../Layout'
import { useAppStore, useThemeStore, useUserStore, useTagsStore } from '@/store'
import { computed, ref, watch, provide } from 'vue'
import { permission } from '../../apis/auth'
import { useRoute, useRouter } from 'vue-router'
import { loadResourceCodes } from '@/index'

const props = defineProps({
  logo: {
    type: String,
    default: '',
  },
})
provide('logo', props.logo)

const appStore = useAppStore()
const themeStore = useThemeStore()
const userStore = useUserStore()
const tagsStore = useTagsStore()
const route = useRoute()
const router = useRouter()
const addMainOverflowHidden = ref(false)
const loading = ref(false)

const setAddMainOverflowHidden = (value) => {
  addMainOverflowHidden.value = value
}

const siderVisible = computed(() => themeStore.layout.mode !== 'horizontal')

// 赋值当前路由
watch(
  () => route.path,
  (val) => {
    userStore.activeMenu = val
  },
  { immediate: true }
)

// 获取用户信息权限
const getUserPermission = async () => {
  loading.value = true
  const { code, data } = await permission.getUserPermission()
  loading.value = false
  if (code === 0) {
    userStore.setUserInfo({
      menuList: data?.permission?.menuTrees || [],
      resourceCodes: data?.permission?.resourceCodes || [],
      ...(data?.userInfo || {}),
    })
    tagsStore.removeOther()
    // 跳转路由
    onLink()
    // 重新加载资源权限
    loadResourceCodes()
  }
}
const onLink = () => {
  if (userStore.menuList && userStore.menuList.length) {
    onFirstLink(userStore.menuList)
  } else {
    // 没有权限
    router.push('/405')
  }
}
const onFirstLink = (list) => {
  if (list[0].children) {
    onFirstLink(list[0].children)
  } else {
    router.push(list[0].url)
    // 添加keep缓存
    tagsStore.addTag(list[0])
  }
}
// 当没有用户信息的时候去请求用户信息
if (!userStore.userId) {
  getUserPermission()
} else if (route.path === '/') {
  onLink()
}
</script>

<style lang="scss" scoped>
.main {
  height: calc(100vh - 15rem);
}
.content {
  height: calc(100% - 11rem);
}
.tags_bg {
  background-color: var(--n-color);
}
::v-deep(.n-layout) {
  background-color: transparent;
}
</style>
