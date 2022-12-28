import axios from 'axios';
import config from "@/plugins/axios/config";
import {ElNotification} from "element-plus";
// import {useUserState} from "@/stores/user";

// const userState = useUserState();

const http = axios.create(config);
// 请求拦截器 ，主要是用来做header token设置
// @ts-ignore
http.interceptors.request.use((axiosConfig: axios.AxiosRequestConfig<any>) => {
    console.log(axiosConfig)
    if (localStorage.getItem('token')) {
        axiosConfig.headers['Authorization'] = localStorage.getItem('token');
    }
    return axiosConfig
});
// @ts-ignore
http.interceptors.response.use((response: axios.AxiosResponse<any, any>) => {
    console.log(response)
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
