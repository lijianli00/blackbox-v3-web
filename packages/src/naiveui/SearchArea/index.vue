<template>
  <div class="search clearfix">
    <div class="search-left">
      <slot name="left"></slot>
    </div>
    <div class="search-right">
      <div class="search-input">
        <n-popover placement="bottom" :width="375" trigger="focus" to=".search" popper-class="search-popper">
          <template #trigger>
            <n-input
              placeholder="请输入内容"
              :value="isFocus ? value : valueName"
              @focus="focus"
              @input="input"
              @blur="blur"
            ></n-input>
          </template>
          <div class="dropdown group">
            <div
              v-for="(item, index) in dropdownList"
              :key="index"
              class="dropdown-item"
              :class="{ active: index === activeIndex }"
              @click.prevent="search(item, index)"
            >
              {{ `${item.label}:${value}` }}
            </div>
          </div>
        </n-popover>
        <!-- <n-dropdown
          :show-arrow="true"
          :width="375"
          trigger="click"
          :options="dropdownList"
          :render-label="renderDropdownLabel"
          @select="handleSelect"
        >
          <n-input v-model:value="value" placeholder="请输入内容" @focus="focus"></n-input>
        </n-dropdown> -->
      </div>
      <n-popover
        v-if="$slots.default"
        placement="bottom"
        to=".search"
        class="search-popover"
        :width="800"
        trigger="click"
        content-style="padding: 20px 0 5px 0; "
        @update:show="onShow"
      >
        <template #trigger>
          <n-button type="primary" class="more mr-12">
            更多搜索
            <n-icon size="16" class="ml-4" color="#fff ">
              <ChevronDown v-if="!isMore" />
              <ChevronUp v-else />
            </n-icon>
          </n-button>
        </template>
        <sh-form ref="formRef" v-bind="$attrs" class="yw-form" :model="form" :label-width="labelWidth">
          <slot></slot>
        </sh-form>
      </n-popover>
      <span></span>
      <n-button :class="!$slots.default ? `ml-12` : ''" @click="resetFields">重置</n-button>
    </div>
  </div>
</template>

<script setup name="ShSearchArea">
import { ChevronDown, ChevronUp } from '@vicons/ionicons5'
import { useDebounceFn } from '@vueuse/core'
import { ref, watch, computed } from 'vue'
import { addColorAlpha } from '@/utils'
import { useThemeStore } from '@/store'
import { useAttrs } from 'vue'
const themeStore = useThemeStore()
const attrs = useAttrs()
const props = defineProps({
  form: {
    type: Object,
    default: () => ({}),
  },
  props: {
    type: String,
    default: '',
  },
  labelWidth: {
    type: String,
    default: '80px',
  },
  dropdownList: {
    type: Array,
    default: () => [],
  },
})
const emit = defineEmits(['loadList'])
const value = ref('')
const label = ref('')
const isMore = ref(false)
const isFocus = ref(false)
const activeIndex = ref(null)
const onShow = (show) => {
  isMore.value = show
}
watch(
  () => props.form,
  () => {
    loadList()
  },
  {
    deep: true,
  }
)

const loadList = useDebounceFn(() => {
  // 需要被防抖的操作
  emit('loadList')
}, 500)

const resetFields = () => {
  value.value = ''
  activeIndex.value = null
  if (attrs.onReset) {
    // 在 defineEmits 定义后在  attrs 将拿不到对应事件
    emit('reset')
  } else {
    props.props &&
      props.props.split('||').forEach((item) => {
        // eslint-disable-next-line vue/no-mutating-props
        props.form[item] = ''
      })
    props.dropdownList.forEach((item) => {
      // eslint-disable-next-line vue/no-mutating-props
      props.form[item.key] = ''
    })
  }
}

function input(val) {
  value.value = val
  search(props.dropdownList[0], 0)
}
const search = (data, index) => {
  activeIndex.value = index
  label.value = data.label
  props.dropdownList.forEach((item) => {
    if (value.value && item.key == data.key) {
      // eslint-disable-next-line vue/no-mutating-props
      props.form[item.key] = value.value
    } else {
      //清空其它数据
      // eslint-disable-next-line vue/no-mutating-props
      props.form[item.key] = ''
    }
  })
}

const valueName = computed(() => {
  let str = value.value
  if (label.value && value.value) {
    str = `${label.value}：${value.value}`
  }
  return str
})
const focus = () => {
  // 获取焦点的时候制空
  label.value = ''
  isFocus.value = true
  keyDown()
}
const blur = () => {
  // 失去焦点
  isFocus.value = false
}

// 监听键盘
const keyDown = () => {
  document.onkeydown = (e) => {
    //事件对象兼容
    let e1 = e || event || window.event || arguments.callee.caller.arguments[0]
    //键盘按键判断:左箭头-37;上箭头-38；右箭头-39;下箭头-40
    //左
    if (!value.value) return
    if (e1 && e1.keyCode == 38) {
      if (activeIndex.value > 0) {
        activeIndex.value--
        search(props.dropdownList[activeIndex.value], activeIndex.value)
      }
    } else if (e1 && e1.keyCode == 40) {
      if (activeIndex.value < props.dropdownList.length - 1) {
        activeIndex.value++
        search(props.dropdownList[activeIndex.value], activeIndex.value)
      }
    }
  }
}

// 主题背景色
const itemBgColor = computed(() => {
  const color = themeStore.darkMode ? themeVars.primaryColor : themeStore.themeColor
  return addColorAlpha(color, 0.1)
})
</script>

<style lang="scss" scoped>
.clearfix {
  &:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: ' ';
    clear: both;
    height: 0;
  }
}
.search {
  &-popover {
    padding: 20px;
  }
  &-left {
    float: left;
  }
  &-right {
    float: right;
  }
  &-input {
    display: inline-block;
    width: 375px;
    vertical-align: bottom;
    .n-input {
      border-top-left-radius: 2px;
      border-bottom-left-radius: 2px;
      line-height: 30px;
    }
  }
}
.more {
  border-radius: 0px;
}

.dropdown {
  &-item {
    padding: 0 12px;
    cursor: pointer;
    margin: 2px -10px;
    line-height: 32px;
    &:hover {
      color: var(--primaryColor);
      background-color: v-bind('itemBgColor');
    }
  }
  .active {
    color: var(--primaryColor);
    background-color: v-bind('itemBgColor');
  }
}
</style>
