<template>
<div>
  <div class="my-goods" v-for="(item,index) in my_goods">
    <div><img :src="item.img" ></div>
    <p>{{item.name}}</p>
    <span>{{item.price}}积分</span>
  </div>
  <p class="my-total">总计积分：{{total}}积分</p>
</div>
</template>
<script>
  export default {
    data(){
      return{
        my_goods:[
          {img:"http://img3.99114.com/group1/M00/19/7C/wKgGMFgqstqAQZ8nAAOgcaizlvY072.jpg",name:"竹纤维毛巾(3条装80*25cm)",price:30},
          {img:"http://img3.99114.com/group1/M00/19/7C/wKgGMFgqstqAQZ8nAAOgcaizlvY072.jpg",name:"清风提装卫生纸",price:30},
          {img:"http://img3.99114.com/group1/M00/19/7C/wKgGMFgqstqAQZ8nAAOgcaizlvY072.jpg",name:"清风提装卫生纸",price:30},
          {img:"http://img3.99114.com/group1/M00/19/7C/wKgGMFgqstqAQZ8nAAOgcaizlvY072.jpg",name:"清风提装卫生纸",price:30},
          {img:"http://img3.99114.com/group1/M00/19/7C/wKgGMFgqstqAQZ8nAAOgcaizlvY072.jpg",name:"清风提装卫生纸",price:180},
          ],
        my_total:0
      }
    },
    computed: {
      total: function () {
        for(var i=0;i<this.my_goods.length;i++)
        {
          this.my_total=this.my_total+this.my_goods[i].price;
        }
        return this.my_total
      }
    }
  }
</script>
<style scoped>
  .my-goods{
    display: flex;
    padding: 10px 10px 10px 15px;
    border-bottom: 1px solid #e0e0e0;
  }
  .my-goods div {
    flex:  5;
    border: 1px solid #e0e0e0;
  }
  .my-goods div img{
    width: 100%;
    height: 100%;
  }
  .my-goods p{
    flex:  8;
    font-size: 12px;
    padding-left: 10px;
    padding-right:10px;
    margin-top: 30px;
    color: #a3a5a8;
  }
  .my-goods span{
   flex: 3;
    font-size: 12px;
    padding-left: 5px;
    padding-right:5px;
    margin-top: 30px;
  }
  .my-total{
    text-align: center;
    font-size: 14px;
    padding: 5px 0 10px 0;
    margin-bottom:100px;
  }
</style>
