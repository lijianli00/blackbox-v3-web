<template>
  <n-modal v-model:show="modal.show" preset="card" class="w-full" :title="`${typeObj[modal.type]}文章`">
    <div class="mt-10">
      <n-spin :show="modal.loading">
        <div h-60 pl-20 pr-20 flex items-center bg-white dark:bg-dark>
          <input
            v-model="title"
            class="flex-1 pt-15 pb-15 mr-20 text-20 font-bold color-primary"
            dark:bg-dark
            type="text"
            placeholder="输入文章标题..."
          />
        </div>
        <MdEditor v-model="content" editor-id="md-editor" style="height: calc(100vh - 205px)" dark:bg-dark />
        <div class="text-right mt-20">
          <n-button @click="modal.show = false"> 关闭 </n-button>
          <n-button type="primary" @click="onSubmit"> 确定 </n-button>
        </div>
      </n-spin>
    </div>
  </n-modal>
</template>

<script setup>
import { reactive, ref } from 'vue'
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

const emit = defineEmits(['loadList'])
const content = ref('')
const title = ref('')
const typeObj = {
  add: '新增',
  update: '修改',
}

const modal = reactive({
  show: false,
  loading: false,
  type: 'add',
})
const init = () => {
  content.value = `@@@## 😲 md-editor-v3

Markdown 编辑器，vue3 版本，使用 jsx 模板 和 typescript 开发，支持切换主题、prettier 美化文本等。

### 🤖 基本演示


> 引用：《I Have a Dream》

1. So even though we face the difficulties of today and tomorrow, I still have a dream.
2. It is a dream deeply rooted in the American dream.
3. I have a dream that one day this nation will rise up.

- [ ] 周五
- [ ] 周六
- [x] 周天

![图片](https://imzbf.github.io/md-editor-rt/imgs/mark_emoji.gif)

## 🤗 代码演示



## 🖨 文本演示

依照普朗克长度这项单位，目前可观测的宇宙的直径估计值（直径约 930 亿光年，即 8.8 × 10<sup>26</sup> 米）即为 5.4 × 10<sup>61</sup>倍普朗克长度。而可观测宇宙体积则为 8.4 × 10<sup>184</sup>立方普朗克长度（普朗克体积）。

## 📈 表格演示

| 昵称 | 来自      |
| ---- | --------- |
| 之间 | 中国-重庆 |

## 📏 公式

行内：$x+y^{2x}$

$$
\sqrt[3]{x}
$$

## 🧬 图表



## 🪄 提示

!!! note 支持的类型

note、abstract、info、tip、success、question、warning、failure、danger、bug、example、quote、hint、caution、error、attention

!!!

## ☘️ 占个坑@！

@@@`
}

// 重置数据
const reset = () => {
  content.value = ''
  title.value = ''
}

const onSubmit = async () => {
  modal.loading = true
  $message.loading('正在保存...')
  setTimeout(() => {
    $message.success('保存成功')
    modal.loading = false
    modal.show = false
  }, 2000)
}

const open = (row, type) => {
  modal.show = true
  title.value = row.title
  if (row && type) {
    modal.type = 'update'
    init()
  } else {
    modal.type = 'add'
    reset()
  }
}

defineExpose({
  open,
})
</script>
