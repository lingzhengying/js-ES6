// 该文件用于创建整个应用的路由器
import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建并暴露一个路由器
const router = new VueRouter({
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About,
            meta:{isAuth:true,title:'关于'}
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            meta:{title:'主页'},
            children:[
                {
                    name:'xinweng',
                    path:'news',
                    component:News,
                    meta:{isAuth:true, title:'新闻'},
                    // beforeEnter:(to,from,next) => {
                    //     console.log('独享路由守卫',to,from);
                    //     if(to.meta.isAuth){ // 判断是否需要权限
                    //         if(localStorage.getItem('school') === 'lzy'){
                    //             next()
                    //         }else{
                    //             alert('学校名不对无权限查看！')
                    //         }
                    //     }else{
                    //         next()
                    //     }
                    // }
                },
                {
                  name:'xiaoxi',
                  path:'message',
                  component:Message,
                  meta:{isAuth:true,title:'消息'},//配置路由权限
                  children:[
                  {
                    name:'xiangqing',
                    path:'detail/:id/:title',
                    meta:{isAuth:true,title:'详情'},
                    component:Detail,
                    props($route){
                        return {
                            id:$route.query.id,
                            title:$route.query.title
                        }
                    }          
                  }
                 ]
                },
            ] 
        }
    ]
})

// // 全局前置路由守卫-初始化之前被调用-每次路由切换之前被调用 to到哪去  from从哪来  next放行
// router.beforeEach((to,from,next) => {
//     console.log('前置路由守卫',to,from);
//    if(to.meta.isAuth){ // 判断是否需要权限
//     if(localStorage.getItem('school') === 'lzy'){
//         next()
//        }else{
//         alert('学校名不对无权限查看！')
//        }
//    }else{
//     next()
//    }
// })

// // 全局后置路由守卫-初始化之前被调用-每次路由切换之后被调用 to到哪去  from从哪来
// router.afterEach((to,from) => {
//     console.log('后置路由守卫',to,from);
//     if(to.meta.title){
//         document.title = to.meta.title || '小零页面'//修改网页的title
//     }else{
//         document.title = 'vue_test'
//     }
// })

export default router