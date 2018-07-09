<template>
  <div id="app">
  	<router-view></router-view>
    <tab></tab>
  </div>
</template>

<script>
import Tab from 'components/tab/tab'
export default {
  components:{
      Tab
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
