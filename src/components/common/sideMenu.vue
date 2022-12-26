<template>
  <el-aside>
    <el-menu
        default-active="1"
        class="h-full"
        @open="handleOpen"
        @close="handleClose"
    >
      <el-menu-item index="1">
        <el-icon>
          <icon-menu/>
        </el-icon>
        <span>HOME</span>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon>
          <document/>
        </el-icon>
        <span>菜单1</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon>
          <setting/>
        </el-icon>
        <span>菜单2</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>
<script lang="ts" setup>

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
