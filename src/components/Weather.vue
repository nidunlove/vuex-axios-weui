<template>
  <div>
  	<!-- 搜索栏 -->
  	<div class="weui-search-bar" id="">
            <form class="weui-search-bar__form">
                <div class="weui-search-bar__box">
                    <i class="weui-icon-search"></i>
                    <input type="search" class="weui-search-bar__input" v-model="city" placeholder="搜索" />
                    <a href="javascript:" class="weui-icon-clear" @click="clearIn()"></a>
                </div>
                <label class="weui-search-bar__label" id="" @click="showInput()" v-show="isShowSearchText" :class="{ 'weui-search-bar_focusing': !isShowSearchText }">
                    <i class="weui-icon-search"></i>
                    <span>搜索</span>
                </label>
            </form>
            <a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
        </div>
	<!-- 内容 -->
    <article class="weui-article">
            <!-- <h1>天气</h1> -->
            <section>
                
                <h2>
                  <div><span>地理位置信息：</span><span>{{currentLocation.msg}}</span></div>
                  <div><span>纬度：</span><span>{{currentLocation.latitude}}</span></div>
                  <div><span>经度：</span><span>{{currentLocation.longitude}}</span></div>
                  <div><span>城市：</span><span>{{currentLocation.city}}</span></div>
                  <button @click="getCurLocation()" class="weui-btn weui-btn_mini weui-btn_primary">获取位置</button>
                  
                </h2>
                <h2 class="title">{{city}}<button @click="getWeatherData()" class="weui-btn weui-btn_mini weui-btn_primary">搜索</button></h2>
                <section  v-for = "(item,key,index) in weather">
                    <h3>{{key}}</h3>
                    <p>{{item}}
                    </p>
     
                </section>
                
            </section>
            <div class="weui-loadmore">
              <i class="weui-loading"></i>
              <span class="weui-loadmore__tips">正在加载</span>
            </div>
        </article>
	
    
  </div>
</template>

<script>

export default {
  name: '',
  data () {
    return {
      headerTitle: '天气',
      city:"上海",
      currentLocation: {"msg":"初始化","latitude": 0 ,"longitude":0,"city":""},
      weather:"无",
 
      isShowSearchText: true,
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
   
    getCurLocation(){//js获得经纬度坐标
      this.currentLocation = {"msg":"默认","latitude": 0 ,"longitude":0,'city':""};

      
        console.log(navigator.geolocation); 

        if (navigator.geolocation) {  
            console.log("navigator.geolocation.getCurrentPosition");
            let that = this;
              navigator.geolocation.getCurrentPosition(function(position){
                console.log("showPosition"); 
                that.axios.get('http://api.map.baidu.com/geocoder/v2/?ak=71709218d45a706b9c7e3abc2f037b23&callback=?&location='+position.coords.latitude+','+position.coords.longitude+'&output=json&pois=1')
                // that.axios.get("http://gc.ditu.aliyun.com/regeocoding?l="+position.coords.latitude+","+position.coords.longitude+"&type=001")
                .then(response => {
                    console.log(response);
                    console.log(this);
                    alert(JSON.stringify(response));
                    that.currentLocation.city = "";
                });
                  that.currentLocation.msg = "OK";
                  that.currentLocation.latitude = position.coords.latitude;
                  that.currentLocation.longitude = position.coords.longitude;

                }, function(error){//获取地址位置报错
                  console.log("error");
                  // console.log(that);
                  switch (error.code) {  
                    case error.PERMISSION_DENIED:  
                        that.currentLocation.msg = "用户拒绝对获取地理位置的请求。";  
                        break;  
                    case error.POSITION_UNAVAILABLE: 
                        // console.log(this); 
                        that.currentLocation.msg = "位置信息是不可用的。";  
                        break;  
                    case error.TIMEOUT:  
                        that.currentLocation.msg = "请求用户地理位置超时。";  
                        break;  
                    case error.UNKNOWN_ERROR:  
                        that.currentLocation.msg = "未知错误。";  
                        break; 
                    default: that.currentLocation.msg = "未知";  
                    } 
                });  
          } else {  
              this.currentLocation.msg = "该浏览器不支持定位功能！";
          }  
      
    },
    getWeatherData(){
        console.log(this);

        // console.log(this.myloading.show());

        // this.loading.show();
        // console.log(Vue);
        // console.log(this.$ajax);

        // console.log(this.$ajax);
        // 免费开放接口 API 网址
        // https://blog.csdn.net/c__chao/article/details/78573737
        
        // Vue.axios.get("https://www.apiopen.top/weatherApi?city=上海")//无效（不知为何
        // this.$ajax.get("https://www.apiopen.top/weatherApi?city=上海")
        // this.isShowLoading = true;
        // this.loading.show();
        
        // this.myloading.show("加载天气");
// alert("aa");
        console.log(this.$store);
        let _this = this;
        this.$store.dispatch('showloader');
        this.axios.get("https://www.apiopen.top/weatherApi?city="+this.city)
        .then(response => {
            console.log(response);
            _this.$store.dispatch('hideloader');
            console.log(this);
            this.weather = response.data.data;
            // this.myloading.hide();
            // this.isShowLoading = false;
            // Loading.hideLoading();
        }).catch(function (error) {
          _this.$store.dispatch('hideloader');
          console.log(error);
        });
    },
    showInput(){
        this.isShowSearchText = false;
    },
    clearIn(){
        this.city = "";
    }
  },
  mounted() {
    console.log("mounted");
    this.init();
    this.getCurLocation();
    this.getWeatherData();
  }
}
</script>

