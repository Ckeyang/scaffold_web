<template>
  <section ref="chart" class="w-full h-full"></section>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import echarts from "@/plugins/echarts";

const props = defineProps({ data: { type: Object, required: true } });
const chart = ref();
onMounted(() => {
  setChart();
});
const setChart = () => {
  const myChart = echarts.init(chart.value);
  myChart.setOption(props.data);
};
</script>
