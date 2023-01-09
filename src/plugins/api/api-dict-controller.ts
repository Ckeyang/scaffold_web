import request from "@/plugins/axios";

// 新增字典数据
export function addDict(data: any) {
  return request({
    url: `/api/manager/baseDict/addDict`,
    method: "post",
    data,
  });
} // 根据ID删除字典数据
export function deleteDict(data: any) {
  return request({
    url: `/api/manager/baseDict/deleteDict`,
    method: "delete",
    data,
  });
} // 修改字典数据
export function editDict(data: any) {
  return request({
    url: `/api/manager/baseDict/editDict`,
    method: "put",
    data,
  });
} // 根据字典标识获取字典数据
export function getDictCode(params: any) {
  return request({
    url: `/api/manager/baseDict/getDictCode`,
    method: "get",
    params,
  });
} // 字典数据分页查询
export function getDictList(params: any) {
  return request({
    url: `/api/manager/baseDict/getDictList`,
    method: "get",
    params,
  });
}
