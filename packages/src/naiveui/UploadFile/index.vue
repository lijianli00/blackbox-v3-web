<template>
  <div>
    <n-spin :show="files.loading">
      <template #description> {{ files.progress }}% </template>
      <n-upload
        ref="uploadRef"
        name="files"
        class="h-0"
        :show-file-list="false"
        :custom-request="customRequest"
        :multiple="multiple"
        :accept="accept"
        v-bind="$attrs"
      >
      </n-upload>
      <n-table>
        <thead>
          <tr>
            <th>序号</th>
            <th>名称</th>
            <th v-if="enableDownload">能否下载</th>
            <th>上传人</th>
            <th>上传时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody v-if="files.list?.length">
          <tr v-for="(item, index) in files.list" :key="index">
            <td width="40">{{ index + 1 }}</td>
            <td>
              {{ item.fileName }}
            </td>
            <td v-if="enableDownload" width="120">
              <n-switch
                :value="item.enableDownload"
                :checked-value="1"
                :unchecked-value="0"
                @update:value="changeEnableDownload(item)"
              />
            </td>
            <td width="120">{{ item.createName }}</td>
            <td width="200">{{ item.createTime }}</td>
            <td width="180">
              <n-button
                v-if="item.fileName && ['jpg', 'jpeg', 'png', 'gif'].indexOf(item.fileName.split('.')[1]) !== -1"
                text
                type="primary"
                @click="viewImg(item.id)"
                >查看</n-button
              >
              <n-button
                v-if="item.fileName && item.fileName.indexOf('.pdf') !== -1"
                text
                type="primary"
                @click="viewPdf(item.id)"
              >
                查看
              </n-button>
              <n-button v-if="item.enableDownload" text type="primary" @click="download(item)">下载</n-button>
              <n-button v-if="showDelete" text type="error" @click="deleteFile(item.id)">删除</n-button>
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td :colspan="5">
              <n-empty> </n-empty>
            </td>
          </tr>
        </tbody>
      </n-table>
    </n-spin>

    <n-image ref="imgRef" :src="files.imgUrl" object-fit="cover" />
    <NlPdfPreview v-if="files.pdfId" :pdf-id="files.pdfId" @close="closePdf"></NlPdfPreview>
  </div>
</template>

<script setup>
import { reactive, ref, watch, computed, nextTick } from 'vue'
import { swFile } from '!/apis/sw'
import { useUserStore } from '!/store'

const props = defineProps({
  multiple: {
    type: Boolean,
    default: true,
  },
  accept: {
    type: [String, Array],
    default: '',
  },
  value: {
    type: Array,
    default: () => {
      return []
    },
  },
  enableDownload: {
    type: Boolean,
    default: true,
  },
  showDelete: {
    type: Boolean,
    default: true,
  },
  params: {
    type: Object,
    default: () => {
      return {}
    },
  },
})

const emit = defineEmits(['update:value'])

const userStore = useUserStore()

const token = computed(() => {
  return userStore.token
})
const uploadRef = ref(null)
const openUpload = () => {
  uploadRef.value.$el.children[1].click()
}
const download = (item) => {
  const url = swFile.download({ id: item.id, token: token.value })
  const link = document.createElement('a')
  link.style.display = 'none'
  link.href = url
  link.setAttribute('download', item.fileName)
  document.body.appendChild(link)
  link.click()
}

const viewImg = (id) => {
  files.imgUrl = swFile.download({ id, token: token.value })
  nextTick(() => {
    imgRef.value.$el.children[0].click()
  })
}
const viewPdf = (id) => {
  files.pdfId = id
}
const closePdf = () => {
  files.pdfId = null
}

const changeEnableDownload = async (item) => {
  item.enableDownload = item.enableDownload ? 0 : 1
  const { code, msg } = await swFile.updateEnableDownload({
    id: item.id,
    enableDownload: item.enableDownload,
  })
  if (code === 0) {
    $message.success(msg)
  } else {
    $message.error(msg)
  }
}

const files = reactive({
  loading: false,
  progress: 0,
  list: [],
  imgUrl: '',
  pdfId: '',
})
const imgRef = ref(null)

watch(
  () => props.value,
  (val) => {
    files.list = val || []
  },
  { immediate: true, deep: true }
)

const deleteFile = (id) => {
  files.list = files.list.filter((item) => {
    return item.id !== id
  })
  emit('update:value', files.list)
}
const customRequest = async ({ file, data, onError, onFinish }) => {
  const formData = new FormData()
  if (data) {
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key])
    })
  }

  // accept 为空的时候可以上传全部文件
  const isExt = props.accept.indexOf(file.name.replace(/.+\./, '').toLowerCase()) === -1
  if (isExt && props.accept) {
    $message.warning(`上传的文件只能为【${props.accept}】格式`)
    onError()
    return
  }

  files.loading = true

  formData.append('files', file.file)
  // 遍历赋值参数
  for (let key in props.params) {
    formData.append(key, props.params[key])
  }
  const res = await swFile.upload(formData, {
    onUploadProgress: (progress) => {
      files.progress = Math.floor((progress.loaded / progress.total) * 100)
    },
  })
  files.loading = false
  if (res.code === 0) {
    files.list = props.multiple ? [...files.list, ...res.data] : res.data
    emit('update:value', files.list)
    onFinish()
  } else {
    $message.error(res.msg)
    onError()
  }
}

defineExpose({
  openUpload,
})
</script>

<style lang="scss" scoped>
::v-deep(.n-image img) {
  display: none;
}
</style>
