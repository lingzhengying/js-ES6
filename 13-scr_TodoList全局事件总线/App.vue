<template>
   <div class="root">
     <div class="todo-container">
       <div class="todo-wrap">
         <!-- 父子之间进行传递数据 子需要用到props 进行接收-->
      <MyHeader @receive='receive'/>
       <MyList :todos='todos'/>
       <MyFooter 
       :todos='todos' 
       @checkAllTodo='checkAllTodo'
       @clearAllTodo='clearAllTodo'
       />
       </div>
     </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import MyList from './components/MyList'

    export default {
      name:'App',
      components:{
        MyHeader,
        MyFooter,
        MyList,
      },
          data() {
        return {
            todos:JSON.parse(localStorage.getItem('todos')) || []
        }
    },
    methods: {
      // 添加一个todo
      receive(todoObj){
        this.todos.unshift(todoObj)
      },
      // 取消选一个todo
      checkTodo(id){
        this.todos.forEach((todo)=>{
          if(todo.id === id) todo.done = !todo.done
        })
      },
      // 删除一个id
      deleteTodo(id){
       this.todos= this.todos.filter( todo => todo.id !== id)
      },
      // 全选or取消全选
      checkAllTodo(){
        todo.done = done
      },
      // 清除所有已经完成的todo
      clearAllTodo(){
        this.todos = this.todos.filter((todo)=>{
          return !todo.done
        })
      }
    },
    watch:{
      todos:{
        deep:true,
        handler(value){
          localStorage.setItem('todos',JSON.stringify(value))
        }
      }
    },
    mounted() {
      this.$bus.$on('checkTodo',this.checkTodo)
      this.$bus.$on('deleteTodo',this.deleteTodo)
    },
    beforeDestroy() {
      this.$bus.$off('checkTodo')
      this.$bus.$off('deleteTodo')
    },
    }
</script>

<style>
.root{
  margin-top: 150px;
}
  body{
    background: #fff;
  }

  .btn{
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  background-color: #ea2e28;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
 color: #fff;
  box-shadow: inset 0 1px 0 rgba(240, 222, 222, 0.1),0 1px 2px rgba(243, 232, 232, 0.8);
  border-radius: 4px;
  }

  .btn-banger{
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }
  .btn-banger:hover{
    color: #fff;
    background-color: #bd362f;
  }
  .btn:focus{
    outline: nome;
  }
  .todo-container{
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap{
    padding: 10px;
    border: 1px solid rgb(40, 35, 35);
    border-radius: 5px;
  }

</style>