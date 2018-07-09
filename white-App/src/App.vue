<template>
  <div id="app">
    <m-header title="小白会记账"></m-header>
  	<router-view></router-view>
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
