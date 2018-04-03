# vuex-axios-weui

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# vuex-axios-weui
	我的vuex-axios-weui 练习

## 安装 vue、axios、weui

	参考：我之前的vue练习 myVueTest

1. 进入项目文件夹

2. $ vue init webpack vuex-axios-weui

	卡顿，重新开始 除了vue-router全部选n，应该是最后一项选了默认

3. 修改端口，修改dist打包路径

4. 运行
	cnpm run dev （开发环境）
	cnpm run build （打包到线上环境）

5. 加入axios
	cnpm install axios
	cnpm install --save axios

6. 加入vuex
	npm install vuex --save-dev

7. 加入 weui
	npm install --save weui
	参考：http://demo.weui.org.cn/readme.html

8. 7无效，cdn引入，将weui的dist/style/images拷贝到 static/weui下

9. 注意在main.js中引入各个模块及静态文件（css的引入

10. 用vue优化绑定原weui的JQ的DOM操作

## 上传到git

1. 报 Initial commit

