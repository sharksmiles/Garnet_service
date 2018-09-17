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
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in pages">
            <div class="nav-content-container">
            <div class="left"><img :src="item.Url" alt=""></div>
            <div class="content"><img :src="item.Url" alt=""></div>
            <div class="right"><img :src="item.Url" alt=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-content">
      <div class="nav-content-title">
        <span class="title_font">石榴红获得殊荣</span>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in page">
            <div class="nav-content-container">
              <div class="left"><img :src="item.Url" alt=""></div>
              <div class="content"><img :src="item.Url" alt=""></div>
              <div class="right"><img :src="item.Url" alt=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
export default{
  name: 'index',
  data(){
    return{
      pages:[
        {Url:"http://a0.att.hudong.com/54/49/01300542891809141879496908378.jpg"},
        {Url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537194345944&di=4fa2ad9889d2009385cd5a0b0dde2b79&imgtype=0&src=http%3A%2F%2Fpic40.photophoto.cn%2F20160714%2F1155115637630520_b.jpg"},
        {Url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1336695672,2078709898&fm=26&gp=0.jpg"},
        {Url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537194454932&di=91f481c563706907dc893b92212a2d8b&imgtype=0&src=http%3A%2F%2Fpic110.nipic.com%2Ffile%2F20160924%2F3506043_212724230000_2.jpg"},
        {Url:"http://a0.att.hudong.com/54/49/01300542891809141879496908378.jpg"},
      ],
      page:[
        {Url:"https://img02.sogoucdn.com/app/a/100520093/b692ca88cf40622d-c4c351c548f54192-3047a3e6fe3178e1ebaf106b19653e19.jpg"},
        {Url:"https://img01.sogoucdn.com/app/a/100520093/b692ca88cf40622d-c4c351c548f54192-9b31be1c6e33db79adc5f293470100b2.jpg"},
        {Url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537195091569&di=a7e31c1575d006e6f925d2618936f5ab&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2017-12-26%2F5a41b82d448ae.jpg"},
        {Url:"http://a2.att.hudong.com/79/22/01000000000000119062273272179.jpg"},
        {Url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537195091569&di=7f6e4eeb9bd181012d1bee499008d5a5&imgtype=0&src=http%3A%2F%2Fimg1.3lian.com%2Fimg13%2Fc3%2F39%2Fd%2F65.jpg"},
      ]
    }
  },
  mounted(){
    var mySwiper = new Swiper('.swiper-container', {})
  }
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
    margin-top: 30px;
  }
  .nav-content-container .content{
    flex: 2;
    margin-left:15px;
    margin-right: 15px;

  }
  .nav-content-container .right{
     flex: 1;
    margin-top: 30px;
   }
  .nav-content-container .left img{
    width: 100%;
    height: 75px;
    border-radius: 5px;
    box-shadow: 1px 1px #fff;
    -webkit-transition:all .3s ease-in-out .1s;
    -moz-transition:all .3s ease-in-out .1s;
    -o-transition:all .3s ease-in-out .1s;
  }
  .nav-content-container .content img{
    width: 100%;
    height: 150px;
    border-radius: 5px;
    box-shadow: 5px 5px #fff;
    -webkit-transition:all .3s ease-in-out .1s;
    -moz-transition:all .3s ease-in-out .1s;
    -o-transition:all .3s ease-in-out .1s;
  }
  .nav-content-container .right img{
    width: 100%;
    height: 75px;
    border-radius: 5px;
    box-shadow: 1px 1px #fff;
    -webkit-transition:all .3s ease-in-out .1s;
    -moz-transition:all .3s ease-in-out .1s;
    -o-transition:all .3s ease-in-out .1s;
  }
</style>
