<template>
  <div>
    <div v-if="$route.params.id==1">
      <router-link to="/Details_container" tag="div">
      <div v-for="(item,index) in page[0]">
      <test :data="item">
        <p class="time">2018-09-04</p>
        <button>我要加入</button>
      </test>
      </div>
      </router-link>
    </div>
    <div v-if="$route.params.id==2">
      <div v-for="(item,index) in page[1]">
        <test :data="item">
          <p class="time">2018-09-04</p>
          <button>我要加入</button>
        </test>
      </div>

    </div>
    <div v-if="$route.params.id==3">
      <div v-for="(item,index) in page[2]">
        <test :data="item">
          <p class="time">2018-09-04</p>
          <button>我要加入</button>
        </test>
      </div>
    </div>

  </div>
</template>
<script>
  import test from'../common/test.vue'
  export default {
    name: 'Style_footer',
    components:{
      test
    },
    data(){
      return{
        page:[
        [{url:'http://im5.leaderhero.com/wallpaper/20140328/66c1bf49-0.jpg',title:'全民阅读',content:'最新的图书信息...'},
          {url:'http://pic30.photophoto.cn/20140218/0005018361191085_b.jpg',title:'全民阅读',content:'最新的图书信息...'},
          {url:'http://pic35.photophoto.cn/20150525/0005018333887373_b.jpg',title:'全民阅读',content:'最新的图书信息...'}
        ],
       [{url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536922959556&di=bb4f3b327e43e5f7e9d716ecb8e8187b&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F2e2eb9389b504fc29b51b0a7e7dde71190ef6d01.jpg',title:'社区教育',content:'教育信息...'},
       {url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536922959556&di=bb4f3b327e43e5f7e9d716ecb8e8187b&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F2e2eb9389b504fc29b51b0a7e7dde71190ef6d01.jpg',title:'社区教育',content:'教育信息...'},
       {url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536922959556&di=bb4f3b327e43e5f7e9d716ecb8e8187b&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F2e2eb9389b504fc29b51b0a7e7dde71190ef6d01.jpg',title:'社区教育',content:'教育信息...'}

        ],
        [{url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536922959555&di=3a0f24d75b46867d5c51030eaeedebed&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F9825bc315c6034a802c8b7facd134954092376a6.jpg',title:'舞蹈队',content:'舞蹈队简介....'},
          {url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537530472&di=f97c6d1623f380c59c326e8b3001f6b1&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201310%2F02%2F20131002201519_n8RMm.thumb.700_0.jpeg',title:'舞蹈队',content:'舞蹈队简介....'},
          {url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536922959595&di=ea47c95ea41fc070590859f5721b3286&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F29%2F20150529133025_iARCN.jpeg',title:'舞蹈队',content:'舞蹈队简介....'}
        ]]
      }
    }
  }
</script>
<style scoped>
  .time{
    text-align: right;
    margin-top: 15px;
    position: absolute;
    right: 0;
    top:0;
  }
</style>
