
<template>
<div>
    <div class="weui-panel weui-panel_access">
            <div class="weui-panel__hd"></div>
            <div class="weui-panel__bd">
                <div class="weui-media-box weui-media-box_text">
                    <h4 class="weui-media-box__title">语言处理</h4>

                    <div class="weui-cell weui-cell_select weui-cell_select-after">
                        <div class="weui-cell__hd">
                            <label for="" class="weui-label">选择识别类型</label>
                        </div>
                        <div class="weui-cell__bd">
                            <select class="weui-select" name="select2" v-model="languageType"  @change="selectLanguageType(languageType)">
                                <option value="1" selected>词法分析</option>
                                <option value="2">评论观点抽取</option>
                                <option value="3">情感倾向分析</option>
                                <option value="4">文章标签</option>
                            </select>
                            <!-- {{languageType}} -->
                        </div>
                    </div>
                    <div class="weui-cells" v-if="2==languageType||4==languageType">
                            <div class="weui-cell">
                                <div class="weui-cell__bd">
                                    <input class="weui-input" type="text" placeholder="" v-model="languageText2" />
                                </div>
                            </div>
                    </div>


                    <div class="weui-cells weui-cells_form">
                        <div class="weui-cell">
                            <div class="weui-cell__bd">
                                <textarea class="weui-textarea" placeholder="请输入文本" rows="3" v-model="languageText"></textarea>
                                <div class="weui-textarea-counter"><span>{{languageText.length}}</span>/500</div>
                            </div>
                        </div>
                    </div>
                    <div class="weui-btn-area">
                        <a class="weui-btn weui-btn_primary" href="javascript:" id="showTooltips" @click="getLanguageData()">确定</a>
                    </div>
                    <p class="weui-media-box__desc" style="-webkit-line-clamp: 10;">{{languageResult}}</p>

                    <!-- <p class="weui-media-box__desc" style="-webkit-line-clamp: 10;">
                        <div v-for="(value, key) in languageResult.items">{{ key }}: {{ value }}</div>

                    </p> -->
                </div>

                <div class="weui-media-box weui-media-box_text">
                    <h4 class="weui-media-box__title">标题二</h4>
                    <p class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                </div>
            </div>
            <div class="weui-panel__ft">
                <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
                    <div class="weui-cell__bd">查看更多</div>
                    <span class="weui-cell__ft"></span>
                </a>    
            </div>
        </div>

    <div class="page">
        <div class="page__hd">
            <h1 class="page__title">文字识别</h1>
            <!-- <p class="page__desc">wen</p> -->
        </div>
        <div class="page__bd">
            <div class="weui-cells__title">单选列表项</div>
            <div class="weui-cells weui-cells_radio">
                <label class="weui-cell weui-check__label" for="x11">
                    <div class="weui-cell__bd">
                        <p>cell standard</p>
                    </div>
                    <div class="weui-cell__ft">
                        <input type="radio" class="weui-check" name="radio1" id="x11"/>
                        <span class="weui-icon-checked"></span>
                    </div>
                </label>
                <label class="weui-cell weui-check__label" for="x12">

                    <div class="weui-cell__bd">
                        <p>cell standard</p>
                    </div>
                    <div class="weui-cell__ft">
                        <input type="radio" name="radio1" class="weui-check" id="x12" checked="checked"/>
                        <span class="weui-icon-checked"></span>
                    </div>
                </label>
                <a href="javascript:void(0);" class="weui-cell weui-cell_link">
                    <div class="weui-cell__bd">添加更多</div>
                </a>
            </div>
            <div class="weui-cells__title">复选列表项</div>
            <div class="weui-cells weui-cells_checkbox">
                <label class="weui-cell weui-check__label" for="s11">
                    <div class="weui-cell__hd">
                        <input type="checkbox" class="weui-check" name="checkbox1" id="s11" checked="checked"/>
                        <i class="weui-icon-checked"></i>
                    </div>
                    <div class="weui-cell__bd">
                        <p>standard is dealt for u.</p>
                    </div>
                </label>
                <label class="weui-cell weui-check__label" for="s12">
                    <div class="weui-cell__hd">
                        <input type="checkbox" name="checkbox1" class="weui-check" id="s12"/>
                        <i class="weui-icon-checked"></i>
                    </div>
                    <div class="weui-cell__bd">
                        <p>standard is dealicient for u.</p>
                    </div>
                </label>
                <a href="javascript:void(0);" class="weui-cell weui-cell_link">
                    <div class="weui-cell__bd">添加更多</div>
                </a>
            </div>

            <div class="weui-cells__title">表单</div>
            <div class="weui-cells weui-cells_form">
                <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label">qq</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入qq号"/>
                    </div>
                </div>
                <div class="weui-cell weui-cell_vcode">
                    <div class="weui-cell__hd">
                        <label class="weui-label">手机号</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="tel" placeholder="请输入手机号"/>
                    </div>
                    <div class="weui-cell__ft">
                        <button class="weui-vcode-btn">获取验证码</button>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd"><label for="" class="weui-label">日期</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="date" value=""/>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd"><label for="" class="weui-label">时间</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="datetime-local" value="" placeholder=""/>
                    </div>
                </div>
                <div class="weui-cell weui-cell_vcode">
                    <div class="weui-cell__hd"><label class="weui-label">验证码</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="number" placeholder="请输入验证码"/>
                    </div>
                    <div class="weui-cell__ft">
                        <img class="weui-vcode-img" src="/static/weui/images/vcode.jpg" />
                    </div>
                </div>
            </div>
            <div class="weui-cells__tips">底部说明文字底部说明文字</div>

            <div class="weui-cells__title">表单报错</div>
            <div class="weui-cells weui-cells_form">
                <div class="weui-cell weui-cell_warn">
                    <div class="weui-cell__hd"><label for="" class="weui-label">卡号</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="number" pattern="[0-9]*" value="weui input error" placeholder="请输入卡号"/>
                    </div>
                    <div class="weui-cell__ft">
                        <i class="weui-icon-warn"></i>
                    </div>
                </div>
            </div>


            <div class="weui-cells__title">开关</div>
            <div class="weui-cells weui-cells_form">
                <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd">标题文字</div>
                    <div class="weui-cell__ft">
                        <input class="weui-switch" type="checkbox"/>
                    </div>
                </div>
                <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd">兼容IE Edge的版本</div>
                    <div class="weui-cell__ft">
                        <label for="switchCP" class="weui-switch-cp">
                            <input id="switchCP" class="weui-switch-cp__input" type="checkbox" checked="checked"/>
                            <div class="weui-switch-cp__box"></div>
                        </label>
                    </div>
                </div>
            </div>

            <div class="weui-cells__title">文本框</div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请输入文本"/>
                    </div>
                </div>
            </div>

            <div class="weui-cells__title">文本域</div>
            <div class="weui-cells weui-cells_form">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <textarea class="weui-textarea" placeholder="请输入文本" rows="3"></textarea>
                        <div class="weui-textarea-counter"><span>0</span>/200</div>
                    </div>
                </div>
            </div>

            <div class="weui-cells__title">选择</div>
            <div class="weui-cells">

                <div class="weui-cell weui-cell_select weui-cell_select-before">
                    <div class="weui-cell__hd">
                        <select class="weui-select" name="select2">
                            <option value="1">+86</option>
                            <option value="2">+80</option>
                            <option value="3">+84</option>
                            <option value="4">+87</option>
                        </select>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入号码"/>
                    </div>
                </div>
            </div>
            <div class="weui-cells__title">选择</div>
            <div class="weui-cells">
                <div class="weui-cell weui-cell_select">
                    <div class="weui-cell__bd">
                        <select class="weui-select" name="select1">
                            <option selected="" value="1">微信号</option>
                            <option value="2">QQ号</option>
                            <option value="3">Email</option>
                        </select>
                    </div>
                </div>
                <div class="weui-cell weui-cell_select weui-cell_select-after">
                    <div class="weui-cell__hd">
                        <label for="" class="weui-label">国家/地区</label>
                    </div>
                    <div class="weui-cell__bd">
                        <select class="weui-select" name="select2">
                            <option value="1">中国</option>
                            <option value="2">美国</option>
                            <option value="3">英国</option>
                        </select>
                    </div>
                </div>
            </div>

            <label for="weuiAgree" class="weui-agree">
                <input id="weuiAgree" type="checkbox" class="weui-agree__checkbox"/>
                <span class="weui-agree__text">
                    阅读并同意<a href="javascript:void(0);">《相关条款》</a>
                </span>
            </label>

            <div class="weui-btn-area">
                <a class="weui-btn weui-btn_primary" href="javascript:" id="showTooltips">确定</a>
            </div>
        </div>
        <div class="page__ft">
            <a href="javascript:home()"><img src="/static/weui/images/icon_footer_link.png" /></a>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'BaiDuAi',
  data () {
    return {
      languageType: "1",
      languageText: "谢尔盖·科罗廖夫（1907年1月12日－1966年1月14日），原苏联宇航事业的伟大设计师与组织者 ，第一枚射程超过8000公里的洲际火箭（弹道导弹）的设计者，第一颗人造地球卫星的运载火箭的设计者、第一艘载人航天飞船的总设计师。",
      languageText2: "",
      languageResult:{},

 
    }
  },
  methods:{
    selectLanguageType(type){
        if(1==type){//词法分析
            this.languageText="谢尔盖·科罗廖夫（1907年1月12日－1966年1月14日），原苏联宇航事业的伟大设计师与组织者 ，第一枚射程超过8000公里的洲际火箭（弹道导弹）的设计者，第一颗人造地球卫星的运载火箭的设计者、第一艘载人航天飞船的总设计师。";
            this.languageText2="";
        } else if(2==type){//评论观点抽取
            this.languageText2="旅游";
            this.languageText="值得去的地方，石头很奇特，旺季门票有点贵，人爆多！";
            
        }else if(3==type){//情感倾向分析
            this.languageText="院线看电影这么多年以来，这是我第一次看电影睡着了。简直是史上最大烂片！没有之一！侮辱智商！大家小心警惕！千万不要上当！再也不要看了！";
            this.languageText2="";
        }else if(4==type){//文字标签
            this.languageText="百度Apollo无人车亮相央视春晚，在港珠澳大桥开跑";
            this.languageText2="一年一度的央视春晚，是世界华人的盛会，也是中国向全世界展示国家实力和科技进展的“风向标”。当晚，由百度、比亚迪、云洲智能、零度智控和高巨创新等企业组成的“海陆空”高科技阵容代表中国最高科技实力，在世界瞩目的“超级工程”港珠澳大桥惊艳亮相。中国自动驾驶“国家队”百度Apollo开放平台率领百余辆车队跑上港珠澳大桥，并在无人驾驶模式下完成“8”字交叉跑的高难度动作。此外，由零度智控和高巨创新共同组建的高巨零度无人机编队用300架无人机组成了一只立体白海豚跃过港珠澳大桥上空，向全国观众呈现了国内首个大型3D立体无人机编队秀。海上，云洲智能近百艘无人艇组成的“舰队”排列成箭头队形穿过大桥。这一刻，中国的科技实力和发展速度再次赢得世界目光。此次大规模的无人车新春“阅兵”证实着无人驾驶正加速走进现实。去年夏天，百度创始人、董事长兼CEO李彦宏乘坐无人车上北京五环的消息引爆全网，也让普通民众看到自动驾驶正快速从实验室走向民众生活。百度自2013年起就专注研发自动驾驶技术，并于2017年7月正式发布了Apollo自动驾驶开放平台，将积累多年的自动驾驶技术、数据和资源面向全行业开放，通过搭建持续创新的开放生态，降低无人驾驶研发的门槛，加速自动驾驶技术的普及。正式发布半年以来，Apollo开放平台进展飞速，创下自动驾驶界的“中国速度”。去年年末，百度与雄安新区达成合作，将雄安打造为全球领先的智能出行城市样本。2018年伊始，搭载Apollo2.0的百度无人车在全球科技重地——硅谷开跑，赢得众多外媒对Apollo的“中国速度”的认可。自动驾驶、人工智能已经上升为国家战略。去年11月，科技部公布首批国家新一代人工智能开放创新平台名单，将依托百度建设自动驾驶国家新一代人工智能开放创新平台，Apollo被钦点为自动驾驶“国家队”。为此，Apollo开放平台通过构建开放共赢的生态，正在积极与众多自主品牌展开全方位合作，，引领中国汽车业凭借新兴科技实现“弯道超车”。据悉，百度将与江淮、北汽在2019年，与奇瑞在2020年推出自动驾驶量产车型。今年，Apollo与金龙客车自主研发的“百分百国产”无人驾驶小巴“阿波龙”就将面世，并开展示范运营。目前，Apollo开放全球“朋友圈”规模突破90家，未来还将有更多自动驾驶车型量产落地，助力汽车工业创造“中国速度”。";
        }
        this.getLanguageData();
    },
    getLanguageData(){
        let _this = this;
        // this.$store.dispatch('showloader');
        // 词法分析 1
        //评论观点抽取 2
        //情感倾向分析 3
        //文字标签 4
        this.axios.post(AIallUrl.languageUrl,{
          type: parseInt(_this.languageType),                                                                                                           
          jsonStr1:_this.languageText,
          jsonStr2:_this.languageText2
        })
        .then(response => {
            console.log(response);
            // _this.$store.dispatch('hideloader');
            console.log(this);
            this.languageResult = response.data;
            // this.myloading.hide();
            // this.isShowLoading = false;
            // Loading.hideLoading();
        }).catch(function (error) {
          _this.$store.dispatch('hideloader');
          console.log(error);
        });
    },


   init(){
    this.getLanguageData();
   } 
  },
  created(){
   
  },
  mounted() {
    console.log("mounted");
    this.init();
  }
}
</script>
<style lang="less" scoped>
    
</style>