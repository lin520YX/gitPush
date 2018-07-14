<template>
    <div class="login">
            <div class="mobileLogin">
        使用手机号登录
            </div>
        <div class="phone">
            <div>
                <div>+86</div>
                <span>-</span>
            </div>
            <input type="text" placeholder="请输入手机号码">
        </div>
        <div class='password'>
            <span>密码</span>
            <input type="password" placeholder="请输入密码">
        </div>
        <button @click='goMain'>登录</button>
        <button>新手入门登录</button>
        <div class="memo">
            <span>注册</span>
            <span>忘记密码?</span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
      methods:{
          goMain(){
              this.$router.push(
                  '/main'
              )
          }
      }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .login
    height calc(100vh-94px)
    background  #fff
    padding 20px
    position absolute
    top 0
    left 0
    bottom 0
    right 0
    z-index 100
    .mobileLogin 
        height 40px
        display flex
        align-items center
    .phone
        display flex
        height 40px;
        align-items center
        border-bottom 1px solid #000000
        >div
            width 15vw
            display flex
            >div
                width 10vw
    .password
        display flex
        height 40px;
        align-items center
        border-bottom 1px solid #000000
        margin-bottom 25px
        span
            width 15vw
    button 
        height 40px
        width 100%;
        text-align  center
        justify-content center
        display flex
        background $public-color
        border none 
        margin 8px 0
        font-size 18px
        color #ffffff
        border-radius 8px
        font-weight 300
    .memo
        height 40px
        display flex
        align-items center
        justify-content space-between
        color #000000
</style>