<template>
  <n-row>
    <n-col :span="6">
      <n-input v-model:value="lValue" @input="emitInput"></n-input>
    </n-col>
    <n-col :span="5">
      <n-select v-model:value="lCond" :options="lOptions" clearable @update:value="emitInput"></n-select>
    </n-col>
    <n-col :span="2">
      <div class="leading-32 text-center">值</div>
    </n-col>
    <n-col :span="5">
      <n-select v-model:value="rCond" :options="rOptions" clearable @update:value="emitInput"></n-select>
    </n-col>
    <n-col :span="6">
      <n-input v-model:value="rValue" @input="emitInput"></n-input>
    </n-col>
  </n-row>
</template>

<script setup>
import { ref, watch } from 'vue'

const lOptions = [
  { label: '=', value: '==' },
  { label: '<', value: '>' },
  { label: '<=', value: '>=' },
]
const rOptions = [
  { label: '<', value: '<' },
  { label: '<=', value: '<=' },
]

const props = defineProps({
  value: {
    type: String,
    default: '',
  },
  varValue: {
    type: String,
    default: '',
  },
})
const emit = defineEmits(['update:value'])

const lValue = ref(null)
const lCond = ref(null)
const rValue = ref(null)
const rCond = ref(null)

watch(
  () => props.value,
  (val) => {
    if (val) {
      let arr = val.split('&&')
      arr.forEach((expression) => {
        if (expression) {
          let cond = ['>=', '>', '<=', '<', '=='].find((item) => {
            return expression.indexOf(item) !== -1
          })

          let valueArr = expression.split(cond)
          if (['<=', '<'].indexOf(cond) !== -1) {
            rValue.value = valueArr[1]
            rCond.value = cond
          }
          if (['>=', '>', '=='].indexOf(cond) !== -1) {
            lValue.value = valueArr[1]
            lCond.value = cond
          }
        }
      })
    }
  },
  { immediate: true }
)

const emitInput = () => {
  if ((lValue.value && lCond.value) || (rValue.value && rCond.value)) {
    let str = ''
    if (lValue.value && lCond.value) {
      str = `${props.varValue}${lCond.value}${lValue.value}`
    }
    if (rValue.value && rCond.value) {
      let rStr = `${props.varValue}${rCond.value}${rValue.value}`
      str = str ? `${str}&&${rStr}` : rStr
    }
    emit('update:value', str)
  }
}
</script>

<style lang="scss" scoped></style>
