<template>
  <div>
    <div class="bottom_footer" v-if="$route.params.id==1">
      <div v-for="(items,indexs) in pages" >
        <test  v-if="indexs===0" v-for="(item,index) in items" :data="item" :key="index" ></test>
      </div>
    </div>
    <div class="bottom_footer" v-if="$route.params.id==2">
      <div v-for="(items,indexs) in pages" >
        <test  v-if="indexs===1" v-for="(item,index) in items" :data="item" :key="index" ></test>
      </div>
    </div>
    <div class="bottom_footer" v-if="$route.params.id==3">
      <div v-for="(items,indexs) in pages" >
        <test  v-if="indexs===2" v-for="(item,index) in items" :data="item" :key="index" ></test>
      </div>
    </div>
    <div class="bottom_footer" v-if="$route.params.id==4">
      <div v-for="(items,indexs) in pages" >
        <test  v-if="indexs===3" v-for="(item,index) in items" :data="item" :key="index" ></test>
      </div>
    </div>
    <div class="bottom_footer" v-if="$route.params.id==5">
      <div v-for="(items,indexs) in pages" >
        <test  v-if="indexs===4" v-for="(item,index) in items" :data="item" :key="index" >
          <p class="time">2018-09-04</p>
        </test>
      </div>
    </div>
  </div>

</template>
<script>
  import test from'../common/test.vue'
  export default {
    data(){
      return{
        pages: [
          [{url:'http://pic17.photophoto.cn/20101005/0036036365418115_b.jpg',title:'【监察法释义（34）职务违法犯罪问题】',content:'【监察法释义（34）职务违法犯罪问题】线索移送制度和管辖'},
            {url:'http://img1.3lian.com/2015/a1/89/d/63.jpg',title:'【监察法释义（34）职务违法犯罪问题】',content:'【监察法释义（34）职务违法犯罪问题】线索移送制度和管辖'},
            {url:'http://pic1.16pic.com/00/12/38/16pic_1238190_b.jpg',title:'【监察法释义（34）职务违法犯罪问题】',content:'【监察法释义（34）职务违法犯罪问题】线索移送制度和管辖'}
          ],
          [{url:'http://d.paper.i4.cn/max/2017/03/23/14/1490249222986_905517.jpg',title:'第五党支部开展“支部主题党日”',content:'2018年9月4日下午三点，第五党支部开展“支部主题党日”活动'}
            ,{url:'http://pic28.photophoto.cn/20130828/0005018346450069_b.jpg',title:'第五党支部开展“支部主题党日”',content:'2018年9月4日下午三点，第五党支部开展“支部主题党日”活动'}
            ,{url:'http://image3.xyzs.com/upload/1c/56/1435539935595148/20150629/143556493675651_0.jpg',title:'第五党支部开展“支部主题党日”',content:'2018年9月4日下午三点，第五党支部开展“支部主题党日”活动'}
          ],
          [{url:'http://d.paper.i4.cn/max/2017/03/23/14/1490249222986_905517.jpg',title:'政策咨询',content:'政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询'}
            ,{url:'http://pic28.photophoto.cn/20130828/0005018346450069_b.jpg',title:'政策咨询',content:'政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询'}
            ,{url:'http://image3.xyzs.com/upload/1c/56/1435539935595148/20150629/143556493675651_0.jpg',title:'政策咨询',content:'政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询'}
          ],
          [{url:'http://d.paper.i4.cn/max/2017/03/23/14/1490249222986_905517.jpg',title:'七一走访慰问困难党员群众',content:'七一走访慰问困难党员群众，并询问她的身体状况，倾听她的困难和需求'}
            ,{url:'http://pic28.photophoto.cn/20130828/0005018346450069_b.jpg',title:'七一走访慰问困难党员群众',content:'七一走访慰问困难党员群众，并询问她的身体状况，倾听她的困难和需求'}
            ,{url:'http://image3.xyzs.com/upload/1c/56/1435539935595148/20150629/143556493675651_0.jpg',title:'七一走访慰问困难党员群众',content:'七一走访慰问困难党员群众，并询问她的身体状况，倾听她的困难和需求'}
          ],
          [{url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536922959557&di=426ea7ffe39bc9e7e9150cec91c2d4e3&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201603%2F05%2F20160305132304_XhjaY.thumb.700_0.jpeg',title:'"党员先进事迹',content:'党员先进事迹党员先进事迹党员先进事迹党员先进事迹党员先进事迹党员先进事迹党员先进事迹党员先进事迹'}
            ,{url:'http://pic28.photophoto.cn/20130828/0005018346450069_b.jpg',title:'"党员先进事迹',content:'党员先进事迹党员先进事迹党员先进事迹党员先进事迹党员先进事迹党员先进事迹'}
            ,{url:'http://image3.xyzs.com/upload/1c/56/1435539935595148/20150629/143556493675651_0.jpg',title:'"党员先进事迹',content:'党员先进事迹党员先进事迹党员先进事迹党员先进事迹党员先进事迹'}
          ]
          ],
        ok:null
      }
    },
    components:{
      test
    },
    methods:{
      openDom(index){
        if(this.ok===index){
          this.ok=null;
        }else{
          this.ok=index;
        }
//       this.ok= this.ok===index?null:index
      }
    }
  }
</script>
<style scoped>
</style>
