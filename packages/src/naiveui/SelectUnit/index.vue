<template>
  <n-select
    v-bind="$attrs"
    :options="select.options"
    :loading="select.loading"
    label-field="unitName"
    value-field="id"
    filterable
    clearable
    remote
    @search="loadList"
    @update:value="update"
  />
</template>

<script setup>
import { reactive } from 'vue'
import { orgUnit } from '!/apis/org'

const props = defineProps({
  value: {
    type: [String, Array],
    default: '',
  },
  limit: {
    type: Number,
    default: 30,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['callback'])

const select = reactive({
  options: [],
  unitObj: {},
  loading: false,
})

const loadList = async (query) => {
  select.loading = true
  const { code, msg, data } = await orgUnit.list({
    page: 1,
    limit: props.limit,
    unitName: query || '',
  })
  select.loading = false
  if (code === 0) {
    select.options = data || []
    select.options.forEach((item) => {
      select.unitObj[item.id] = item
    })
  } else {
    $message.error(msg)
  }
}
loadList()

const update = (value) => {
  emit(
    'callback',
    props.multiple
      ? value.map((item) => {
          return { ...select.unitObj[item] }
        })
      : { ...select.unitObj[value] }
  )
}
</script>

<style lang="scss" scoped></style>
