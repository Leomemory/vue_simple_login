import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'

// 懒加载方式，当路由被访问的时候才加载对应组件
const Login = resolve => require(['@/pages/login'], resolve)

const Home = resolve => require(['@/pages/home'], resolve)

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})

// 访问之前，都检查下是否登录了
router.beforeEach((to, from, next)=>{
  if(to.path.startsWith('/login')){
      window.sessionStorage.removeItem('access-token')
      next()
  }else{
    let token = window.sessionStorage.getItem('access-token')
    if(!token){
      next({path:'/login'})
    }else{
      next()
    }
  }
})

export default router;