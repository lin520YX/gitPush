<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/recommend">
    <i class="icon-home"></i>
    <span class="tab-link">首页</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/singer">
       <i class="icon-redpacket"></i>
    
      <span class="tab-link">小白会做账</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
    <i class="icon-bubblechat"></i>
      <span class="tab-link">小白社区
      </span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search">
        <i class="icon-shareperson"></i>
      <span class="tab-link">我的</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .tab
    position:fixed
    bottom :0
    display: flex
    width :100%
    height: 50px
    line-height: 50px
    background:#f1f2f3
    font-size: $font-size-medium
    .tab-item
      flex: 1
      text-align center
      &.router-link-active
        .tab-link,i
          color: $icon-active
          border-bottom: 2px solid $color-theme
      i,.tab-link
       display block
      i
        font-size 30px
        height 30px;
        line-height 30px;
     .tab-link
         font-size 2px;
         height 20px;
         line-height 20px;
    
</style>