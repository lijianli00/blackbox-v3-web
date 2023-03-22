import { nextTick, reactive, ref } from 'vue'
import { cloneDeep } from 'lodash'

/**
 * modal组合式函数
 * @param formValue 初始值
 */
export function useForm(form = {}) {
  const formRef = ref(null)

  const formValue = ref(cloneDeep(form))
  // 重置数据
  const reseForm = async (row) => {
    formValue.value = cloneDeep(row || form)
    await nextTick()
  }

  const validate = async (callback) => {
    formRef.value?.validate((errors) => {
      if (errors) return
      callback()
    })
  }

  return {
    formRef,
    formValue,
    reseForm,
    validate,
  }
}
