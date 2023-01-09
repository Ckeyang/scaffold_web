<template>
  <el-dialog
    v-model="visible"
    width="550px"
    :title="props.title"
    :close-on-click-modal="false"
  >
    <slot name="content">
      <code> 请使用 template #content 写入内容 </code>
    </slot>
    <slot name="footer">
      <section class="flex justify-end items-center mt-4">
        <el-button @click="doCancel">取消</el-button>
        <el-button type="primary" @click="doSave">确定</el-button>
      </section>
    </slot>
  </el-dialog>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from "vue";

interface emitsFn {
  (e: "cancel"): void;

  (e: "save"): void;
}

const props = defineProps({
  visible: { default: false, type: Boolean },
  title: { default: "", type: String },
});
const emits = defineEmits<emitsFn>();
const visible = ref(props.visible);
/**
 * 监听父对象visible
 */
watchEffect(() => {
  visible.value = props.visible;
});
/**
 * 取消
 */
const doCancel = () => {
  disappearDialog();
  emits("cancel");
};
/**
 * 保存
 */
const doSave = () => {
  disappearDialog();
  emits("save");
};
/**
 * 隐藏
 */
const disappearDialog = () => {
  visible.value = false;
};
</script>
