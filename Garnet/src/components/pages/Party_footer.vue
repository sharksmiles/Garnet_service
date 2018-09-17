<template>
  <div>
    <div class="bottom_footer" v-if="$route.params.id==1">
      <div v-for="(items,indexs) in pages" >
        <test  v-if="indexs===0" v-for="(item,index) in items" :data="item" :key="index" ></test>
      </div>
    </div>
    <div class="bottom_footer" v-if="$route.params.id==2||$route.params.id==2.1">
      <div v-for="(items,indexs) in pages" >
        <test  v-if="indexs===1" v-for="(item,index) in items" :data="item" :key="index" >
          <div v-if="$route.params.id==2.1" >
            <p class="time">2018-09-04</p>
            <button>我要参与</button>
          </div>
        </test>
      </div>
      <div class="link_top"></div>
      <Links :tar="links[0]"></Links>
    </div>
    <div class="bottom_footer" v-if="$route.params.id==3">
      <div v-for="(items,indexs) in pages" >
        <test  v-if="indexs===2" v-for="(item,index) in items" :data="item" :key="index" ></test>
      </div>
      <div class="link_top"></div>
      <Links :tar="links[1]"></Links>
    </div>
    <div class="bottom_footer" v-if="$route.params.id==3.1">
      <Details :person="person"></Details>
      <div class="link_top"></div>
      <Links :tar="links[1]"></Links>
    </div>
    <div class="bottom_footer" v-if="$route.params.id==4">
      <div v-for="(items,indexs) in pages" >
        <test  v-if="indexs===3" v-for="(item,index) in items" :data="item" :key="index" ></test>
      </div>
    </div>
    <div class="bottom_footer" v-if="$route.params.id==5">
      <div v-for="(items,indexs) in pages" >
        <test  v-if="indexs===4" v-for="(item,index) in items" :data="item" :key="index" ></test>
      </div>
      <div class="link_top"></div>
      <Links :tar="links[2]"></Links>
    </div>
    <div class="bottom_footer" v-if="$route.params.id==5.1">
         <div class="form_title">
           <p class="form_left">姓名</p><div class="form_right"><input type="text" v-model="name" placeholder="您的真实姓名" ></div>
         </div>
      <div class="form_title">
        <p class="form_left">性别</p>
        <div class="form_right">
          <label>
            <span>男</span>
            <input type="radio" value="man"  id="man" v-model="picked" style="margin-right: 20px">
            <span>女</span>
            <input type="radio" value="women" v-model="picked">
          </label>
        </div>
      </div>
      <div class="form_title">
        <p class="form_left">出生日期</p><div class="form_right"><div @click="getDate">{{date}}</div></div>
      </div>
      <div class="form_title">
        <div class="form_left2"><span>民族</span><input type="text" placeholder="汉"></div>
        <div class="form_right2"><span>籍贯</span><input type="text" placeholder="湖北武汉"></div>
      </div>
      <div class="form_title">
        <p class="form_left">入党日期</p><div class="form_right"><div @click="getDate1">{{date1}}</div></div>
      </div>
      <div class="form_title">
        <p class="form_left">所在支部</p><div class="form_right"><input type="text" placeholder="填写您所在的支部" ></div>
      </div>
      <div class="form_title">
        <p class="form_left">党内职务</p><div class="form_right"><input type="text" placeholder="填写您所在党内职务" ></div>
      </div>
      <div class="form_title">
        <p class="form_left">联系电话</p><div class="form_right"><input type="text" placeholder="填写您的联系电话" ></div>
      </div>
      <div class="form_title">
        <p class="form_left">现居住地</p><div class="form_right"><input type="text" placeholder="填写您目前的居住地址" ></div>
      </div>
      <div class="form_title">
        <p class="form_left">进入当前党支部日期</p><div class="form_right"><div @click="getDate2">{{date2}}</div></div>
      </div>
      <button class="button">提交</button>
    </div>

    <div class="bottom_footer" v-if="$route.params.id==5.2">
      <div class="content">
        <div class="content-left">
          <div class="content-left-item"><p>乡村悠闲协会</p></div>
          <div class="content-left-item"><p>蔬果采摘协会</p></div>
        </div>
        <div class="content-middle">
          <div class="content-middle-item"><p>餐饮厨嫂协会</p></div>
        </div>
        <div class="content-right">
          <div class="content-right-item"><p>蔬菜运销协会</p></div>
          <div class="content-right-item"><p>都市田园合作社</p></div>
        </div>
      </div>
      <div class="link_top"></div>
      <Links :tar="links[2]"></Links>
    </div>
  </div>
</template>
<script>
import test from '../common/test.vue'
import Links from '../common/Links.vue'
import Details from '../common/Details.vue'
export default {
  name: 'Party_footer',
  components: {
    Links,
    test,
    Details
  },
  data () {
    return {
      person: [{
        values: '一孩、二孩《生育服务证》登记', content: '中共中央组织部关于印发《关于进一步加强党员组织关系管理意见的通知（中组发[2004]10号）》'}, {values: '办理《独生子女父母光荣证》'}, {values: '办理《流动人口婚育证明》'}, {values: '免费避孕药具领取'}, {values: '城乡居民免费婚检咨询'}, {values: '中国共产党党员组织关系临时转出'}],
      links: [
        [{link: '/Party_footer/2.1', title: '组织生活'},
          {link: '/Party_footer/2', title: '活动回顾'}],
        [{link: '/Party_footer/3', title: '政策咨询'},
          {link: '/Party_footer/3.1', title: '关系转接'}],
        [{link: '/Party_footer/5.1', title: '党员下乡'},
          {link: '/Party_footer/5.2', title: '协会之家'}]
      ],
      pages: [
        [{url: 'http://pic17.photophoto.cn/20101005/0036036365418115_b.jpg', title: '【监察法释义（34）职务违法犯罪问题】', content: '【监察法释义（34）职务违法犯罪问题】线索移送制度和管辖'},
          {url: 'http://img1.3lian.com/2015/a1/89/d/63.jpg', title: '【监察法释义（34）职务违法犯罪问题】', content: '【监察法释义（34）职务违法犯罪问题】线索移送制度和管辖'},
          {url: 'http://pic1.16pic.com/00/12/38/16pic_1238190_b.jpg', title: '【监察法释义（34）职务违法犯罪问题】', content: '【监察法释义（34）职务违法犯罪问题】线索移送制度和管辖'}
        ],
        [{url: 'http://d.paper.i4.cn/max/2017/03/23/14/1490249222986_905517.jpg', title: '第五党支部开展“支部主题党日”', content: '2018年9月4日下午三点，第五党支部开展“支部主题党日”活动'},
          {url: 'http://pic28.photophoto.cn/20130828/0005018346450069_b.jpg', title: '第五党支部开展“支部主题党日”', content: '2018年9月4日下午三点，第五党支部开展“支部主题党日”活动'},
          {url: 'http://image3.xyzs.com/upload/1c/56/1435539935595148/20150629/143556493675651_0.jpg', title: '第五党支部开展“支部主题党日”', content: '2018年9月4日下午三点，第五党支部开展“支部主题党日”活动'}
        ],
        [{url: 'http://d.paper.i4.cn/max/2017/03/23/14/1490249222986_905517.jpg', title: '政策咨询', content: '政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询'},
          {url: 'http://pic28.photophoto.cn/20130828/0005018346450069_b.jpg', title: '政策咨询', content: '政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询'},
          {url: 'http://image3.xyzs.com/upload/1c/56/1435539935595148/20150629/143556493675651_0.jpg', title: '政策咨询', content: '政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询政策咨询'}
        ],
        [{url: 'http://d.paper.i4.cn/max/2017/03/23/14/1490249222986_905517.jpg', title: '七一走访慰问困难党员群众', content: '七一走访慰问困难党员群众，并询问她的身体状况，倾听她的困难和需求'},
          {url: 'http://pic28.photophoto.cn/20130828/0005018346450069_b.jpg', title: '七一走访慰问困难党员群众', content: '七一走访慰问困难党员群众，并询问她的身体状况，倾听她的困难和需求'},
          {url: 'http://image3.xyzs.com/upload/1c/56/1435539935595148/20150629/143556493675651_0.jpg', title: '七一走访慰问困难党员群众', content: '七一走访慰问困难党员群众，并询问她的身体状况，倾听她的困难和需求'}
        ],
        [{url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536922959557&di=426ea7ffe39bc9e7e9150cec91c2d4e3&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201603%2F05%2F20160305132304_XhjaY.thumb.700_0.jpeg', title: '"党员先进事迹', content: '党员先进事迹党员先进事迹党员先进事迹党员先进事迹党员先进事迹党员先进事迹党员先进事迹党员先进事迹'},
          {url: 'http://pic28.photophoto.cn/20130828/0005018346450069_b.jpg', title: '"党员先进事迹', content: '党员先进事迹党员先进事迹党员先进事迹党员先进事迹党员先进事迹党员先进事迹'},
          {url: 'http://image3.xyzs.com/upload/1c/56/1435539935595148/20150629/143556493675651_0.jpg', title: '"党员先进事迹', content: '党员先进事迹党员先进事迹党员先进事迹党员先进事迹党员先进事迹'}
        ]
      ],
      ok: null,
      name: '',
      picked: true,
      date: '年    月     日',
      date1: '年    月     日',
      date2: ' 年    月     日'
    }
  },
  methods: {
    getDate () {
      this.$picker.show({
        type: 'datePicker',
        onOk: (date) => {
          this.date = date
          console.log(this.date)
        }
      })
    },
    getDate1 () {
      this.$picker.show({
        type: 'datePicker',
        onOk: (date) => {
          this.date1 = date
          console.log(this.date1)
        }
      })
    },
    getDate2 () {
      this.$picker.show({
        type: 'datePicker',
        onOk: (date) => {
          this.date2 = date
          console.log(this.date2)
        }
      })
    }
  }
}
</script>
<style scoped>
  .link_top{
    height: 50px;
  }
  .time{
    text-align: left;
    float: left;
  }
  .content{
    display: flex;
    margin: 20px 10px;
  }
  .content .content-left{
    flex: 1;
  }
  .content .content-left .content-left-item{
    height: 100px;
    width: 90%;
    margin-bottom: 30px;
    border: 1px solid #fff;
    background-color: #e0e0e0;
  }
  .content .content-left .content-left-item p{
    text-align: center;
    margin-top: 75px;
    font-size: 12px;
    background-color: #e0e0e0;
    color: #fff;
    padding:5px 0 5px 0;
  }
  .content .content-middle{
    flex: 1;
  }
  .content .content-middle-item{
    margin-top: 60px;
    height: 100px;
    width: 100%;
    border: 1px solid #fff;
    background-color: #e0e0e0;
  }
  .content .content-middle-item p{
    text-align: center;
    margin-top: 75px;
    font-size: 12px;
    background-color: #e0e0e0;
    color: #fff;
    padding:5px 0 5px 0;
  }
  .content .content-right{
    flex: 1;
  }
  .content .content-right .content-right-item{
    float: right;
    height: 100px;
    width: 90%;
    margin-bottom: 30px;
    background-color: #e0e0e0;
  }
  .content .content-right .content-right-item p{
    font-size: 12px;
    margin-top: 75px;
    text-align: center;
    background-color: #e0e0e0;
    color: #fff;
    padding:5px 0 5px 0;
    }
  .form_title{
    display: flex;
    border-bottom: 1px solid #e0e0e0;
    font-size: 14px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .form_title .form_left{
    flex: 3;
    padding-left: 20px;
  }
  .form_title input{
    border: 1px solid #fff;
  }
  .form_title .form_right{
    flex: 8;
    padding-left: 10px;
  }
  .form_title .form_left2{
    width: 50%;
    display: flex;
  }
  .form_title .form_left2 span{
    width: 50%;
    padding-left: 20px;
  }
  .form_title .form_left2 input{
    width: 50%;
    padding-left: 50px;
  }
  .form_title .form_right2{
    flex: 7;
  }
  .form_title .form_right2 span{
    width: 50%;
    padding-left: 20px;

  }
  .form_title .form_right2 input{
    width: 50%;
    padding-left: 20px;
  }
   .button{
    margin-left: 40%;
    width: 90px;
    padding: 5px;
    margin-top: 30px;
    margin-bottom: 20px;
    border-radius: 5px;
    background-color: red;
    border: 1px solid red;
    color: #fff;
  }
</style>
