<template>
  <div class="w-420 bg-#fff sh-login-box rounded-10 py-30 px-30">
    <n-el tag="div" class="title text-32 font-700 h-full mr-20 mb-64" style="color: var(--primary-color)">
      <span>用户登录</span>
    </n-el>
    <sh-form ref="formRef" :model="loginInfo" size="large" label-placement="left" label-width="0">
      <sh-form-item path="loginName" rule="required">
        <n-input v-model:value="loginInfo.loginName" class="input" placeholder="输入账号" />
      </sh-form-item>
      <sh-form-item class="mt-6" path="password" rule="required">
        <n-input
          v-model:value="loginInfo.password"
          type="password"
          class="input"
          placeholder="输入密码"
          show-password-on="mousedown"
          @keydown.enter="validateForm"
        />
      </sh-form-item>
    </sh-form>
    <div class="mb-60 flex justify-between">
      <n-checkbox v-model:checked="isRemember">记住密码</n-checkbox>
      <p class="cursor-pointer btn" @click="onForgetPWD">忘记密码？</p>
    </div>
    <SlideVerify ref="modalRef" class="absolute -top-440 -left-30" :login-info="loginInfo" :is-remember="isRemember">
      <n-button type="primary" class="w-full" size="large" @click="validateForm"> 立即登录 </n-button>
      <br />
      <n-button class="w-full mt-10" size="large" @click="validateForm"> 注册 </n-button>
    </SlideVerify>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { lStorage } from '@/utils'
import { auth } from '@/apis/auth'
import SlideVerify from './SlideVerify.vue'

const formRef = ref(null)
const loginInfo = reactive({
  loginName: '',
  password: '',
})
const isRemember = ref(false)
const modalRef = ref(null)

// 校验账号密码
const validateForm = () => {
  formRef.value?.validate((errors) => {
    if (errors) return
    // 校验成功
    // 账号密码加密
    modalRef.value.open()
  })
}

const onSubmit = async () => {
  const { code, data, msg } = await auth.login(loginInfo)
  if (code === 0) {
    $message.success(msg)
  } else {
    $message.error(msg)
  }
}

// 拿缓存的账号密码
function initLoginInfo() {
  const localLoginInfo = lStorage.get('loginInfo')
  if (localLoginInfo) {
    loginInfo.loginName = localLoginInfo.loginName || ''
    loginInfo.password = localLoginInfo.password || ''
    isRemember.value = true
  }
}
initLoginInfo()
</script>

<style lang="scss" scoped>
.sh-login-box {
  box-shadow: 0 8px 24px rgba(32, 40, 55, 0.16);
  position: relative;
  .title {
    position: relative;
    padding-left: 24px;
    &::after {
      position: absolute;
      left: 0;
      top: 11px;
      width: 8px;
      height: 32px;
      border-radius: 0 4px 4px 0;
      background: var(--primary-color);
      content: '';
    }
  }

  ::v-deep(.input) {
    height: 48px;
    line-height: 48px;
    box-shadow: 0 0 8px rgba(32, 40, 55, 0.16);
    .n-input__border,
    .n-input .n-input__state-border {
      border: none;
    }
  }
}
</style>
