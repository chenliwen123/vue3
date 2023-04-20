<template>
  <div class="common-layout">
    <el-container class="h100">
      <Aside></Aside>
      <el-container class="h100">
        <el-header>渡一学习分享</el-header>
        <el-container
          :style="{
            height: 'calc(100% - 60px)',
          }"
        >
          <el-Scrollbar class="w100">
            <el-main><router-view></router-view></el-main>
          </el-Scrollbar>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Aside from '../components/aside';
</script>

<style lang="scss" scoped>
.common-layout {
  height: 100%;
  .el-main {
    --el-main-padding: 0;
  }
  .h100 {
    height: 100%;
  }
  .w100 {
    width: 100%;
  }
}
</style>
