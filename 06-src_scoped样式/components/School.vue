<template>
    <div class="demo">
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
    export default{
        name:'School',
        data(){
            return{
                schoolName:'桂林信息科技学院',
                address:'广西桂林', 
            }
        },
    }
</script>

<style scoped>
    .demo{
        background-color: rgb(18, 182, 237);
    }
    .title{
        background-color: red;
    }
</style>