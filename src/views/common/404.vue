<template>
  <section class="w-full h-screen flex justify-center items-center flex-col">
    <section>欢迎来到404包间!!</section>
    <section class="mt-4">{{ count }}秒后返回上一页</section>
  </section>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";

const router = useRouter();
const count = ref(3);
const counting = () => {
  setTimeout(() => {
    if (count.value === 0) {
      router.back();
      return;
    }
    count.value--;
    counting();
  }, 1000);
};
onMounted(() => {
  counting();
});
</script>
