<template>
  <div >
    <top :img="urls"></top>
    <div class="content">
      <router-link tag='div'  class="content-item" v-for="(item,index) in lv"  :to="{ name: 'Livelihood_li', params: { id: index+1 }}" :key="index">
        <span>{{item}}</span>
        <p><img src="../../../static/img/goto.png"></p>
      </router-link>
    </div>
  </div>
</template>
<script>
import Top from '../common/Top.vue'
export default {
  components: {
    Top
  },
  data () {
    return {
      urls: '../../../static/img/minshengfuw@2x.png',
      lv: ['人口计生', '社会保障', '就业咨询', '残疾人事务', '便民服务']
    }
  }
}
</script>
<style scoped>
  .content-item{
    border: 1px solid #e0e0e0;
    margin: 10px 15px;
    padding: 10px 10px;
    box-shadow: 0 2px 1px #e0e0e0;
    margin-bottom: 15px;
  }
  .content-item span{
    border-left: 4px solid red;
    padding-left: 10px;
    border-radius: 2px;
    font-size: 13px;
    display: inline-block;
    height: 15px;
    line-height: 15px;
  }
  .content-item p{
    float: right;
    width: 15px;
    height: 15px;
  }
  .content-item p img{
    width: 100%;
  }
</style>
