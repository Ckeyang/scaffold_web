<template>
  <section class="bg-gray-100 px-8 py-4 flex items-center justify-between">
    <section class="text-xl">智菲科技</section>
    <section>
      <el-popover
        placement="bottom"
        :title="userInfo?.name"
        :width="150"
        trigger="click"
      >
        <template #reference>
          <el-avatar :icon="UserFilled" />
        </template>
        <template #default>
          <section class="py-2 cursor-pointer" @click="doLogout">
            {{ $t("login.logout") }}
          </section>
        </template>
      </el-popover>
    </section>
  </section>
</template>
<script lang="ts" setup>
import { UserFilled } from "@element-plus/icons-vue";
import { useUserState } from "@/stores/user";
import { ref } from "vue";
import type { User } from "@/modules/user";
import { logout } from "@/plugins/api/api-login-controller";
import { useRouter } from "vue-router";

const router = useRouter();

const userState = useUserState();
const userInfo = ref<User>();
userInfo.value = userState.getUserInfo();

const doLogout = () => {
  logout().then((res: any) => {
    if (res.data.code === 200) {
      const user: User = {};
      userState.setToken("");
      userState.setUserInfo(user);
      router.replace("/");
    }
  });
};
</script>
