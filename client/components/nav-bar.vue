<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="0">
      <img class="image-logo" style="width: 100px" src="/assets/logo.jpg" alt="Element logo" />
    </el-menu-item>
    <el-menu-item index="1">
      <el-menu-item index="1-1">Home</el-menu-item>
    </el-menu-item>

    <el-menu-item index="2">About</el-menu-item>
    <el-sub-menu index="3">
      <template #title>Workspace</template>
      <el-menu-item index="3-1">item one</el-menu-item>
      <el-menu-item index="3-2">item two</el-menu-item>
      <el-menu-item index="3-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style>
template {
  font-family: Roboto, sans-serif;
}
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}

.image-logo {
  border-radius: 50px;
  width: 30px;
  height: 60px;
  margin-bottom: 10px;
}
</style>
