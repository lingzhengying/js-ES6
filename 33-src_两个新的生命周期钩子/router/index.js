// 该文件用于创建整个应用的路由器
import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {path:'news',
                component:News
                },
                {
                  path:'message',
                  component:Message,
                  children:[
                  {
                    name:'xiangqing',
                    path:'detail/:id/:title',
                    component:Detail,
                    // props的第一种写法 值为对象，该对象中所有的key-value都会以props的形式传给Detail组件
                    // props:{a:1,b:'hello'},

                    // 第二种写法，值为布尔值,若布尔值为真，就会把该路由组件收到的所有props参数，以props的形式传递给Detail组件
                    // props:true,//不能处理query参数的值

                    // 第三种写法，值为函数
                    props($route){
                        return {
                            id:$route.query.id,
                            title:$route.query.title
                        }
                    }
                    // 结构赋值
                    // props({query:{id,title}}){
                    //     return {id,title}
                    // }
                    
                  }
                 ]
                },
            ] 
        }
    ]
})
