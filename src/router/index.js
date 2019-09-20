import Vue from 'vue'
import Router from 'vue-router'
const Home =()=>import( '../views/Home/Home')
    //主页下二级路由配置
    const Hot = ()=> import('../views/Home/subpage/Hot')
    const Dress = ()=> import('../views/Home/subpage/Dress')
    const DepartmentStore= ()=>import("../views/Home/subpage/DepartmentStore")
    const Mom= ()=>import("../views/Home/subpage/Mom")
    const Phone= ()=>import("../views/Home/subpage/Phone")
    const ShoeBag= ()=>import("../views/Home/subpage/ShoeBag")
    const Appliance= ()=>import("../views/Home/subpage/Appliance")
const Recomend =()=>import( '../views/Recomend/Recomend')
const Cart =()=>import( '../views/Cart/Cart')
const GoodsBuy =()=>import( '../views/GoodsBuy/GoodsBuy')
const Search =()=>import( '../views/Search/Search')
const User =()=>import( '../views/User/User')
const NotFound =()=>import( '../views/NotFound/NotFound')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      name:'home',
      component:Home,
      redirect:'/home/hot',
      children:[
        {
          path:'hot',
          name:'hot',
          component:Hot
        },
        {
          path:'dress',
          name:'dress',
          component:Dress
        },
          {
          path:"departmentstore",
          name:"departmentstore",
          component:DepartmentStore
        },
        {
          path:"mom",
          name:"mom",
          component:Mom
        },
        {
          path:"phone",
          name:"phone",
          component:Phone
        },
        {
          path:"shoebag",
          name:"shoebag",
          component:ShoeBag
        },
        {
          path:"appliance",
          name:"appliance",
          component:Appliance
        },
      ]
    },
    {
      path:'/recomend',
      name:'recomend',
      component:Recomend
    },
    {
      path:'/cart',
      name:'cart',
      component:Cart
    },
    {
      path:'/goodsbuy',
      name:'goodsbuy',
      component:GoodsBuy
    },
    {
      path:'/search',
      name:'search',
      component:Search
    },
    {
      path:'/user',
      name:'user',
      component:User
    },
    {
      path:'*',
      component:NotFound
     }
  ]
})
