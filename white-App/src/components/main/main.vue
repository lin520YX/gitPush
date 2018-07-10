<template>
   <div class="main">
        <scroll ref="scroll" class="scroll-main">
         <div>
                <slider>
                    <div class="w-slider" v-for="item in recommends">
                        <img :src='item.img' @load="loadImage" alt=""/>
                    </div>    
                </slider>
            <div class="main-list">
                    <!-- 功能介绍 -->
                <span>功能介绍</span>
                <div class="video">
                    <div class="c-slider">
                        <img class="img" v-lazy="'placehold.it/375x175'" alt=""/>
                        <img class="img"v-lazy="'placehold.it/375x175'" alt=""/>
                        <img class="img"v-lazy="'placehold.it/375x175'" alt=""/>
                        <img class="img"v-lazy="'placehold.it/375x175'" alt=""/>
                        
                    </div>
                </div>
                 <span>功能介绍</span>
                <div class="video">
                    <div class="c-slider">
                        <img class="img" v-lazy="'placehold.it/375x175'" alt=""/>
                        <img class="img"v-lazy="'placehold.it/375x175'" alt=""/>
                        <img class="img"v-lazy="'placehold.it/375x175'" alt=""/>
                        <img class="img"v-lazy="'placehold.it/375x175'" alt=""/>
                        
                    </div>
                </div>
            </div>
                <div class="s_btn">
                    开始体验
                </div>
         </div>
        </scroll>
   </div>
</template>

<script type="text/ecmascript-6">
  import Slider from 'base/slider/slider'
  import Scroll from 'base/scroll/scroll'
  export default {
      data(){
          return {
            recommends: [
                {img:'http://placehold.it/375x175'},
                {img:'http://placehold.it/375x175'}
            ],
         }
      },
      created(){
         setTimeout(()=>{
             this.$refs.scroll.refresh()
         },20)
      },
      methods:{
        loadImage() {
                if (!this.checkloaded) {
                this.checkloaded = true
            }
        },
        getData(){
            // 获取轮播图数据
        }
      },
      components: {
      Slider,
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">  
    @import "~common/stylus/variable" 
    .main
        position: fixed
        width: 100%
        top: 44px
        bottom: 55px;
    .scroll-main
        height: 100%
        overflow: hidden
    .w-slider
        width  :100%
        height :175px
        overflow: hidden
    .main-list
         margin:20px
        span 
            display flex
            height 40px
            align-items center
            color $public-color
            font-size 18px
            font-weight 300
    .video
       width calc(100vw - 40px)
       height calc(15vh)
       overflow-x scroll  
       overflow-y hidden
      .c-slider
       width 1000px
       height calc(15vh)
      .img
       width 100px
       height 15vh
       margin-right 5vw
       display block
       float left  
    .s_btn
        margin 0 auto
        width: 75vw
        height: 50px
        text-align center
        line-height 50px
        border-radius 6px
        background $public-color
        color #fff
        font-weight 300
        font-size 18px
        touch-action: none
        transition: all .15s ease-in-out
        box-shadow 0px 0px 6px rgba(200,200,200,.7)
        &:active
            box-shadow 0px 0px 10px rgba(30,30,30,.7)
</style>