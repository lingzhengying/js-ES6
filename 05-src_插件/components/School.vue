<template>
    <div class="demo">
        <h2>学校名称：{{schoolName | mySlice}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="test">点我测试一下hello</button>
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
        methods: {
            test(){
                this.hello()
            }
        },
    }
</script>

<style>
    .demo{
        background-color: orange;
    }
</style>