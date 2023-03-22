<template>
  <div class="box_shadow bg-#fff h-48 absolute top-0 left-0 w-full flex justify-between text-#515E78 z-99">
    <div class="h-full ml-20 flex items-center">
      <div class="cursor-pointer flex-center h-full text-16" @click="goBack">
        <component :is="arrowRight" class="rotate-90 mr-5 w-16 h-16"></component>
        返回
      </div>
      <div class="flex-center h-full mx-20">
        <div class="h-60% w-2 bg-#eee"></div>
      </div>
      <!-- <sh-icon name="zoom-in" class="text-28 cursor-pointer text-#4A86FF" @click="zoom(10)"></sh-icon>
      <sh-icon name="zoom-out" class="text-28 cursor-pointer text-#8996af  " @click="zoom(-10)"></sh-icon> -->

      <component :is="zoomIn" class="w-28 h-28 cursor-pointer" @click="zoom(10)"></component>
      <component :is="zoomOut" class="w-28 h-28 cursor-pointer ml-10" @click="zoom(-10)"></component>
    </div>
    <div class="w-360 h-62 title flex-center">
      <div class="text-20 font-600 mt--10">流程设置</div>
    </div>
    <div class="h-full">
      <div class="h-full w-145 flex-center bg-#4A86FF cursor-pointer">
        <div class="text-#fff flex-center text-16" @click="onSubmit">
          <component :is="send" class="w-24 h-24 mr-5 text-24"></component>
          <div>发布</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import arrowRight from '@/assets/svg/arrow-right.svg'
import zoomIn from '@/assets/svg/zoom-in.svg'
import zoomOut from '@/assets/svg/zoom-out.svg'
import send from '@/assets/svg/send.svg'

const router = useRouter()
const emit = defineEmits(['zoom', 'submit'])

const goBack = () => {
  $dialog.warning({
    title: '警告',
    content: '是否确定返回？返回后已修改流程将不会保留',
    positiveText: '确定',
    negativeText: '关闭',
    onPositiveClick: async () => {
      router.go(-1)
    },
  })
}
const zoom = (v) => {
  emit('zoom', v)
}
const onSubmit = () => {
  emit('submit')
}
</script>

<style lang="scss" scoped>
.box_shadow {
  box-shadow: 0 3px 16px rgba(16, 61, 152, 0.12);
}
.title {
  background-image: url(../img/bg_title.png);
  background-size: 100% 100%;
}
</style>
