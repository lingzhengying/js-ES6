
// 人员管理功能相关的配置
import axios from 'axios'
import { nanoid } from 'nanoid'
export default {
    namespaced:true,
    actions:{
        addPersonWang(context,value){
        if(value.name.indexOf('王') === 0){
            context.commit('ADD_PERSON',value)
        } else {
            alert('添加的人必须姓王')
        }
      },
      addPersonServer(context){
        axios.get('http://api.uixsj.cn/hitokoto/get?type=social').then(
            Response => {
                context.commit('ADD_PERSON',{id:nanoid(),name:Response.data})
            },
            error => {
                alert(error.message)
            }
        )
      }
    },
    mutations:{
        ADD_PERSON(state,value){
            state.PersonList.unshift(value)
        }
    },
    state:{
        PersonList:[
            {id:'001',name:'张三'}
        ]
    },
    getters:{
        firstPersonName(state){
                return state.PersonList[0].name
        }
    }
}