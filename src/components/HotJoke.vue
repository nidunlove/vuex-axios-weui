<template>
  <div>
  	
	<!-- 内容 -->


    <article class="weui-article">
            <!-- <h1>热门段子</h1> -->
            <!-- <section> -->
                <!-- <h2 class="title">章标题</h2> -->
                <section  v-for="item in data">
                    <h3>{{item.theme_name}}</h3>
                    <p>
                        {{item.text}}
                    </p>
                    <p>
                        <img :src="item.image0" alt="">
                        <img v-if="item.image0!=item.image1" :src="item.image1" alt="">
                        <img v-if="item.image1!=item.image2" :src="item.image2" alt="">
                        <img v-if="item.image2!=item.image3" :src="item.image3" alt="">
                    </p>
                    <div class="weui-loadmore weui-loadmore_line">
                        <span class="weui-loadmore__tips">分割线</span>
                    </div>
                </section>

                <div class="weui-loadmore">
                    <i class="weui-loading"></i>
                    <span class="weui-loadmore__tips">正在加载</span>
                </div>
                
            <!-- </section> -->
        </article>
	
    
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      headerTitle: '热门段子',
      data:[{"theme_name":"正在加载..."}],

    }
  },
  methods:{
    init(){
      console.log("init");
      console.log(this);
      this.$parent.headerTitle = this.headerTitle;
    },
    getData(){
        this.axios.get("https://www.apiopen.top/satinApi?type=1&page=1")
        .then(response => {
            console.log(response);
            console.log(this);
            this.data = response.data.data;

        })
    }

  },
  mounted() {
    this.init();
    // console.log("mounted");
    this.getData();
  }
}
</script>

