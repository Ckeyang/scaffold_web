import request from "@/plugins/axios";

// 新增角色
export function addRole(data: any) {
  return request({
    url: `/api/manager/role/addRole`,
    method: "post",
    data,
  });
} // 角色分配权限资源
export function addRoleAuth(data: any) {
  return request({
    url: `/api/manager/role/addRoleAuth`,
    method: "put",
    data,
  });
} // 删除角色
export function delRole(data: any) {
  return request({
    url: `/api/manager/role/delRole`,
    method: "delete",
    data,
  });
} // 获取角色列表
export function getRoles(params: any) {
  return request({
    url: `/api/manager/role/getRoles`,
    method: "get",
    params,
  });
} // 分页查询角色列表
export function queryRole(params: any) {
  return request({
    url: `/api/manager/role/queryRole`,
    method: "get",
    params,
  });
} // 查询角色分配的权限资源集合
export function roleAuthList(params: any) {
  return request({
    url: `/api/manager/role/roleAuthList`,
    method: "get",
    params,
  });
} // 编辑角色
export function updRole(data: any) {
  return request({
    url: `/api/manager/role/updRole`,
    method: "put",
    data,
  });
}
