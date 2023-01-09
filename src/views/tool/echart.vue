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
          href="https://echarts.apache.org/"
          target="_blank"
          >https://echarts.apache.org/</a
        >
      </section>
    </section>
    <section class="py-4 flex-1 overflow-auto">
      <section class="grid grid-cols-2 h-full">
        <my-chart ref="d" v-model:data="data"></my-chart>
        <my-chart ref="e" v-model:data="data2"></my-chart>
      </section>
    </section>
  </section>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import MyChart from "@/components/echarts/index.vue";

const data = ref({
  title: {
    text: "ECharts 入门示例",
  },
  tooltip: {},
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
  },
  yAxis: {},
  series: [
    {
      name: "销量",
      type: "bar",
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
});
const data2 = ref({
  title: {
    text: "Stacked Area Chart",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },
  legend: {
    data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "Email",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: "Union Ads",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: "Video Ads",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: "Direct",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: "Search Engine",
      type: "line",
      stack: "Total",
      label: {
        show: true,
        position: "top",
      },
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [820, 932, 901, 934, 1290, 1330, 1320],
    },
  ],
});
</script>
