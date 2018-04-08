import Vue from 'vue'
// import Vuex from 'vuex'
// import {WechatPlugin} from 'vuex'
import wx from 'weixin-js-sdk'
// var wx = require('weixin-js-sdk');
// Vue.use(WechatPlugin); //  微信

// const wx = Vue.wechat; 
// console.log("wx");
// console.log(wx);


const wxApi = {};
wxApi.install = function(Vue, options) {
  // Vue.component(VueComment.name, VueComment);
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function() {
    // 逻辑...
  }

  // 2. 添加全局资源
  // Vue.directive('my-directive', {
  //   bind (el, binding, vnode, oldVnode) {
  //     // 逻辑...
  //   }
  //   // ...
  // })

  // 3. 注入组件
  // Vue.mixin({
  //   created: function () {
  //     // 逻辑...
  //   }
  //   // ...
  // })
  // 请求并设置微信 config
  Vue.prototype.getWxConfig = function() {
    var _this = this;
    this.getHttpWxConfig(function(res){
    	// console.log("getWxConfig==");
      	// console.log(res);
    	_this.wx_setConfig({
        	// debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
	          appId: res.appId, // 必填，公众号的唯一标识
	          timestamp: res.timestamp, // 必填，生成签名的时间戳
	          nonceStr: res.nonceStr, // 必填，生成签名的随机串
	          signature: res.signature // 必填，签名，见附录1
        });
    });
  };
  //判断当前客户端版本是否支持指定JS接口
  Vue.prototype.wx_checkJsApi = function(checkList,callback) {
	  wx.checkJsApi({
	    jsApiList: checkList,//['chooseImage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
	    success: function(res) {
		    callback(res);
		    // 以键值对的形式返回，可用的api值true，不可用为false
		    // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
	    }
	  });
  };
  //获得后台返回的微信，验证
  Vue.prototype.getHttpWxConfig = function(callback) {
  	// var _this = this;
    Vue.axios.post("/wxToken/getsignature", { 'url': location.href.split('#')[0] }) //location.href.split('#')[0]
      .then(response => {
      	// console.log("getHttpWxConfig==");
      	// console.log(response);
      	callback(response.data);
      });
  };
  //微信config配置
  Vue.prototype.wx_setConfig = function(methodOptions){
        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: methodOptions.appId, // 必填，公众号的唯一标识
          timestamp: methodOptions.timestamp, // 必填，生成签名的时间戳
          nonceStr: methodOptions.nonceStr, // 必填，生成签名的随机串
          signature: methodOptions.signature, // 必填，签名，见附录1
          jsApiList: ['checkJsApi',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'hideMenuItems',
            'showMenuItems',
            'hideAllNonBaseMenuItem',
            'showAllNonBaseMenuItem',
            'translateVoice',
            'startRecord',
            'stopRecord',
            'onRecordEnd',
            'playVoice',
            'pauseVoice',
            'stopVoice',
            'uploadVoice',
            'downloadVoice',
            'chooseImage',
            'previewImage',
            'uploadImage',
            'downloadImage',
            'getNetworkType',
            'openLocation',
            'getLocation',
            'hideOptionMenu',
            'showOptionMenu',
            'closeWindow',
            'scanQRCode',
            'chooseWXPay',
            'openProductSpecificView',
            'addCard',
            'chooseCard',
            'openCard'
          ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
  };
  // 4. 添加实例方法
  // 分享到朋友圈
  Vue.prototype.wx_Share = function(methodOptions) {
    this.getWxConfig();
    // 逻辑...
    wx.ready(() => {
      // 所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，
      // 则可以直接调用，不需要放在ready函数中。
      wx.onMenuShareAppMessage({ // 分享给朋友
        title: methodOptions.title, // 分享标题
        desc: methodOptions.desc, // 分享描述
        link: methodOptions.link, // 分享链接 默认以当前链接
        imgUrl: methodOptions.imgUrl, // 分享图标
        // 用户确认分享后执行的回调函数
        success: function() {
          console.log("用户确认分享后执行的回调函数");

        },
        // 用户取消分享后执行的回调函数
        cancel: function() {
          console.log('分享到朋友取消');
        }
      });
    });
  };
  // 获得网络状态
  Vue.prototype.wx_GetNetworkType = function(methodOptions,callBack) {
    this.getWxConfig();
    // 逻辑...
    wx.ready(() => {
      wx.getNetworkType({
        success: function(res) {
          console.log("getNetworkType success");
          console.log(res);
          var networkType = res.networkType; // 返回网络类型2g，3g，4g，wifi
          // _	this.networkType = networkType;
          // return networkType;
          callBack(res);
        }
      });
    });
  };
  // 获得微信地理位置
  Vue.prototype.wx_getLocation = function(methodOptions,callback) {
    this.getWxConfig();
    // 逻辑...
    wx.ready(() => {
      //获得微信地理坐标
      wx.getLocation({
        type: methodOptions.type,//'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        success: function(res) {
          // console.log("getLocation success");
          // console.log(res);
          callback(res);
        }
      });
    });
  };
  // 获得腾讯地理位置并打开地图
  Vue.prototype.wx_getLocation_openLocation = function(methodOptions) {
    this.getWxConfig();
    // 逻辑...
    wx.ready(() => {
      //获得微信地理坐标
      wx.getLocation({
        type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        success: function(res) {
          console.log("getLocation success");
          console.log(res);
          var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
          var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
          var speed = res.speed; // 速度，以米/每秒计
          var accuracy = res.accuracy; // 位置精度
          //打开微信地图
          wx.openLocation({
            latitude: latitude, // 纬度，浮点数，范围为90 ~ -90
            longitude: longitude, // 经度，浮点数，范围为180 ~ -180。
            name: methodOptions.name, // 位置名
            address: methodOptions.address, // 地址详情说明
            scale: methodOptions.scale, // 地图缩放级别,整形值,范围从1~28。默认为最大
            infoUrl: methodOptions.infoUrl // 在查看位置界面底部显示的超链接,可点击跳转
          });
        }
      });
    });
  };
  // 获得腾讯地理位置并打开地图
  Vue.prototype.wx_chooseImage = function(methodOptions,callback) {
    this.getWxConfig();
    // 逻辑...
    wx.ready(() => {
    //微信选取图片
      wx.chooseImage({
          count: methodOptions.count,// 3, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
            // var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
            callback(res);
          }
      });
    })
  }
}

// 这里的判断很重要
// if (typeof window !== 'undefined' && window.Vue) {
//   console.log("window.Vue.use(wxApi) ");
//   window.Vue.use(wxApi)
// }

export default wxApi
