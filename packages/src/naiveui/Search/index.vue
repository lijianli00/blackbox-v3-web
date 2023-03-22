<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="mb-20 rounded-5 border-#efeff5 wrapper">
    <div class="flex justify-between" :class="{ dark: themeStore.darkMode, 'p-10': moreList.length }">
      <div>
        <slot name="left"></slot>
      </div>
      <div>
        <n-space>
          <slot></slot>
          <n-input-group v-if="dropdownList && dropdownList.length" class="w-292">
            <n-select
              :value="select.value"
              :style="{ width: `${selectWidth}%` }"
              :options="dropdownList"
              @update:value="updateSelect"
            />
            <n-input v-model:value="value" :style="{ width: `${100 - selectWidth}%` }" @update:value="updateInput" />
          </n-input-group>
          <n-button v-if="loadList" type="primary" @click="loadList"> 搜索 </n-button>
          <n-button v-if="reset" @click="resetValue"> 重置 </n-button>
        </n-space>
      </div>
    </div>
    <div v-if="moreList.length" class="border-t border-#efeff5 p-20">
      <div class="flex justify-between">
        <div class="flex-center">
          <div class="w-4 h-15 primary_bg"></div>
          <div class="ml-10 text-gray-500">筛选条件</div>
        </div>
        <div v-if="foldMoreList.length" class="flex-center cursor-pointer primary_color" @click="expanded = !expanded">
          {{ expanded ? '折叠' : '展开' }}
          <!-- <sh-icon name="arrow-right" class="ml-5 transition" :class="{ 'rotate-180': expanded }"></sh-icon> -->
          <component :is="arrowRight" class="w-14 h-14 ml-5 transition" :class="{ 'rotate-180': expanded }"></component>
        </div>
      </div>
      <div class="mt-10">
        <SearchItem v-for="item in expandedMoreList" :key="item.key" :label-width="moreLabelWidth" :label="item.label">
          <SearchItemCheckbox
            v-if="item.type === 'checkbox'"
            v-model:value="form[item.key]"
            :option="item.option"
          ></SearchItemCheckbox>
          <SearchItemSelect
            v-else-if="item.type === 'select'"
            v-model="form[item.key]"
            :width="`${item.width || 30}%`"
            :options="item.options"
            :api="item.api"
            :params="item.params"
            :method="item.method"
            :n-select-props="item.nSelectProps"
          />
          <SearchItemRadio
            v-else-if="item.type === 'radio'"
            v-model:value="form[item.key]"
            :option="item.option"
          ></SearchItemRadio>
          <SearchItemRender v-else :item="item"></SearchItemRender>
        </SearchItem>
        <sh-collapse-transition>
          <div v-show="expanded" class="description">
            <SearchItem v-for="item in foldMoreList" :key="item.key" :label-width="moreLabelWidth" :label="item.label">
              <SearchItemCheckbox
                v-if="item.type === 'checkbox'"
                v-model:value="form[item.key]"
                :option="item.option"
              ></SearchItemCheckbox>
              <SearchItemSelect
                v-else-if="item.type === 'select'"
                v-model="form[item.key]"
                :width="`${item.width || 30}%`"
                :options="item.options"
                :api="item.api"
                :params="item.params"
                :method="item.method"
                :n-select-props="item.nSelectProps"
              />
              <SearchItemRadio
                v-else-if="item.type === 'radio'"
                v-model:value="form[item.key]"
                :option="item.option"
              ></SearchItemRadio>
              <SearchItemRender v-else :item="item"></SearchItemRender>
            </SearchItem>
          </div>
        </sh-collapse-transition>
      </div>
    </div>
  </div>
</template>

<script setup name="ShSearch">
import { computed, reactive, ref, watch } from 'vue'
import { useThemeStore } from '@/store'
import SearchItemCheckbox from './SearchItemCheckbox.vue'
import SearchItem from './SearchItem.vue'
import SearchItemSelect from './SearchItemSelect.vue'
import SearchItemRadio from './SearchItemRadio.vue'
import SearchItemRender from './SearchItemRender.vue'
import arrowRight from '@/assets/svg/arrow-right.svg'

const themeStore = useThemeStore()

const props = defineProps({
  reset: {
    type: Function,
    default: null,
  },
  loadList: {
    type: Function,
    default: null,
  },
  dropdownList: {
    type: Array,
    default: () => {
      return []
    },
  },
  moreList: {
    type: Array,
    default: () => {
      return []
    },
  },
  form: {
    type: Object,
    default: () => {
      return {}
    },
  },
  selectWidth: {
    type: Number,
    default: 25,
  },
  moreLabelWidth: {
    type: String,
    default: '160px',
  },
})

const expanded = ref(false)
const expandedMoreList = computed(() => {
  return props.moreList.filter((item, index) => {
    return index < 2
  })
})
const foldMoreList = computed(() => {
  return props.moreList.filter((item, index) => {
    return index >= 2
  })
})

const select = reactive({
  value: '',
})
const value = ref('')
const updateInput = () => {
  // 强行修改form的值
  // eslint-disable-next-line vue/no-mutating-props
  props.form[select.value] = value.value
}

const updateSelect = (val) => {
  // 强行修改form的值
  // eslint-disable-next-line vue/no-mutating-props
  props.form[select.value] = ''
  select.value = val
  value.value = ''
}
const resetValue = () => {
  value.value = ''
  props.reset()
}

// 监听下拉选项的变化
watch(
  () => props.dropdownList,
  (val) => {
    if (val && val.length) {
      select.value = val[0].value
    }
  },
  { immediate: true, deep: true }
)
</script>

<style lang="scss" scoped>
.wrapper ::v-deep(.n-base-selection .n-base-selection-label) {
  background-color: #f6f7f9;
}
.dark .wrapper ::v-deep(.n-base-selection .n-base-selection-label) {
  background-color: #2d2d30;
}

.primary_bg {
  background-color: var(--primaryColor);
}
.primary_color {
  color: var(--primaryColor);
}
</style>
