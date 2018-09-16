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
     <div>模糊搜索</div>
      {{$route.params.id}}
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
        values: '一孩、二孩《生育服务证》登记', content: '中共中央组织部关于印发《关于进一步加强党员组织关系管理意见的通知（中组发[2004]10号）》'}, {values: '办理《独生子女父母光荣证》'}, {values: '办理《流动人口婚育证明》'}, {values: '免费避孕药具领取'}, {values: '城乡居民免费婚检咨询'}, {values: '中国共产党党员组织关系临时转出'}]

    }
  }

}
</script>

<style scoped>

</style>
