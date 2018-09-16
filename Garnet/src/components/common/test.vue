<template>
  <div class="bottom_footer">
    <div class="bottom_container">
      <div class="bottom_container_left" :style="'background-image: url('+data.url+')'">
     </div>
     <div class="bottom_container_right">
      <span>{{data.title}}</span>
      <p>{{data.content}}</p>
      <slot>
        <p class="time">2018-09-04</p>
      </slot>
     </div>
     </div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>
<style scoped>
  .bottom_footer{
    background-color: #fff;
    border-bottom: 1px solid #e0e0e0;
    border-top: 1px solid #e0e0e0;
    padding-bottom: 5px;
    margin-top: 10px;
    box-shadow: 1px 1px 3px #e0e0e0e0;
  }
  .bottom_container{
    display: flex;
    padding-top: 15px;
    padding-left: 10px;
    padding-bottom: 10px;
  }
  .bottom_container_left{
    width: 25%;
    height: 100px;
    background-size:cover;
    background-repeat:no-repeat;
    background-origin:content-box;
    padding-left: 5px;
    background-position: center center;

  }

  .bottom_container_right{
    width: 70%;
    padding-left: 10px;
    padding-top: 10px;
    position: relative;
  }
  .bottom_container_right span{
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 10px;
    text-overflow: ellipsis;
    padding-right: 10px;
    font-size: 14px;

  }
  .bottom_container_right p{
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 10px;
    font-size: 13px;
    color: #a4a6a9;
  }
  .bottom_container_right .time{
    text-align: right;
    margin-top: 15px;
  }
  .bottom_footer button{
    float: right;
    height: 25px;
    width: 75px;
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,.2);
    display: inline-block;
    margin-right:10px;
    background-color: #FFD31C;
    color: #FFFFFF;
    margin-top: 10px;
  }
</style>
