<template>
  <div>

	<!-- 内容 -->
    <article class="weui-article">
           
            <section>
                <div class="weui-panel weui-panel_access">
                  <button @click="getNetworkType()" class="weui-btn weui-btn_primary">获得微信网络状态</button>
                  <div><span>微信网络状态：</span><span>{{networkType}}</span></div>
                </div>
                <div class="weui-panel weui-panel_access">
                  <button @click="openLocation()" class="weui-btn weui-btn_primary">打开当前位置地图</button>
                 
                </div>
                <div class="weui-panel weui-panel_access">
                  <button @click="getCurLocation()" class="weui-btn weui-btn_primary">获取位置</button>
                  <div><span>纬度：</span><span>{{currentLocation.latitude}}</span></div>
                  <div><span>经度：</span><span>{{currentLocation.longitude}}</span></div>
                  
                </div>
                <div class="weui-panel weui-panel_access">
                  <button @click="getChooseImage()" class="weui-btn weui-btn_primary">选3张照片</button>
                  <div><span>照片返回信息：</span><span>{{wx_imgs}}</span></div>
                  
                </div>
                
               
        
            </section>
         
        </article>
	
    
  </div>
</template>

<script>

export default {
  name: '',
  data () {
    return {
      headerTitle: '微信js-sdk测试',

      currentLocation: {"latitude": 0 ,"longitude":0},

      networkType:'',
      wx_imgs: ''

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
    getNetworkType(){
      let _this = this;
      this.wx_GetNetworkType({},function(res){
        _this.networkType = res.networkType;
      });
    },
    openLocation(){
      this.wx_getLocation_openLocation({
        name:'二狗的位置',
        address:'This Is Position Of Two Dogs',
        scale:1,
        infoUrl:''
      });
    },
    getCurLocation(){
      let _this = this;
      this.wx_getLocation({
        type:'wgs84'
      },function(res){
        console.log("getCurLocation=");
        console.log(res);
        _this.currentLocation = res;
      });
    },
    getChooseImage(){
      let _this = this;
      this.wx_chooseImage({
        count:3
      },function(res){
        console.log("getChooseImage=");
        console.log(res);
        _this.wx_imgs = JSON.stringify(res);
      });
    }
  },
  mounted() {
    console.log("mounted");
    this.init();
  }
}
</script>

