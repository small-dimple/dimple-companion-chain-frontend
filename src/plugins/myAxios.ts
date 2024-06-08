import axios from "axios";
/**
 * 自定义实例默认值
 */
// 创建实例时配置默认值
const myAxios = axios.create({
    baseURL: 'http://localhost:8080/api'
});
/**
 * 1.添加请求拦截器
 */
myAxios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log("我要发请求了",config);
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
//-------------------------------------------------------------------------------------------------------
/**
 * 2.添加响应拦截器
 */
myAxios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    console.log("我吃到瓜了",response);
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});



//导出
export default myAxios;
// 创建实例后修改默认值
/*
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
 */

