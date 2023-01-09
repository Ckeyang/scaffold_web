<template>
  <section>
    <draggable
      item-key="id"
      :clone="cloneDog"
      :list="props.data"
      :group="group"
    >
      <template #item="{ element }">
        <section class="bg-gray-300 p-4 text-center my-4">
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

interface formMain {
  data: FormItem[];
}

const props = defineProps<formMain>();
const group = ref({ name: "form", pull: "clone", put: false });
const cloneDog = (item: FormItem) => {
  const { name, tool } = item;
  // item.id = `${Date.now()}`;
  return { name, tool, id: `${Date.now()}` };
};
</script>
