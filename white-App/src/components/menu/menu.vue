<template>
    <menu-list :listType="id.slice(0, -1)" :data="dataAll[id]"></menu-list>
</template>

<script type="text/ecmascript-6">
  import MenuList from 'components/menu-list/menu-list'
  import Scroll from 'base/scroll/scroll'
  export default {
    components: {
      MenuList, 
      Scroll
    },
    props: {
      id: {
        type: String,
        default: 'mainMenuA'
      }
    },
    data: () => ({
      dataAll: {
        mainMenuA: [{
          name: "视频学习",
          color: "#FF9933",
          link: "/menu/mainMenuB"
        }, {
          name: "期初建账",
          color: "#29ABE2",
          link: "/menu/mainMenuA"
        }, {
          name: "登陆做账",
          color: "#8CC63E",
          link: "/main"
        }, {
          name: "查账",
          color: "#C2282D",
          link: "/MakeAccount"
        }, {
          name: "寻找后台协助",
          color: "#FF9833",
          link: "/askForHelp"
        }],
        mainMenuB: [{
          name: "如何设置参数",
          color: "#FF9933",
          link: "/howToSetParams"
        }, {
          name: "如何建立初始数据",
          color: "#29ABE2",
          link: "/menu/subMenuA"
        }, {
          name: "如何做账",
          color: "#8CC63E",
          link: "/menu/subMenuB"
        }, {
          name: "如何查账",
          color: "#C2282D",
          link: "/menu/subMenuC"
        }, {
          name: "小白水平升级",
          color: "#FF9833",
          link: "/menu/subMenuD"
        }],
        subMenuA: [{
          name: "六步完成期初",
          link: ""
        }, {
          name: "一、报钱",
          link: "/menu/mainMenuA"
        }, {
          name: "二、报货",
          link: "/menu/mainMenuA"
        }, {
          name: "三、报名字",
          link: "/menu/mainMenuA"
        }, {
          name: "四、报费用项",
          link: "/menu/mainMenuA"
        }, {
          name: "五、报欠款",
          link: "/menu/mainMenuA"
        }, {
          name: "六、简单设置参数",
          link: "/menu/mainMenuA"
        }], 
        subMenuB:  [{
          name: "六步完成做账",
          link: ""
        }, {
          name: "一、报今天进货",
          link: "/menu/mainMenuA"
        }, {
          name: "二、报今天总收入",
          link: "/menu/mainMenuA"
        }, {
          name: "三、报今天运营费用",
          link: "/menu/mainMenuA"
        }, {
          name: "四、报库存及销售明细（可省）",
          link: "/menu/mainMenuA"
        }, {
          name: "五、报收付款及其他（可省）",
          link: "/menu/mainMenuA"
        }, {
          name: "六、报个人费用",
          link: "/menu/mainMenuA"
        }], 
        subMenuC:  [{
          name: "学会看报表",
          link: ""
        }, {
          name: "一、老板日报",
          link: "/menu/mainMenuA"
        }, {
          name: "二、进货及销售",
          link: "/menu/mainMenuA"
        }, {
          name: "三、资金及库存",
          link: "/menu/mainMenuA"
        }, {
          name: "四、经营费用",
          link: "/menu/mainMenuA"
        }, {
          name: "五、个人费用",
          link: "/menu/mainMenuA"
        }, {
          name: "六、学会看图表",
          link: "/menu/mainMenuA"
        }], 
        subMenuD:  [{
          name: "如何用PC端做账",
          link: ""
        }, {
          name: "一、去PC端走走看盾",
          link: "/menu/mainMenuA"
        }, {
          name: "二、查看进货销售明细",
          link: "/menu/mainMenuA"
        }, {
          name: "三、查看库存明细",
          link: "/menu/mainMenuA"
        }, {
          name: "四、查案资金和欠款明细",
          link: "/menu/mainMenuA"
        }, {
          name: "五、其他会计功能使用指南",
          link: "/menu/mainMenuA"
        }, {
          name: "六、高级参数设置",
          link: "/menu/mainMenuA"
        }]
      }
    })
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
