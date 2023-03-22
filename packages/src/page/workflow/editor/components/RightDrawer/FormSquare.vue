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
  </div>
</template>

<script setup>
import ItemTitle from './ItemTitle.vue'
defineProps({
  form: {
    type: Object,
    default: () => {
      return {}
    },
  },
})
</script>

<style lang="scss" scoped></style>
