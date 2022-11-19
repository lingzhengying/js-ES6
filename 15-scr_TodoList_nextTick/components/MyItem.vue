<template>
      <li>
          <label>
              <input type="checkbox" :checked='todo.done' @change="handleCheck(todo.id)">
              <span v-show="!todo.isEdit">{{todo.title}}</span>
              <input v-show="todo.isEdit" type="text" :value="todo.title" @blur="handleBlur(todo,$event)" ref="inputTitle">
          </label>
         <button class="btn but-danger" @click="handleDelete(todo.id)">删除</button>
         <button v-show="!todo.isEdit" class="btn but-edit" @click="handleEdit(todo)">编辑</button>
      </li>
</template>

<script>
import pubsub from 'pubsub-js'
    export default {
      name:'MyItem',
      // 声明接受todo对象
      props:['todo'],
      methods:{
        //勾选or取消勾选
        handleCheck(id){
          // 通知APP组件将对应的todo对象的done值取反
          // this.checkTodo(id)
          this.$bus.$emit('checkTodo',id)
        },
        //删除
        handleDelete(id){
          if(confirm('确定删除吗')){
            // this.deleteTodo(id)
            // this.$bus.$emit('deleteTodo',id)
          pubsub.publish('deleteTodo',id)
          }
        },
        // 编辑
        handleEdit(todo){
          if(todo.hasOwnProperty('isEdit')){
            todo.isEdit = true
          }else{
            this.$set(todo,'isEdit',true)
          }
          this.$nextTick(function(){
            this.$refs.inputTitle.focus()
          })
        },
        handleBlur(todo,e){
          todo.isEdit = false
        if(!e.target.value.trim()) return alert('输入不能为空！')
          this.$bus.$emit('updataTodo',todo.id,e.target.value)
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