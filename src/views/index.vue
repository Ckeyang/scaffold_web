<template>
  <section class="w-full h-screen flex justify-center items-center">
    welcome
  </section>
</template>
<script lang="ts" setup>
import {onMounted} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()
onMounted(() => {
  setTimeout(() => {
    checkToken()
  }, 2000)
})
const checkToken = () => {
  let token = localStorage.getItem('token');
  if (!token) {
    router.push('/login')
  } else {
    router.push('/admin')
  }
}
</script>
