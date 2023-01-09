<template>
  <section>
    <draggable item-key="id" tag="el-form" :list="props.data" group="form">
      <template #item="{ element }">
        <el-form-item
          class="p-4 text-center my-4"
          :label="element.name"
          @click="setItem(element)"
        >
          <el-input v-if="element.tool === 'input'"></el-input>
          <el-select v-if="element.tool === 'select'" class="w-full">
            <el-option
              v-for="(item, index) in element.options"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </template>
    </draggable>
  </section>
</template>
<script lang="ts" setup>
import Draggable from "vuedraggable";
import type { FormItem } from "@/modules/form";
import useForm from "@/hooks/form";

const { setItem } = useForm();

interface formMain {
  data: FormItem[];
}

const props = defineProps<formMain>();
</script>
