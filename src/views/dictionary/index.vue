<template>
  <section class="flex flex-col h-full">
    <section class="text-lg">数据字典</section>
    <section class="flex justify-between mt-4">
      <section class="text-lg">
        <el-input v-model="params.name" placeholder="请输入名称"/>
      </section>
      <section class="toolbox">
        <el-button type="default" @click="add">新增</el-button>
        <el-button type="primary" @click="getDataList">查询</el-button>
      </section>
    </section>
    <section class="py-4 flex-1 overflow-auto">
      <el-table :data="dataList" class="w-full">
        <el-table-column prop="sort" label="排序" show-overflow-tooltip></el-table-column>
        <el-table-column prop="code" label="code" show-overflow-tooltip></el-table-column>
        <el-table-column prop="parentId" label="父id" show-overflow-tooltip></el-table-column>
        <el-table-column prop="id" label="id" show-overflow-tooltip></el-table-column>
        <el-table-column prop="identifying" label="identifying" width="120px" show-overflow-tooltip></el-table-column>
        <el-table-column prop="isEdit" label="是否编辑" show-overflow-tooltip>
          <template #default="scope">
            {{ scope.row.isEdit === 'YES' ? '可以' : '不可以' }}
          </template>
        </el-table-column>
        <el-table-column prop="name" label="名称" show-overflow-tooltip></el-table-column>
        <el-table-column prop="remark" label="备注" show-overflow-tooltip></el-table-column>
        <el-table-column prop="createTime" label="创建时间" show-overflow-tooltip></el-table-column>
        <el-table-column prop="createUser" label="创建人" show-overflow-tooltip></el-table-column>
        <el-table-column prop="updateTime" label="更新时间" show-overflow-tooltip></el-table-column>
        <el-table-column prop="updateUser" label="更新人" show-overflow-tooltip></el-table-column>
        <el-table-column prop="action" label="操作" width="140px" align="center">
          <template #default="scope">
            <section class="flex justify-end">
              <el-button v-show="scope.row.isEdit==='YES'" size="small" type="warning" @click="update(scope.row)">编辑
              </el-button>
              <el-button size="small" type="danger" @click="deleteItem(scope.row)">删除</el-button>
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
        <el-form-item v-for="(k,v) in form" :key="v" :label="formName[v]?.name" :prop="`${v}`"
                      v-show="!formName[v]?.noEdit">
          <el-input v-if="formName[v]?.tool==='input'" v-model="form[v]"/>
          <el-input v-if="formName[v]?.tool==='textarea'" v-model="form[v]" type="textarea"/>
          <el-select v-if="formName[v]?.tool==='select'" v-model="form[v]">
            <el-option label="可以" value="YES"></el-option>
            <el-option label="不可以" value="NO"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </template>
  </my-dialog>
</template>
<script lang="ts" setup>
import {addDict, deleteDict, editDict, getDictList} from '@/plugins/api/api-dict-controller.js'
import {onMounted, ref} from "vue";
import MyDialog from '@/components/tool/dialog.vue';
import type {Params} from "@/modules/list";
import type {Dictionary} from "@/modules/dictionary";

const formName = {
  code: {name: '字典编码', tool: 'input'},
  id: {name: 'id', tool: 'input', noEdit: true},
  identifying: {name: '字典标识', tool: 'input'},
  isEdit: {name: '是否允许编辑', tool: 'select'},
  name: {name: '字典名称', tool: 'input'},
  parentId: {name: '父id', tool: 'input', noEdit: true},
  remark: {name: '字典备注', tool: 'textarea'},
  sort: {name: '排序', tool: 'input'}
}
const form = ref<Dictionary>();
const params = ref<Params>({
  name: '',
  pageSize: 15,
  pageNum: 1,
  parentId: 0
})
const total = ref(1);
const dataList = ref([]);
const dialog = ref({
  title: '新增',
  action: 'add',
  addVisible: false
})

const createNewForm = () => {
  form.value = {
    code: "",
    identifying: "",
    isEdit: "YES",
    name: "",
    remark: ""
  };
}
const add = () => {
  dialog.value.addVisible = true;
  dialog.value.action = 'add';
  dialog.value.title = '新增'
  createNewForm();
}
const update = (item: Dictionary) => {
  dialog.value.addVisible = true;
  dialog.value.action = 'update';
  dialog.value.title = '修改';
  form.value = item;
}
const deleteItem = async (item: Dictionary) => {
  let res = await deleteDict([item.id])
  if (res.data.code === 200) {
    getDataList(true)
  }
}
const cancel = () => {
  dialog.value.addVisible = false;
  getDataList()
}
const save = () => {
  switch (dialog.value.action) {
    case 'add':
      doAdd();
      break;
    case 'update':
      doUpdate();
      break;
  }
}
const doAdd = async () => {
  let res = await addDict(form.value)
  if (res.data.code === 200) {
    cancel();
  }
}
const doUpdate = async () => {
  let res = await editDict(form.value)
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
  getDictList(params.value).then((res: any) => {
    if (res.data.code === 200) {
      console.log(res.data);
      dataList.value = res.data.data.list;
      total.value = res.data.data.total;
    }
  })
}
/**
 * 充值
 */
const resetParams = () => {
  params.value = {
    name: '',
    pageSize: 15,
    pageNum: 1,
    parentId: 0
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
