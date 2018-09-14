import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import Grassroots_governance from '../components/pages/Grassroots_governance.vue'
import Grassroots_footer from '../components/pages/Grassroots_footer.vue'
import Party_service from '../components/pages/Party_service.vue'
import Party_footer from '../components/pages/Party_footer.vue'
import Travel from '../components/pages/Travel.vue'
import Livelihood from '../components/pages/Livelihood.vue'
import Style from '../components/pages/Style.vue'
import Style_footer from '../components/pages/Style_footer.vue'
import Volunteer from '../components/pages/Volunteer.vue'
import Volunteer_footer from '../components/pages/Volunteer_footer.vue'

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
      children:[
        {
          path: '/Grassroots_footer/:id',
          name: 'Grassroots_footer',
          component:Grassroots_footer
        }
      ],redirect:'/Grassroots_footer/1'
    },
    {
      path: '/Party_service',
      name: 'Party_service',
      component:Party_service,
      children:[
        {
          path: '/Party_footer/:id',
          name: 'Party_footer',
          component:Party_footer
        }
      ],redirect:'/Party_footer/1'
    },
    {
      path: '/Travel',
      name: 'Travel',
      component:Travel,
    },
    {
      path: '/Livelihood',
      name: 'Livelihood',
      component:Livelihood,
    },
    {
      path: '/Style',
      name: 'Style',
      component:Style,
      children:[
        {
          path: '/Style_footer/:id',
          name: 'Style_footer',
          component:Style_footer
        }
      ],redirect:'/Style_footer/1'
    },
    {
      path: '/Volunteer',
      name: 'Volunteer',
      component:Volunteer,
      children:[
        {
          path: '/Volunteer_footer/:id',
          name: 'Volunteer_footer',
          component:Volunteer_footer
        }
      ],redirect:'/Volunteer_footer/1'
    }
  ]
})
