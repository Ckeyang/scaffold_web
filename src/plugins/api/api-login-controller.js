import request from '@/plugins/axios'
const basePath=''
// 验证码获取
export function getCode(params) {
return request({
url:`${basePath}/api/manager/getCode`,
method:'get',
params
})}// 登录
export function login(data) {
return request({
url:`${basePath}/api/manager/login`,
method:'post',
data
})}// 登出
export function logout(data) {
return request({
url:`${basePath}/api/manager/logout`,
method:'post',
data
})}
