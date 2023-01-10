<template>
  <section class="h-full">
    <draggable
      item-key="id"
      class="h-full"
      :clone="cloneDog"
      :list="tools"
      :group="group"
    >
      <template #item="{ element }">
        <section
          class="bg-gray-300 p-4 text-center my-4"
          @dblclick="addData(element)"
        >
          {{ element.name }}
        </section>
      </template>
    </draggable>
  </section>
</template>
<script lang="ts" setup>
import Draggable from "vuedraggable";
import { ref } from "vue";
import type { FormItem } from "@/modules/form";
import useForm from "@/hooks/form";

const { getTools, addData } = useForm();
const tools = getTools();
const group = ref({ name: "form", pull: "clone", put: false });
const cloneDog = (item: FormItem) => {
  const { name, tool } = item;
  // item.id = `${Date.now()}`;
  return { name, tool, id: `${Date.now()}` };
};
</script>
