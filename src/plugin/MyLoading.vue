<template>
  <!-- <div class="myloading" v-show="isShowLoading">
    <div class="myloadingIcon">
      <div class="weui-loadmore">
        <i class="weui-loading"></i>
        <span class="weui-loadmore__tips" v-text="showMsg">正在加载...</span>

      </div>
    </div>
  </div> -->
  <div>
    <!-- 微信 toast-->
    <div id="" style="display:none;"  v-show="0===showType">
        <div class="weui-mask_transparent"></div>
        <div class="weui-toast">
          {{showType}}
            <i v-if="0==showIconType" class="weui-loading weui-icon_toast"></i>
            
            <i v-if="1==showIconType" class="weui-icon-success-no-circle weui-icon_toast"></i>

            <p class="weui-toast__content" v-text="showMsg">数据加载中</p>
        </div>
    </div>
    <!-- 微信 dialog-->
    <!--ios-->
    <div class="js_dialog" id="iosDialog1" style="display: none;" v-show="1===showType">
            <div class="weui-mask"></div>
            <div class="weui-dialog">
                <div class="weui-dialog__hd" v-if="''!=showTit"><strong class="weui-dialog__title" v-text="showTit">弹窗标题</strong></div>
                <div class="weui-dialog__bd" v-text="showMsg">弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</div>
                <div class="weui-dialog__ft">
                    <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default" v-if="showBtn1" @click="btn1Action()">辅助操作</a>
                    <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" v-if="showBtn2" @click="btn2Action()">主操作</a>
                </div>
            </div>
        </div>
    <!--android-->
    <div class="js_dialog" id="androidDialog2" style="display: none;" v-show="2===showType">
            <div class="weui-mask"></div>
            <div class="weui-dialog weui-skin_android">
                <div class="weui-dialog__hd" v-if="''!=showTit"><strong class="weui-dialog__title" v-text="showTit">弹窗标题</strong></div>
                <div class="weui-dialog__bd" v-text="showMsg">
                    弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内
                </div>
                <div class="weui-dialog__ft">
                    <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default" v-if="showBtn1" @click="btn1Action()">辅助操作</a>
                    <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" v-if="showBtn2" @click="btn2Action()">主操作</a>
                </div>
            </div>
        </div>
  </div>
</template>

<style lang="less">
  // .myloading {
  //   background-color: transparent;
  //   .myloadingIcon {
  //     position: relative;
  //     top: 40%;
  //     width: 100%;

  //   }
  //   .weui-loadmore {
      
  //     display: block;
  //     text-align: center;
  //     width: 60px;
  //     min-height: 30px;
  //     padding: 10px;
  //     margin: 0 auto;
  //     background-color: rgba(0,0,0,.7);
  //     border-radius: 5px;
  //   }
  //   .weui-loadmore__tips {
  //     display: block;
  //     font-size: 12px;
  //     color:#fff;

  //   }
  // }
</style>

<script>
export default {
  name: 'loading',
  data () {
    return {
      btnAction:null,
      showType: null,//0,1,2
      showIconType: 0,//showType==0,
      showTit:'showTit',//showType==1,2
      showMsg:'正在加载...',//showType==0,1,2
      showBtn1: true,//showType==1,2
      showBtn2: true//showType==1,2
    }
  },
  methods:{
    init(argu){
      this.showType = argu.showType;
      this.showIconType = argu.showIconType;
      this.showTit = argu.showTit;
      this.showMsg = argu.showMsg;
      this.showBtn1 = argu.showBtn1;
      this.showBtn2 = argu.showBtn2;
   
    },
    btn1Action(){
      // console.log(11);
      console.log("vue.btn1Action(){11");

      // this.$emit('btn1Action')
    },
    btn2Action(){
      console.log("vue.btn2Action(){22");
      // this.$emit('btn2Action')
    },
    setModel(argu){
      let _this = this;
      this.init(argu);
    },
    showLoading(msg){
      this.showType = 0;
      this.showMsg = msg;
    },
    hideLoading(){
      // console.log(this.showType);
      this.showType = null;
      // console.log(this.showType);
    }
  },
  mounted() {
    this.init({
      
      showType: null,//0,1,2
      showIconType: 0,//showType==0,
      showTit:'showTit',//showType==1,2
      showMsg:'正在加载...',//showType==0,1,2
      showBtn1: true,//showType==1,2
      showBtn2: true//showType==1,2
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

