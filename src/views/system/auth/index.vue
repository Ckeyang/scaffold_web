<template>
  <section class="flex flex-col h-full">
    <section class="text-lg">资源权限</section>
    <section class="flex justify-between mt-4">
      <section class="text-lg">
        <el-input v-model="params.clientType" placeholder="请输入名称"/>
      </section>
      <section class="toolbox">
        <el-button type="default" @click="add">新增</el-button>
        <el-button type="primary" @click="getDataList">查询</el-button>
      </section>
    </section>
    <section class="py-4 flex-1 overflow-auto">
      123
    </section>
  </section>
  <my-dialog :visible="dialog.addVisible" :title="dialog.title" @cancel="cancel" @save="save">
  </my-dialog>
</template>
<script lang="ts" setup>
import {onMounted, ref} from "vue";

import {getAuthTree} from '@/plugins/api/api-auth-controller.js'

const dialog = ref({
  title: '新增',
  action: 'add',
  addVisible: false
})
const params = ref({
  clientType: 'WEB'
})
const add = () => {
}
const save = () => {
}
const cancel = () => {
}
const getDataList = () => {
  getAuthTree(params.value).then((res: any) => {
    console.log(res)
  });
}
onMounted(() => {
  getDataList()
})
</script>
