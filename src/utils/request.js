/*
* 封装axios
* */
import axios from "axios";
//引入elementUI里面的Notification
import {Notification} from "element-ui"
//创建axios
/*
*instance就是我们之前使用的axios对象
*
* */
const instance = axios.create({
    baseURL: ' http://localhost:8888/',
    timeout: 3000,
});
//配置拦截器
// Add a request interceptor
instance.interceptors.request.use(function (config ) {
    // Do something before request is sent

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    let {status, message, data} = response.data;
    if (status == 20000) {
        return data;
    } else {
        Notification.error(message);
        return Promise.reject(false);
    }
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default instance;

