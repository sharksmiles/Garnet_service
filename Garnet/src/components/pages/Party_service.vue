<template>
  <div >
    <top :img="urls"></top>
    <alinkword :tar="links"></alinkword>
    <router-view></router-view>
  </div>
</template>
<script>
  import Top from'../common/Top.vue'
  import alinkword from'../common/Link.vue'
  export default {
    name: 'Party',
    components:{
      alinkword,
      Top
    },
    data(){
      return{
        urls:'../../../static/img/dangyuanfuwu@2x.png',
        links:[{link:'/Party_footer/1',title:'党纪党规'}
          ,{link:'/Party_footer/2',title:'组织生活'}
          ,{link:'/Party_footer/3',title:'学习驿站'}
          ,{link:'/Party_footer/4',title:'关爱帮扶'}
          ,{link:'/Party_footer/5',title:'党建引领'}
          ]
      }
    }
  }
</script>
