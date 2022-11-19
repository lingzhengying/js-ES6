<template>
      <li>
          <label>
              <input type="checkbox" :checked='todo.done' @change="handleCheck(todo.id)">
              <span>{{todo.title}}</span>
          </label>
         <button class="btn but-danger" @click="handleDelete(todo.id)">删除</button>
      </li>
</template>

<script>
    export default {
      name:'MyItem',
      // 声明接受todo对象
      props:['todo','checkTodo','deleteTodo'],
      methods:{
        //勾选or取消勾选
        handleCheck(id){
          // 通知APP组件将对应的todo对象的done值取反
          this.checkTodo(id)
        },
        //删除
        handleDelete(id){
          if(confirm('确定删除吗')){
            this.deleteTodo(id)
          }
        }
      }
      
    }
</script>

<style scoped>
li{
  list-style: none;
  height: 36px;
  padding: 0 5px;
  line-height: 36px;
  border-bottom:1px solid #ddd;
}
li label{
  float: left;
  cursor: pointer;
}

li label li input{
  vertical-align:middle;
  margin-right: 6px;
  position: relative;
  top:-1px;
}
li button{
  float: right;
  display: none;
  height: 28px;
  margin-top: 5px;
}
li:before{
  content: initial;
}

li:last-child{
  border-bottom: nome;
}
li:hover{
  background-color: azure;
}
li:hover button{
  display: block;
}
</style>