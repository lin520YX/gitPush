<template>
  <div>
        <m-header :title="'查账'" :back='true' ></m-header>
        <div class="checkAccount">
          <div>
                <ve-line :data="chartData"></ve-line>
          </div>
        </div>
      
  </div>
</template>

<script type="text/ecmascript-6">
  import VeLine from 'v-charts/lib/line.common'
  import MHeader from 'components/m-header/m-header'
  export default {
    components: { VeLine,MHeader },
    data: function() {
      return {
        chartData: {
          columns: ['日期', '销售量'],
          rows: [
            { '日期': '1月1日', '销售量': 123 },
            { '日期': '1月2日', '销售量': 1223 },
            { '日期': '1月3日', '销售量': 2123 },
            { '日期': '1月4日', '销售量': 4123 },
            { '日期': '1月5日', '销售量': 3123 },
            { '日期': '1月6日', '销售量': 7123 }
          ]
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .checkAccount
    position absolute
    top 44px
    left 0
    right 0
    bottom 0
    background #ffffff
    z-index 1000 
    
</style>
