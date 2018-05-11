<template>
  <!-- <div> -->

  	
    <!-- <div class="container"> -->

    <div class="">
        <!-- 头部导航 -->
        <div class="topHeader">
            <!-- <h1 class="">SearchBar</h1>
            <p class="">搜索栏</p> -->
            <div class="weui-flex">
                <div>
                    <div class="placeholder" @click="closeApp()">
                        <img src="static/weui/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                    </div>
                </div>
                <div class="weui-flex__item">
                    <div class="placeholder">vue-axios-weui</div>
                </div>
                <div>
                    <div class="placeholder">
                        <img src="static/weui/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                    </div>
                </div>
            </div>
        </div>

        <!-- 内容区域/底部导航 -->
        <div class="" style="height: 100%;">
            <div class="weui-tab">
                <div class="weui-tab__panel">
                    <!-- 切换页 -->
                    <transition name="slide">
                        <router-view ></router-view>
                    </transition>
                </div>
                <!-- 底部导航 -->
                <div class="weui-tabbar">
                   <!--  <a href="javascript:;" class="weui-tabbar__item weui-bar__item_on">
                        <span style="display: inline-block;position: relative;">
                            <img src="static/weui/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                            <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span>
                        </span>
                        <p class="weui-tabbar__label">Home</p>
                    </a> -->
                    <span class="weui-tabbar__item " @click="activeMu(0,'/Home')" :class="{ 'weui-bar__item_on': activeNum==0 }">
                        <span style="display: inline-block;position: relative;">
                            <img src="static/weui/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                            <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span>
                        </span>
                        <p class="weui-tabbar__label">Home</p>
                    </span>

                    <a href="javascript:;" class="weui-tabbar__item" @click="activeMu(1,'/BaiDuAi')" :class="{ 'weui-bar__item_on': activeNum==1 }">
                        <img src="static/weui/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                        <p class="weui-tabbar__label">百度AI</p>
                    </a>
                    <a href="javascript:;" class="weui-tabbar__item" @click="activeMu(2,'/Home')" :class="{ 'weui-bar__item_on': activeNum==2 }">
                        <span style="display: inline-block;position: relative;">
                            <img src="static/weui/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                            <span class="weui-badge weui-badge_dot" style="position: absolute;top: 0;right: -6px;"></span>
                        </span>
                        <p class="weui-tabbar__label">发现</p>
                    </a>
                    
                    <span class="weui-tabbar__item" @click="activeMu(3,'/AboutMe')" :class="{ 'weui-bar__item_on': activeNum==3 }">
                    <!-- <a href="javascript:;" class="weui-tabbar__item"> -->
                        <img src="static/weui/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                        <p class="weui-tabbar__label">我</p>
                    <!-- </a> -->
                    </span>
                </div>
            </div>
        </div>
    </div>
<!-- </div> -->

  <!-- </div> -->
</template>
<style type="text/css">
    
</style>
<script>
export default {
  name: 'Frame',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeNum: 0
    }
  },
  methods:{
    closeApp(){
        console.log("close APP");
    },
    activeMu(activeNum,menuPath){
        // console.log(activeNum);
        this.activeNum = activeNum;
        this.$router.push(menuPath)
    }
  }
}
</script>

