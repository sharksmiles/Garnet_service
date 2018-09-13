<template>
  <div>
    <div class="nav-img">
      <img src="../img/fuwudaoh@2x.png" alt="">
    </div>
    <div class="nav-title">
      <div class="nav-title-item"><img src="../img/dang@2x.png" alt=""><p>党员服务</p></div>
      <div class="nav-title-item"><img src="../img/lvyou@2x.png" alt=""><p>旅游服务</p></div>
      <div class="nav-title-item"><img src="../img/minsh@2x.png" alt=""><p>民生服务</p></div>
      <div class="nav-title-item"><img src="../img/jic@2x.png" alt=""><p>基层治理</p></div>
      <div class="nav-title-item"><img src="../img/zhiy@2x.png" alt=""><p>志愿服务</p></div>
      <div class="nav-title-item"><img src="../img/wenhua@2x.png" alt=""><p>文化服务</p></div>
    </div>
    <div class="nav-content">
      <div class="nav-content-title">
      <span class="title_font">前言</span>
      </div>
      <div class="nav-title-content">
        <div class="nav-content-title-img"><img src="../img/shiliu@2x.png" ></div>
        <span class="nav-content-title-container">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;红石榴村简介红石榴村简介红石榴村简介红石榴村简介红石榴村简介</span>
        <img src="../img/going.png" class="img-back">
      </div>
  </div>
    <div class="nav-content">
      <div class="nav-content-title">
        <span class="title_font">红石榴村美景</span>
      </div>
      <div class="nav-content-container">

      </div>
    </div>
    <div class="nav-content">
      <div class="nav-content-title">
        <span class="title_font">石榴红获得殊荣</span>
      </div>
      <div class="nav-content-container">

      </div>
    </div>
  </div>
</template>
<script>
export default{
  name:'index'
}
</script>
<style scoped>
  .nav-img img {
    width: 100%;
  }
  .nav-title{
    display: flex;
    flex-wrap:wrap;
    margin-top: 0px;
  }
  .nav-title-item{
    width: 25%;
    text-align: center;
  }
  .nav-title-item img{
    width: 35%;
    margin-top: 5px;
  }
  .nav-title-item p{
    font-size: 12px;
    margin-top: 3px;
  }
  .nav-content{
    margin-bottom: 10px;
  }
  .nav-content-title{
    margin-top: 0;
    background-image: url(../img/cunzhuangbeij@2x.png);
    background-size: 100% 100%;
    border: 1px solid #e0e0e0;
    background-repeat: no-repeat;
  }
  .nav-content-title .title_font{
   line-height: 37px;
   margin-left: 15px;
    height: 37px;
    font-size: 13px;
    border-left: 4px solid red;
    padding-left: 10px;
    border-radius: 2px;
  }
  .nav-title-content{
    display: flex;
    height: 100px;
    margin-top: 5px;
  }
  .nav-content-title-img{
    width: 30%;
  }
  .nav-content-title-img img{
    width: 100%;
  }
  .nav-title-content .nav-content-title-container{
    width: 60%;
    height: 40px;
    padding-left: 10px;
    margin-top: 20px;
    padding-right: 10px;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 14px;
  }
  .nav-title-content .img-back{
    width: 25px;
    height: 25px;
    margin-top: 30px;
  }
  .nav-content-container{
    background-color: red;
    height: 150px;
  }
</style>
