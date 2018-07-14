<template>
    <div>
        <m-header :title="'寻求后台帮助'" :back='true'></m-header>
        <div class="askForHelp">
        <div class="help-hint">
                提示：请以匀速的语速，完整说出或写出你需要协助的内容
        </div>
        <scroll ref="scroll" class="scroll-main">
            <div>
                <div class="help-hint-zone">
                    <div class="help-hint-text">
                    <p>文字内容识别结果:</p>
                    <textarea name="" id="" cols="30" rows="10">
                        怎么修改账本内容
                    </textarea>
                    </div>
                    <div class='operate'>
                        <span>确认</span>
                        <span>修改</span>
                        <span>删除</span>
                    </div>
                </div>
                <div class="voice-input">
                    <div>
                        <i class='icon-microphonehuatong'></i>
                    <p>按住 说话</p>
                    </div>
                </div>
            </div>
        </scroll>    
    </div>
    </div>
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
  .askForHelp
        position: absolute
        width: 100%
        top: 44px
        bottom: 0
        left 0
        right 0
        z-index 100
        background #fff
  .scroll-main
        height: 100%
        overflow: hidden
        .help-hint-zone
            padding 20px 10px 0 10px
            .help-hint-text
                border 1px solid $public-color
                border-radius 8px
                padding 7px
            p
                font-size 18px
                letter-spacing 1px
            textarea
                font-size 18px
                letter-spacing 1px
                height 150px
                width 100%
                padding-left 50px
                border none 
                outline  none
            .operate
                height 40px
                display flex
                align-items center
                justify-content flex-end
                span 
                    width 50px
                    margin-left 10px
                    text-align center
                    background red
                    padding 5px 0
                    border-radius 4px
                    color #ffffff
                    font-weight 300
        .voice-input
            position fixed
            bottom -200px
            left 50%
            margin-left -15vw
            width 30vw
            height 30vw
            border-radius 50%
            background $public-color
            display flex
            justify-content center
            align-items center
            text-align center
            color #ffffff
            box-shadow 0px 0px 10px rgba(30,30,30,.7)
            i 
              font-size 40px
            p
              padding 10px 0
  .help-hint
      height 60px
      padding 10px
      line-height 20px
      background #fcce9b

</style>