<template>
  <el-aside width="200px">
    <el-menu
        default-active="home"
        class="h-full"
        @select="handleSelect"
    >
      <el-menu-item index="home">
        <el-icon>
          <icon-menu/>
        </el-icon>
        <span>HOME</span>
      </el-menu-item>
      <el-menu-item index="home2">
        <el-icon>
          <document/>
        </el-icon>
        <span>菜单1</span>
      </el-menu-item>
      <el-menu-item index="dictionary">
        <el-icon>
          <setting/>
        </el-icon>
        <span>数据字典</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>
<script lang="ts" setup>

import {useRouter} from "vue-router";

const router = useRouter();

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath.join('/'))
  router.push(`/${keyPath.join('/')}`)
}
</script>
