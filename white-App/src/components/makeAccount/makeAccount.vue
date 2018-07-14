<template>
  <div>
       <m-header :title="'做账'" :back='true' ></m-header>
  <div class="make-account">
       <scroll  ref="scroll" class="scroll-main">
    <div>
        <div class="make">
            <div class='item active'>
                <i class="icon-car"></i>
                <span>进货</span>
            </div>
            <div class='item'>
                <i class="icon-money"></i>
                <span>总收入</span>
            </div>
            <div class='item'>
                <i class="icon-homepage"></i>
                <span>经营费用</span>
            </div>
            <div class='item'>
                <i class="icon-person-fill"></i>
                <span>个人费用</span>
            </div>
            <div class='item'>
                <i class="icon-house"></i>
                <span>库存盘点</span>
            </div>
            <div class='item'>
                <i class="icon-atistics"></i>
                <span>销售明细</span>
            </div>
             <div class='item'>
                <i class="icon-car"></i>
                <span>收付款及其他</span>
            </div>
            <div class="goAccount">完成，去查账</div>
        </div>
        <div class="make-account-textarea">
            <div class='hint'>
                <p>语句提示</p>
                <textarea name="" id="" cols="30" rows="10">
                    fjdskfjdks
                </textarea>
            </div>
            <div class='hint'>
                <p>识别结果</p>
                <textarea name="" id="" cols="30" rows="10">
                    fjdskfjdks
                </textarea>
            </div>
            <div class="operate">
                <span>确认</span>
                <span>修改</span>
                <span>删除</span>
            </div>
        </div>
        <div class="say-order">
            <i class="icon-microphonehuatong"></i>
            按住说话
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
     },
     created(){
         setTimeout(()=>{
             this.$refs.scroll.refresh()
         },20)
      },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .make-account
        position: absolute
        width: 100%
        top: 44px
        left 0
        right 0
        bottom 0
        background #ffffff
        z-index 100
  .scroll-main
        height: 100%
        overflow: hidden
  .make
    padding 20px
    position relative
    overflow hidden
    .item
      width 33%
      float left
      display flex
      flex-direction column
      text-align center
      border-radius 10px
      padding 10px
      color #444
      i 
       color $public-color
       font-size 37px
      span
       padding 5px 0
    .active
      background #b4e8e6
    .goAccount
      position absolute
      bottom 30px
      right 50px
      height 36px
      line-height 30px
      background $public-color
      padding 3px 10px
      color #ffffff
      border-radius 4px
      font-weight 300
  .make-account-textarea
    padding 20px
    font-weight 300
    .hint
      border 1px solid $public-color
      padding 6px 4px
      border-radius 8px
      p
        font-size 20px
         font-weight 300
      &:first-child
        margin-bottom 10px
      textarea
        height 50px
        width 100%
        border none
        outline none
        font-size:18px
        padding-left  50px
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
  .say-order
      background $public-color
      width 70vw
      margin-left 15vw
      text-align center
      height 45px
      line-height 45px
      color #fff
      border-radius 8px
    i 
     font-size 25px
</style>