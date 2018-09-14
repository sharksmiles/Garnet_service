<template>
  <div >
    <top :img="urls"></top>
    <div class="content">
      <div class="content-item" v-for="item in lv">
        <span>{{item}}</span>
        <p><img src="../../../static/img/goto.png"></p>
      </div>
    </div>

  </div>
</template>
<script>
  import Top from'../common/Top.vue'
  export default {
    name: 'Party',
    components:{
      Top
    },
    data(){
      return{
        urls:'../../../static/img/lvyoufuwu@2x.png',
        lv:["旅游指南","农家乐发布","闲置农舍(庄)","果蔬采摘发布","其他租赁服务","菜地认养","住宿"]
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
