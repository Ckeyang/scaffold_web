import { ref } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const isShowSide = ref(true);
  const setShowSide = (val: boolean) => {
    isShowSide.value = val;
  };

  return { isShowSide, setShowSide };
});
