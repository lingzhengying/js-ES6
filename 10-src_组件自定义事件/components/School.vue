<template>
    <div class="school">
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="sendSchoolName">把学校名给APP</button>
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
        methods:{
            sendSchoolName(){
                this.getSchoolName(this.schoolName)
            }
        }

    }
</script>

<style scoped>
    .school{
        background-color: rgb(18, 182, 237);
        padding: 5px;
    }
</style>