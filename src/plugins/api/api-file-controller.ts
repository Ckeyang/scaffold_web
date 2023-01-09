import request from "@/plugins/axios";

// 单文件上传-附件
export function uploadFile(data: any) {
  return request({
    url: `/api/manager/file/uploadFile`,
    method: "post",
    data,
  });
} // 单文件上传-图片
export function uploadImg(data: any) {
  return request({
    url: `/api/manager/file/uploadImg`,
    method: "post",
    data,
  });
}
