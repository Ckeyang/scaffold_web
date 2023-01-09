<template>
  <section class="flex flex-col h-full">
    <section class="flex justify-between items-center">
      <section class="text-lg">工作流</section>

      <el-tooltip :content="data" placement="top-start">
        <section class="text-blue-500 cursor-pointer">数据模型</section>
      </el-tooltip>
    </section>
    <section class="mt-4 flex items-center justify-between">
      <section>
        工具库地址:<a
          class="underline text-blue-500 ml-4 cursor-pointer"
          href="https://vueflow.dev/guide/"
          target="_blank"
          >https://vueflow.dev/guide/</a
        >
      </section>
      <section>
        <el-button type="default" @click="addNode">新增节点</el-button>
        <el-button type="default" @click="removeNode">删除节点</el-button>
      </section>
    </section>
    <section class="py-4 flex-1 overflow-auto">
      <my-flow ref="flow" v-model:data="data"></my-flow>
    </section>
  </section>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import MyFlow from "@/components/flow/index.vue";

const flow = ref();
let flowData = { id: "" };
const addNode = () => {
  const dateTime = new Date().getTime();
  const obj = {
    id: `${dateTime}`,
    label: `node ${dateTime}`,
    position: { x: 500, y: 120 },
    class: "light",
    events: {
      click: (e: any) => {
        console.log("我点了一下", JSON.parse(JSON.stringify(e.node)));
      },
    },
  };
  flowData = obj;
  flow.value.addNode(obj);
};
const removeNode = () => {
  flow.value.removeNode(flowData.id);
};
const data = ref([
  {
    id: "1",
    type: "input",
    label: "Node 1",
    position: { x: 250, y: 0 },
    class: "light",
  },
  {
    id: "2",
    type: "output",
    label: "Node 2",
    position: { x: 100, y: 100 },
    class: "light",
  },
  { id: "3", label: "Node 3", position: { x: 400, y: 100 }, class: "light" },
  { id: "4", label: "Node 4", position: { x: 150, y: 200 }, class: "light" },
  {
    id: "5",
    type: "output",
    label: "Node 5",
    position: { x: 300, y: 300 },
    class: "light",
  },
  { id: "e1-2", source: "1", target: "2", animated: true },
  {
    id: "e1-3",
    label: "edge with arrowhead",
    source: "1",
    target: "3",
  },
  {
    id: "e4-5",
    type: "step",
    label: "step-edge",
    source: "4",
    target: "5",
    style: { stroke: "orange" },
    labelBgStyle: { fill: "orange" },
  },
  {
    id: "e3-4",
    type: "smoothstep",
    label: "smoothstep-edge",
    source: "3",
    target: "4",
  },
]);
</script>
