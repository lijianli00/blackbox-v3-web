<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div>
    <ItemTitle title="流程属性"></ItemTitle>
    <div class="p-20">
      <sh-form ref="formRef" :model="form">
        <sh-form-item label="流程名称" path="processName" rule="required">
          <n-input v-model:value="form.processName" placeholder="请输入" />
        </sh-form-item>
        <sh-form-item label="所属业务" path="businessId" rule="required">
          <n-select
            v-model:value="form.businessId"
            disabled
            filterable
            placeholder="请选择"
            :options="businessList"
            label-field="businessName"
            value-field="id"
          />
        </sh-form-item>
        <sh-form-item label="版本描述" path="description" rule="required">
          <n-input v-model:value="form.description" type="textarea" placeholder="请输入" />
        </sh-form-item>
      </sh-form>
    </div>
  </div>
</template>

<script setup>
import ItemTitle from './ItemTitle.vue'
import { inject } from 'vue'
defineProps({
  form: {
    type: Object,
    default: () => {
      return {}
    },
  },
})

const businessList = inject('businessList')
</script>

<style lang="scss" scoped></style>
