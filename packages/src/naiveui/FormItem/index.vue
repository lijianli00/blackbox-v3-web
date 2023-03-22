<template>
  <n-col :span="span">
    <n-form-item v-bind="$attrs" :rule="ruleArr">
      <template v-for="k in Object.keys($slots)" :key="k">
        <slot :name="k" />
      </template>
    </n-form-item>
  </n-col>
</template>

<script setup name="ShFormItem">
import { ref, watch } from 'vue'
import { isArray, isWhitespace, isNullOrUndef } from '@/utils'

const props = defineProps({
  span: {
    type: [Number, String],
    default: 24,
  },
  rule: {
    type: [Array, String, Object],
    default: '',
  },
})
// 自定义校验
const customRules = {
  required: {
    required: true,
    validator(rule, value) {
      if (isWhitespace(value) || isNullOrUndef(value)) {
        return new Error('必填项不能为空')
      }
      return true
    },
    trigger: 'blur',
  },
  account: {
    validator(rule, value) {
      const len = value.length
      if (value === '') {
        // 不校验空值
        return true
      } else if (len < 8 || len > 32) {
        return new Error('必须为8-32位')
      } else if (checkPasswordStr(value) < 3) {
        return new Error('必须包含数字、大小写字母三种')
      } else {
        return true
      }
    },
    trigger: 'blur',
  },
  password: {
    validator(rule, value) {
      const len = value.length
      if (value === '') {
        // 不校验空值
        return true
      } else if (len < 8 || len > 30) {
        return new Error('必须为8-32位')
      } else if (checkPasswordStr(value) < 3) {
        return new Error('必须包含数字、大小写字母三种')
      } else {
        return true
      }
    },
    trigger: 'blur',
  },
  number: { type: 'number', message: '请输入数字', trigger: 'blur' },
  integer: { type: 'integer', message: '请输入整数', trigger: 'blur' },
  email: { type: 'email', message: '请输入正确的邮箱', trigger: 'blur' },
  date: { type: 'date', message: '请输入正确的日期', trigger: 'blur' },
  phone: { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' },
}

const checkPasswordStr = (str) => {
  // 密码校验规则
  let count = 0
  if (/\d/.test(str)) count++
  if (/[a-z]/.test(str)) count++
  if (/[A-Z]/.test(str)) count++
  // if (/[~!@#$%^&*_\-+='|\\(){}[\]:;"<>,.\?\/]/.test(str)) count++
  return count
}
const ruleArr = ref([])

watch(
  () => props.rule,
  (val) => {
    if (!val) return
    // 如果是字符串则转为数组
    // const arr = typeof val === 'string' ? val.split('||') : val
    let arr = []
    if (typeof val === 'string') {
      arr = val.split('||')
    } else if (isArray(arr)) {
      arr = [...val]
    } else {
      arr.push(val)
    }
    arr.forEach((item) => {
      if (typeof item === 'string' && customRules[item]) {
        ruleArr.value.push(customRules[item])
      } else if (typeof item === 'object') {
        ruleArr.value.push(item)
      }
    })
  },
  { immediate: true }
)
</script>

<style lang="scss" scoped></style>
