<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
  router.push(key)
}
</script>

<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="/">首页</el-menu-item>
      <el-sub-menu index="2">
        <template #title>AI</template>
        <el-menu-item index="2-1">智能图像抠图</el-menu-item>
        <el-menu-item index="2-2">文本生成图像</el-menu-item>
        <el-menu-item index="2-3">智能证件照</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>系统设置</template>
        <el-menu-item index="3-1">快捷键</el-menu-item>
        <el-menu-item index="/apiSetting">API设置</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/about">关于</el-menu-item>
    </el-menu>
    <router-view></router-view>
    <el-footer style="position: fixed;bottom: 0px;height: 20px;font-size: 14px;padding: 0px;"></el-footer>
  </div>
</template>

<style scoped>
.el-menu-demo{
  height:30px
}
</style>
