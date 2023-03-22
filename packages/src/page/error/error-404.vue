<template>
  <div class="h-full flex-center">
    <n-result m-auto status="404" title="404 资源不存在" description="生活总归带点荒谬">
      <template #footer>
        <router-link to="/">
          <n-button>返回上一步</n-button>
        </router-link>
      </template>
    </n-result>
  </div>
</template>
