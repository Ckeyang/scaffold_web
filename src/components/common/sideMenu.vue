<template>
  <el-aside width="200px">
    <el-menu
        :default-active="activePage"
        class="h-full"
        unique-opened
        @select="handleSelect"
    >
      <el-menu-item index="/home">
        <el-icon>
          <icon-menu/>
        </el-icon>
        <span>HOME</span>
      </el-menu-item>
      <el-menu-item index="/home2">
        <el-icon>
          <document/>
        </el-icon>
        <span>菜单1</span>
      </el-menu-item>
      <el-sub-menu>
        <template #title>系统设置</template>
        <el-menu-item index="/dictionary">
          <el-icon>
            <setting/>
          </el-icon>
          <span>数据字典</span>
        </el-menu-item>
        <el-menu-item index="/auth">
          <el-icon>
            <setting/>
          </el-icon>
          <span>资源权限</span>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>
<script lang="ts" setup>

import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";

const router = useRouter();
const route = useRoute();
const activePage = ref(route.path)

const handleSelect = (key: string, keyPath: string[]) => {
  router.push(`${key}`)
}
</script>
