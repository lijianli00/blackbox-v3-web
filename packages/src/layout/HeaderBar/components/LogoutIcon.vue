<template>
  <div class="cursor-pointer w-40px h-full">
    <n-popover>
      <template #trigger>
        <div class="w-full h-full flex-center" @click="logout">
          <component :is="logoutIcon" class="w-20 h-20"></component>
        </div>
      </template>
      退出登录
    </n-popover>
  </div>
</template>

<script setup>
import { useUserStore } from '@/store'
import { auth } from '../../../apis/auth'
import logoutIcon from '@/assets/svg/logout.svg'

const userStore = useUserStore()

const logout = () => {
  $dialog.info({
    title: '提示',
    content: '确认退出？',
    positiveText: '确定',
    negativeText: '关闭',
    onPositiveClick: async () => {
      await auth.logout()
      userStore.logout()
      $message.success('已退出登录')
    },
  })
}
</script>

<style lang="scss" scoped></style>
