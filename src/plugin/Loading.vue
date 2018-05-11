<template>  
	<div class="loadingCon" v-show="$store.state.loader.loadStatue"> 
	
			<div class="load-container">
				<div class="loader"></div>
				<div class="loader_msg" v-text="$store.state.loader.loadMsg"></div>
			</div>
      
    </div>  
</template> 
<script>
export default {
  name: 'Loading',
  data () {
    return {

    }
  },
  methods:{
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .loadingCon {
    width: 1rem;
    height: 1rem;
    position: fixed;
    top: 40%;
    left: 50%; // background-color: rgba(255,255,255,0.1);
    z-index: 90;
    margin-left: -0.5rem;
    margin-top: -0.5rem;
    .load-container {
      width: 100%;
      height: 100%;
      margin: 0 auto; 

      .loader,
      .loader:after {
        border-radius: 1rem;
        width: 3.6em;
        height: 3.6em;
      }
      .loader {
        // margin: 30px auto;
        // font-size: 10px;
        margin: 0 auto;
        position: relative;
        text-indent: -9999em; // border-top: 1.1em solid rgba(255, 255, 255, 0.2);
        // border-right: 1.1em solid rgba(255, 255, 255, 0.2);
        // border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
        border-top: 0.3em solid rgba(6, 6, 90, 0.2);
        border-right: 0.3em solid rgba(6, 6, 90, 0.2);
        border-bottom: 0.3em solid rgba(6, 6, 90, 0.2); // rgba(6, 6, 90, 0.9)
        border-left: 0.3em solid rgba(6, 6, 90, 0.5);
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-animation: load8 1.1s infinite linear;
        animation: load8 1.1s infinite linear;
      }
      .loader_msg {
      	text-align: center;
        color: rgba(6, 6, 90, 0.8);
        font-size: .14rem;
      }
    }
  }

  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

</style>