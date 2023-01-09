<template>
  <section class="flex flex-col h-full">
    <section class="flex justify-between items-center">
      <section class="text-lg">拖拽插件</section>
    </section>
    <section class="mt-4 flex items-center justify-between">
      <section>
        工具库地址:<a
          class="underline text-blue-500 ml-4 cursor-pointer"
          href="https://github.com/SortableJS/vue.draggable.next"
          target="_blank"
          >https://github.com/SortableJS/vue.draggable.next</a
        >
      </section>
    </section>
    <section class="py-4 flex-1 overflow-auto grid grid-cols-3 gap-2">
      <section>
        <draggable :list="myArray" item-key="name" group="test">
          <template #item="{ element }">
            <section class="bg-gray-300 py-4 my-4 text-white text-center">
              {{ element.name }}
            </section>
          </template>
        </draggable>
      </section>
      <section>
        <draggable :list="myArray2" item-key="name" group="test">
          <template #item="{ element }">
            <section class="bg-gray-300 py-4 my-4 text-white text-center">
              {{ element.name }}
            </section>
          </template>
        </draggable>
      </section>
      <section class="bg-gray-300">
        <section>
          arr1:
          {{ myArray }}
        </section>
        <section>
          arr2:
          {{ myArray2 }}
        </section>
      </section>
    </section>
  </section>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import Draggable from "vuedraggable";

const myArray = ref([{ name: "1" }, { name: "2" }, { name: "3" }]);
const myArray2 = ref([{ name: "4" }]);
</script>
