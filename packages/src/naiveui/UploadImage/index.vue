<template>
  <div class="flex">
    <n-spin :show="files.loading">
      <template #description> {{ files.progress }}% </template>
      <n-space>
        <div v-for="(item, index) in files.list" :key="index" class="group relative text-0 box-image">
          <div
            class="rounded-10 rounded-t-none absolute left-0 top-48 w-full h-2/5 flex-center hidden text-16 group-hover:flex icon-box"
          >
            <n-space>
              <component :is="deleteImg" v-if="showDelete" class="cursor-pointer" @click="deleteFile(item)"></component>
              <component :is="viewImg" class="cursor-pointer" @click="viewFile(index)"></component>
              <component :is="reupload" v-if="!multiple" class="cursor-pointer" @click="handleClick"></component>
            </n-space>
          </div>
          <n-image
            ref="imgRef"
            class="rounded-10"
            height="80"
            width="80"
            :src="getShowImgUrl(item)"
            object-fit="cover"
          />
        </div>
        <n-upload
          name="files"
          :show-file-list="false"
          :custom-request="customRequest"
          :multiple="multiple"
          :accept="accept"
          v-bind="$attrs"
        >
          <div
            ref="uploadRef"
            class="w-80 h-80 bg-#fafafc rounded-10 border-dashed border border-#e0e0e6 flex-center cursor-pointer hover:border-#18a058 transition"
            :class="{ changeUpload: !multiple && files.list.length }"
          >
            <component :is="uploadPlus"></component>
          </div>
        </n-upload>
      </n-space>
    </n-spin>
  </div>
</template>

<script setup name="ShUploadImage">
import { reactive, ref, watch, computed } from 'vue'
import { swFileImg } from '@/apis/sw'
import { useUserStore, useAppStore } from '@/store'
import deleteImg from '@/assets/svg/deleteImg.svg'
import reupload from '@/assets/svg/reupload.svg'
import viewImg from '@/assets/svg/viewImg.svg'
import uploadPlus from '@/assets/svg/upload-plus.svg'

const props = defineProps({
  multiple: {
    type: Boolean,
    default: false,
  },
  accept: {
    type: [String, Array],
    default: '.png,.jpg,.jpeg',
  },
  value: {
    type: Array,
    default: () => {
      return []
    },
  },
  showDelete: {
    type: Boolean,
    default: true,
  },
  btnText: {
    type: String,
    default: '点击上传',
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

const files = reactive({
  loading: false,
  progress: 0,
  list: [],
})
const imgRef = ref(null)
const uploadRef = ref(null)

watch(
  () => props.value,
  (val) => {
    files.list = val || []
  },
  { immediate: true, deep: true }
)

const appStore = useAppStore()
const isBaseApi = appStore.env.VITE_APP_BASE_API

// 图片的展示
const getShowImgUrl = (item) => {
  return item ? isBaseApi + swFileImg.showImg({ id: item, token: token.value }) : null
}

const handleClick = () => {
  uploadRef.value?.click()
}

const deleteFile = (id) => {
  files.list = files.list.filter((item) => {
    return item !== id
  })
  emit('update:value', files.list)
}
const viewFile = (index) => {
  imgRef.value[index].$el.children[0].click()
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
  const res = await swFileImg.uploadImg(formData, {
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
</script>

<style lang="scss" scoped>
.changeUpload {
  width: 0;
  height: 0;
}
.box-image {
  &:hover {
    .icon-box {
      background-color: rgba($color: #000000, $alpha: 0.3);
    }
  }
}
</style>
