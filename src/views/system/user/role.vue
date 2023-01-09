<template>
  <section class="flex flex-col h-full">
    <section class="text-lg">角色管理</section>
    <section class="flex justify-between mt-4">
      <section class="text-lg grid gap-4 grid-cols-5">
        <el-input v-model="params.roleName" placeholder="请输入角色名称" />
      </section>
      <section class="toolbox">
        <el-button type="default" @click="add"
          >{{ $t("common.add") }}
        </el-button>
        <el-button type="primary" @click="getDataList()"
          >{{ $t("common.search") }}
        </el-button>
      </section>
    </section>
    <section class="py-4 flex-1 overflow-auto">
      <el-table :data="dataList" class="w-full">
        <el-table-column
          prop="createId"
          label="创建人id"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="createTime"
          label="创建时间"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column prop="isValid" label="是否有效" show-overflow-tooltip>
          <template #default="scope">
            {{ scope.row.isValid === "YES" ? "是" : "否" }}
          </template>
        </el-table-column>
        <el-table-column
          prop="roleCode"
          label="角色编码"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="roleName"
          label="角色名称"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="updateId"
          label="修改人id"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="remark"
          label="备注"
          width="120px"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          prop="updateTime"
          label="修改时间"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          fixed="right"
          prop="action"
          label="操作"
          width="140px"
          align="center"
        >
          <template #default="scope">
            <section class="flex justify-end">
              <el-button size="small" type="warning" @click="update(scope.row)"
                >{{ $t("common.update") }}
              </el-button>
              <el-popconfirm
                confirm-button-text="确定"
                cancel-button-text="取消"
                title="确认删除？"
                @confirm="deleteItem(scope.row)"
              >
                <template #reference>
                  <el-button size="small" type="danger"
                    >{{ $t("common.delete") }}
                  </el-button>
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
  <my-dialog
    :visible="dialog.addVisible"
    :title="dialog.title"
    @cancel="cancel"
    @save="save"
  >
    <template #content>
      <el-form :model="form" label-position="top">
        <my-form-item v-model:form="form" :form-name="formName"></my-form-item>
      </el-form>
    </template>
  </my-dialog>
</template>
<script lang="ts" setup>
import {
  addRole,
  delRole,
  queryRole,
  updRole,
} from "@/plugins/api/api-role-controller";
import { onMounted, ref } from "vue";
import MyDialog from "@/components/tool/dialog.vue";
import { Form, getFormItem } from "@/modules/form";
import type { Response } from "@/modules/response";
import type { RoleForm } from "@/modules/user";
import MyFormItem from "@/components/tool/formItem.vue";
import type { RoleParams } from "@/modules/list";

const formName: Form = {
  isValid: getFormItem({
    name: "是否有效",
    tool: "select",
    params: [
      { label: "有", value: "YES" },
      { label: "否", value: "NO" },
    ],
  }),
  remark: getFormItem({ name: "备注", tool: "textarea" }),
  roleCode: getFormItem({ name: "角色编码", tool: "input" }),
  roleName: getFormItem({ name: "角色名称", tool: "input" }),
  id: getFormItem({ name: "id", tool: "input", noEdit: true }),
};
const form = ref<RoleForm>();
const params = ref<RoleParams>({
  roleName: "",
  pageSize: 15,
  pageNum: 1,
});
const total = ref(1);
const dataList = ref([]);
const dialog = ref({
  title: "新增",
  action: "add",
  addVisible: false,
});

const createNewForm = () => {
  form.value = {
    roleName: "",
    roleCode: "",
    remark: "",
    isValid: "",
  };
};
const add = () => {
  dialog.value.addVisible = true;
  dialog.value.action = "add";
  dialog.value.title = "新增";
  createNewForm();
};
const update = (item: RoleForm) => {
  dialog.value.addVisible = true;
  dialog.value.action = "update";
  dialog.value.title = "修改";
  form.value = item;
};
const deleteItem = async (item: RoleForm) => {
  const res = await delRole([item.id]);
  if (res.data.code === 200) {
    getDataList(true);
  }
};
const cancel = () => {
  dialog.value.addVisible = false;
  getDataList();
};
const save = () => {
  switch (dialog.value.action) {
    case "add":
      doAdd();
      break;
    case "update":
      doUpdate();
      break;
  }
};
const doAdd = async () => {
  const res = await addRole(form.value);
  if (res.data.code === 200) {
    cancel();
  }
};
const doUpdate = async () => {
  const res = await updRole(form.value);
  if (res.data.code === 200) {
    cancel();
  }
};
/**
 * 获取list
 */
const getDataList = (isFresh?: boolean) => {
  console.log(isFresh, "============", params.value);
  if (isFresh) {
    resetParams();
  }
  queryRole(params.value).then((res: Response) => {
    if (res?.data?.code === 200) {
      console.log(res.data);
      dataList.value = res.data.data.list;
      total.value = res.data.data.total;
    }
  });
};
/**
 * 充值
 */
const resetParams = () => {
  params.value = {
    roleName: "",
    pageSize: 15,
    pageNum: 1,
  };
};
/**
 * 分页
 * @param page
 */
const handleCurrentChange = (page: number) => {
  params.value.pageNum = page;
  getDataList();
};
/**
 * 初始化
 */
onMounted(() => {
  getDataList();
});
</script>
