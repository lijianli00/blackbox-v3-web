<template>
  <div class="h-full w-full relative pt-45 bg-#eee min-w-1200">
    <HeaderBar @zoom="zoom" @submit="onSubmit"></HeaderBar>
    <div class="h-full w-full pl-200 pr-500 py-100 overflow-auto box-border" @click="clickNode(process)">
      <EditorBox
        :node-info="process.nodeTree"
        :style="{ transform: `scale(${config.zoom / 100})`, 'transform-origin': '0px 0px 0px', '--bg-color': '#eee' }"
      ></EditorBox>
    </div>
    <RightDrawer class="absolute right-0 top-0" :form="activeForm"></RightDrawer>
    <FormDialog ref="dialogRef" :process="process"></FormDialog>
    <BusinessDialog ref="businessRef" :form="process" @callback="getProcessVariableList"></BusinessDialog>
  </div>
</template>

<script setup>
import HeaderBar from './components/HeaderBar.vue'
import RightDrawer from './components/RightDrawer/index.vue'
import FormDialog from './components/FormDialog.vue'
import BusinessDialog from './components/BusinessDialog.vue'
import EditorBox from '../editorBox/index.vue'
import { reactive, ref, provide, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { bbxProcessInfo, conditionVariable, systemService } from '@/apis/workflow'
import { ApproData } from '../editorBox/js/config'
import { cloneDeep } from 'lodash'

const config = reactive({
  zoom: 100,
})

const zoom = (v) => {
  config.zoom += v
}
const onSubmit = () => {
  dialogRef.value.open()
}

const route = useRoute()
const dialogRef = ref(null)
const businessRef = ref(null)
const activeForm = ref({})
const variableList = ref([])
const businessList = ref([])

const modal = reactive({
  id: route.params.id,
  loading: false,
})

let process = ref({})

const initProcessVlue = () => {
  return {
    businessId: null, //系统业务主键
    processName: '流程名称', //流程名称
    description: '版本描述', //版本描述
    nodeTree: {
      //节点树
      text: '开始', //节点名称
      type: 'START', //节点类型(START:开始、APPROVAL:审批、CONDITIONAL_BRANCH:条件分支、CONDITION:条件、PARALLEL_BRANCH:并行分支、CHOICE_BRANCH:选择分支、END:结束)
      childNodes: [], //子节点（只有分支才有子节点）
      nextNode: {
        ...cloneDeep(ApproData),
        nextNode: {
          text: '结束',
          type: 'END',
          nextNode: null,
          childNodes: [],
        },
      },
    },
  }
}
const getProcessInfo = async () => {
  console.log(333, modal.id)
  modal.loading = true
  const { code, data, msg } = await bbxProcessInfo.get({ id: modal.id })
  modal.loading = false
  if (code === 0) {
    process.value = data
    clickNode(process.value)
    getProcessVariableList(modal.id)
  } else {
    $message.error(msg)
  }
}

// 点击节点
const clickNode = (nodeInfo) => {
  activeForm.value = nodeInfo
}

if (modal.id && modal.id !== 'add') {
  getProcessInfo()
} else {
  process.value = initProcessVlue()
  clickNode(process.value)
  nextTick(() => {
    businessRef.value.open()
  })
}

// 获取条件列表
const getProcessVariableList = async (businessId) => {
  const { code, msg, data } = await conditionVariable.findByBusinessId({
    businessId,
  })
  if (code === 0) {
    variableList.value = data || []
  } else {
    $message.error(msg)
  }
}

// 获取业务列表
const getBusinessList = async () => {
  modal.loading = true
  const { code, msg, data } = await systemService.list({
    page: 1,
    limit: 999,
  })
  modal.loading = false
  if (code === 0) {
    businessList.value = data || []
  } else {
    $message.error(msg)
  }
}
getBusinessList()

// 属性透传
provide('clickNode', clickNode)
provide('businessList', businessList)
provide('variableList', variableList)
provide('businessId', process.value.businessId)
</script>

<style lang="scss" scoped></style>
