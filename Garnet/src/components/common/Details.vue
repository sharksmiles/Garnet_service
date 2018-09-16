<template>
  <div>
      <div class="total" v-for="(item,index) of person">
        <div class="one_boss" >
          <p class="ones">{{item.values}}</p>
          <p class="ones_right" @click="openDom(index)"><img src="../../../static/img/web_down.png" ><span>展开</span></p>
        </div>
        <div  v-if="ok===index">
          <div class="one_boss1">
            <div class="two_1">
              <img src="../../../static/img/benzi.png" class="two_2_1" alt="">
              <p>政府政策</p>
            </div>
            <div class="two_1">
              <img src="../../../static/img/liucheng.png" class="two_2" alt="">
              <p>办事流程</p>
            </div>
            <div class="two_1">
              <img src="../../../static/img/renwu.png" class="two_2" alt="">
              <p>预约办事</p>
            </div>
            <div class="two_1">
              <img src="../../../static/img/dianhua.png" class="two_2_1" alt="">
              <p>电话咨询</p>
            </div>
          </div>
          <div class="one_boss2">{{item.content}}</div>
        </div>
      </div>
  </div>
</template>
<script>
export default{
  name: 'Details',
  props: ['person'],
  data () {
    return {
      ok: null
    }
  },
  methods: {
    openDom (index) {
      if (this.ok === index) {
        this.ok = null
      } else {
        this.ok = index
      }
    }
  },
  mounted () {
    let box = document.getElementsByClassName('total')
    for (let i = 0; i < box.length; i++) {
      box[i].style.borderLeftColor = '#7a80ff'
      if (i % 5 == 1) { box[i].style.borderLeftColor = 'orange' }
      if (i % 5 == 2) { box[i].style.borderLeftColor = '#22ac38' }
      if (i % 5 == 3) { box[i].style.borderLeftColor = '#f67a2f' }
      if (i % 5 == 4) { box[i].style.borderLeftColor = 'pink' }
    }
  }

}
</script>
<style scoped>
  .total{
    width: 80%;
    margin: 0px auto;
    margin-top: 20px;
    padding-left: 10px;
    border-left: 10px solid ;
    border-radius: 7px;
    background-color: #FFFFFF;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    box-shadow: 1px 1px 5px  #888;
    font-size: 14px;
  }

  .one_boss{
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;

  }
  .ones{
    flex: 7;

  }
  .ones_right{
    flex: 2;
    text-align: right;
    padding-right: 10px;

  }
  .ones_right img{
    width: 15px;
  }
  .ones_right span{
    margin-left: 10px;

  }
  .one_boss1{
    border-bottom: 1px solid silver;
    border-top: 1px solid silver;
    display: flex;
  }
  .one_boss1 .two_1{
    flex: 1;

    text-align: center;
  }
  .two_2{
    padding-top: 10px;
    width: 35%;
    height: 45%;
  }
  .two_2_1{
    width: 35%;
    height: 45%;
    padding-top: 10px;
  }

  .one_boss1 p{
    font-size: 14px;
  }

  .one_boss2{
    font-size: 15px;
    padding-bottom: 10px;
    padding-top: 10px;
  }
</style>
