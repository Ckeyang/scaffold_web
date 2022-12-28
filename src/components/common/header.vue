<template>
  <section class="bg-gray-200 px-8 py-4 flex items-center justify-between">
    <section class="text-xl">智菲科技</section>
    <section>
      <el-popover
          placement="bottom"
          :title="userInfo?.name"
          :width="200"
          trigger="click"
      >
        <template #reference>
          <el-avatar :icon="UserFilled"/>
        </template>
        <template #default>
          <section class="py-2" @click="doLogout">
            登出
          </section>
        </template>
      </el-popover>
    </section>
  </section>
</template>
<script lang="ts" setup>
import {UserFilled} from '@element-plus/icons-vue'
import {useUserState} from "@/stores/user";
import {ref} from "vue";
import type {User} from "@/modules/user";
import {logout} from "@/plugins/api/api-login-controller";

const userState = useUserState();
const userInfo = ref<User>();
userInfo.value = userState.getUserInfo();

const doLogout = () => {
  logout().then((res: any) => {
    if (res.data.code === 200) {
      let user: User = {};
      userState.setToken('')
      userState.setUserInfo(user)
    }
  })
}
</script>
