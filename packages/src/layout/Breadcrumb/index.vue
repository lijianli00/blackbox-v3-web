<template>
  <div class="flex-1-hidden flex items-center h-full text-16 px-10">
    <!-- <div class="mr-10">
      <sh-icon name="breadcrumbs"></sh-icon>
    </div> -->
    <n-breadcrumb>
      <n-breadcrumb-item v-for="(item, index) in breadList" :key="index">
        <n-dropdown
          :options="item.children"
          label-field="menuName"
          key-field="url"
          :render-icon="renderMenuIcon"
          @select="dropdownSelect"
        >
          <div class="trigger flex-center" :class="index < breadList.length - 1 ? 'text-[#8996AF]' : ''">
            <sh-icon v-if="themeStore.header.crumb.showIcon" :name="item.svg || 'menu'" class="mr-5"></sh-icon>
            {{ item.menuName }}
          </div>
        </n-dropdown>
      </n-breadcrumb-item>
    </n-breadcrumb>
  </div>
</template>

<script setup name="NlBreadcrumb">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore, useThemeStore } from '@/store'
import { renderIcon } from '@/utils'
import hook from './hook'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()
const themeStore = useThemeStore()
const { getBreadcrumbPath } = hook()

const breadList = ref([])

const renderMenuIcon = (option) => {
  return option.svg && themeStore.header.crumb.showIcon ? renderIcon(option.svg) : ''
}
const dropdownSelect = (url) => {
  router.push(url)
}

watch(
  () => route.path,
  (val) => {
    breadList.value = getBreadcrumbPath(userStore.menuList, val)
  },
  { immediate: true }
)
</script>

<style lang="scss" scoped>
::v-deep(.n-breadcrumb .n-breadcrumb-item .n-breadcrumb-item__separator) {
  color: var(--n-item-text-color-active);
}
</style>
