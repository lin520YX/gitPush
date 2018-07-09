<template>
   <div class="main">
        <slider>
            <div class="w-slider" v-for="item in recommends">
                <img :src='item.img' alt=""/>
            </div>    
        </slider>
        <div class="video">
            <img v-lazy="'placehold.it/375x175'" alt=""/>
        </div>
        <div class="s_btn">
            开始体验
        </div>
   </div>
</template>

<script type="text/ecmascript-6">
  import Slider from 'base/slider/slider'
  export default {
      data(){
          return {
            recommends: [
                {img:'http://placehold.it/375x175'},
                {img:'http://placehold.it/375x175'}
            ],
         }
      },
      components: {
      Slider
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">  
    @import "~common/stylus/variable" 
    .main
        position: fixed
        width: 100%
        top: 44px
        bottom: 0
    .w-slider
        width  :100%
        height :175px
        overflow: hidden
    .video
        margin:20px
    img
        display :block
        width:100%
        height :100%
    .s_btn
        margin 0 auto
        width: 115px
        height: 115px
        text-align center
        line-height 115px
        border-radius: 50%
        background $public-color
        color #fff
        font-weight 300
        font-size 18px
        touch-action: none
        &:active
            box-shadow 0px 0px 10px rgba(30,30,30,.7) 
</style>