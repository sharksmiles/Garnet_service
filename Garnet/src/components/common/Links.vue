<template>
  <div class="bottom_class">
       <ul>
      <router-link tag="li" v-for="(item,index) in tar" :to='item.link' :key="index"><li>{{item.title}}</li></router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Links',
  props: ['tar']
}
</script>
<style scoped>
  .bottom_class{
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    border-top:1px solid #e0e0e0;
  }
  ul{
    display: flex;
    height: 45px;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    border-bottom: 1px solid #e0e0e0;
  }
  li{
    flex: 3;
    text-align: center;
    line-height: 45px;
    border-right: 1px solid #e0e0e0;
    font-size: 13px;
  }
  li:last-child{
    border-right: none;
  }
  li:hover{
    background-color: #eaeaea;
  }
</style>
