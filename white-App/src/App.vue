<template>
  <div id="app" @touchmove.prevent>
    <m-header title="小白会做账"></m-header>
  	<keep-alive>
    <router-view></router-view>
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
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
