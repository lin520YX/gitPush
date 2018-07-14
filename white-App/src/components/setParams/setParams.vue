<template>

   <transition name='fade' >
    <div>
               <m-header :title="'小白会做账'" :back='true' ></m-header>
        <div class="setParams">
       <scroll ref="scroll" class="scroll-main">
           <div>
                <div class="video">
                    videozone
                </div> 
                <div class="select">
                    <p>1.销售商铺和劳务是否叫增值税收</p>
                    <p>否/是</p>
                </div>
                <div class="select">
                    <p>1.销售商铺和劳务是否叫增值税收</p>
                    <p>否/是</p>
                </div>
                <div class="select">
                    <p>1.销售商铺和劳务是否叫增值税收</p>
                    <p>否/是</p>
                </div>
                <div class="select">
                    <p>1.销售商铺和劳务是否叫增值税收</p>
                    <p>否/是</p>
                </div>
                <div class="select">
                    <p>1.销售商铺和劳务是否叫增值税收</p>
                    <p>否/是</p>
                </div>
                <div class="select">
                    <p>1.销售商铺和劳务是否叫增值税收</p>
                    <p>否/是</p>
                </div>
                <div class="select">
                    <p>1.销售商铺和劳务是否叫增值税收</p>
                    <p>否/是</p>
                </div>
                <div class="select">
                    <p>1.销售商铺和劳务是否叫增值税收</p>
                    <p>否/是</p>
                </div>
                <div class="select">
                    <p>1.销售商铺和劳务是否叫增值税收</p>
                    <p>否/是</p>
                </div>
                <div class="select">
                    <p>1.销售商铺和劳务是否叫增值税收</p>
                    <p>否/是</p>
                </div>
                <div class="select">
                    <p>1.销售商铺和劳务是否叫增值税收</p>
                    <p>否/是</p>
                </div>
                <div class="select">
                    <p>1.销售商铺和劳务是否叫增值税收</p>
                    <p>否/是</p>
                </div>
                <div class="select">
                    <p>1.销售商铺和劳务是否叫增值税收</p>
                    <p>否/是</p>
                </div>
                
           </div>

       </scroll>
    </div>
    </div>
   </transition>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import MHeader from 'components/m-header/m-header'
  export default {
      components:{
          Scroll,
          MHeader
      }
     
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .fade-enter-active
      transition: all 0.3s
  .fade-enter
      transform: translate3d(100%, 0, 0)
  .setParams
        position: absolute
        width: 100%
        top:44px
        bottom 0
        left:0
        right 0
        z-index 100
        background #fff
        .video
            height 180px
            line-height 180px
            text-align center
            width 100%;
            background #eee
  .scroll-main
        height: 100%
        overflow: hidden
        .select
            padding 10px 0
            p
              padding 3px
              font-size 20px
              font-weight 350

</style>