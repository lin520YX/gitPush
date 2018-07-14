<template>
  <div class="m-header">
    <i @click='gotoback' v-if='back'><</i>
      <slot>
          {{title}}
      </slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      props:{
          title:{
            type:String,
            default:'小白会做账'
          },
          back:{
             type:Boolean,
            default:false
          }
      },
      methods:{
        gotoback(){
          this.$router.go(-1)
        }
      }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .m-header
    height: 44px
    line-height :44px
    color:#ff
    font-weight:300
    text-align: center
    background : $public-color
    font-size: 18px
    overflow:hidden
    position relative
    i 
      position absolute
      left 20px
</style>