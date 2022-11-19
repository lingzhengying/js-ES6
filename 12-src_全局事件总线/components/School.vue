<template>
    <div class="school">
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
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
        this.$bus.$on('hello',(data)=>{
            console.log('我是school组件',data);
        })
    },
    beforeDestroy() {
        this.$bus.$off('hello')
    },
    }
  
</script>

<style scoped>
    .school{
        background-color: rgb(18, 182, 237);
        padding: 5px;
    }
</style>