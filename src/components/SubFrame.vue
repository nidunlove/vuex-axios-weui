<template>

    <div class="">
        <!-- 头部导航 -->
        <div class="topHeader">
           
            <div class="weui-flex">
                <div @click="reHome()">
                    <div class="placeholder">
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
        <div class="" style="height: 100%;margin-top: 50px;">
            
                    <!-- 切换页 -->
                    <transition name="slide">
                        <router-view ></router-view>
                    </transition>
        </div>
             
         
    </div>

</template>
<style type="text/css">


</style>
<script>
export default {
  name: 'SubFrame',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    reHome(){
        // 字符串
        this.$router.push('/Home')

        // 对象
        // this.$router.push({ path: '/home/first' })

        // 命名的路由
        // this.$router.push({ name: 'home', params: { userId: wise }})
    }
  }
}
</script>

