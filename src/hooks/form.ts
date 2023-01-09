import { ref } from "vue";
import type { FormItem, FormOption } from "@/modules/form";

const item = ref();
export default function useForm() {
  const tools = ref<FormOption[]>([
    { value: "input", label: "输入框" },
    { value: "select", label: "选择框" },
  ]);
  const setItem = (val: FormItem) => {
    item.value = val;
  };
  const getItem = () => {
    return item;
  };
  const addOption = () => {
    if (!item.value.options) {
      item.value.options = [];
    }
    item.value.options.push({ label: "名称", value: "值" });
  };
  return { item, tools, addOption, setItem, getItem };
}
