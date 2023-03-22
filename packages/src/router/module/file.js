export const RouterFile = [
  {
    path: 'fileList',
    meta: { title: '附件管理' },
    component: () => import('@/page/file/fileList/index.vue'),
  },
  {
    path: 'imgList',
    meta: { title: '图片管理' },
    component: () => import('@/page/file/imgList/index.vue'),
  },
]
