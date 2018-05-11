import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import stores from '../vuex/store.js'

Vue.use(VueAxios, axios);


// 导入组件
import VueLoading from '../plugin/myLoading'
Vue.use(VueLoading,{});


// Vue.prototype.$ajax = axios;

//参考：https://github.com/axios/axios
// 参考：https://www.cnblogs.com/zhouyangla/p/6753673.html

// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const Axios = axios.create({
  // baseURL: 'https://some-domain.com/api/',
    timeout: 60000
    // headers: {'X-Custom-Header': 'foobar'}
});

//请求根地址
window.AIbaseURL = "http://127.0.0.1:3000";//
window.AIallUrl = {
    wordsUrl:window.AIbaseURL+"/AipOcrClient",//文字识别
    languageUrl:window.AIbaseURL+"/AipNlpClient",//语言处理
    faceUrl:window.AIbaseURL+"/AipFaceClient",//人脸识别
    imgSerUrl:window.AIbaseURL+'/AipImageClassify',//图像识别
    voiceUrl:window.AIbaseURL+"/AipSpeechClient",//语音合成
    voicePlayUrl:window.AIbaseURL+"/", //语音合成，播放地址
    // searchUrl:window.AIbaseURL+"/",//人脸搜索，图片查找,返回图片地址拼接
}

if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = '';
} else if (process.env.NODE_ENV == 'debug') {
    axios.defaults.baseURL = '';
} else if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = '';
}

// axiosIns.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
// axiosIns.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest';
// axiosIns.defaults.responseType = 'json';
// axiosIns.defaults.transformRequest = [function (data) {
//     //数据序列化
//     return qs.stringify(data);
// }
// ];
// axiosIns.defaults.validateStatus = function (status) {
//     return true;
// };
// axiosIns.interceptors.request.use(function (config) {
//     //配置config
//     config.headers.Accept = 'application/json';
//     // config.headers.System = 'vue';
//     // let token = Vue.localStorage.get('token');
//     // if(token){
//     //     config.headers.Token = token;
//     // }
//     return config;
// });

//添加请求拦截器
axios.interceptors.request.use(function(config){
     //在发送请求之前做某事
     console.log("在发送请求之前做某事");
     //发起请求时，取消掉当前正在进行的相同请求
    // if (promiseArr[config.url]) {
    //     promiseArr[config.url]('操作取消')
    //     promiseArr[config.url] = cancel
    // } else {
    //     promiseArr[config.url] = cancel
    // }
    // stores方式，需要写入对应模块，此处不重复
    // stores.dispatch('showloader');
    // 原生方式
     window.myloading.show("正在请求")
     return config;
   },function(error){
     //请求错误时做些事
     console.log("请求错误时做些事");
     window.myloading.showAutoClose("请求错误",3000);
     return Promise.reject(error);
   });
 
//添加响应拦截器
axios.interceptors.response.use(function(response){
     //对响应数据做些事
     
     window.myloading.hide()
    return response;
   },function(error){
    // let 
    console.log("Axios.interceptors error");
    console.log(error);
    let err = {message:""}
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          err.message = '错误请求'
          break;
        case 401:
          err.message = '未授权，请重新登录'
          break;
        case 403:
          err.message = '拒绝访问'
          break;
        case 404:
          err.message = '请求错误,未找到该资源'
          break;
        case 405:
          err.message = '请求方法未允许'
          break;
        case 408:
          err.message = '请求超时'
          break;
        case 500:
          err.message = '服务器端出错'
          break;
        case 501:
          err.message = '网络未实现'
          break;
        case 502:
          err.message = '网络错误'
          break;
        case 503:
          err.message = '服务不可用'
          break;
        case 504:
          err.message = '网络超时'
          break;
        case 505:
          err.message = 'http版本不支持该请求'
          break;
        default:
          err.message = '连接错误${err.response.status}'
      }
    } else {
      err.message = "连接到服务器失败"
    }
     //响应错误时做些事
     console.log("响应错误时做些事");
     window.myloading.showAutoClose(err.message,3000);
     return Promise.reject(error);
   });


export default Axios