import axios from 'axios';
import config from "@/plugins/axios/config";
import {ElNotification} from "element-plus";

const http = axios.create(config);
// 请求拦截器 ，主要是用来做header token设置
// @ts-ignore
http.interceptors.request.use((axiosConfig: axios.AxiosRequestConfig<any>) => {
    if (localStorage.getItem('token')) {
        axiosConfig.headers['Authorization'] = localStorage.getItem('token');
    }
    return axiosConfig
});
// @ts-ignore
http.interceptors.response.use((response: axios.AxiosResponse<any, any>) => {
    if (response.data.code !== 200) {
        ElNotification({
            type: 'error',
            title: '错误信息',
            message: response.data.msg
        })
    }
    return response
});
export default http;
