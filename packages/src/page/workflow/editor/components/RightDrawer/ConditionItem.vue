<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div>
    <div class="flex-center mb-20">
      <div v-if="i" class="pr-5 text-#2263E8">或</div>
      <div class="flex-1 h-1 bg-#e2e6f2"></div>
      <div class="pl-10 text-#9097a5">
        <SvgSubtract class="w-1em h-1em" @click="emit('deleteItem', index, i)"></SvgSubtract>
      </div>
    </div>
    <sh-form ref="formRef" :model="form">
      <sh-form-item label="条件类型" path="id" rule="required">
        <n-select
          v-model:value="form.id"
          filterable
          placeholder="请选择"
          :options="variableList"
          label-field="varName"
          value-field="id"
          @update:value="update"
        />
      </sh-form-item>
      <sh-form-item v-if="form.varType" label="条件值" path="conditionVal" rule="required" label-placement="top">
        <ConditionItemQkj v-model:value="form.conditionVal" :var-value="form.varValue"></ConditionItemQkj>
      </sh-form-item>
      <sh-form-item v-else label="条件值" path="conditionVal" rule="required">
        <n-select
          v-model:value="form.conditionVal"
          filterable
          placeholder="请选择"
          :options="variableSubList"
          label-field="varName"
          value-field="varValue"
        />
      </sh-form-item>
    </sh-form>
  </div>
</template>

<script setup>
import SvgSubtract from '@/assets/svg/subtract.svg'
import { inject, computed } from 'vue'
import { isNullOrWhitespace } from '@/utils/is'
import ConditionItemQkj from './ConditionItemQkj.vue'

const props = defineProps({
  form: {
    type: Object,
    default: () => {
      return {}
    },
  },
  index: {
    type: Number,
    default: 0,
  },
  i: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits(['deleteItem'])
const variableList = inject('variableList')
const variableSubList = computed(() => {
  let arr = []
  if (!isNullOrWhitespace(props.form.id)) {
    variableList.value.forEach((item) => {
      if (item.id === props.form.id) {
        arr = item.child || []
      }
    })
  }
  return arr
})

const update = (value, option) => {
  // eslint-disable-next-line vue/no-mutating-props
  props.form.varType = option.varType
  // eslint-disable-next-line vue/no-mutating-props
  props.form.varValue = option.varValue
  // eslint-disable-next-line vue/no-mutating-props
  props.form.conditionVal = null
}
</script>

<style lang="scss" scoped></style>
