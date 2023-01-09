<template>
  <vue-flow v-model="elements">
    <background />
    <mini-map />
    <controls />
  </vue-flow>
</template>
<script setup lang="ts">
import "@braks/vue-flow/dist/style.css";
import "@braks/vue-flow/dist/theme-default.css";
import type { Element } from "@braks/vue-flow";
import { Background, Controls, MiniMap, VueFlow } from "@braks/vue-flow";
import { ref } from "vue";

const props = defineProps({
  data: { type: Array, required: true },
});
const elements = ref<Element>(props.data);
/**
 * 添加节点
 * @param data
 */
const addNode = (data: Element) => {
  elements.value.push(data);
};
/**
 * 移除node
 * @param id
 */
const removeNode = (id: string) => {
  // console.log(JSON.parse(JSON.stringify(elements.value)));
  const index = JSON.parse(JSON.stringify(elements.value)).findIndex(
    (item: any) => item.id === id
  );
  if (index !== -1) {
    elements.value.splice(index, 1);
  }
};
defineExpose({ addNode, removeNode });
</script>
