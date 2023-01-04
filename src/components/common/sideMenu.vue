<template>
  <el-aside width="200px">
    <el-menu
        :default-active="activePage"
        class="h-full"
        unique-opened
        @select="handleSelect"
    >
      <el-menu-item index="/admin/home">
        <el-icon>
          <HomeFilled/>
        </el-icon>
        <span>HOME</span>
      </el-menu-item>
      <el-menu-item index="/admin/home2">
        <el-icon>
          <Menu/>
        </el-icon>
        <span>404包间</span>
      </el-menu-item>
      <el-sub-menu>
        <template #title>
          <el-icon>
            <Setting/>
          </el-icon>
          系统设置
        </template>
        <el-menu-item index="/admin/dictionary">
          <el-icon>
            <DataBoard/>
          </el-icon>
          <span>数据字典</span>
        </el-menu-item>
        <el-menu-item index="/admin/auth">
          <el-icon>
            <Finished/>
          </el-icon>
          <span>资源权限</span>
        </el-menu-item>
        <el-menu-item index="/admin/user">
          <el-icon>
            <User/>
          </el-icon>
          <span>用户管理</span>
        </el-menu-item>
        <el-menu-item index="/admin/role">
          <el-icon>
            <Pointer/>
          </el-icon>
          <span>角色管理</span>
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
