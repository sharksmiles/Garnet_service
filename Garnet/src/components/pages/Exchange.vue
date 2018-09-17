<template>
    <div>
       <div class="beijing">
          <div class="jifenguize">
              <h1 class="jifenguize0">{{point}}</h1>
            <img class="money" src="../../../static/img/money.png" alt="">
          </div>
         <router-link  tag="div"  to='/Exchange_rules'>
         <p class="money_rule">积分规则</p>
         <img class="back" src="../../../static/img/goto_money.png" alt="">
         </router-link>
       </div>
      <router-link  tag="p"  to='/My_exchange' class="money—title">礼品兑换</router-link>
      <div class="things">
        <router-link tag="div"  to='/order' class="goods" v-for="(item,index) in goods" :key="index">
          <div class="goods-img">
            <img :src="item.img">
          </div>
          <div class="goods-name">
            <p>{{item.name}}</p>
            <p><img src="../../../static/img/money1.png" alt="">{{item.price}}</p>
          </div>
        </router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Exchange',
  data(){
    return{
      point:'0',
      goods:[
        {img:"http://img3.99114.com/group1/M00/19/7C/wKgGMFgqstqAQZ8nAAOgcaizlvY072.jpg",name:"清风提装卫生纸",price:"30"},
        {img:"http://img3.99114.com/group1/M00/19/7C/wKgGMFgqstqAQZ8nAAOgcaizlvY072.jpg",name:"清风提装卫生纸",price:"20"},
        {img:"http://img3.99114.com/group1/M00/19/7C/wKgGMFgqstqAQZ8nAAOgcaizlvY072.jpg",name:"清风提装卫生纸",price:"10"},
        {img:"http://img3.99114.com/group1/M00/19/7C/wKgGMFgqstqAQZ8nAAOgcaizlvY072.jpg",name:"清风提装卫生纸",price:"20"},
        {img:"http://img3.99114.com/group1/M00/19/7C/wKgGMFgqstqAQZ8nAAOgcaizlvY072.jpg",name:"清风提装卫生纸",price:"20"}]
    }
  }
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
    height:20px;
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
  .things{
    padding-left: 10px;
    display: flex;
    flex-wrap: wrap;
    padding-top:15px;
    padding-bottom: 5px;
    margin-top: -5px;
  }
  .things .goods{
    width: 49%;
    margin-bottom:10px;
  }
 .goods-img{
   padding: 5px 15px 0px 10px;
  }
  .things .goods-img img{
    width: 100%;
  }
  .goods-name{
    padding: 5px 15px 0px 10px;
  }
  .goods-name img{
    width: 18px;
    height:18px;
    position: relative;
    top:3px;
    margin-right: 3px;
  }
</style>
