<template>
  <section class="w-full h-screen overflow-hidden flex flex-col">
    <my-header></my-header>
    <el-container class="flex-1">
      <side-menu></side-menu>
      <el-main>
        <RouterView></RouterView>
      </el-main>
    </el-container>
  </section>
</template>
<script lang="ts" setup>
import MyHeader from '@/components/common/header.vue'
import SideMenu from '@/components/common/sideMenu.vue'</script>
