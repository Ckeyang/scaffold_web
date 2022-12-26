import request from '@/plugins/axios'
const basePath=''
// 单文件上传-附件
export function uploadFile(data) {
return request({
url:`${basePath}/api/manager/file/uploadFile`,
method:'post',
data
})}// 单文件上传-图片
export function uploadImg(data) {
return request({
url:`${basePath}/api/manager/file/uploadImg`,
method:'post',
data
})}
