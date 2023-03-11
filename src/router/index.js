//配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'

//使用插件
Vue.use(VueRouter);

//引入路由组件
import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Search from '@/pages/Search'

//配置路由：需要对外暴露一个名为“vue-router”的实例
export default new VueRouter({
    //配置路由
    router:[
        {
            path:"/home",
            component:Home,
            meta:{show:true}
        },
        {
            path:"/login",
            component:Login,
            meta:{show:true}
        },
        {
            path:"/register",
            component:Register,
            meta:{show:false}
        },
        {
            path:"/search/:keyword",
            component:Search,
            meta:{show:false},
            name:'search',
            // 路由组件能不能传递props数据?
            // 1. 布尔值的写法:params
            props:true,
        },
        //重定向，在项目跑起来的时候，访问/，立马让他定向到首页
        {
            path:'*',
            redirect:"/home"
        }
    ]
})