<template>
  <div>
    <div v-if="$route.params.id==1">
      <router-link to="/Details_container" tag="div">
      <div v-for="(item,index) in page[0]">
      <test :data="item">
        <p class="time">2018-09-04</p>
      </test>
      </div>
      </router-link>
    </div>
    <div v-if="$route.params.id==2">
      <div v-for="(item,index) in page[1]">
        <test :data="item">
          <p class="time">2018-09-04</p>
        </test>
      </div>

    </div>
    <div v-if="$route.params.id==3">
      <div v-for="(item,index) in page[2]">
        <test :data="item">
          <p class="time">2018-09-04</p>
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
        [{url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536938549862&di=d2c6862b40a63758c0ec89e4d067bf90&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201603%2F06%2F20160306131350_SPisJ.thumb.700_0.png',title:'慰问社区困难老人',content:'慰问社区困难老人...'},
          {url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536938549860&di=7e37a35aff8a541c4ffa24d5cb1d637a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201607%2F17%2F20160717112647_i8a3j.jpeg',title:'慰问社区困难老人',content:'慰问社区困难老人...'},
          {url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536938549858&di=237361e247c808281d354942891e8657&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201504%2F18%2F20150418H4225_8YVfi.thumb.700_0.jpeg',title:'慰问社区困难老人',content:'慰问社区困难老人...'}
        ],
       [{url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536938549846&di=295b62bfe625a0c74d916e304c4b159d&imgtype=0&src=http%3A%2F%2Fpic23.photophoto.cn%2F20120601%2F0006019088171148_b.jpg',title:'关爱残疾人活动',content:'关爱残疾人活动...'},
       {url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536938717642&di=17499a62bcfe6d2d9f6abe32be085818&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3Dca3acc40bc096b63814c56543903ab72%2Fb64543a98226cffcde6bb4ddbb014a90f603ea18.jpg',title:'关爱残疾人活动',content:'关爱残疾人活动...'},
       {url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536922959556&di=bb4f3b327e43e5f7e9d716ecb8e8187b&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F2e2eb9389b504fc29b51b0a7e7dde71190ef6d01.jpg',title:'关爱残疾人活动',content:'关爱残疾人活动...'}

        ],
        [{url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536938549835&di=153d4b97711f0338211db889db817111&imgtype=0&src=http%3A%2F%2Fimg17.3lian.com%2F201612%2F09%2F6fcb7000fe16d9a9b2960be2ccbbb1d0.jpg',title:'妇女先进事迹',content:'妇女先进事迹活动....'},
          {url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537530472&di=f97c6d1623f380c59c326e8b3001f6b1&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201310%2F02%2F20131002201519_n8RMm.thumb.700_0.jpeg',title:'妇女先进事迹',content:'妇女先进事迹活动....'},
          {url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536922959595&di=ea47c95ea41fc070590859f5721b3286&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F29%2F20150529133025_iARCN.jpeg',title:'妇女先进事迹',content:'妇女先进事迹活动....'}
        ]]
      }
    }
  }
</script>
<style scoped>
  /*.time{*/
    /*text-align: right;*/
    /*margin-top: 15px;*/
    /*position: absolute;*/
    /*right: 0;*/
    /*top:0;*/
  /*}*/
</style>
