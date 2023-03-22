<template>
  <div class="h-full flex-center">
    <n-result status="405" title="405 权限不够" description="总有些门是对你关闭的">
      <template #footer>
        <n-button @click="logout">返回登录</n-button>
      </template>
    </n-result>
  </div>
</template>

<script setup>
import { useUserStore } from '@/store'
import { auth } from '@/apis/auth'

const userStore = useUserStore()

const logout = async () => {
  await auth.logout()
  userStore.logout()
}
</script>
