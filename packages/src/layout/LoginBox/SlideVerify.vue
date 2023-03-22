<template>
  <n-popover :width="420" trigger="manual" raw :show="modal.show" placement="left" :show-arrow="false">
    <template #trigger>
      <div>
        <slot></slot>
      </div>
    </template>
    <n-card class="container bg-[#fff] dark:bg-[#101014]">
      <n-el tag="div">
        <transition name="el-fade-in-linear ">
          <div class="slide-verify">
            <div class="title text-32 font-700 h-full mr-20 mb-35" style="color: var(--primary-color)">
              <span>安全验证</span>
              <span class="text-20 text-[#515E78] absolute top-12 right-0">
                <n-popover trigger="hover" :show-arrow="false">
                  <template #trigger>
                    <component :is="refresh" class="svg-icon w-28 h-28 cursor-pointer" @click="open"></component>
                  </template>
                  <span>刷新验证码</span>
                </n-popover>

                <n-popover trigger="hover" :show-arrow="false">
                  <template #trigger>
                    <component :is="closeIcon" class="w-28 h-28 ml-8 cursor-pointer" @click="close"></component>
                  </template>
                  <span>关闭验证码</span>
                </n-popover>
              </span>
            </div>
            <div class="sliding-pictures flex-center mb-42">
              <div>
                <div class="operation">
                  <span class="text">请完成安全校验</span>
                  <i class="ri:close-fill"></i>
                </div>
                <n-spin :show="modal.loading">
                  <div class="vimg">
                    <img
                      id="sliderBlock"
                      :src="slideImg.imgBlockSrc"
                      class="slider-block"
                      :style="{ top: `${slideImg.yHeight}px` }"
                    />
                    <img id="codeImg" :src="slideImg.imgSrc" class="slider-img" />
                  </div>
                </n-spin>
                <div class="slider">
                  <transition name="el-zoom-in-bottom">
                    <p v-show="modal.timestamp" class="verify-success">{{ modal.timestamp }}</p>
                  </transition>
                  <div class="track" :class="{ 'verify-error': modal.verifyError }">{{ modal.tips }}</div>
                  <div class="button cursor-pointer" @mousedown.prevent="drag" />
                </div>
              </div>
            </div>
          </div>
        </transition>
      </n-el>
    </n-card>
  </n-popover>
</template>

<script setup>
import { reactive, nextTick } from 'vue'
import { auth } from '@/apis/auth'
import { lStorage, encryptRSA, decryptRSA } from '@/utils'
import { useRouter } from 'vue-router'
import { useTagsStore, useUserStore, useAppStore } from '@/store'
import refresh from '@/assets/svg/refresh.svg'
import closeIcon from '@/assets/svg/close.svg'

const props = defineProps({
  isRemember: Boolean,
  loginInfo: {
    type: Object,
    default: () => {
      return {}
    },
  },
})

const router = useRouter()
const tagsStore = useTagsStore()
const userStore = useUserStore()
const appStore = useAppStore()
const isRsaLogin = appStore.env.VITE_APP_RSA_LOGIN

const modal = reactive({
  show: false,
  tips: '',
  timestamp: '',
  verifyError: false,
  loading: false,
  dragTime: null,
})
const slideImg = reactive({
  imgSrc: '',
  imgBlockSrc: '',
  yHeight: '',
  imgCodeId: '',
})

let slider = null

const getCaptcha = async () => {
  modal.loading = true
  const { code, data } = await auth.captcha()
  if (code === 0) {
    slideImg.imgBlockSrc = 'data:image/png;base64,' + data.smallImage
    slideImg.imgSrc = 'data:image/png;base64,' + data.bigImage
    slideImg.yHeight = data.yHeight
    slideImg.imgCodeId = data.imgCodeId
    slider.style.left = '0px'
  }
  modal.loading = false
}

// 滑块拖拽
const drag = (e) => {
  modal.dragTime = new Date()
  const dom = e.target // dom元素
  const downCoordinate = { x: e.x, y: e.y }
  // x轴数据
  let x = 0
  const move = (moveEV) => {
    // 取整
    x = Math.round(moveEV.x - downCoordinate.x)
    if (x >= 237) {
      x = 237
      return false
    } else if (x <= 0) {
      x = 0
      return false
    }
    dom.style.left = x + 'px'
    slider.style.left = x + 'px'
  }
  const up = () => {
    document.removeEventListener('mousemove', move)
    document.removeEventListener('mouseup', up)
    dom.style.left = ''
    submitHandle(x)
  }
  document.addEventListener('mousemove', move)
  document.addEventListener('mouseup', up)
}
const toRsa = (params) => {
  return encryptRSA(JSON.stringify(params))
}

// 提交请求
const submitHandle = async (x) => {
  const params = {
    ...props.loginInfo,
    imgCodeId: slideImg.imgCodeId,
    moveLength: x,
  }
  if (isRsaLogin && isRsaLogin === 'true') {
    // 开启 rsa 登录加密
    const loginUser = JSON.parse(JSON.stringify(params))
    const response = await auth.login(toRsa(loginUser), {
      headers: {
        'Content-Type': 'text/plain',
      },
    })
    try {
      const { code, msg, data } = JSON.parse(decryptRSA(response))
      handleLogin(code, msg, data)
    } catch (error) {
      $message.error('未知错误')
    }
  } else {
    const { code, msg, data } = await auth.login(params)
    handleLogin(code, msg, data)
  }
}

const handleLogin = (code, msg, data) => {
  if (code === 0) {
    modal.timestamp = `校验成功，用时${((new Date() - modal.dragTime) / 1000).toFixed(1)}s`
    modal.tips = '正在登录...'
    setTimeout(() => {
      $message.success('登录成功')
      userStore.setToken(data)
      userStore.removeUserInfo()
      tagsStore.removeOther()
      router.push('/')

      if (props.isRemember) {
        lStorage.set('loginInfo', props.loginInfo)
      } else {
        lStorage.remove('loginInfo')
      }
    }, 1000)
  } else if (code === 1) {
    modal.tips = '校验错误,请重新校验'
    modal.verifyError = true
    getCaptcha()
  } else {
    $message.error(msg)
    modal.verifyError = false
    modal.show = false
  }
}

const open = () => {
  modal.show = true
  modal.tips = '拖动滑块完成上方拼图'
  modal.timestamp = ''
  modal.verifyError = false
  // 获取验证码
  nextTick(() => {
    slider = document.querySelector('#sliderBlock') // 滑块dom
    getCaptcha()
  })
}
const close = () => {
  modal.show = false
}

defineExpose({
  open,
})
</script>

<style scoped lang="scss">
.verify-success {
  width: 280px;
  position: absolute;
  top: -30px;
  background: #67c23a;
  color: #fff;
}
::v-deep(.slidingPictures) {
  padding: 0;
  width: 310px;
  border-radius: 2px;
}
/*该样式最终是以弹窗插入*/
.sliding-pictures {
  // width: 372px;
  .vimg {
    position: relative;
    border-radius: 8px;
    border: 2px solid rgba(32, 40, 55, 0.1);

    width: 280px;
    height: 200px;
    overflow: hidden;
  }
  .slider-img {
    width: 280px;
    height: 200px;
  }
  .slider-block {
    position: absolute;
    z-index: 2000;
    filter: drop-shadow(rgba(32, 40, 55, 0.5) 0px 0px 6px);
  }
  .slider {
    width: 100%;
    padding: 10px 0;
    margin-top: 46px;
    position: relative;
    z-index: 5000;
    .track {
      width: 280px;
      height: 38px;
      background: var(--primary-color);
      border-radius: 25px;
      font-size: 14px;
      line-height: 38px;
      padding-right: 15px;
      padding-left: 70px;
      box-sizing: border-box;
      color: #fff;
      position: relative;
      overflow: hidden;
      &::after,
      &::before {
        position: absolute;
        width: 20px;
        height: 100%;
        top: 0;
        left: 0px;
        background-color: rgba(255, 255, 255, 0.2);
        content: '';
        transform: skew(-15deg, 0);
        animation: track_move 5s infinite;
      }
      &::before {
        width: 10px;
        margin-left: 30px;
      }
    }
    .verify-error {
      color: red;
    }
    .pintuTrue {
      background: #67c23a;
      color: #ffffff;
    }
    .button {
      position: absolute;
      top: 5px;
      width: 50px;
      height: 50px;
      line-height: 48px;
      background: #ffffff;
      box-shadow: rgba(32, 40, 55, 0.32) 0 0 8px;
      border-radius: 50%;
      text-align: center;
      font-size: 28px;
      color: #3e5d8b;
      &:hover {
        color: #2181bd;
      }
    }
  }
  .operation {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #515e78;
    font-size: 16px;
  }
}

@keyframes track_move {
  from {
    left: 0;
  }
  to {
    left: 300px;
  }
}
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
</style>
