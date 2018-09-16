<template>
    <div>
       <div class="beijing">
          <div class="jifenguize">
            <p>
              <h1 class="jifenguize0">0</h1>
              <img src="../../static/img/jifen2.png" alt="" width="22">
            </p>
            <p>
              <a style="position: relative;left: -6px;top: -13px;">积分规则</a>
              <span style="color: white;position: relative;left: -2px;top: -13px;">></span>
            </p>
          </div>
       </div>
      <div style="background-color: #EBEBEB;">
        <p class="lipinduihuan">
          <span>
            礼品兑换
          </span>
        </p>
        <div class="lipin">
            <a class="danwei">
              <p>
                 <img src="../../../static/img/jifen5.png" alt="">
              </p>
              <div>毛巾</div>
              <div><img src="../../../static/img/jifen4.png" alt="" style="width:17px;display: inline-block;margin: 0">&nbsp;&nbsp;20</div>
            </a>
            <div style="clear:both;"></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>
  .beijing{
    width:100%;
    height: 23.5vh;
    background-image: url("../../static/img/jifen1.jpg");
    background-size:100%;
  }
  .lipin{
    width: 100%;
  }
  .danwei{
    width: 41.5%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 32vh;
    float: left;
    margin-left: 3.1vh;
    padding-bottom: 1vh;
  }
  .danwei p{
    width:100%;
    border: 1px solid #C9C7C8;
    background-color: white;
    height: 23vh;
  }
  .lipin img{
    width:100%;
    margin: 21% -2%;
  }
  .lipinduihuan{
    margin-left: 19px;
    padding-top: 10px;
    padding-bottom: 15px;}
  .lipinduihuan span{
    border-bottom:2px solid red;
    padding-bottom: 0.3vh;
  }
  .jifenguize{
    text-align: center;
    padding-top: 4vh;
  }
  .jifenguize0{
    display: inline-block;
    font-size: 9vh;
  }
</style>
