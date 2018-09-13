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
    name: 'Law',
    components:{
      alinkword,
      Top
    },
    data(){
      return{
        urls:'../../static/img/ios/banner1_2.jpg',
        links:[{link:'/law_bottom_footer/1',title:'信访稳定'}
          ,{link:'/law_bottom_footer/2',title:'普法宣传'}
          ,{link:'/law_bottom_footer/3',title:'法律咨询'}]
      }
    }


  }
</script>
<style>

</style>
