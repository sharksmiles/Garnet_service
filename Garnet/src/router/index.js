import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import Grassroots_governance from '../components/pages/Grassroots_governance.vue'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/Grassroots',
      name: 'Grassroots',
      component:Grassroots_governance,
      //children:[
      //  {
      //    path: '/law_bottom_footer/:id',
      //    name: 'law_bottom_footer',
      //    component:Law_footer
      //  }
      //],redirect:'/law_bottom_footer/1'
    }
  ]
})
