<template>
  <section class="h-full">
    <el-form :data="data" label-position="top">
      <draggable
        class="h-full"
        item-key="id"
        tag="section"
        :list="data"
        group="form"
      >
        <template #item="{ element }">
          <el-form-item
            class="text-center"
            :required="element.required"
            @click="setItem(element)"
          >
            <template #label>
              <section class="flex justify-between items-center">
                <section>{{ element.name }}</section>
                <section title="移除">
                  <el-icon class="ml-4" @click.stop="removeData(element)">
                    <Minus class="text-red-500" />
                  </el-icon>
                </section>
              </section>
            </template>
            <el-input v-if="element.tool === 'input'"></el-input>
            <el-select v-if="element.tool === 'select'" class="w-full">
              <el-option
                v-for="(item, index) in element.options"
                :key="index"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <file-upload v-if="element.tool === 'file'" :data="element">
            </file-upload>
          </el-form-item>
        </template>
      </draggable>
    </el-form>
  </section>
</template>
<script lang="ts" setup>
import Draggable from "vuedraggable";
import useForm from "@/hooks/form";
import FileUpload from "@/components/tool/fileUpload.vue";

const { setItem, getData, removeData } = useForm();
const data = getData();
</script>
