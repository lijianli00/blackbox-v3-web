<template>
  <div class="sh-search-fold">
    <div :style="{ height: searchHeight }" class="sh-search-fold-wrap">
      <n-row ref="searchRef" :gutter="btnGutter">
        <n-col :span="24 - btnSpan">
          <!-- 使用 n-grid 重新封装 -->
          <sh-grid-form v-bind="$attrs" ref="formRef" :label-width="labelWidth">
            <slot></slot>
          </sh-grid-form>
        </n-col>
        <n-col :span="btnSpan">
          <div class="flex items-center justify-end pl-15">
            <div class="flex-center">
              <n-button v-if="showFold" text class="more" @click="isUnfold = !isUnfold">
                {{ isUnfold ? '折叠查询' : '更多查询' }}
                <!-- <sh-icon class="ml-4 icon" name="arrow-right" :class="isUnfold ? 'arrow-icon' : ''"></sh-icon> -->
                <component
                  :is="arrowRight"
                  class="w-14 h-14 ml-4 icon"
                  :class="isUnfold ? 'arrow-icon' : ''"
                ></component>
              </n-button>
            </div>
            <div class="btn">
              <n-button v-if="reset" class="reset" @click="resetFields()">重置</n-button>
              <n-button v-if="loadList" type="primary" @click="onSearch">查询</n-button>
              <slot name="btn"></slot>
            </div>
          </div>
        </n-col>
      </n-row>
    </div>
  </div>
</template>

<script setup name="ShSearchFold">
import { ref, onMounted, onBeforeUnmount, computed, nextTick } from 'vue'
import arrowRight from '@/assets/svg/arrow-right.svg'

const props = defineProps({
  reset: {
    type: Function,
    default: null,
  },
  loadList: {
    type: Function,
    default: null,
  },
  btnGutter: {
    type: Number,
    default: 15,
  },
  btnSpan: {
    type: Number,
    default: 6,
  },
  labelWidth: {
    type: String,
    default: '72px',
  },
  lineNum: {
    type: Number,
    default: 1,
  },
})

let height = ref(0)
let isUnfold = ref(false)
const formRef = ref(null)
const searchRef = ref(null)

const itemHeight = computed(() => {
  return 34 + 58 * (props.lineNum - 1)
})

const validate = (callback) => {
  formRef.value?.validate((valid) => {
    callback(valid)
  })
}
// 重置表单
const resetFields = () => {
  props.reset()
  formRef.value?.restoreValidation()
}
const getHeight = () => {
  // 获取search的高度
  // nextTick(() => {
  //   height.value = searchRef.value.$el.offsetHeight
  // })
  // 这里有一个奇怪的 bug 更换 n-grid 的响应式模式后，nextTick 获取的高度就不准确
  setTimeout(() => {
    height.value = searchRef.value.$el.offsetHeight
  }, 100)
}

const onSearch = () => {
  props.loadList()
}

onMounted(() => {
  getHeight()
  window.addEventListener('resize', getHeight, false)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', getHeight, false)
})

const searchHeight = computed(() => {
  let str = 'auto'
  if (height.value > itemHeight.value) {
    str = height.value > itemHeight.value && isUnfold.value ? `${height.value}px` : `${itemHeight.value}px`
  }
  return str
})

const showFold = computed(() => {
  return height.value > itemHeight.value + 2 + 24
})

defineExpose({
  validate,
  formRef,
})
</script>

<style lang="scss" scoped>
.btn {
  text-align: right;
  ::v-deep(.n-button) {
    margin: 0 0 4px 12px;
  }
}

.sh-search-fold {
  &-wrap {
    overflow: hidden;
    transition: height 0.5s;
    .icon {
      transition: all 0.3s;
    }
    .arrow-icon {
      transform: rotate(180deg);
    }
  }
}
</style>
