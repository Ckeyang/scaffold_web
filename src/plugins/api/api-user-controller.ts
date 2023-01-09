import request from "@/plugins/axios";

// 用户分配角色
export function addUserRoles(data: any) {
  return request({
    url: `/api/manager/user/addUserRoles`,
    method: "put",
    data,
  });
} // 删除用户
export function delUsers(data: any) {
  return request({
    url: `/api/manager/user/delUsers`,
    method: "delete",
    data,
  });
} // 导出模板
export function exportTemplete(data?: any) {
  return request({
    url: `/api/manager/user/exportTemplete`,
    method: "post",
    responseType: "blob",
    data,
  });
} // 导出用户
export function exportUser(data: any) {
  return request({
    url: `/api/manager/user/exportUser`,
    method: "post",
    responseType: "blob",
    data,
  });
} // 获取用户菜单资源
export function getUserMenus(params: any) {
  return request({
    url: `/api/manager/user/getUserMenus`,
    method: "get",
    params,
  });
} // 导入用户
export function importUser(data: any) {
  return request({
    url: `/api/manager/user/importUser`,
    method: "post",
    data,
  });
} // 启用/禁用用户
export function openCloseUser(params: any) {
  return request({
    url: `/api/manager/user/openCloseUser`,
    method: "get",
    params,
  });
} // 分页查询用户列表
export function queryUser(params: any) {
  return request({
    url: `/api/manager/user/queryUser`,
    method: "get",
    params,
  });
} // 根据id查询用户信息
export function selectUserById(params: any) {
  return request({
    url: `/api/manager/user/selectUserById`,
    method: "get",
    params,
  });
} // 保存用户
export function userSave(data: any) {
  return request({
    url: `/api/manager/user/userSave`,
    method: "post",
    data,
  });
} // 修改用户
export function userUpdate(data: any) {
  return request({
    url: `/api/manager/user/userUpdate`,
    method: "put",
    data,
  });
}
