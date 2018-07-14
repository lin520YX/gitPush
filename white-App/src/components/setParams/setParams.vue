<template>
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
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  export default {
      components:{
          Scroll
      }
     
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .setParams
        position: fixed
        width: 100%
        top: 44px
        bottom: 55px;
        padding 10px
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