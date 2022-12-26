import axios from 'axios';
import config from "@/plugins/axios/config";
const http = axios.create(config);
// 请求拦截器 ，主要是用来做header token设置
http.interceptors.request.use((axiosConfig: axios.AxiosRequestConfig<any>) =>{
    console.log(axiosConfig)
    return axiosConfig
});
http.interceptors.response.use( (response: axios.AxiosResponse<any, any>) =>{
    console.log(response)
        return response
});
export default http;
