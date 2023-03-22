<template>
  <n-modal v-model:show="modal.show" preset="card" class="w-800" :title="`${typeObj[modal.type]}详情`">
    <div class="p-20">
      <n-spin :show="modal.loading">
        <sh-form ref="formRef" :model="formValue" :disabled="true">
          <sh-form-item label="任务id" path="id" span="12">
            <n-input v-model:value="formValue.id" placeholder="请输入" />
          </sh-form-item>
          <sh-form-item label="关联模板id	" path="modelId" span="12">
            <n-input v-model:value="formValue.modelId" placeholder="请输入" />
          </sh-form-item>
          <sh-form-item label="发送人名称" path="sourceName" span="12">
            <n-input v-model:value="formValue.sourceName" placeholder="请输入" />
          </sh-form-item>
          <sh-form-item label="接收人名称" path="targetName" span="12">
            <n-input v-model:value="formValue.targetName" placeholder="请输入" />
          </sh-form-item>
          <sh-form-item label="互动状态" path="interactionState" span="12">
            <n-input v-model:value="formValue.interactionState" placeholder="请输入" />
          </sh-form-item>
          <sh-form-item label="详情连接" path="hyperlink" span="12">
            <n-input v-model:value="formValue.hyperlink" placeholder="请输入" />
          </sh-form-item>
          <sh-form-item label="是否定时" path="timing" span="12" label-placement="left">
            <n-switch v-model:value="formValue.timing" :checked-value="1" :unchecked-value="0" />
            <!-- <n-input v-model:value="formValue.timing" placeholder="请输入" /> -->
          </sh-form-item>
          <sh-form-item label="失败是否重试" path="retry" span="12" label-placement="left">
            <n-switch v-model:value="formValue.retry" :checked-value="1" :unchecked-value="0" />
            <!-- <n-input v-model:value="formValue.retry" placeholder="请输入" /> -->
          </sh-form-item>
          <sh-form-item label="指定发送时间" path="futureTime" span="12">
            <n-input v-model:value="formValue.futureTime" placeholder="请输入" />
          </sh-form-item>
          <sh-form-item label="已重试次数" path="retryTimes" span="12">
            <n-input-number v-model:value="formValue.retryTimes" />
          </sh-form-item>
          <sh-form-item label="任务状态" path="taskState" span="12">
            <!-- <n-input v-model:value="formValue.taskState" placeholder="请输入" /> -->
            <n-select v-model:value="formValue.taskState" :options="taskStateList" />
          </sh-form-item>
          <sh-form-item label="创建时间" path="createTime" span="12">
            <n-input v-model:value="formValue.createTime" placeholder="请输入" />
          </sh-form-item>
          <sh-form-item label="参数模型" path="taskParams">
            <n-input v-model:value="formValue.taskParams" type="textarea" placeholder="请输入" />
          </sh-form-item>
        </sh-form>
        <div class="text-right mt-20">
          <n-button @click="modal.show = false"> 关闭 </n-button>
        </div>
      </n-spin>
    </div>
  </n-modal>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { mgsTask } from '@/apis/msg'
import { taskStateList } from '../js/taskState'

const emit = defineEmits(['loadList'])

const typeObj = {
  add: '新增',
  update: '修改',
  view: '查看',
}

const formRef = ref(null)
const modal = reactive({
  show: false,
  loading: false,
  type: 'view',
})

// 初始化数据
const initFormVlue = () => {
  return {
    id: '',
    modelId: '',
    sourceId: '',
    sourceName: '',
    targetId: '',
    targetName: '',
    taskParams: '',
    interactionState: '',
    hyperlink: '',
    timing: '',
    futureTime: '',
    retry: '',
    retryTimes: 0,
    taskState: '',
    createTime: '',
  }
}
const formValue = reactive(initFormVlue())
// 重置数据
const reset = () => {
  Object.assign(formValue, initFormVlue())
}

const getDetail = async (id) => {
  modal.loading = true
  const { code, msg, data } = await mgsTask.get({ id })
  modal.loading = false
  if (code === 0) {
    Object.assign(formValue, data)
  } else {
    $message.error(msg)
  }
}

const open = (row) => {
  modal.show = true
  getDetail(row.id)
}

defineExpose({
  open,
})
</script>

<style lang="scss" scoped></style>
