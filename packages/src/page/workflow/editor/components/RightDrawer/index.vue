<template>
  <div class="box_shadow h-full w-400 bg-#fff pt-80">
    <component :is="nodeType[form.type] || FormFlow" :form="form"></component>
  </div>
</template>

<script setup>
import FormFlow from './FormFlow.vue'
import FormSquare from './FormSquare.vue'
import FormAppro from './FormAppro.vue'
import FormCondition from './FormCondition.vue'

const nodeType = {
  START: FormSquare,
  END: FormSquare,
  APPROVAL: FormAppro,
  CONDITION: FormCondition,
}

defineProps({
  form: {
    type: Object,
    default: () => {
      return {}
    },
  },
})
</script>

<style lang="scss" scoped>
.box_shadow {
  box-shadow: 0 3px 16px rgba(16, 61, 152, 0.12);
}
</style>
