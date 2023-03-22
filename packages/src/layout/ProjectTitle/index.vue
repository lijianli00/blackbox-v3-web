<template>
  <n-el tag="div" class="text-20 flex-center font-600 h-full mr-20" style="color: var(--primary-color)">
    <n-image v-if="logoImg" width="32" :src="logoImg" class="mr-10" />
    {{ title }}
  </n-el>
</template>

<script setup name="NlProjectTitle">
import { useAppStore } from '@/store'
import { computed, inject } from 'vue'
// import logoImg from '@/assets/img/logo.png'

let logoImg = inject('logo')

const appStore = useAppStore()

const title = computed(() => {
  return appStore.title
})
</script>

<style lang="scss" scoped></style>
