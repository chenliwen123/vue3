<template>
  <el-aside :width="asideComputed" :style="{ backgroundColor: '#545c64' }">
    <div class="togglebox">
      <el-button type="primary" @click="toggle"
        ><el-icon><SetUp /></el-icon
      ></el-button>
    </div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="0"
      :router="true"
      :collapse="isCollapse"
      text-color="#fff"
    >
      <el-menu-item
        :index="item.path"
        v-for="(item, index) in routerlist"
        :key="item.path"
      >
        <el-icon>
          <component :is="item.meta.icon || 'Menu'"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { SetUp } from '@element-plus/icons-vue';

const isCollapse = ref(true);
const toggle = () => {
  isCollapse.value = !isCollapse.value;
};
const asideComputed = computed(() => {
  return isCollapse.value ? '64px' : '200px';
});
const router = useRouter();
const routerlist = router.getRoutes().filter((e) => e.meta.title);
console.log(routerlist);
</script>

<style lang="scss" scoped>
.el-aside {
  transition: width 0.3s;
}
.el-menu {
  border-right: none;
}
.togglebox {
  width: 64px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
</style>
