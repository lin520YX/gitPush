<template>
  <div id="app" >
  	<keep-alive>
      <transition :name='transitionName'>
      <router-view class="child-view"></router-view>
      </transition>
    </keep-alive>
    <tab></tab>
  </div>
</template>
<script>
import Tab from 'components/tab/tab'
import MHeader from 'components/m-header/m-header'

export default {
  components:{
      Tab,
      MHeader
  }, 
  data: function() {
    return {
      title: '小白会做账',
      transitionName:'slide-right'
    }
  },
  watch: {  
    '$route' (to, from) {  
      if(to.path == '/'){  
        this.transitionName = 'slide-right';  
      }else{  
        this.transitionName = 'slide-left';  
      }  
    }  
  } 
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .child-view
    position: absolute;  
    left: 0;  
    top: 0;  
    width: 100%;  
    height: 100%;  
    transition: all .5s cubic-bezier(.55,0,.1,1);
  .slide-left-enter, .slide-right-leave-active
    opacity: 0;  
    -webkit-transform: translate(30px, 0);  
    transform: translate(30px, 0);  
  .slide-left-leave-active, .slide-right-enter 
    opacity: 0;  
    -webkit-transform: translate(-30px, 0);  
    transform: translate(-30px, 0);  

</style>
