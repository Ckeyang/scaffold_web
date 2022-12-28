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
          test
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

const userState = useUserState();
const userInfo = ref<User>()
userInfo.value = userState.getUserInfo();
console.log(userInfo.value)
</script>
