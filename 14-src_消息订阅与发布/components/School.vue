<template>
    <div class="school">
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'

    export default{
        name:'School',
        props:['getSchoolName'],
        data(){
            return{
                schoolName:'桂林信息科技学院',
                address:'广西桂林', 
            } 
        },
    mounted() {
      this.pubId =  pubsub.subscribe('hello',(msgName,data)=>{
        console.log(this);
        console.log('有人发布了hello消息,需要执行回调',msgName,data);
       })
    },
    beforeDestroy() {
        pubsub.unsubscribe(this.pubId)
    },
    }
  
</script>

<style scoped>
    .school{
        background-color: rgb(18, 182, 237);
        padding: 5px;
    }
</style>