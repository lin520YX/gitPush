<template>
  <div class="menu-tab">
    <menu-list :listType="id" :data="dataAll[id]"></menu-list>
  </div>
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
        default: 'mainMenu'
      }
    },
    data: () => ({
      dataAll: {
        mainMenu: [{
          name: "视频学习",
          color: "#FF9933",
          link: "/menu/subMenu"
        }, {
          name: "期初建账",
          color: "#29ABE2",
          link: "/menu/subMenu"
        }, {
          name: "登陆做账",
          color: "#8CC63E",
          link: "/menu/subMenu"
        }, {
          name: "查账",
          color: "#C2282D",
          link: "/menu/subMenu"
        }, {
          name: "寻找后台协助",
          color: "#FF9833",
          link: "/menu/subMenu"
        }],
        subMenu: [{
          name: "六步完成期初",
          link: ""
        }, {
          name: "一、报钱",
          link: "/menu/mainMenu"
        }, {
          name: "二、报货",
          link: "/menu/mainMenu"
        }, {
          name: "三、报名字",
          link: "/menu/mainMenu"
        }, {
          name: "四、报费用项",
          link: "/menu/mainMenu"
        }, {
          name: "五、报欠款",
          link: "/menu/mainMenu"
        }, {
          name: "六、简单设置参数",
          link: "/menu/mainMenu"
        }]
      }
    })
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .menu-tab
    position: fixed;
    width: 100%;
    top: 44px;
    bottom: 55px;
</style>
