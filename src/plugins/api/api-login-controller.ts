import request from "@/plugins/axios";

// 验证码获取
export function getCode(params: any) {
  return request({
    url: `/api/manager/getCode`,
    method: "get",
    params,
  });
} // 登录
export function login(data: any) {
  return request({
    url: `/api/manager/login`,
    method: "post",
    data,
  });
} // 登出
export function logout(data: any) {
  return request({
    url: `/api/manager/logout`,
    method: "post",
    data,
  });
}
