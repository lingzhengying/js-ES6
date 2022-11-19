<template>
  <div>
    <Student name="李四" sex="女" :age="20"/>
  </div>
</template>

<script>
import Student from './components/Student'
    export default {
      name:'App',
      components:{
        Student
      },
      data(){
        return{
          msg:'欢迎零征英'
        }
      },
    }
</script>

<style>

</style>