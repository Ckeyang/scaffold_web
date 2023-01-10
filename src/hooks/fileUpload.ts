import { ref } from "vue";

const files = ref<File[] | File>();
export default function useFileUpload() {
  /**
   * 获取file
   */
  const getFile = () => {
    return files.value;
  };
  /**
   * 设置file对象
   * @param val
   */
  const setFile = (val: File[] | File) => {
    files.value = val;
  };
  /**
   * 重置对象
   */
  const resetFile = () => {
    files.value = undefined;
  };
  return { getFile, setFile, resetFile };
}
