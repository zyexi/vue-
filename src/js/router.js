import Vue from 'vue'

// 导入home组件
import home from '../components/tabbars/home.vue'
import member from '../components/tabbars/member.vue'
import shopcar from '../components/tabbars/shopcar.vue'
import search from '../components/tabbars/search.vue'
import newslist from '../components/news/newslist.vue'
import newsinfo from '../components/news/newinfo.vue'
import photolist from '../components/photo/photolist.vue'
import photoinfo from '../components/photo/photoinfo.vue'
import goodlist from '../components/goods/goodslist.vue'
import GoodsInfo from '../components/goods/goodsinfo.vue' // 商品详情组件
import GoodsDesc from '../components/goods/goodsdesc.vue' // 商品描述组件
import GoodsComment from '../components/goods/goodscoment.vue' // 商品评论组件

// 2.1 导入路由模块
import VueRouter from 'vue-router'
// 2.2 将路由模块注册到 Vue 身上
Vue.use(VueRouter);
// 2.3 创建路由对象
const router = new VueRouter({
  routes: [
    {path:'/',redirect:'home'},
    {path:'/home',component:home},
    {path:'/search',component:search},
    {path:'/shopcar',component:shopcar},
    {path:'/member',component:member},
    {path:'/home/newslist',component:newslist},
    {path:'/home/newsinfo/:id',component:newsinfo},
    {path:'/home/photolist',component:photolist},
    {path:'/home/photoinfo/:id',component:photoinfo},
    {path:'/home/goodslist',component:goodlist},
    { path: '/home/goodsinfo/:id', component: GoodsInfo, name: 'goodsinfo' }, // 商品详情路由规则
    { path: '/home/goodsdesc/:id', component: GoodsDesc }, // 商品描述路由规则
    { path: '/home/goodscomment/:id', component: GoodsComment } // 商品评论路由规则
  ],
  linkActiveClass:'mui-active'
});
export default router;