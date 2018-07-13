<template>
    <scroll ref="scroll" :id="listType" class="scroll-main">
      <div>
        <div v-for="(item, i) in data" class="menu" :style="{ borderColor: item.color }">
          <router-link :to="item.link">{{item.name}}</router-link>
          <span></span>
        </div>
      </div>
    </scroll>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  export default {
    created(){
       setTimeout(()=>{
           this.$refs.scroll.refresh()
       },20)
    },
    props: {
      listType: {
        type: String,
        default: 'singer'
      },
      data: {
        type: Array,
        default: () => []
      }
    }, 
    components: {
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .scroll-main
    height: 100%
    overflow: hidden
    .menu
      position:relative
      height:55px
      background:#F2F2F2
      width:92vw
      border-radius:5px
      margin:20px auto
      border-left-width: 12px
      border-left-style: solid
      padding: 0 20px
      overflow: hidden
      border-color: transparent
      box-shadow: 1px 1px 5px #a1a1a1
      transition: all .1s ease-in-out
      &:active
        box-shadow: 0 0 2px #a1a1a1
        transform: translate(1px, 1px)
      a
        height: 100%
        width: 100%
        display: flex;
        align-items: center;
  #mainMenu
    .menu
      span
        position: absolute
        right: 10px;
        top: 50%;
        height: 10px;
        margin-top: -5px;
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
  #subMenu
    .menu
      background: #E3F6F5
      &:first-child
        background: #9CE1DE
      a
        justify-content:center
      span
        display:none

</style>
