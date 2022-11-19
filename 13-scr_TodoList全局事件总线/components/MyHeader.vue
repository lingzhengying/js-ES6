<template>
  <div class="todo-header">
      <input type="text" placeholder="请输入你的信息，按回车确认" v-model="title" @keyup.enter="add">
  </div>
</template>

<script>
// 需要安装 npm i nanoid 才可引入
import {nanoid} from 'nanoid'
export default {
    name:'MyHeader',
    data() {
        return {
            title:''
        }
    },
    methods:{
        add(){
            // 验证数据是否空格输入
            if(!this.title.trim())return alert('输入不能为空')
            //将用户的输入包装成一个todo对象
            const todoObj = {id:nanoid(),title:this.title,done:false}
            //通知APP组件去清空一个对象
             this.$emit('receive',todoObj)
             this.title= '' //清空输入框
            
        }
    }   
}
</script>

<style scoped>
.todo-header input{
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
}
.todo-header input:focus{
    outline: nome;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, alpha0.075),0 0 8px rgba(82, 168, 236, 0.6);
}

</style>