<template>
  <el-upload
    ref="upload"
    class="w-full"
    drag
    action="/"
    :auto-upload="false"
    multiple
    :on-change="onChange"
  >
    <el-icon class="el-icon--upload">
      <upload-filled />
    </el-icon>
    <div class="el-upload__text">文件拖放在此处或者 <em>点击此处</em></div>
    <template #tip>
      <div class="el-upload__tip">
        {{ props.data.expired }} 文件小于 {{ props.data.size }}KB
      </div>
    </template>
  </el-upload>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { UploadInstance } from "element-plus";
import useFileUpload from "@/hooks/fileUpload";

const { setFile } = useFileUpload();
const upload = ref<UploadInstance>();
const props = defineProps({ data: { type: Object } });

const onChange = (file: File, files: File[]) => {
  if (upload.value) {
    setFile(JSON.parse(JSON.stringify(files)));
  }
};
</script>
