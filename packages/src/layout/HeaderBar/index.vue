<template>
  <sh-container class="h-full" :inverted="themeStore.header.inverted">
    <div
      class="layout_header h-full flex flex-col"
      :style="{ 'background-color': themeStore.themeColor }"
      :class="{ dark: themeStore.darkMode }"
    >
      <div class="flex px-30 justify-between items-center flex-1">
        <ProjectTitle></ProjectTitle>
        <div class="flex-1-hidden h-full pl-20">
          <Breadcrumb v-if="themeStore.header.crumb.visible"></Breadcrumb>
        </div>
        <div class="flex items-center justify-end h-full text-20" :style="{ color: themeStore.themeColor }">
          <FullScreen class="item_box"></FullScreen>
          <!-- <ThemeDark class="item_box"></ThemeDark> -->
          <SettingButton class="item_box"></SettingButton>
          <div class="w-1 h-20 bg-#8996AF mx-10"></div>
          <UserHandle class="mx-10"></UserHandle>
          <LogoutIcon class="item_box"></LogoutIcon>
        </div>
      </div>
      <div
        v-if="showHeaderMenu"
        class="h-40 flex-center px-30"
        :style="{ 'background-color': themeBgColor }"
        :class="{ dark: themeStore.darkMode }"
      >
        <HeaderMenu></HeaderMenu>
      </div>
    </div>
  </sh-container>
</template>

<script setup name="NlHeaderBar">
import Breadcrumb from '../Breadcrumb/index.vue'
import ProjectTitle from '../ProjectTitle/index.vue'
import { FullScreen, ThemeDark, UserHandle, SettingButton, HeaderMenu, LogoutIcon } from './components'
import { useThemeStore } from '@/store'
import { computed, ref, watch } from 'vue'
const themeStore = useThemeStore()
const themeBgColor = ref(themeStore.themeColor)

const web_color_opacity = (opacity, web_color) => {
  return (
    'rgba(' +
    parseInt('0x' + web_color.slice(1, 3)) +
    ',' +
    parseInt('0x' + web_color.slice(3, 5)) +
    ',' +
    parseInt('0x' + web_color.slice(5, 7)) +
    ',' +
    opacity +
    ')'
  )
}

const handleBgColor = (val) => {
  themeBgColor.value = web_color_opacity(0.06, val)
}

watch(
  () => themeStore.themeColor,
  (val) => {
    handleBgColor(val)
  },
  {
    immediate: true,
  }
)
watch(
  () => themeStore.layout.mode,
  (val) => {
    if (val === 'horizontal') {
      themeStore.setHeaderHeight(100)
    } else {
      themeStore.setHeaderHeight(60)
    }
    themeStore.cacheThemeSettings()
  }
)
const showHeaderMenu = computed(() => {
  return themeStore.layout.mode === 'horizontal'
})
</script>

<style lang="scss" scoped>
.layout_header {
  box-shadow: 0 1px 2px #00152914;
  height: calc(100% - 1px);
  background-image: url('@/assets/img/header_bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.dark .layout_header {
  background-image: url('@/assets/img/header_bg_dark.png');
}
.item_box:hover {
  background-color: rgba(225, 255, 255, 0.5);
}
.dark .item_box:hover {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
