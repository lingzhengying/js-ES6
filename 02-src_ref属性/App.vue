<template>
  <div>
     <h1 v-text="msg" ref="title"></h1>
     <button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
    <School></School>
    <hr>
    <Student></Student>
  </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student.vue'
    export default {
      name:'App',
      components:{
        School,
        Student
      },
      data(){
        return{
          msg:'欢迎零征英'
        }
      },
      methods: {
        showDOM(){
          console.log(this.$refs);
        }
      },

    }
</script>

<style>

</style>