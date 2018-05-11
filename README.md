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

1. 直接提交报 Initial commit

	参考：https://www.cnblogs.com/eedc/p/6168430.html

2. git init ... 登录github，新建仓库，（网页登录建完仓库也有提示步骤）

## 加入weixin-js-sdk （2018.04.04 - 2018.04.08）

	参考：
		http://qydev.weixin.qq.com/wiki/index.php?title=%E9%A6%96%E9%A1%B5
		https://www.jianshu.com/p/a1a31f9da272
		http://www.oicqzone.com/pc/2017110823993.html

	1. 建立weChat文件及文件夹，引入vuex自带的wechat模块（报错

	2. npm install weixin-js-sdk

	3. import {WechatPlugin} from 'vuex'(应该没引入插件,有问题)
		修改为 : import wx from 'weixin-js-sdk'
				参考：https://blog.csdn.net/cococolala/article/details/70767968

	4. ip不能访问，只能localhost访问，修改 config/index.js的host,改为0.0.0.0

	5. 微信获取token，报跨域。config/index.js 加 proxyTable。
		参考：
			https://blog.csdn.net/z852064121/article/details/75460408
			https://segmentfault.com/q/1010000008919764?sort=created

	6. 微信需要服务端，用node

	7. 参考：
		https://blog.xinshangshangxin.com/2015/04/22/%E4%BD%BF%E7%94%A8nodejs-%E8%B8%A9%E5%9D%91%E5%BE%AE%E4%BF%A1js-sdk%E8%AE%B0%E5%BD%95/
		https://gitee.com/xinshangshangxin/node_JS-SDK_signature/tree/master/

	8. 下载运行 node_JS-SDK_signature，注意端口跨域访问,本包没有node_JS-SDK_signature ，请到 https://gitee.com/xinshangshangxin/node_JS-SDK_signature/tree/master/ 下载
		node index.js

	9. 好吧，域名没注册，还是看不了，不过微信接口是联通了。

	10. 用企业微信接口获得token，不是微信接口

	11. 下载微信官方调试器 微信web开发者工具 (chrome 开发者工具)

	12. 设置代理，我下载的natapp_windows_amd64_2_3_8
		参考： https://www.zhihu.com/question/22995111

	13. invalid host header 
		参考：https://blog.csdn.net/salmonellavaccine/article/details/75332654
				https://blog.csdn.net/bodhiye/article/details/78523333
		build/webpack.dev.conf.js  
		webpack-dev-server 配置：
		devServer: {
		      disableHostCheck: true,
		    }

	14. 一直报错，Vue.prototype.wxShare 原来里面的 wxShare() 写错了,组件直接取不到 this.wxShare

	15. 依旧报错，估计是 weixin-js-sdk 引用有问题，直接放 .vue 里面调用，成功。

	16. 报 [JSSDK Info] 注册  onMenuShareAppMessage  ,应该是 微信没认证的原因。改成 getNetworkType，
		微信debug返回： 
			[JSSDK Info] getNetworkType  
			input  {};  
			output  {"errMsg":"getNetworkType:ok","subtype":"wifi"}

	17. 部分 调用 报 config:invalid url domain，需要微信增加js安全接口域名
		直接放在根目录，微信验证不到，放在static目录里面(因为，构建的vue-cli项目config/index.js里面做了限制)
		域名经常变化的话，用花生壳之类的，貌似收费。。试试其他的。。。
		依旧无效。试试其他可用的 api，

	18. 修改： config/index.js 里面的 assetsSubDirectory:'' （vue-cli 访问不到直接域名下文件，能访问static下面的）
		将微信验证文件 MP_verify_MsYBaF1CGSUGfgWi.txt 从static文件夹下剪切到根目录(index.html同级)
		修改：微信安全接口域名为 xxxx.xx.xx ，（xxxx.xx.xx/static能验证通过但是还是报 config:invalid url domain，因为域名路径不同）
		（微信一月能修改三次，最后一次成功找到原因了，哎...谢天谢地，一直以为只要验证通过就能访问，原来还需要根域名）
		最终用的 natapp 收费的 9元的域名转发。

	19. 验证通过后，微信接口不报错，可将 assetsSubDirectory:'' 改回 assetsSubDirectory:'static' 否则static下文件访问有问题

	20. 将微信js-sdk整合到vue中（原来是直接在.vue文件中调用wx的）

	21. 封装weixin-js-sdk 插件
		参考：https://cn.vuejs.org/v2/guide/plugins.html
		独立开来模块 WeXinTest.vue

	附： 运行需要 单独的node_JS-SDK_signature运行后端，本案例中未上传该包。微信注册和相关设置及域名。参考上面描述。

## 加入 sass、less
	参考： https://segmentfault.com/a/1190000008486436
		http://www.jb51.net/article/136315.htm

	npm install node-sass --save-dev
	npm install sass-loader --save-dev

	npm install less --save-dev
	npm install less-loader --save-dev

## 基于vue的loading 插件编写 2018.04.08 - 2018.04.09
	参考：https://blog.csdn.net/sjn0503/article/details/75208217
	为在axios能调用弹窗，也赋值给了window/
	axios再次封装
	ES6 Promise 异步编程学习
	参考：https://segmentfault.com/a/1190000012332982
		https://blog.csdn.net/quanquanxiu/article/details/76718468

## weui的测试
	1. 直接用weui，报weui的undefined，引入weui
		参考：https://www.npmjs.com/package/vue-weui
		npm install --save weui
		npm install vue-weui --save
		(貌似不会更新了，还是自己调用把)
	2. 
		参考：https://segmentfault.com/q/1010000009078238

		npm install --save weui.js
		在需要用的地方(.vue 文件
		import weui from 'weui.js'

		dialog,弹窗按钮绑定。
		参考： https://blog.csdn.net/hayre/article/details/60572435
		无效(可能我写法有问题，以后再试)，
		直接方法赋值，成功。

## store的模块化 2018.04.18
	1. 基于store 的loading插件
	2. 可在axios中调用store方法，不同于原生调用
	参考：
		https://blog.csdn.net/sinat_35515778/article/details/72458195
		https://segmentfault.com/a/1190000009101751
		https://vuex.vuejs.org/zh-cn/actions.html

## 百度AI开放平台,练习
	参考：
		https://ai.baidu.com/tech/imagerecognition/fine_grained
		https://ai.baidu.com/docs#/ImageClassify-Node-SDK/top
	1. 后台选择 node开发 sdk
		http://ai.baidu.com/sdk
	2. express 练习。集成 百度AI平台
	3. 后台服务器 express 
		https://github.com/nidunlove/BaiDu_AI_Express_Service





