import { ref } from "vue";
import type { FormItem, FormOption } from "@/modules/form";

const item = ref();
const data = ref<FormItem[]>([]);
export default function useForm() {
  const options = ref<FormOption[]>([
    { value: "input", label: "输入框" },
    { value: "select", label: "选择框" },
    { value: "file", label: "文件" },
  ]);
  const tools = ref<FormItem[]>([
    { name: "输入框", tool: "input" },
    { name: "选择框", tool: "select" },
    { name: "文件", tool: "file", expired: "jpg/png", size: 10 },
  ]);
  /**
   * 设置当前
   * @param val
   */
  const setItem = (val: FormItem) => {
    item.value = val;
  };
  /**
   * 获取当前选中
   */
  const getItem = () => {
    return item;
  };
  /**
   * 添加选项
   */
  const addOption = () => {
    if (!item.value.options) {
      item.value.options = [];
    }
    item.value.options.push({ label: "名称", value: "值" });
  };
  const removeOption = (index: number) => {
    item.value.options.splice(index, 1);
  };
  /**
   * 手动添加数据
   * @param val
   */
  const addData = (val: FormItem) => {
    data.value.push(val);
  };
  const removeData = (jtem: FormItem) => {
    const index = data.value.findIndex((item) => item === jtem);
    data.value.splice(index, 1);
  };
  /**
   * 获取数据
   */
  const getData = () => {
    return data;
  };
  /**
   * 重制Data
   */
  const resetData = () => {
    data.value = [];
  };
  /**
   * 获取工具包
   */
  const getTools = () => {
    return tools;
  };
  return {
    options,
    item,
    addData,
    removeData,
    addOption,
    removeOption,
    setItem,
    getTools,
    getData,
    getItem,
    resetData,
  };
}
