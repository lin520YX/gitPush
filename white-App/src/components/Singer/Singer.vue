<template>
  <div id="singer">
    <div class="menu yellow">视频学习<span></span></div>
    <div class="menu blue">期初建账<span></span></div>
    <div class="menu green">登录做账<span></span></div>
    <div class="menu red">查账<span></span></div>
    <div class="menu orange">寻找后台协助<span></span></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  #singer
    height:calc(100vh - 94px)
    display:flex
    flex-direction:column
    align-items:center
    overflow:auto
    padding:30px 0
    user-select:none
    .menu
      position:relative
      height:55px
      background:#F2F2F2
      width:92vw
      border-radius:5px
      margin:20px auto
      display:flex
      justify-content:center
      align-items:center
      border-left-width: 12px
      border-left-style: solid
      span
        position: absolute
        right: 10px
        &:before
          content:''
          display:block
          height:4px
          width:16px
          background:#CCCDCD
          transform:rotate(45deg) translateY(-4px)
          border-radius:8px
        &:after
          content:''
          display:block
          height:4px
          width:16px
          background:#CCCDCD
          transform:rotate(-45deg) translateY(4px)
          border-radius:8px
      &.yellow
        border-color:#FF9933
      &.blue
        border-color:#29ABE2
      &.green
        border-color:#8CC63E
      &.red
        border-color:#C2282D
      &.orange
        border-color:#FF9833

</style>
