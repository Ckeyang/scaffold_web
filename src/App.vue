<template>
  <el-config-provider :locale="commonState.locale">
    <RouterView />
  </el-config-provider>
</template>
<script setup lang="ts">
import { RouterView } from "vue-router";
import { useCommonState } from "@/stores/common";

const commonState = useCommonState();
</script>
