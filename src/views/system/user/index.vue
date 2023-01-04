<template>
  <section class="flex flex-col h-full">
    <section class="flex justify-between items-center">
      <section class="text-lg">用户列表</section>
      <section>
        <el-button type="success" @click="doExportTemplate">导出模版</el-button>
        <el-button type="primary" @click="doImportUser">导入用户</el-button>
      </section>
    </section>
    <section class="xl:flex xl:justify-between mt-4">
      <section class="text-lg grid gap-4 grid-cols-5">
        <el-input v-model="params.name" placeholder="请输入姓名"/>
        <el-input v-model="params.account" placeholder="请输入账号"/>
        <el-input v-model="params.address" placeholder="请输入地址"/>
        <el-input v-model="params.phone" placeholder="请输入电话"/>
        <el-input v-model="params.remark" placeholder="请输入备注"/>
      </section>
      <section class="xl:mt-0 md:mt-4">
        <el-button type="default" @click="add">新增</el-button>
        <el-button type="primary" @click="getDataList()">查询</el-button>
      </section>
    </section>
    <section class="py-4 flex-1 overflow-auto">
      <el-table :data="dataList" class="w-full">
        <el-table-column prop="id" label="id" show-overflow-tooltip></el-table-column>
        <el-table-column prop="account" label="账号" show-overflow-tooltip></el-table-column>
        <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
        <el-table-column prop="age" label="年龄" show-overflow-tooltip></el-table-column>
        <el-table-column prop="name" label="名称" show-overflow-tooltip></el-table-column>
        <el-table-column prop="phone" label="电话" width="120px" show-overflow-tooltip></el-table-column>
        <el-table-column prop="remark" label="备注" width="120px" show-overflow-tooltip></el-table-column>
        <el-table-column prop="roleName" label="角色" show-overflow-tooltip></el-table-column>
        <el-table-column prop="sex" label="性别" show-overflow-tooltip>
          <template #default="scope">
            {{ scope.row.sex === 'MAN' ? '男' : '女' }}
          </template>
        </el-table-column>
        <el-table-column prop="status" label="状态" show-overflow-tooltip>
          <template #default="scope">
            {{ scope.row.status === 'OPEN' ? '启用' : '禁用' }}
          </template>
        </el-table-column>
        <el-table-column fixed="right" prop="action" label="操作" width="300px" align="center">
          <template #default="scope">
            <section class="flex justify-end">
              <el-button type="default" size="small" @click="addRole(scope.row)">修改角色</el-button>
              <el-button type="primary" size="small" @click="doExportUser(scope.row)">导出用户</el-button>
              <el-button size="small" type="warning" @click="update(scope.row)">编辑
              </el-button>
              <el-popconfirm
                  confirm-button-text="确定"
                  cancel-button-text="取消"
                  title="确认删除？" @confirm="deleteItem(scope.row)">
                <template #reference>
                  <el-button size="small" type="danger">删除</el-button>
                </template>
              </el-popconfirm>
            </section>
          </template>
        </el-table-column>
      </el-table>
    </section>
    <section>
      <el-pagination
          v-model:current-page="params.pageNum"
          v-model:page-size="params.pageSize"
          layout="prev, pager, next"
          :total="total"
          @current-change="handleCurrentChange"
      />
    </section>
  </section>
  <my-dialog :visible="dialog.addVisible" :title="dialog.title" @cancel="cancel" @save="save">
    <template #content>
      <el-form :model="form" label-position="top">
        <my-form-item v-model:form="form" :form-name="formName"></my-form-item>
      </el-form>
    </template>
  </my-dialog>
  <my-dialog :visible="dialog.roleVisible" :title="dialog.title" @cancel="cancel" @save="save">
    <template #content>
      <section>
        操作用户<span class="ml-4">{{ form.name }}</span>
      </section>
      <section class="mt-8">
        选择角色
        <el-select placeholder="请选择角色" class="ml-4" v-model="form.roleId" multiple>
          <el-option v-for="(item,index) in roles" :key="index" :label="item.roleName" :value="item.id"></el-option>
        </el-select>
      </section>
    </template>
  </my-dialog>
</template>
<script lang="ts" setup>
import {
  addUserRoles,
  delUsers,
  exportTemplete,
  exportUser,
  importUser,
  queryUser,
  userSave,
  userUpdate
} from '@/plugins/api/api-user-controller.js';
import {getRoles} from "@/plugins/api/api-role-controller";
import {onMounted, ref} from "vue";
import MyDialog from '@/components/tool/dialog.vue';
import type {UserParams} from "@/modules/list";
import {Form, getFormItem} from "@/modules/form";
import type {Response} from "@/modules/response";
import type {UserForm} from "@/modules/user";
import MyFormItem from '@/components/tool/formItem.vue'
import {blobToUrl, fileInput} from "@/plugins/common";

const formName: Form = {
  account: getFormItem({name: '账号', tool: 'input'}),
  address: getFormItem({name: '地址', tool: 'textarea'}),
  age: getFormItem({name: '年龄', tool: 'input'}),
  id: getFormItem({name: 'id', tool: 'input', noEdit: true}),
  name: getFormItem({name: '姓名', tool: 'input'}),
  password: getFormItem({name: '密码', tool: 'password'}),
  phone: getFormItem({name: '电话', tool: 'input'}),
  sex: getFormItem({
    name: '性别',
    tool: 'select',
    params: [{label: '男', value: 'MAN'}, {label: '女', value: 'WOMAN'}]
  }),
  status: getFormItem({
    name: '状态',
    tool: 'select',
    params: [{label: '启用', value: 'OPEN'}, {label: '禁用', value: 'CLOSE'}]
  }),
  remark: getFormItem({name: '备注', tool: 'textarea'})
}
const form = ref<UserForm>();
const params = ref<UserParams>({
  name: '',
  account: '',
  phone: '',
  remark: '',
  address: '',
  pageSize: 15,
  pageNum: 1
})
const total = ref(1);
const dataList = ref([]);
const dialog = ref({
  title: '新增',
  action: 'add',
  roleVisible: false,
  addVisible: false
})
const roles = ref();
/**
 * 获取roles
 */
const getAllRoles = async () => {
  let res = await getRoles();
  if (res.data.code === 200) {
    roles.value = res.data.data
  }
}
/**
 * 创建一个新对象
 */
const createNewForm = () => {
  form.value = {
    account: "",
    phone: "",
    password: "",
    sex: "MAN",
    status: "OPEN",
    age: 0,
    address: '',
    name: "",
    remark: ""
  };
}
/**
 * 导入用户
 */
const doImportUser = async () => {
  let file = await fileInput();
  if (file instanceof Blob) {
    let formData = new FormData();
    formData.append('file', file);
    let res = await importUser(formData);
    if (res.data.code === 200) {
      getDataList(true)
    }
  }
}
/**
 * 添加角色
 */
const addRole = (item: UserForm) => {
  getAllRoles();
  form.value = item;
  dialog.value.roleVisible = true;
  dialog.value.action = 'updateRole';
  dialog.value.title = '编辑角色'
}
/**
 * 导出模版
 */
const doExportTemplate = async () => {
  let res = await exportTemplete();
  let url = await blobToUrl(res.data)
  window.open(String(url));
}
/**
 * 导出用户
 * @param item
 */
const doExportUser = async (item: UserForm) => {
  let res = await exportUser(item);
  let url = await blobToUrl(res.data)
  window.open(String(url));
}
/**
 * 打开新增框
 */
const add = () => {
  dialog.value.addVisible = true;
  dialog.value.action = 'add';
  dialog.value.title = '新增'
  createNewForm();
}
/**
 * 打开修改框
 * @param item
 */
const update = (item: UserForm) => {
  dialog.value.addVisible = true;
  dialog.value.action = 'update';
  dialog.value.title = '修改';
  form.value = item;
}
/**
 * 执行删除
 * @param item
 */
const deleteItem = async (item: UserForm) => {
  let res = await delUsers([item.id])
  if (res.data.code === 200) {
    getDataList(true)
  }
}
/**
 * 弹出框 取消
 */
const cancel = () => {
  dialog.value.addVisible = false;
  dialog.value.roleVisible = false;
  getDataList()
}
/**
 * 弹出框保存
 */
const save = () => {
  switch (dialog.value.action) {
    case 'add':
      doAdd();
      break;
    case 'update':
      doUpdate();
      break;
    case 'updateRole':
      doUpdateRole();
  }
}
const doUpdateRole = async () => {
  let role = {
    userId: form.value?.id,
    roleIds: form.value?.roleId
  }
  let res = await addUserRoles(role)
  if (res.data.code === 200) {
    cancel();
  }
}
/**
 * 执行增加
 */
const doAdd = async () => {
  let res = await userSave(form.value);
  if (res.data.code === 200) {
    cancel();
  }
}
/**
 * 执行修改
 */
const doUpdate = async () => {
  let res = await userUpdate(form.value)
  if (res.data.code === 200) {
    cancel();
  }
}
/**
 * 获取list
 */
const getDataList = (isFresh?: boolean) => {
  if (isFresh) {
    resetParams();
  }
  queryUser(params.value).then((res: Response) => {
    if (res?.data?.code === 200) {
      console.log(res.data);
      dataList.value = res.data.data.list;
      total.value = res.data.data.total;
    }
  })
}
/**
 * 重制
 */
const resetParams = () => {
  params.value = {
    name: '',
    account: '',
    address: '',
    phone: '',
    remark: '',
    pageSize: 15,
    pageNum: 1
  }
}
/**
 * 分页
 * @param page
 */
const handleCurrentChange = (page: number) => {
  params.value.pageNum = page;
  getDataList();
}
/**
 * 初始化
 */
onMounted(() => {
  getDataList();
})
</script>
