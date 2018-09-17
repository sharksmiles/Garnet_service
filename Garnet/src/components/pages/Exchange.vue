<template>
    <div>
       <div class="beijing">
          <div class="jifenguize">
              <h1 class="jifenguize0">0</h1>
            <img class="money" src="../../../static/img/money.png" alt="">
          </div>
         <p class="money_rule">积分规则</p>
         <img class="back" src="../../../static/img/goto_money.png" alt="">
       </div>
      <p class="money—title">礼品兑换</p>
    </div>
</template>

<script>
export default {
  name: 'Exchange'
}
</script>

<style scoped>
  .beijing{
    width:100%;
    height: 23.5vh;
    background-image: url("../../../static/img/banner.jpg");
    background-size:100%;
    text-align: center;
  }
  .jifenguize{
    text-align: center;
    padding-top: 4vh;
  }
  .jifenguize0{
    display: inline-block;
    font-size: 9vh;
  }
  .money{
    width: 22px;
  }
  .money_rule{
    text-align: center;
   display: inline-block;
    line-height:20px;
    margin-top: 0;
  }
  .beijing .back{
    width: 17px;
    position: relative;
    top:3px;
  }
  .money—title{
    margin-top: 10px;
    margin-left: 20px;
    border-bottom: 1px solid red;
    display: inline-block;
  }
</style>
