import request from "@/plugins/axios";

// 添加权限资源
export function addAuth(data: any) {
  return request({
    url: `/api/manager/auth/addAuth`,
    method: "post",
    data,
  });
} // 批量删除权限资源
export function delAuthByIds(data: any) {
  return request({
    url: `/api/manager/auth/delAuthByIds`,
    method: "delete",
    data,
  });
} // 查询url资源权限
export function getAuthByUrl(params: any) {
  return request({
    url: `/api/manager/auth/getAuthByUrl`,
    method: "get",
    params,
  });
} // 获取权限资源树
export function getAuthTree(params: any) {
  return request({
    url: `/api/manager/auth/getAuthTree`,
    method: "get",
    params,
  });
} // 修改权限资源
export function updateAuth(data: any) {
  return request({
    url: `/api/manager/auth/updateAuth`,
    method: "put",
    data,
  });
}
