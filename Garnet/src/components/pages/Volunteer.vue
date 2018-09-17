<template>
  <div>
    <top :img="urls"></top>
    <alinkword :tar="links"></alinkword>
    <router-view></router-view>
  </div>
</template>

<script>
import Top from '../common/Top.vue'
import alinkword from '../common/Link.vue'
export default {
  name: 'Style',
  components: {
    alinkword,
    Top
  },
  data () {
    return {
      urls: '../../../static/img/zhiyuanfuwu@2x.png',
      links: [{link: '/Volunteer_footer/1', title: '居家养老'},
        {link: '/Volunteer_footer/2', title: '阳光助弱(残)'},
        {link: '/Volunteer_footer/3', title: '妇女之家'},
        {link: '/Exchange', title: '积分兑换'}
      ]
    }
  }
}
</script>
<style scoped>

</style>
