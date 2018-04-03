<template>
  <div>
  	<!-- 搜索栏 -->
  	<div class="weui-search-bar" id="searchBar">
            <form class="weui-search-bar__form">
                <div class="weui-search-bar__box">
                    <i class="weui-icon-search"></i>
                    <input type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required/>
                    <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
                </div>
                <label class="weui-search-bar__label" id="searchText">
                    <i class="weui-icon-search"></i>
                    <span>搜索</span>
                </label>
            </form>
            <a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
        </div>
	<!-- 网格 -->
	<div class="weui-grids">
		<router-link to="/Weather" class="weui-grid">
        <!-- <a href="javascript:;" class="weui-grid"> -->
            <div class="weui-grid__icon">
                <img src="static/weui/images/icon_tabbar.png" alt="">
            </div>
            <p class="weui-grid__label">天气</p>
        <!-- </a> -->
    	</router-link>
        <a href="javascript:;" class="weui-grid">
            <div class="weui-grid__icon">
                <img src="static/weui/images/icon_tabbar.png" alt="">
            </div>
            <p class="weui-grid__label">Grid</p>
        </a>
        <a href="javascript:;" class="weui-grid">
            <div class="weui-grid__icon">
                <img src="static/weui/images/icon_tabbar.png" alt="">
            </div>
            <p class="weui-grid__label">Grid</p>
        </a>
        <a href="javascript:;" class="weui-grid">
            <div class="weui-grid__icon">
                <img src="static/weui/images/icon_tabbar.png" alt="">
            </div>
            <p class="weui-grid__label">Grid</p>
        </a>
        <a href="javascript:;" class="weui-grid">
            <div class="weui-grid__icon">
                <img src="static/weui/images/icon_tabbar.png" alt="">
            </div>
            <p class="weui-grid__label">Grid</p>
        </a>
        <a href="javascript:;" class="weui-grid">
            <div class="weui-grid__icon">
                <img src="static/weui/images/icon_tabbar.png" alt="">
            </div>
            <p class="weui-grid__label">Grid</p>
        </a>
        <a href="javascript:;" class="weui-grid">
            <div class="weui-grid__icon">
                <img src="static/weui/images/icon_tabbar.png" alt="">
            </div>
            <p class="weui-grid__label">Grid</p>
        </a>
        <a href="javascript:;" class="weui-grid">
            <div class="weui-grid__icon">
                <img src="static/weui/images/icon_tabbar.png" alt="">
            </div>
            <p class="weui-grid__label">Grid</p>
        </a>
        <a href="javascript:;" class="weui-grid">
            <div class="weui-grid__icon">
                <img src="static/weui/images/icon_tabbar.png" alt="">
            </div>
            <p class="weui-grid__label">Grid</p>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

