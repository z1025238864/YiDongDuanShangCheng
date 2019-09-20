import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import 'amfe-flexible'
import { 
        Tabbar, TabbarItem,//底部导航
        Tab, Tabs,//home页面头部标签页
        Swipe, SwipeItem,//轮播图
        Lazyload,//图片懒加载
        Grid,GridItem,//宫格
        Field, //输入框
        Button,
        Toast,
        Cell, CellGroup,
        Divider,
        GoodsAction,
        GoodsActionIcon,
        GoodsActionButton,
        NavBar,
        Checkbox, CheckboxGroup,
        Icon,
        Search
      } 
 from 'vant';
Vue
  .use(Tabbar).use(TabbarItem)
  .use(Tab).use(Tabs)
  .use(Swipe).use(SwipeItem)
  .use(Lazyload)
  .use(Grid).use(GridItem)
  .use(Field)
  .use(Toast)
  .use(Button)
  .use(Cell).use(CellGroup)
  .use(Divider)
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton)
  .use(NavBar)
  .use(Checkbox).use(CheckboxGroup)
  .use(Icon)
  .use(Search);
import GoodsList from './components/GoodsList'
import NavBarPublic from './components/NavBarPublic'
  Vue.component("GoodsList",GoodsList)
  Vue.component("NavBarPublic",NavBarPublic)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
