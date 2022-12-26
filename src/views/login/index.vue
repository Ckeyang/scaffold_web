<template>
  <section class="w-full h-screen flex justify-center items-center bg-amber-200">
    <section class="border rounded w-1/3  min-w-[400px] px-4 py-8 bg-white">
      <el-input placeholder="请输入账号" v-model="form.account"></el-input>
      <el-input placeholder="请输入密码" v-model="form.password" type="password" class="mt-8"></el-input>
      <el-input placeholder="请输入验证码" v-model="form.code" class="mt-8">
        <template #append class="relative">
          验证码
          <img class="w-full absolute left-0 cursor-pointer" :src="form.reCode" @click="getCodeURL"/>
        </template>
      </el-input>
      <section class="mt-8 flex justify-end">
        <el-button type="primary">登录</el-button>
      </section>
    </section>
  </section>
</template>
<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {getCode} from '@/plugins/api/api-login-controller.js'
const form = ref({account:'',password:'',code:'',reCode:''})
onMounted(()=>{
  getCodeURL();
})
const getCodeURL=()=>{
  getCode().then( (res?:any) =>{
    console.log(res);
    setCode(res.data.data);
  })
}
const setCode=(data?:any)=>{
  form.value.reCode=data.image
}
</script>
