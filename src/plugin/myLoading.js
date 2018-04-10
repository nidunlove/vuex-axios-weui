import Vue from 'vue'
import LoadingComponent from './MyLoading.vue'

export default {
  install: function(Vue, pluginOptions = {}) {

    // Vue.prototype.$myName = "zhagngsan";

    // const VueToast = Vue.extend(LoadingComponent);
    // Vue.component('Loading',LoadingComponent);
    // Vue.prototype.showLoading = function(msg) {
    // 	console.log(LoadingComponent);
    //     LoadingComponent.methods.showLoading.call(this,msg)
    // };
    // 创建"子类"方便挂载
    const VueLoading = Vue.extend(LoadingComponent)
    let loading = null

    /**
     * 初始化并显示loading
     * @returns {Promise} Promise实例
     */
    function $loading() {
      return new Promise((resolve) => {
        // 第一次调用
        if (!loading) {
          loading = new VueLoading()
          // 手动创建一个未挂载的实例
          loading.$mount()
          // 挂载
          document.querySelector(pluginOptions.container || 'body').appendChild(loading.$el)
        }
        // 显示loading
        // loading.showLoading()
        resolve()
      })
    }
    // 定义关闭loading方法
    $loading.show = (msg) => {
      return new Promise((resolve) => {
        // if (loading || loading.isShowLoading) {
        //   resolve()
        //   return
        // }
        loading.showLoading(msg)
      })
    }
    // 定义关闭loading方法
    $loading.hide = () => {
      return new Promise((resolve) => {
        // if (!loading || !loading.isShowLoading) {
        //   resolve()
        //   return
        // }
        // 首页判断是否在关闭时需要动画
        // if (noAnimate) {
        //   // 默认只在此次行为下移除动画,之后的行为仍有动画
        //   loading.removeAnimate().then(() => {
        //     loading.opemAnimate()
        //   })
        // }

        loading.hideLoading();
      })
    }
    //模态框配置
    //
    $loading.setModel = (argu) => {
      loading.setModel(argu);
    }
    // dialog
    //{
      
    //   showType: null,//0,1,2
    //   showIconType: 0,//showType==0,
    //   showTit:'showTit',//showType==1,2
    //   showMsg:'正在加载...',//showType==0,1,2
    //   showBtn1: true,//showType==1,2
    //   showBtn2: true//showType==1,2
    // }
    $loading.showDiaLog = (argu,btn1Fn,btn2Fn) => {
      loading.setModel(argu);
      // console.log(loading);
      // console.log(function(){});
      // console.log(loading.btn1Action);
      // console.log(btn1Fn);
      // btn1Fn.apply(loading.btn1Action);
      // loading.btn1Action = btn1Fn;
      loading.btn1Action = btn1Fn;
      loading.btn2Action = btn2Fn;
      // loading.btn1Action.prototype = btn1Fn.prototype;
      // btn2Fn.prototype = loading.btn2Action.prototype;
      // function(){
      // loading.btn1Action();
      // loading.btn12Action();
        // btn1Fn.call(null,loading.btn1Action());
      // }
      // ,btn2Fn
      // loading.btn1Action();
      // loading.btn2Action();
    }
    //定时关闭
    $loading.showAutoClose = (msg,timeout) => {
      return new Promise((resolve) => {
	      loading.showLoading(msg)
	      window.setTimeout(function () {
	        loading.hideLoading();
	      },timeout);
        // loading.showAutoClose(msg,timeout);
      })
    }
    $loading();
    //axios和实例中皆可调用
    window.myloading = Vue.prototype.myloading = $loading
  }
}
// if(window.Vue){
//   Vue.use(Loading)
// }

// export default Loading
