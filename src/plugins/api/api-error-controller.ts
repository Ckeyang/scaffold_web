import request from "@/plugins/axios";

// 错误接口通用规则
export function error(params: any) {
  return request({
    url: `/error`,
    method: "get",
    params,
  });
}
