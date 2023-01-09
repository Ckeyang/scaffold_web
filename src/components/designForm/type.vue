<template>
  <el-form v-if="item" :data="item" :label-position="'top'">
    <el-form-item label="字段名">
      <el-input v-model="item.name"></el-input>
    </el-form-item>
    <el-form-item label="输入模型">
      <el-select v-model="item.tool" class="w-full">
        <el-option
          v-for="(v, index) in tools"
          :key="index"
          :value="v.value"
          :label="v.label"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="是否可以编辑">
      <el-switch v-model="item.noEdit"></el-switch>
    </el-form-item>
    <el-form-item v-if="item.tool === 'select'" label="选项栏">
      <template #label>
        <section class="flex justify-between items-center">
          <section>选项栏</section>
          <section @click="addOption">
            <el-icon>
              <Plus />
            </el-icon>
          </section>
        </section>
      </template>
      <!--      <el-switch v-model=""></el-switch>-->
      <section v-for="(option, index) in item.options" :key="index">
        <option>选项{{ index + 1 }}:</option>
        <section class="grid grid-cols-2 gap-4">
          <el-input v-model="option.label" placeholder="请输入名称"></el-input>
          <el-input v-model="option.value" placeholder="请输入键值"></el-input>
        </section>
      </section>
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup>
import useForm from "@/hooks/form";

const { item, tools, addOption } = useForm();
</script>
