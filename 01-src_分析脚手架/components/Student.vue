<template>
    <div>
        <h2>学生姓名：{{schoolName}}</h2>
        <h2>学生年龄：{{address}}</h2>
        <button @click="showName">点我提示学生名</button>
    </div>
</template>

<script>
    export default{
        name:'Student',
        data(){
            return{
                schoolName:'零征英',
                address:'广西南宁', 
            }
        },
        methods: {
        showName(){
        alert(this.schoolName)
            }
        },
        }
</script>
