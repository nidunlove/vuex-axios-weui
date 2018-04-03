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
            <h1>天气</h1>
            <section>
                <h2 class="title">{{city}}<button @click="getWeatherData()" class="weui-btn weui-btn_mini weui-btn_primary">搜索</button></h2>
                <section  v-for = "(item,key,index) in weather">
                    <h3>{{key}}</h3>
                    <p>{{item}}
                        <!-- <section v-for = "(item2,key2,index2) in item">
                            <h4>{{key2}}</h4>
                            <div>{{item2}}</div>
                        </section> -->
                    </p>
     
                </section>
                
            </section>
        </article>
	
    
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      city:"上海",
      weather:"无",
      isShowSearchText: true,
    }
  },
  methods:{
    getWeatherData(){
        console.log(this);
        // console.log(Vue);
        // console.log(this.$ajax);
        

        // console.log(this.$ajax);
        // 免费开放接口 API 网址
        // https://blog.csdn.net/c__chao/article/details/78573737
        
        // Vue.axios.get("https://www.apiopen.top/weatherApi?city=上海")//无效（不知为何
        // this.$ajax.get("https://www.apiopen.top/weatherApi?city=上海")
        this.axios.get("https://www.apiopen.top/weatherApi?city="+this.city)
        .then(response => {
            console.log(response);
            console.log(this);
            this.weather = response.data.data;

        })
        
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
    this.getWeatherData();
  }
}
</script>

