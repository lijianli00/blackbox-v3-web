<template>
  <div class="cursor-pointer h-full">
    <n-dropdown :options="options" trigger="click" @select="onSelect">
      <div class="w-full h-full flex-center">
        <n-avatar round size="large" :src="getShowImgUrl() || avatarUrl" />
        <n-ellipsis class="pl-10 text-16" style="max-width: 96px">{{ userStore.name }}</n-ellipsis>
      </div>
    </n-dropdown>
    <UpdatePassword ref="pwdRef"></UpdatePassword>
  </div>
</template>

<script setup>
import { renderIcon } from '@/utils'
import { useUserStore, useAppStore } from '@/store'
import avatarUrl from '@/assets/img/avatar.png'
import UpdatePassword from './UpdatePassword.vue'
import { ref } from 'vue'
import { swFileImg } from '@/apis/sw'

const userStore = useUserStore()
const pwdRef = ref(null)
const appStore = useAppStore()
const isBaseApi = appStore.env.VITE_APP_BASE_API

const getShowImgUrl = () => {
  if (userStore.userInfo && userStore.userInfo.headPic) {
    let headPic = userStore.userInfo.headPic
    return isBaseApi + swFileImg.showImg({ id: headPic, token: userStore.token })
  } else {
    return null
  }
}

const options = [
  // {
  //   label: '用户资料',
  //   key: 'profile',
  //   icon: () => renderIcon('user'),
  // },
  {
    label: '修改密码',
    key: 'updatePwd',
    icon: () => renderIcon('user'),
  },
  // {
  //   label: '退出登录',
  //   key: 'logout',
  //   icon: () => renderIcon('user'),
  // },
]

const onSelect = (key) => {
  if (key === 'logout') {
    $dialog.info({
      title: '提示',
      content: '确认退出？',
      positiveText: '确定',
      negativeText: '关闭',
      onPositiveClick() {
        userStore.logout()
        $message.success('已退出登录')
      },
    })
  } else if (key === 'updatePwd') {
    pwdRef.value.open()
  }
}
</script>

<style lang="scss" scoped></style>
