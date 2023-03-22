<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div>
    <ItemTitle></ItemTitle>
    <div class="p-20">
      <sh-form ref="formRef" :model="form">
        <sh-form-item label="节点名称" path="text" rule="required">
          <n-input v-model:value="form.text" placeholder="请输入" />
        </sh-form-item>
      </sh-form>
    </div>
    <ItemTitle title="流程条件">
      <n-button type="primary" size="small" @click="addWrap"> 新增 </n-button>
    </ItemTitle>
    <div class="p-20">
      <ConditionWrap
        v-for="(items, index) in form.properties.conditions"
        :key="index"
        :index="index"
        @add-item="addItem"
        @delete-wrap="deleteWrap"
      >
        <ConditionItem
          v-for="(item, i) in items"
          :key="i"
          :form="item"
          :index="index"
          :i="i"
          @delete-item="deleteItem"
        ></ConditionItem>
      </ConditionWrap>
    </div>
  </div>
</template>

<script setup>
import ConditionItem from './ConditionItem.vue'
import ConditionWrap from './ConditionWrap.vue'
import ItemTitle from './ItemTitle.vue'
const props = defineProps({
  form: {
    type: Object,
    default: () => {
      return {}
    },
  },
})

const addWrap = () => {
  // eslint-disable-next-line vue/no-mutating-props
  props.form.properties.conditions.push([
    {
      conditionVal: '',
      varValue: null,
      varType: 0,
    },
  ])
}
const addItem = (index) => {
  // eslint-disable-next-line vue/no-mutating-props
  props.form.properties.conditions[index].push({
    conditionVal: '',
    varValue: '',
    varType: '',
  })
}
const deleteWrap = (index) => {
  // eslint-disable-next-line vue/no-mutating-props
  props.form.properties.conditions.splice(index, 1)
}
const deleteItem = (index, i) => {
  // eslint-disable-next-line vue/no-mutating-props
  props.form.properties.conditions[index].splice(i, 1)
}
</script>

<style lang="scss" scoped></style>
