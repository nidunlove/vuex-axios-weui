<template>
  <div>

	<!-- 内容 -->
<!-- Dialog -->
<div class="weui-flex">
            <div class="weui-flex__item">
              <a href="javascript:;" class="weui-btn weui-btn_primary" id="showIOSDialog1" @click="showDialog()">iOS Dialog样式一</a>
              <!-- <div class="weui-flex__item"><a href="javascript:;" class="weui-btn weui-btn_default" id="showAndroidDialog1">Android Dialog样式一</a></div> -->
              <div class="weui-flex__item"><a href="javascript:;" class="weui-btn weui-btn_default" @click="showDialog2()" id="showAndroidDialog1">Android Dialog样式一</a></div>
              <!-- <div class="weui-flex__item"><a href="javascript:;" class="weui-btn weui-btn_default" id="showAndroidDialog2">Android Dialog样式二</a></div> -->
            </div>
        </div>


<!-- actionsheet -->
        <a href="javascript:;" class="weui-btn weui-btn_warn" @click="showSelSheet()" id="showPicker">单列选择器</a>
        <a href="javascript:;" class="weui-btn weui-btn_default" @click="showSelDate()" id="showDatePicker">日期选择器</a>

        <a href="javascript:;" class="weui-btn weui-btn_default" @click="toggleIOSActionSheet()" id="showIOSActionSheet">iOS ActionSheet</a>
        <a href="javascript:;" class="weui-btn weui-btn_default" @click="toggleAndroidActionSheet()" id="showAndroidActionSheet">Android ActionSheet</a>
        <div>
        <div class="weui-mask" id="iosMask" v-show="isshowIOSActionSheet"></div>
            <div class="weui-actionsheet" id="iosActionsheet" :class="{'weui-actionsheet_toggle':isshowIOSActionSheet}">
                <div class="weui-actionsheet__title">
                    <p class="weui-actionsheet__title-text">这是一个标题，可以为一行或者两行。</p>
                </div>
                <div class="weui-actionsheet__menu">
                    <div class="weui-actionsheet__cell">示例菜单</div>
                    <div class="weui-actionsheet__cell">示例菜单</div>
                    <div class="weui-actionsheet__cell">示例菜单</div>
                    <div class="weui-actionsheet__cell">示例菜单</div>
                </div>
                <div class="weui-actionsheet__action">
                    <div class="weui-actionsheet__cell" id="iosActionsheetCancel" @click="toggleIOSActionSheet()">取消</div>
                </div>
            </div>
        </div>

        <div class="weui-skin_android" id="androidActionsheet" v-show="isshowAndroidActionSheet">
            <div class="weui-mask"></div>
            <div class="weui-actionsheet">
                <div class="weui-actionsheet__menu" @click="toggleAndroidActionSheet()">
                    <div class="weui-actionsheet__cell">示例菜单</div>
                    <div class="weui-actionsheet__cell">示例菜单</div>
                    <div class="weui-actionsheet__cell">示例菜单</div>
                </div>
            </div>
        </div>
<!-- panel -->
<div class="weui-panel weui-panel_access">
            <div class="weui-panel__hd">图文组合列表</div>
            <div class="weui-panel__bd">
                <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                    <div class="weui-media-box__hd">
                        <img class="weui-media-box__thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg==" alt="">
                    </div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">标题一</h4>
                        <p class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                    </div>
                </a>
                <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                    <div class="weui-media-box__hd">
                        <img class="weui-media-box__thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg==" alt="">
                    </div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">标题二</h4>
                        <p class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                    </div>
                </a>
            </div>
            <div class="weui-panel__ft">
                <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
                    <div class="weui-cell__bd">查看更多</div>
                    <span class="weui-cell__ft"></span>
                </a>    
            </div>
        </div>

<!-- 表单 -->
<div class="weui-cells weui-cells_radio">
            <label class="weui-cell weui-check__label" for="x11">
                <div class="weui-cell__bd">
                    <p>cell standard</p>
                </div>
                <div class="weui-cell__ft">
                    <input type="radio" class="weui-check" name="radio1" id="x11"/>
                    <span class="weui-icon-checked"></span>
                </div>
            </label>
            <label class="weui-cell weui-check__label" for="x12">

                <div class="weui-cell__bd">
                    <p>cell standard</p>
                </div>
                <div class="weui-cell__ft">
                    <input type="radio" name="radio1" class="weui-check" id="x12" checked="checked"/>
                    <span class="weui-icon-checked"></span>
                </div>
            </label>
            <a href="javascript:void(0);" class="weui-cell weui-cell_link">
                <div class="weui-cell__bd">添加更多</div>
            </a>
        </div>

        <div class="weui-cells weui-cells_checkbox">
            <label class="weui-cell weui-check__label" for="s11">
                <div class="weui-cell__hd">
                    <input type="checkbox" class="weui-check" name="checkbox1" id="s11" checked="checked"/>
                    <i class="weui-icon-checked"></i>
                </div>
                <div class="weui-cell__bd">
                    <p>standard is dealt for u.</p>
                </div>
            </label>
            <label class="weui-cell weui-check__label" for="s12">
                <div class="weui-cell__hd">
                    <input type="checkbox" name="checkbox1" class="weui-check" id="s12"/>
                    <i class="weui-icon-checked"></i>
                </div>
                <div class="weui-cell__bd">
                    <p>standard is dealicient for u.</p>
                </div>
            </label>
            <a href="javascript:void(0);" class="weui-cell weui-cell_link">
                <div class="weui-cell__bd">添加更多</div>
            </a>
        </div>

        <div class="weui-cells weui-cells_form">
            <div class="weui-cell weui-cell_warn">
                <div class="weui-cell__hd"><label for="" class="weui-label">卡号</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="number" pattern="[0-9]*" value="weui input error" placeholder="请输入卡号"/>
                </div>
                <div class="weui-cell__ft">
                    <i class="weui-icon-warn"></i>
                </div>
            </div>
        </div>

        <div class="weui-cells weui-cells_form">
            <div class="weui-cell weui-cell_switch">
                <div class="weui-cell__bd">标题文字</div>
                <div class="weui-cell__ft">
                    <input class="weui-switch" type="checkbox"/>
                </div>
            </div>
            <div class="weui-cell weui-cell_switch">
                <div class="weui-cell__bd">兼容IE Edge的版本</div>
                <div class="weui-cell__ft">
                    <label for="switchCP" class="weui-switch-cp">
                        <input id="switchCP" class="weui-switch-cp__input" type="checkbox" checked="checked"/>
                        <div class="weui-switch-cp__box"></div>
                    </label>
                </div>
            </div>
        </div>

        <label for="weuiAgree" class="weui-agree">
            <input id="weuiAgree" type="checkbox" class="weui-agree__checkbox"/>
            <span class="weui-agree__text">
                阅读并同意<a href="javascript:void(0);">《相关条款》</a>
            </span>
        </label>

        <div class="weui-cells">

            <div class="weui-cell weui-cell_select weui-cell_select-before">
                <div class="weui-cell__hd">
                    <select class="weui-select" name="select2">
                        <option value="1">+86</option>
                        <option value="2">+80</option>
                        <option value="3">+84</option>
                        <option value="4">+87</option>
                    </select>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入号码"/>
                </div>
            </div>
        </div>

        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <textarea class="weui-textarea" placeholder="请输入文本" rows="3"></textarea>
                    <div class="weui-textarea-counter"><span>0</span>/200</div>
                </div>
            </div>
        </div>

  <div class="weui-cell">
                <div class="weui-cell__hd"><label for="" class="weui-label">日期</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="date" value=""/>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label for="" class="weui-label">时间</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="datetime-local" value="" placeholder=""/>
                </div>
            </div>
<!-- 进度条 -->
        <div class="weui-progress">
            <div class="weui-progress__bar">
                <div class="weui-progress__inner-bar js_progress" style="width: 80%;"></div>
            </div>
            <a href="javascript:;" class="weui-progress__opr">
                <i class="weui-icon-cancel"></i>
            </a>
        </div>
        <div class="weui-btn-area">
            <a href="javascript:;" class="weui-btn weui-btn_warn weui-btn_loading" id="btnUpload"><i class="weui-loading"></i>上传</a>
        </div>
  <!-- 底部链接 -->
	<!-- <div class="weui-footer">
            <p class="weui-footer__links">
                <a href="javascript:void(0);" class="weui-footer__link">底部链接</a>
                <a href="javascript:void(0);" class="weui-footer__link">底部链接</a>
            </p>
            <p class="weui-footer__text">Copyright &copy; 2008-2016 weui.io</p>
        </div> -->
        <div class="weui-footer weui-footer_fixed-bottom">
            <p class="weui-footer__links">
              <router-link to="/Home" class="weui-footer__link">
                WeUI首页
                <!-- <a href="javascript:home();" class="weui-footer__link">WeUI首页</a> -->
              </router-link>
            </p>
            <p class="weui-footer__text">Copyright &copy; 2008-2016 weui.io</p>
        </div>
    
  </div>
</template>

<script>

import weui from 'weui.js'

export default {
  name: '',
  data () {
    return {
      headerTitle: '微信js-sdk测试',
      isshowIOSActionSheet: false,
      isshowAndroidActionSheet:false
    }
  },
  methods:{
    init(){
      console.log("init");
      console.log(this);
      //头部文字
      this.$parent.headerTitle = this.headerTitle;
      //当前位置信息
    },
    showDialog(){
      let _this = this;
      this.myloading.showDiaLog(
        {
          showType: 1,//0,1,2
          showIconType: 0,//showType==0,
          showTit:'弹窗标题',//showType==1,2
          showMsg:'弹窗内容弹窗内容',//showType==0,1,2
          showBtn1: true,//showType==1,2
          showBtn2: true,//showType==1,2
        },
        function(){
          _this.myloading.hide();
        },
        function(){
          _this.myloading.hide();
        }
      );
    },
    showDialog2(){
      let _this = this;
      this.myloading.showDiaLog(
        {
          showType: 2,//0,1,2
          showIconType: 0,//showType==0,
          showTit:'弹窗标题2',//showType==1,2
          showMsg:'弹窗内容弹窗内容1',//showType==0,1,2
          showBtn1: false,//showType==1,2
          showBtn2: true,//showType==1,2
        },
        function(){
          _this.myloading.hide();
        },
        function(){
          _this.myloading.hide();
        }
      );
    },
    toggleIOSActionSheet(){
      if(this.isshowIOSActionSheet){
        this.isshowIOSActionSheet = false;
      } else {
        this.isshowIOSActionSheet = true;
      }
      // this.isshowIOSActionSheet = !this.isshowIOSActionSheet;
    },
    toggleAndroidActionSheet(){
      // this.isshowAndroidActionSheet = !this.isshowAndroidActionSheet;
      if(this.isshowAndroidActionSheet){
        this.isshowAndroidActionSheet = false;
      } else {
        this.isshowAndroidActionSheet = true;
      }
    },
    showSelSheet(){
      console.log(this);
      // console.log(this.weui);
      // console.log(this.VueWeui);
      weui.picker([{
            label: '飞机票',
            value: 0
        }, {
            label: '火车票',
            value: 1
        }, {
            label: '的士票',
            value: 2
        },{
            label: '公交票 (disabled)',
            disabled: true,
            value: 3
        }, {
            label: '其他',
            value: 4
        }], {
            onChange: function (result) {
                console.log(result);
            },
            onConfirm: function (result) {
                console.log(result);
            }
        });
    },
    showSelDate(){
      weui.datePicker({
            start: 1990,
            end: new Date().getFullYear(),
            onChange: function (result) {
                console.log(result);
            },
            onConfirm: function (result) {
                console.log(result);
            }
        });
    }
    
  },
  mounted() {
    console.log("mounted");
    this.init();
  }
}
</script>

