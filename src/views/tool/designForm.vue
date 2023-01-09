<template>
  <section class="flex flex-col h-full">
    <section class="flex justify-between items-center">
      <section class="text-lg">自定义表单编辑器</section>
    </section>
    <section class="py-4 flex-1 overflow-auto grid grid-cols-12 gap-4">
      <!--      工具库-->
      <section class="col-span-3">
        <section>工具</section>
        <section>
          <design-tool v-model:data="toolData"></design-tool>
        </section>
      </section>
      <section class="col-span-6">
        <section>主界面</section>
        <section>
          <design-main v-model:data="mainData"></design-main>
        </section>
      </section>
      <section class="col-span-3">
        <section>属性</section>
        <section>
          <design-type></design-type>
        </section>
      </section>
    </section>
    <section class="flex justify-center items-center">
      <el-button @click="save">保存</el-button>
    </section>
  </section>
</template>
<script lang="ts" setup>
import DesignTool from "@/components/designForm/tool.vue";
import DesignMain from "@/components/designForm/main.vue";
import DesignType from "@/components/designForm/type.vue";
import { ref } from "vue";

const toolData = ref([
  { name: "输入框", tool: "input" },
  { name: "选择框", tool: "select" },
]);
const mainData = ref([]);
const save = () => {
  console.log(mainData.value);
};
</script>
