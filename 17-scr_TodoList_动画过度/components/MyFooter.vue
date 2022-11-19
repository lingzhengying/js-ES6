<template>
  <div class="todo-footer" v-show="total">
      <label>
          <input type="checkbox" :checked='isAll' @change="checkAll">
          <!-- 两种方法 -->
          <!-- <input type="checkbox" v-model="isAll"> -->
      </label>
      <span>
          <span>已完成{{doneTotal}}</span>/ 全部{{total}}
      </span>
      <button class="btn byn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
    name:'MyFooter',
    props:['todos'],
    
    computed:{
        total(){
        return this.todos.length   
        },
        doneTotal(){
            return this.todos.reduce((pre,todo)=> pre +(todo.done ? 1: 0),0)
        //    const x = this.todos.reduce((pre,current)=>{
        //         return pre + (current.done ? 1 : 0)
        //     },0)


            // 第一种方法
            // let i = 0
            // this.todos.forEach((todo)=> {
            //  if(todo.done) i++
            // })
            // return i
        },
        // 第一种方法
        // isAll(){
        //    return this.doneTotal === this.total && this.total > 0
        // },
        // 第二种方法
        isAll:{
         get(){
            return this.doneTotal === this.total && this.total > 0
        },
        set(value){
         this.$emit('checkAllTodo',value)  
        }
      }
    },
    methods:{
      checkAll(e){
     this.checkAllTodo(e.target.checked)
     },
     clearAll(){
      this.$emit('clearAllTodo')
     }     
    }
  }
</script>

<style>
.todo-footer{
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}
.todo-footer label{
    display: inline-block;
    margin-right: 10px;
    cursor: pointer;
}
.todo-footer label input{
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}
.todo-footer button{
    float: right;
    margin-top: 5px;
}
</style>