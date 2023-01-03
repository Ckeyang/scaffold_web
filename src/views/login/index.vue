<template>
  <section class="w-full h-screen flex justify-center items-center bg-amber-200">
    <section class="border rounded w-1/3  min-w-[400px] max-w-[500px] px-4 py-8 bg-white">
      <el-input placeholder="请输入账号" size="large" v-model="form.userAccount"></el-input>
      <el-input placeholder="请输入密码" size="large" v-model="form.password" type="password" class="mt-8"></el-input>
      <el-input placeholder="请输入验证码" size="large" v-model="form.captchCode" class="mt-8">
        <template #append class="relative overflow-hidden">
          验证码
          <img class="w-full h-full absolute left-0 cursor-pointer" :src="form.reCode" @click="getCodeURL"/>
        </template>
      </el-input>
      <section class="mt-8 flex justify-end">
        <el-button type="primary" @click="doLogin">登录</el-button>
      </section>
    </section>
  </section>
</template>
<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {getCode, login} from '@/plugins/api/api-login-controller.js'
import {useRouter} from "vue-router";
import {useUserState} from "@/stores/user";
import type {Response} from '@/modules/response'

const userState = useUserState();
const router = useRouter();
const form = ref({userAccount: '', password: '', captchCode: '', reCode: '', captchaId: ''})
onMounted(() => {
  getCodeURL();
})
const getCodeURL = () => {
  getCode().then((res?: Response) => {
    setCode(res?.data?.data);
  })
}
const setCode = (data?: any) => {
  form.value.captchaId = data.captchaId;
  form.value.reCode = data.image
}
/**
 * 登录
 */
const doLogin = () => {
  login(form.value).then((res?: Response) => {
    if (res?.data?.code === 200) {
      userState.setToken(res?.data?.data?.token)
      userState.setUserInfo(res?.data?.data)
      router.push('/admin');
    }
  })
}
</script>
