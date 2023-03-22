import { computed, ref } from 'vue'
import { useForm } from './useForm'

/**
 * modal组合式函数
 * @param formValue 初始值
 */
export function useModal(form = {}) {
  const { formRef, formValue, reseForm, validate } = useForm(form)
  const titleType = {
    add: '新增',
    update: '修改',
    view: '查看',
    delete: '删除',
  }
  const loading = ref(false)
  const showModal = ref(false)
  const type = ref('add')

  const typeTxt = computed(() => {
    return titleType[type.value]
  })

  const close = () => {
    showModal.value = false
  }
  const open = () => {
    showModal.value = true
  }

  return {
    formRef,
    loading,
    showModal,
    type,
    typeTxt,
    formValue,
    reseForm,
    validate,
    close,
    open,
  }
}
