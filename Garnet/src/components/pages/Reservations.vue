<template>
    <div>
      <div class="tou">
        <img src="../../static/img/jifen5.png" alt="">
      </div>
      <div class="zhong">
        <p>商品名称：毛巾</p>
        <p>积分兑换：20</p>
        <p>剩余数量：80</p>
        <p>领取地址：红石榴社区党群服务中心</p>
        <p>简介：</p>
      </div>
      <div class="wei">
        <button>预约</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>
  .tou{width: 100%;}
  .tou img{width: 64%;margin-left: 18%;margin-top: 10%;}
  .zhong p{
    margin-left: 4vh;
    margin-top: 0.5vh;
    font-size: 18px;}
  .wei button{
    width: 100%;
    color: white;
    font-size: 21px;
    height: 43px;
    border-radius: 9px;
    border:1px solid #1196DB;
    background-color: #1196DB;
    margin-top: 3vh;}
</style>
