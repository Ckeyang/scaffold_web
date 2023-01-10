<template>
  <el-form v-if="item" :data="item" :label-position="'top'">
    <el-form-item label="字段名">
      <el-input v-model="item.name"></el-input>
    </el-form-item>
    <el-form-item label="输入模型">
      <el-select v-model="item.tool" class="w-full">
        <el-option
          v-for="(v, index) in options"
          :key="index"
          :value="v.value"
          :label="v.label"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="是否可以编辑">
      <el-switch v-model="item.noEdit"></el-switch>
    </el-form-item>
    <el-form-item label="是否必传">
      <el-switch v-model="item.required"></el-switch>
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
      <!--多选项-->
      <section v-for="(option, index) in item.options" :key="index">
        <section class="flex items-center">
          选项{{ index + 1 }}:
          <el-icon class="ml-4" @click="removeOption(index)">
            <Minus class="text-red-500" />
          </el-icon>
        </section>
        <section class="grid grid-cols-2 gap-4">
          <el-input v-model="option.label" placeholder="请输入名称"></el-input>
          <el-input v-model="option.value" placeholder="请输入键值"></el-input>
        </section>
      </section>
    </el-form-item>
    <el-form-item v-if="item.tool === 'file'" label="文件类型">
      <el-input v-model="item.expired"></el-input>
    </el-form-item>
    <el-form-item v-if="item.tool === 'file'" label="文件大小">
      <el-input-number v-model="item.size"></el-input-number>
      <span class="ml-4">KB</span>
    </el-form-item>
    <el-form-item label="长度限制">
      <el-input-number v-model="item.length"></el-input-number>
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup>
import useForm from "@/hooks/form";

const { item, options, addOption, removeOption } = useForm();
</script>
