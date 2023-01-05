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
        <span>{{ $t('menu.home') }}</span>
      </el-menu-item>
      <el-menu-item index="/admin/home2">
        <el-icon>
          <Menu/>
        </el-icon>
        <span>{{ $t('menu.404') }}</span>
      </el-menu-item>
      <el-sub-menu>
        <template #title>
          <el-icon>
            <Setting/>
          </el-icon>
          {{ $t('menu.systemSet') }}
        </template>
        <el-menu-item index="/admin/dictionary">
          <el-icon>
            <DataBoard/>
          </el-icon>
          <span>{{ $t('menu.dataDict') }}</span>
        </el-menu-item>
        <el-menu-item index="/admin/auth">
          <el-icon>
            <Finished/>
          </el-icon>
          <span>{{ $t('menu.auth') }}</span>
        </el-menu-item>
        <el-menu-item index="/admin/user">
          <el-icon>
            <User/>
          </el-icon>
          <span>{{ $t('menu.userManage') }}</span>
        </el-menu-item>
        <el-menu-item index="/admin/role">
          <el-icon>
            <Pointer/>
          </el-icon>
          <span>{{ $t('menu.roleManage') }}</span>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>
<script lang="ts" setup>

import {useRoute, useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {getUserMenus} from "@/plugins/api/api-user-controller";

const router = useRouter();
const route = useRoute();
const activePage = ref(route.path)

const handleSelect = (key: string, keyPath: string[]) => {
  router.push(`${key}`)
}
const getAuth = async () => {
  let res = await getUserMenus({forSystem: 'WEB'})
  console.log(res);
}
onMounted(() => {
  getAuth();
})
</script>
