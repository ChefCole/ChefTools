<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">首页</el-menu-item>
      <el-sub-menu index="2">
        <template #title>AI</template>
        <el-menu-item index="2-1">智能图像抠图</el-menu-item>
        <el-menu-item index="2-2">文本生成图像</el-menu-item>
        <el-menu-item index="2-3">智能证件照</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>系统工具</template>
        <el-menu-item index="3-1">粘贴板记录</el-menu-item>
        <el-menu-item index="3-2">API设置</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="4">关于</el-menu-item>
    </el-menu>

  </div>
</template>

<style scoped>
.el-menu-demo{
  height:30px
}
</style>
