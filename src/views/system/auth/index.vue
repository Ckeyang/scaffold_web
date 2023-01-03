<template>
  <section class="flex flex-col h-full">
    <section class="text-lg">资源权限</section>
    <section class="flex justify-between mt-4">
      <section class="text-lg">
        <el-select v-model="params.clientType">
          <el-option value="WEB" label="后台管理系统权限"></el-option>
          <el-option value="APP" label="app权限"></el-option>
          <el-option value="MINI" label="小程序权限"></el-option>
        </el-select>
        <!--        <el-input v-model="params.clientType" placeholder="请输入名称"/>-->
      </section>
      <section class="toolbox">
        <el-button type="default" @click="add('GROUP',{})">新增菜单</el-button>
        <el-button type="primary" @click="getDataList">查询</el-button>
      </section>
    </section>
    <section class="mt-8">
      <el-tooltip
          content="菜单"
          placement="bottom-start"
      >
        <el-icon size="20">
          <Menu/>
        </el-icon>
      </el-tooltip>
      <el-tooltip
          content="页面"
          placement="bottom-start"
      >
        <el-icon size="20"
                 class="mx-8">
          <Memo/>
        </el-icon>
      </el-tooltip>

      <el-tooltip
          content="按钮"
          placement="bottom-start"
      >
        <el-icon size="20">
          <CirclePlus/>
        </el-icon>
      </el-tooltip>
    </section>
    <section class="py-4 flex-1 overflow-auto">
      <el-tree :data="dataList" :props="defaultProps" @node-click="handleNodeClick">
        <template #default="{ node, data }">
          <section class="flex items-center">
            <el-icon size="20" v-if="data.type==='GROUP'">
              <Menu/>
            </el-icon>
            <el-icon size="20" v-if="data.type==='INNER_LINK'">
              <Memo/>
            </el-icon>
            <el-icon size="20" v-if="data.type==='RESOURCE_INNER_LINK'">
              <CirclePlus/>
            </el-icon>
            <section class="ml-4">{{ node.label }}</section>
            <section class="ml-8">
              <el-button
                  v-if="data.type!=='RESOURCE_INNER_LINK'"
                  type="text"
                  size="mini"
                  @click="() => add('INNER_LINK',data)">
                新增页面
              </el-button>
              <el-button
                  v-if="data.type!=='RESOURCE_INNER_LINK'"
                  type="text"
                  size="mini"
                  @click="() => add('RESOURCE_INNER_LINK',data)">
                <span class="text-yellow-500">新增按钮</span>
              </el-button>
              <el-button
                  type="text"
                  size="mini"
                  @click="() => remove(node, data)">
                <span class="text-red-500">删除</span>
              </el-button>
            </section>
          </section>
        </template>
      </el-tree>
    </section>
  </section>
  <my-dialog :visible="dialog.visible" :title="dialog.title" @cancel="cancel" @save="save">
    <template #content>
      <el-form :model="form" label-position="top">
        <el-form-item v-for="(k,v) in form" :key="v" :label="formName[v]?.name" :prop="`${v}`"
                      v-show="!formName[v]?.noEdit">
          <el-input v-if="formName[v]?.tool==='input'" v-model="form[v]"/>
          <el-input v-if="formName[v]?.tool==='textarea'" v-model="form[v]" type="textarea"/>
          <el-select v-if="formName[v]?.tool==='select'" v-model="form[v]">
            <el-option v-for="(item,index) in formName[v]?.params" :key="index" :label="item.label"
                       :value="item.value"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </template>
  </my-dialog>
</template>
<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {Tree, typeName} from "@/modules/auth";
import {addAuth, getAuthTree} from '@/plugins/api/api-auth-controller.js'
import MyDialog from '@/components/tool/dialog.vue';

const dialog = ref({
  title: '新增',
  action: 'add',
  visible: false
})
const params = ref({
  clientType: 'WEB'
})
const formName = {
  icon: {name: '图标', tool: 'input'},
  id: {name: 'id', tool: 'input', noEdit: true},
  identification: {name: '标识', tool: 'input'},
  isEdit: {name: '是否允许编辑', tool: 'select'},
  name: {name: '名称', tool: 'input'},
  parentId: {name: '父id', tool: 'input', noEdit: true},
  requestMethod: {
    name: '请求方式',
    tool: 'select',
    params: [{value: 'GET', label: 'GET'}, {value: 'POST', label: 'POST'}, {
      value: 'UPDATE',
      label: 'UPDATE'
    }, {value: 'DELETE', label: 'DELETE'}]
  },
  sort: {name: '排序', tool: 'input'},
  url: {name: '接口', tool: 'input'}
}
const form = ref({
  "forSystem": "WEB",
  "icon": "",
  "id": '',
  "identification": "",
  "name": "",
  "parentId": 0,
  "requestMethod": "POST",
  "sort": 1,
  "type": "", //GROUP 菜单，INNER_LINK 页面，RESOURCE_INNER_LINK 按钮
  "url": "" //对应接口
})
const types: typeName = {
  'GROUP': '菜单',
  'INNER_LINK': '页面',
  'RESOURCE_INNER_LINK': '按钮'
}
const dataList = ref([])
const defaultProps = ref(
    {
      children: 'child',
      id: 'id',
      label: 'name',
      class: 'mt-2'
    }
)
const add = (type: string, item: any) => {
  form.value.type = type;
  dialog.value.action = 'add';
  dialog.value.title = `新增${types[type as keyof typeName]}`
  dialog.value.visible = true;
}
const remove = (node: any, item: any) => {
}
const save = () => {
  if (dialog.value.action === 'add') {
    doAddAuth();
  }
  dialog.value.visible = false;

}
const cancel = () => {
  dialog.value.visible = false;
}
const doAddAuth = async () => {
  let res = await addAuth(form.value).then();
  if (res.data.code === 200) {
    getDataList();
  }
}
const doUpdateAuth = () => {

}
const handleNodeClick = (data: Tree) => {
  console.log(data);
}
const getDataList = () => {
  getAuthTree(params.value).then((res: any) => {
    dataList.value = res.data.child;
  });
}
onMounted(() => {
  getDataList()
})
</script>
