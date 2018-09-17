<template>
  <div>
    <div v-if="$route.params.id==1">
      <Details :person="person"></Details>
      {{$route.params.id}}
    </div>
    <div v-if="$route.params.id==2">
      <Details :person="person"></Details>
      {{$route.params.id}}
    </div>
    <div v-if="$route.params.id==3">
      <Details :person="person"></Details>
      {{$route.params.id}}
    </div>
    <div v-if="$route.params.id==4">
      <Details :person="person"></Details>
      {{$route.params.id}}
    </div>
    <div v-if="$route.params.id==5">
     <div class="search">
       <input type="text" placeholder="搜索" v-model="searchVal">
     </div>
        <div class="help" v-for="(item,index) in NewItems" :key="index">
          <div class="help_left"><img :src="item.img" alt=""></div>
          <div class="help_content">
            <p>{{item.title}}</p>
            <p>地址：{{item.local}}</p>
          </div>
          <div class="help_right">
            <img src="../../../static/img/iphone.png" alt="">
          </div>
        </div>
     </div>


      <!--{{$route.params.id}}-->
    </div>
  </div>
</template>
<script>
import Details from '../common/Details.vue'
export default {
  name: 'Livelihood_li',
  components: {
    Details
  },
  data () {
    return {
      person: [{
        values: '一孩、二孩《生育服务证》登记', content: '中共中央组织部关于印发《关于进一步加强党员组织关系管理意见的通知（中组发[2004]10号）》'}, {values: '办理《独生子女父母光荣证》'}, {values: '办理《流动人口婚育证明》'}, {values: '免费避孕药具领取'}, {values: '城乡居民免费婚检咨询'}, {values: '中国共产党党员组织关系临时转出'}],
      service:[
        {img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537185273357&di=92c0b79f40954deace286553b99aa6d8&imgtype=0&src=http%3A%2F%2Fpic31.photophoto.cn%2F20140405%2F0008020956750157_b.jpg",title:"农业产品",local:"武汉福辛苦"}
        ,{img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537185273357&di=92c0b79f40954deace286553b99aa6d8&imgtype=0&src=http%3A%2F%2Fpic31.photophoto.cn%2F20140405%2F0008020956750157_b.jpg",title:"农业产品",local:"武汉福辛苦"}
        ,{img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537185273357&di=92c0b79f40954deace286553b99aa6d8&imgtype=0&src=http%3A%2F%2Fpic31.photophoto.cn%2F20140405%2F0008020956750157_b.jpg",title:"农业产品",local:"武汉福辛苦"}
        ,{img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537185273357&di=92c0b79f40954deace286553b99aa6d8&imgtype=0&src=http%3A%2F%2Fpic31.photophoto.cn%2F20140405%2F0008020956750157_b.jpg",title:"电器维修",local:"武汉福辛苦"}
      ],
      searchVal: ""
    }
  },
  computed: {
    NewItems() {
      var _this = this;
      var NewItems = [];
      this.service.map(function(item) {
        if (item.title.search(_this.searchVal) != -1) {
          NewItems.push(item);
        }
      });
      return NewItems;
    }
  }

}
</script>
<style scoped>
.search{
  background-color: #75e6fe;
  padding-top:15px;
  padding-bottom: 15px;
}
.search input{
  width: 90%;
  margin-left:5%;
  padding-top:10px;
  padding-bottom: 10px;
  border-radius: 5px;
  text-align: center;
  border: 1px solid #fff;
}
  .help{
    padding: 15px 20px 15px 20px;
    border: 1px solid #e0e0e0;
    margin: 10px 10px;
    border-radius: 5px;
    display: flex;
    box-shadow: 1px 1px 3px #e0e0e0;
  }
.help_left{
  width: 25%;
}
.help_left img{
  width: 100%;
  height: 100%;
}
.help_content{
  width: 50%;
  padding-left: 10px;
}
.help_content p{
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 13px;
}
.help_right{
  width: 25%;
  text-align: right;
  padding-top:10px;
}
.help_right img{
  width: 25px;
}
</style>
