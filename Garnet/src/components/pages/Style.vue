<template>
  <div>
    <top :img="urls"></top>
     <alinkword :tar="links"></alinkword>
    <router-view></router-view>
  </div>
</template>

<script>
  import Top from'../common/Top.vue'
  import alinkword from'../common/Link.vue'
  export default {
    name: 'Style',
    components:{
      alinkword,
      Top
    },
    data(){
      return{
        urls:'../../../static/img/wenhuafuwu@2x.png',
        links:[{link:'/style_footer/1',title:'全民阅读'}
          ,{link:'/style_footer/2',title:'社区教育'}
          ,{link:'/style_footer/3',title:'健身运动'}]
      }
    }
  }
</script>
<style scoped>

</style>
