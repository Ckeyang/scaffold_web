<template>
  <el-form-item v-for="(k,v) in props.form" :key="v" :label="props.formName[v]?.name" :prop="`${v}`"
                v-show="!formName[v]?.noEdit">
    <el-input v-if="props.formName[v]?.tool==='input'" v-model="props.form[v]"/>
    <el-input v-if="props.formName[v]?.tool==='password'" type="password" v-model="props.form[v]"/>
    <el-input v-if="props.formName[v]?.tool==='textarea'" v-model="props.form[v]" type="textarea"/>
    <el-select v-if="props.formName[v]?.tool==='select'" v-model="props.form[v]">
      <el-option v-for="(item,index) in props.formName[v]?.params" :key="index" :label="item.label"
                 :value="item.value"></el-option>
    </el-select>
  </el-form-item>
</template>
<script lang="ts" setup>
const props = defineProps({
  form: {type: Object}, formName: {type: Object}
})
</script>
