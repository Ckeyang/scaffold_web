<template>
  <section class="flex flex-col h-full flex-shrink-0">
    <section class="flex justify-between items-center">
      <section class="text-lg">自定义表单编辑器</section>
    </section>
    <section class="py-4 flex-1 grid grid-cols-12 gap-4">
      <!--      工具库-->
      <section class="col-span-3 flex flex-col">
        <section>工具</section>
        <section class="flex-1 basis-auto flex-shrink-0 h-0 overflow-y-auto">
          <design-tool></design-tool>
        </section>
      </section>
      <section class="col-span-6 flex flex-col border-x-2 px-4">
        <section>主界面</section>
        <section class="flex-1 basis-auto flex-shrink-0 h-0 overflow-y-auto">
          <design-main />
        </section>
      </section>
      <section class="col-span-3 flex flex-col">
        <section>属性</section>
        <section class="flex-1 basis-auto flex-shrink-0 h-0 overflow-y-auto">
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
import useForm from "@/hooks/form";

const { getData } = useForm();
// const mainData = ref<FormItem[]>([]);
const save = () => {
  console.log(getData());
};
// const addTool = (item: FormItem) => {
//   mainData.value.push(item);
// };
</script>
