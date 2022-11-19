<template>
  <div class="app">
    <h1>{{msg}},学生姓名是{{StudentName}}</h1>
        <!-- 通过父组件给子组件绑定一个自定义事件实现，子给父传递数据 (第一种写法 使用@或v-on)-->
    <Student @lzy='getStudentName' @demo='n1'/>

    <!-- <School :getSchoolName="getSchoolName" /> -->

 <!-- 通过父组件给子组件绑定一个自定义事件实现，子给父传递数据 (第二种写法 使用ref)-->
    <School ref="student"/>
  </div>
</template>

<script>
import Student from './components/Student'
import School from './components/School'
    export default {
      name:'App',
      components:{
        Student,
        School
      },
      data(){
        return{
          msg:'欢迎零征英',
          StudentName:''
        }
      },
      methods: {
        getSchoolName(name){
          console.log('app收到了数据',name);
        },
        getStudentName(name,...params){
          console.log('demo被调用了',name,params)
          this.StudentName = name
        },
        n1(){
          console.log('demo事件被触发了');
        }
      },
      mounted() {
          // this.$refs.student.$on('lzy',this.getStudentName)
          this.$refs.student.$once('lzy',this.getStudentName)
      },
    }
</script>

<style>
.app{
  background-color: gray;
}
</style>