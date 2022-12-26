import request from '@/plugins/axios'
const basePath=''
// 错误接口通用规则
export function error(params) {
return request({
url:`${basePath}/error`,
method:'get',
params
})}
