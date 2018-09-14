<template>
  <div>
    <div class="nav-img">
      <img src="../img/fuwudaoh@2x.png" alt="">
    </div>
    <div class="nav-title">
      <router-link  tag="div"  to='/Party_service' class="nav-title-item" >
      <img src="../img/dang@2x.png" alt=""><p>党员服务</p>
      </router-link>
      <router-link  tag="div"  to='/Travel' class="nav-title-item" >
      <img src="../img/lvyou@2x.png" alt=""><p>旅游服务</p>
      </router-link>
      <router-link  tag="div"  to='/Livelihood' class="nav-title-item" >
     <img src="../img/minsh@2x.png" alt=""><p>民生服务</p>
      </router-link>
      <router-link  tag="div"  to='/Grassroots' class="nav-title-item" >
      <img src="../img/jic@2x.png" alt=""><p>基层治理</p>
      </router-link>
      <router-link  tag="div"  to='/Volunteer' class="nav-title-item" >
      <img src="../img/zhiy@2x.png" alt=""><p>志愿服务</p>
      </router-link>
      <router-link  tag="div"  to='/Style' class="nav-title-item" >
     <img src="../img/wenhua@2x.png" alt=""><p>文化服务</p>
      </router-link>
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
        <div class="left"><img src="http://a0.att.hudong.com/54/49/01300542891809141879496908378.jpg" alt=""></div>
        <div class="content"><img src="http://a0.att.hudong.com/54/49/01300542891809141879496908378.jpg" alt=""></div>
        <div class="right"><img src="http://a0.att.hudong.com/54/49/01300542891809141879496908378.jpg" alt=""></div>
      </div>
    </div>
    <div class="nav-content">
      <div class="nav-content-title">
        <span class="title_font">石榴红获得殊荣</span>
      </div>
      <div class="nav-content-container">
        <div class="left"><img src="http://a0.att.hudong.com/54/49/01300542891809141879496908378.jpg" alt=""></div>
        <div class="content"><img src="http://a0.att.hudong.com/54/49/01300542891809141879496908378.jpg" alt=""></div>
        <div class="right"><img src="http://a0.att.hudong.com/54/49/01300542891809141879496908378.jpg" alt=""></div>
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
    margin-bottom: 10px;
  }
  .nav-title-item{
    width: 25%;
    text-align: center;
  }
  .nav-title-item img{
    width: 35%;
    height: 45%;
    margin-top: 5px;

  }
  .nav-title-item p{
    font-size: 12px;
    margin-top: 3px;
    margin-bottom: 5px;
    /*border: 1px solid #000000;*/
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
    display: flex;
    margin-top: 20px;
    padding-bottom: 10px;
  }
  .nav-content-container .left{
    flex: 1;
    margin-top: 25px;
  }
  .nav-content-container .content{
    flex: 2;
    margin-left:15px;
    margin-right: 15px;

  }
  .nav-content-container .right{
     flex: 1;
    margin-top: 25px;
   }
  .nav-content-container .left img{
    width: 100%;
    border-radius: 5px;
    box-shadow: 1px 1px #fff;
    -webkit-transition:all .3s ease-in-out .1s;
    -moz-transition:all .3s ease-in-out .1s;
    -o-transition:all .3s ease-in-out .1s;
  }
  .nav-content-container .content img{
    width: 100%;
    border-radius: 5px;
    box-shadow: 5px 5px #fff;
    -webkit-transition:all .3s ease-in-out .1s;
    -moz-transition:all .3s ease-in-out .1s;
    -o-transition:all .3s ease-in-out .1s;
  }
  .nav-content-container .right img{
    width: 100%;
    border-radius: 5px;
    box-shadow: 1px 1px #fff;
    -webkit-transition:all .3s ease-in-out .1s;
    -moz-transition:all .3s ease-in-out .1s;
    -o-transition:all .3s ease-in-out .1s;
  }
</style>
